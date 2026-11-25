(() => {
  const body = document.querySelector('.interaction-sample');
  if (!body) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const fine = matchMedia('(hover: hover) and (pointer: fine)');
  const toggle = body.querySelector('.im-motion-toggle');
  let enabled = !reduced.matches, manual = false, scheduled = false;
  const reveals = [...body.querySelectorAll('.im-reveal')];
  const chapterSection = body.querySelector('.im-chapter-section');
  const chapters = [...body.querySelectorAll('.im-chapter')];
  const parallax = [...body.querySelectorAll('[data-parallax]')];
  function setMotion(value) {
    enabled = value;
    body.dataset.motion = value ? 'on' : 'off';
    toggle?.setAttribute('aria-pressed', String(value));
    if (toggle) toggle.textContent = value ? '모션 줄이기' : '모션 켜기';
    if (!value) {
      reveals.forEach(e => e.classList.add('is-visible'));
      body.querySelectorAll('[data-tilt]').forEach(e => { e.style.removeProperty('--rx'); e.style.removeProperty('--ry'); });
      parallax.forEach(e => e.style.setProperty('--parallax', '-20px'));
    }
    scheduleScroll();
  }
  if (toggle) {
    toggle.hidden = false;
    toggle.addEventListener('click', () => { manual = true; setMotion(!enabled); });
  }
  reduced.addEventListener('change', () => { if (!manual) setMotion(!reduced.matches); });
  function scrollFrame() {
    scheduled = false;
    if (document.hidden) return;
    if (chapterSection) {
      const r = chapterSection.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, -r.top / Math.max(1, r.height - innerHeight)));
      chapterSection.style.setProperty('--scene-progress', enabled ? progress.toFixed(3) : '0');
      const closest = chapters.reduce((best, e) => Math.abs(e.getBoundingClientRect().top + e.offsetHeight / 2 - innerHeight / 2) < Math.abs(best.getBoundingClientRect().top + best.offsetHeight / 2 - innerHeight / 2) ? e : best, chapters[0]);
      const label = body.querySelector('#im-chapter-current');
      if (label && closest) label.textContent = closest.querySelector('h3').textContent;
    }
    if (enabled) parallax.forEach(e => {
      const r = e.getBoundingClientRect();
      if (r.bottom >= 0 && r.top <= innerHeight) e.style.setProperty('--parallax', `${Math.max(-55, Math.min(0, -20 + (innerHeight / 2 - r.top - r.height / 2) * .055))}px`);
    });
  }
  function scheduleScroll() { if (!scheduled) { scheduled = true; requestAnimationFrame(scrollFrame); } }
  addEventListener('scroll', scheduleScroll, { passive: true });
  addEventListener('resize', scheduleScroll, { passive: true });
  document.addEventListener('visibilitychange', () => { body.classList.toggle('im-page-visible', !document.hidden); if (!document.hidden) scheduleScroll(); });
  body.classList.toggle('im-page-visible', !document.hidden);
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(entries => entries.forEach(({ target, isIntersecting }) => {
      if (isIntersecting) { target.classList.add('is-visible'); revealObserver.unobserve(target); }
    }), { threshold: .08 });
    reveals.forEach(e => { e.classList.add('im-observed'); revealObserver.observe(e); });
    const ambientObserver = new IntersectionObserver(entries => entries.forEach(({ target, isIntersecting }) => target.classList.toggle('im-offscreen', !isIntersecting)));
    body.querySelectorAll('.im-marquee,.im-coffee-world').forEach(e => ambientObserver.observe(e));
  }
  body.querySelectorAll('[data-tilt],[data-spotlight]').forEach(element => {
    let frame = 0, point;
    element.addEventListener('pointermove', event => {
      if (!enabled || !fine.matches || event.pointerType === 'touch') return;
      point = { x: event.clientX, y: event.clientY };
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        if (!enabled) return;
        const r = element.getBoundingClientRect();
        const x = Math.max(0, Math.min(1, (point.x - r.left) / r.width));
        const y = Math.max(0, Math.min(1, (point.y - r.top) / r.height));
        element.style.setProperty('--rx', `${((.5 - y) * 7).toFixed(2)}deg`);
        element.style.setProperty('--ry', `${((x - .5) * 9).toFixed(2)}deg`);
        element.style.setProperty('--mx', `${x * 100}%`); element.style.setProperty('--my', `${y * 100}%`);
      });
    }, { passive: true });
    element.addEventListener('pointerleave', () => { cancelAnimationFrame(frame); frame = 0; element.style.setProperty('--rx', '0deg'); element.style.setProperty('--ry', '0deg'); });
  });
  function pressed(buttons, selected) { buttons.forEach(button => button.setAttribute('aria-pressed', String(button === selected))); }
  const productButtons = [...body.querySelectorAll('[data-product-step]')];
  const productCopy = [
    ['문제의 중심을 찾습니다.', '제품이 필요한 상황과 사용자의 목적을 먼저 정리합니다.'],
    ['정보가 자연스럽게 이어집니다.', '필요한 정보와 다음 행동을 연결하는 구조를 만듭니다.'],
    ['손끝의 반응을 다듬습니다.', '누르고 이동하는 흐름을 프로토타입으로 살펴봅니다.'],
  ];
  productButtons.forEach(button => button.addEventListener('click', () => {
    const index = Number(button.dataset.productStep); pressed(productButtons, button);
    body.querySelector('.im-product-screen').dataset.productScene = String(index);
    body.querySelector('#im-product-title').textContent = productCopy[index][0];
    body.querySelector('#im-product-description').textContent = productCopy[index][1];
  }));
  const brandButtons = [...body.querySelectorAll('[data-brand]')];
  const brandCopy = { brand: ['FORM.', '성격이 보이는 첫인상.', '색과 형태, 언어의 방향을 하나의 인상으로 엮습니다.'], digital: ['FLOW.', '손끝에서 이어지는 경험.', '사용자의 행동에 자연스럽게 반응하는 화면의 흐름을 설계합니다.'], content: ['STORY.', '오래 남는 이야기.', '브랜드의 생각이 전달될 수 있도록 장면과 리듬을 구성합니다.'] };
  brandButtons.forEach(button => button.addEventListener('click', () => {
    const key = button.dataset.brand, content = brandCopy[key]; pressed(brandButtons, button);
    body.querySelector('.im-brand-switch').dataset.brandScene = key;
    body.querySelector('.im-brand-word').textContent = content[0];
    body.querySelector('#im-brand-title').textContent = content[1];
    body.querySelector('#im-brand-description').textContent = content[2];
  }));
  const processCopy = [
    ['도면의 조건을 확인합니다.', '형상과 치수, 필요한 소재와 사용 환경을 함께 정리합니다.', '도면 검토'],
    ['공정의 방향을 살펴봅니다.', '소재와 형상에 맞는 가공·후처리 방법과 검토 범위를 나눕니다.', '공정 검토'],
    ['제작의 기준을 협의합니다.', '수량과 일정, 확인할 기준을 정리해 다음 단계를 준비합니다.', '제작 협의'],
  ];
  const range = body.querySelector('#im-process-range'), processButtons = [...body.querySelectorAll('[data-process-step]')];
  function updateProcess(index) {
    body.querySelector('.im-process').dataset.process = String(index);
    range.value = String(index); range.setAttribute('aria-valuetext', processCopy[index][2]);
    pressed(processButtons, processButtons[index]);
    body.querySelector('#im-process-title').textContent = processCopy[index][0];
    body.querySelector('#im-process-description').textContent = processCopy[index][1];
  }
  range?.addEventListener('input', () => updateProcess(Number(range.value)));
  processButtons.forEach(button => button.addEventListener('click', () => updateProcess(Number(button.dataset.processStep))));
  const flavors = { bright: ['산뜻한 첫 향', '과일처럼 가볍고 맑은 인상이 떠오르는 한 잔.'], balanced: ['편안한 균형', '고소함과 은은한 단맛이 떠오르는 한 잔.'], deep: ['깊고 묵직한 여운', '초콜릿처럼 진하고 긴 여운이 떠오르는 한 잔.'] };
  const flavorButtons = [...body.querySelectorAll('[data-flavor]')];
  flavorButtons.forEach(button => button.addEventListener('click', () => {
    const key = button.dataset.flavor; pressed(flavorButtons, button);
    body.querySelector('[data-flavor-scene]').dataset.flavorScene = key;
    body.querySelector('#im-flavor-title').textContent = flavors[key][0];
    body.querySelector('#im-flavor-description').textContent = flavors[key][1];
  }));
  const posters = { space: '전시와 휴식이 만나는 공간의 구성을 살펴보세요.', class: '취향과 호기심에서 출발하는 클래스 이야기를 나눠보세요.', together: '함께하는 사람과 목적에 어울리는 시간을 이야기해요.' };
  const posterButtons = [...body.querySelectorAll('[data-poster]')];
  posterButtons.forEach(button => button.addEventListener('click', () => { pressed(posterButtons, button); body.querySelector('#im-poster-description').textContent = posters[button.dataset.poster]; }));
  const track = body.querySelector('.im-room-track');
  if (track) {
    const cards = [...track.querySelectorAll('.im-room-card')], prev = body.querySelector('[data-gallery-prev]'), next = body.querySelector('[data-gallery-next]');
    let current = 0, target = 0, programmatic = false, settling = 0, targetLeft = 0, dragging = false, startX = 0, startScroll = 0;
    const offsets = () => cards.map(card => card.offsetLeft - cards[0].offsetLeft);
    function syncGallery() {
      const positions = offsets(); current = positions.reduce((best, position, i) => Math.abs(position - track.scrollLeft) < Math.abs(positions[best] - track.scrollLeft) ? i : best, 0);
      if (programmatic && Math.abs(track.scrollLeft - targetLeft) <= 2) programmatic = false;
      if (!programmatic) target = current;
      prev.disabled = target === 0; next.disabled = target === cards.length - 1;
      body.querySelector('#im-gallery-position').textContent = `${current + 1} / ${cards.length}`;
    }
    function go(index) { target = Math.max(0, Math.min(cards.length - 1, index)); targetLeft = Math.min(offsets()[target], track.scrollWidth - track.clientWidth); programmatic = true; clearTimeout(settling); track.scrollTo({ left: targetLeft, behavior: enabled ? 'smooth' : 'auto' }); syncGallery(); settling = setTimeout(() => { programmatic = false; syncGallery(); }, enabled ? 1200 : 0); }
    prev.addEventListener('click', () => go(target - 1)); next.addEventListener('click', () => go(target + 1));
    track.addEventListener('scroll', syncGallery, { passive: true });
    track.addEventListener('wheel', () => { programmatic = false; clearTimeout(settling); }, { passive: true });
    track.addEventListener('touchstart', () => { programmatic = false; clearTimeout(settling); }, { passive: true });
    track.addEventListener('keydown', event => { if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); go(target + (event.key === 'ArrowRight' ? 1 : -1)); } });
    track.addEventListener('pointerdown', event => { if (event.pointerType !== 'mouse' || event.button !== 0) return; programmatic = false; clearTimeout(settling); dragging = true; startX = event.clientX; startScroll = track.scrollLeft; track.classList.add('is-dragging'); track.setPointerCapture(event.pointerId); });
    track.addEventListener('pointermove', event => { if (dragging) track.scrollLeft = startScroll - (event.clientX - startX); });
    const stopDrag = () => { dragging = false; track.classList.remove('is-dragging'); syncGallery(); };
    track.addEventListener('pointerup', stopDrag); track.addEventListener('pointercancel', stopDrag); track.addEventListener('lostpointercapture', stopDrag);
    addEventListener('resize', syncGallery, { passive: true }); syncGallery();
  }
  setMotion(enabled);
})();
