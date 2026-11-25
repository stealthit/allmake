const inquiry = document.getElementById('inquiry-dialog');
const inquiryForm = document.getElementById('inquiry-form');
const inquiryStatus = document.getElementById('inquiry-status');
let inquiryBusy = false;
document.querySelectorAll('[data-inquiry]').forEach(button => button.addEventListener('click', () => {
  if (!inquiryForm || !inquiry) return;
  const sample = button.dataset.inquiry || document.body.dataset.sample;
  if (sample) inquiryForm.elements.sample.value = sample;
  const choice = window.readFooterChoice?.(inquiryForm.elements.sample.value) || 'default';
  inquiryForm.elements.footer.value = [...inquiryForm.elements.footer.options].some(o => o.value === choice) ? choice : 'default';
  if (!inquiryBusy) inquiryStatus.textContent = '';
  inquiry.showModal();
}));
document.querySelectorAll('dialog').forEach(dialog => {
  dialog.querySelector('.close-dialog')?.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const r = dialog.getBoundingClientRect();
    if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close();
  });
});
inquiryForm?.addEventListener('submit', async event => {
  event.preventDefault();
  if (inquiryBusy || !inquiryForm.reportValidity()) return;
  inquiryBusy = true;
  const button = inquiryForm.querySelector('button[type="submit"]');
  const controls = [...inquiryForm.querySelectorAll('input, select, textarea, button')];
  const values = Object.fromEntries(new FormData(inquiryForm));
  values.footerLabel = inquiryForm.elements.footer.selectedOptions[0].textContent.trim();
  values.consent = inquiryForm.elements.consent.checked;
  controls.forEach(control => control.disabled = true);
  button.textContent = '전송 중…';
  inquiryStatus.textContent = '문의를 전송하고 있습니다.';
  inquiryStatus.dataset.state = 'pending';
  try {
    const response = await fetch('/api/websample-inquiry', {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(values),
    });
    const result = await response.json();
    if (!response.ok || result.success !== true) throw new Error(result.message || '메일 전송에 실패했습니다. 다시 시도해 주세요.');
    inquiryStatus.textContent = result.message;
    inquiryStatus.dataset.state = 'success';
    inquiryForm.elements.customerName.value = '';
    inquiryForm.elements.email.value = '';
    inquiryForm.elements.phone.value = '';
    inquiryForm.elements.business.value = '';
    inquiryForm.elements.needs.value = '';
    inquiryForm.elements.schedule.value = '';
    inquiryForm.elements.consent.checked = false;
  } catch (error) {
    inquiryStatus.textContent = error.message || '연결이 원활하지 않습니다. 입력 내용은 유지됩니다. 잠시 후 다시 시도해 주세요.';
    inquiryStatus.dataset.state = 'error';
  } finally {
    controls.forEach(control => control.disabled = false);
    button.textContent = '문의하기';
    inquiryBusy = false;
    inquiryStatus.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }
});
