(()=>{
 const key='stealth.footerChoices.v1';
 const read=()=>{try{const v=JSON.parse(localStorage.getItem(key)||'{}');return v&&typeof v==='object'&&!Array.isArray(v)?v:{}}catch{return {}}};
 const save=(sample,layout)=>{try{const values=read();if(layout)values[sample]=layout;else delete values[sample];localStorage.setItem(key,JSON.stringify(values))}catch{}};
 const select=document.getElementById('footer-style'),slot=document.getElementById('sample-footer-slot');
 const templates=new Map([...document.querySelectorAll('template[data-footer-template]')].map(t=>[t.dataset.footerTemplate,t]));
 window.readFooterChoice=sample=>{const stored=read()[sample];return document.querySelector(`#inquiry-form select[name=footer] option[value="${CSS.escape(stored||'')}"]`)?stored:'default'};
 if(select&&slot){
  const sample=slot.dataset.sampleId,defaultStyle=slot.dataset.defaultFooter;
  const apply=(layout,{persist=true,updateUrl=true,announce=true}={})=>{
   if(!templates.has(layout))layout=defaultStyle;
   const fragment=templates.get(layout).content.cloneNode(true);fragment.querySelector('footer').id='footer';slot.replaceChildren(fragment);select.value=layout;
   document.getElementById('footer-choice-status').textContent=`${select.selectedOptions[0].textContent} 적용 중 · 본문 디자인은 그대로 유지됩니다.`;
   if(persist)save(sample,layout);
   if(updateUrl){const url=new URL(location.href);url.searchParams.set('footer',layout);try{history.replaceState(null,'',url)}catch{}}
   document.dispatchEvent(new CustomEvent('footerchange',{detail:{sample,layout}}));
  };
  const fromUrl=new URLSearchParams(location.search).get('footer');const saved=read()[sample];apply(templates.has(fromUrl)?fromUrl:templates.has(saved)?saved:defaultStyle,{persist:!!fromUrl,updateUrl:false,announce:false});
  select.addEventListener('change',()=>apply(select.value));
  document.getElementById('reset-footer').addEventListener('click',()=>{save(sample,null);apply(defaultStyle,{persist:false,updateUrl:false});const url=new URL(location.href);url.searchParams.delete('footer');try{history.replaceState(null,'',url)}catch{}});
  window.readFooterChoice=id=>id===sample?select.value:(read()[id]||'default');
 }
 const footerPanel=document.getElementById('footer-options');
 const panels=[...document.querySelectorAll('.sample-tool-panel[popover]')];
 const hidePanels=()=>panels.forEach(p=>{if(p.matches(':popover-open'))p.hidePopover()});
 panels.forEach(panel=>panel.addEventListener('toggle',()=>{document.querySelectorAll(`[popovertarget="${panel.id}"]`).forEach(button=>{if(button.getAttribute('popovertargetaction')!=='hide')button.setAttribute('aria-expanded',String(panel.matches(':popover-open')))})}));
 document.querySelectorAll('[data-open-footer]').forEach(button=>button.addEventListener('click',()=>footerPanel?.showPopover()));
 document.getElementById('view-selected-footer')?.addEventListener('click',()=>{hidePanels();slot.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'})});
 document.querySelectorAll('[data-tool-top]').forEach(a=>a.addEventListener('click',hidePanels));
 document.querySelectorAll('[data-inquiry]').forEach(button=>button.addEventListener('click',hidePanels));
 const openLinkedPanel=()=>{if(location.hash==='#footer-options')footerPanel?.showPopover()};
 addEventListener('hashchange',openLinkedPanel);openLinkedPanel();
 const bodySelect=document.getElementById('footer-preview-body');
 if(bodySelect){
  const values=[...bodySelect.options].map(o=>o.value),requested=new URLSearchParams(location.search).get('sample');if(values.includes(requested))bodySelect.value=requested;
  const update=()=>{document.querySelectorAll('.footer-preview-card[data-layout]').forEach(card=>{card.href=`samples/${encodeURIComponent(bodySelect.value)}.html?footer=${encodeURIComponent(card.dataset.layout)}#footer-options`});const name=bodySelect.selectedOptions[0].textContent;document.getElementById('footer-preview-context').textContent=`선택한 본문: ${name}. 원하는 푸터를 누르면 이 본문에 적용됩니다.`;const url=new URL(location.href);url.searchParams.set('sample',bodySelect.value);try{history.replaceState(null,'',url)}catch{}};
  bodySelect.addEventListener('change',update);update();
 }
})();
