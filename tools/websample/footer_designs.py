# -*- coding: utf-8 -*-
"""Different footer compositions, selected by industry rather than color alone."""
from html import escape as e
from content_copy import FOOTER_COPY

# Fictional display-only contact details; never use the inquiry recipient here.
SAMPLE_ADDRESS = "서울시 샘플구 샘플로 123, 2층"
SAMPLE_PHONE = "02-0000-0000"
SAMPLE_REPRESENTATIVE = "김샘플"
SAMPLE_REGISTRATION = "000-00-00000 (샘플)"
SAMPLE_HOURS = "평일 09:00–18:00 (샘플)"

LAYOUTS = {
 'company':('directory','기업 디렉터리형'),
 'factory':('blueprint','도면 보드형'),
 'cafe':('receipt','영수증 카드형'),
 'restaurant':('dining','중앙 메뉴판형'),
 'beauty':('monogram','대형 로고·패널형'),
 'interior':('editorial','가로 편집형'),
 'academy':('noticeboard','학습 게시판형'),
 'fitness':('poster','타이포 포스터형'),
 'bakery':('seal','베이커리 라벨형'),
 'flower':('botanical','사진·원형 배치형'),
 'cleaning':('service','서비스 카드형'),
 'auto':('dashboard','정비 데스크형'),
 'logistics':('route','물류 노선형'),
 'machinery':('workshop','제작소 분할형'),
 'foodfactory':('packaging','제품 패키지형'),
 'electronics':('terminal','기술 인터페이스형'),
 'construction':('drawing','설계 그리드형'),
 'stay':('postcard','사진·엽서형'),
}

BASIC_LAYOUTS = {
 'basic-line': ('슬림 가로형', '로고와 업체 정보를 가로로 간결하게 정리합니다.'),
 'basic-stack': ('기본 정보형', '메뉴 아래에 주소와 사업자 정보를 차분하게 배치합니다.'),
 'basic-dark': ('다크 기업형', '짙은 배경 위에 로고와 주요 정보를 또렷하게 정리합니다.'),
 'basic-center': ('중앙 정렬형', '로고와 메뉴, 업체 정보를 가운데로 모읍니다.'),
 'basic-columns': ('다단 메뉴형', '소개·서비스·문의를 나누어 원하는 정보를 쉽게 찾습니다.'),
 'basic-contact': ('문의 분리형', '업체 정보와 상담 안내를 두 영역으로 나눕니다.'),
}
CREATIVE_LABELS={value[0]:value[1].replace('기업 ','').replace('베이커리 ','').replace('학습 ','').replace('정비 ','').replace('물류 ','').replace('제작소 ','').replace('제품 ','').replace('기술 ','') for value in LAYOUTS.values()}
STYLE_LABELS={**{key: value[0] for key,value in BASIC_LAYOUTS.items()}, **CREATIVE_LABELS}

FOOTER_PREVIEW_IDS=set(LAYOUTS)
from expansion_data import ROWS
for row in ROWS:LAYOUTS[row['id']]=(row['default_footer'],STYLE_LABELS[row['default_footer']])

def footer_options():
 def group(keys):
  return ''.join(f'<option value="{key}">{e(STYLE_LABELS[key])}</option>' for key in keys)
 return f'<optgroup label="기본형 {len(BASIC_LAYOUTS)}종">{group(BASIC_LAYOUTS)}</optgroup><optgroup label="개성형 {len(CREATIVE_LABELS)}종">{group(CREATIVE_LABELS)}</optgroup>'

def render_basic(s,layout,prefix):
 phone=e(SAMPLE_PHONE)
 b=brand(s);nav=links(s);details=info(s);copy=f'<p class="bf-copy">© 2026 {e(s["name"])}. All rights reserved.</p>'
 policy=f'<a class="bf-policy" href="{prefix}privacy.html">개인정보·이용 안내</a>'
 contact=f'<a class="bf-contact" href="#contact">{e(s["cta"])}</a>'
 tagline=f'<p class="bf-tagline">{e(FOOTER_COPY[s["id"]][1])}</p>'
 if layout=='basic-line':
  return f'<div class="bf-line-grid"><div>{b}</div><div class="bf-line-info">{details}{copy}</div><div class="bf-line-end">{contact}{policy}</div></div>'
 if layout=='basic-stack':
  return f'<div class="bf-stack-nav">{nav}{policy}</div><div class="bf-stack-body">{b}{details}{copy}</div>'
 if layout=='basic-dark':
  details=info(s,exclude=('연락처',))
  return f'<div class="bf-dark-top">{b}{nav}</div><div class="bf-dark-information">{details}<div class="bf-dark-contact"><span>CONTACT</span>{contact}<p>{phone}</p></div></div><div class="bf-bottom">{copy}{policy}</div>'
 if layout=='basic-center':
  return f'<div class="bf-center-content">{b}{tagline}{nav}{details}<div class="bf-center-bottom">{policy}{copy}</div></div>'
 if layout=='basic-columns':
  return f'<div class="bf-columns-grid"><div>{b}{tagline}</div><nav aria-label="소개 메뉴"><h2>소개</h2><a href="#about">브랜드 이야기</a><a href="#story">{e(s["detail"])}</a></nav><nav aria-label="서비스 메뉴"><h2>{"메뉴" if s["menu"] else "서비스"}</h2><a href="#services">{e(s["service_title"])}</a><a href="#story">진행 과정</a></nav><nav aria-label="문의 메뉴"><h2>문의</h2><a href="#contact">{e(s["cta"])}</a>{policy}</nav></div><div class="bf-columns-info">{details}{copy}</div>'
 if layout=='basic-contact':
  return f'<div class="bf-contact-grid"><div>{b}{details}</div><div class="bf-contact-box"><span>CONTACT US</span><h2>{FOOTER_COPY[s["id"]][0]}</h2>{contact}</div></div><div class="bf-bottom">{copy}{policy}</div>'
 raise ValueError('Unknown basic footer: '+layout)



def brand(s, cls=''):
 return f'<a class="vf-brand {cls}" href="#main"><strong>{e(s["name"])}</strong><span>{e(s["en"])}</span></a>'

def links(s, cls='', labels=None):
 labels=labels or ['브랜드 소개','메뉴 안내' if s['menu'] else '서비스 안내',s['detail'],s['cta']]
 return '<nav class="vf-nav '+cls+'" aria-label="하단 주요 메뉴">'+''.join(f'<a href="#{anchor}">{e(label)}</a>' for anchor,label in zip(['about','services','story','contact'],labels))+'</nav>'

def info(s, cls='', compact=False, exclude=()):
 fields=[('주소',SAMPLE_ADDRESS),('연락처',SAMPLE_PHONE)]
 if not compact:fields += [('대표자',SAMPLE_REPRESENTATIVE),('사업자번호',SAMPLE_REGISTRATION)]
 return '<dl class="vf-info '+cls+'">'+''.join(f'<div><dt>{label}</dt><dd>{value}</dd></div>' for label,value in fields if label not in exclude)+'</dl>'

def cta(s,label=None,cls=''):
 return f'<a class="vf-button {cls}" href="#contact">{e(label or s["cta"])}</a>'

def legal(s,prefix='',agency=False):
 name='STEALTH INTERACTIVE' if agency else s['name']
 text='업종별 홈페이지 디자인 샘플 모음' if agency else '가상 업체 디자인 샘플 · 사진과 업체 정보는 실제 영업·실적을 나타내지 않습니다.'
 top=f'{prefix}index.html#main' if agency else '#main'
 return f'<div class="vf-bottom"><p>© 2026 {e(name)}<span>{text}</span></p><nav aria-label="샘플 및 이용 안내"><a href="{prefix}index.html#collection">전체 샘플</a><a href="{prefix}footer-layouts.html">푸터 비교</a><a href="{prefix}credits.html">콘텐츠 출처</a><a href="{prefix}privacy.html">이용 안내</a><a href="{top}">맨 위로</a></nav></div>'

def render_footer(prefix='',sample=None,layout_id=None):
 if sample is None:
  return f'<footer class="catalogue-back"><div class="wrap"><a href="{prefix}index.html#collection">샘플 목록으로</a></div></footer>'
 address,phone,hours=map(e,(SAMPLE_ADDRESS,SAMPLE_PHONE,SAMPLE_HOURS))
 s=sample;sid=s['id'];layout=layout_id if layout_id in STYLE_LABELS else LAYOUTS[sid][0];label=STYLE_LABELS[layout]
 name=e(s['name']);en=e(s['en']);message=FOOTER_COPY[sid][0];short=e(FOOTER_COPY[sid][1]);service_label='메뉴 안내' if s['menu'] else '서비스 안내'
 signature='Gyeol.' if sid=='beauty' else name
 signature_size=f"clamp(1.8rem,{36/max(len(s['name']),3):.3f}vw,6rem)"
 editorial_word='여백' if sid=='interior' else name
 editorial_size=f"clamp(2.6rem,{55/max(len(editorial_word),2):.3f}vw,13rem)"
 clean=s['name'].replace(' ','');mid=(len(clean)+1)//2;seal_name=e(clean[:mid])+'<br>'+e(clean[mid:]);seal_chars=max(mid,len(clean)-mid)
 poster=e(s['en'].split()[0])+'.';poster_chars=len(poster)
 poster_size=f"clamp(2rem,{min(21,75/(poster_chars*.65)):.3f}vw,{min(288,1100/(poster_chars*.65)):.2f}px)"
 service_names=[e(item[0]) for item in s['services']]
 
 b=brand(s);nav=links(s);details=info(s);brief=info(s,compact=True);button=cta(s);tag=e(s['category'])+' / INFORMATION'
 if layout in BASIC_LAYOUTS:
  body=render_basic(s,layout,prefix)
 elif layout=='directory':
  body=f'''<div class="vf-directory-grid"><div class="vf-directory-intro"><span class="vf-kicker">{en}</span><h2>{message}</h2><p>{short}</p>{button}</div><div class="vf-directory-links"><h3>브랜드 안내</h3>{nav}</div><div class="vf-directory-details"><h3>업체 정보</h3>{details}</div></div><div class="vf-directory-brandbar">{b}<span>{tag}</span></div>'''
 elif layout=='blueprint':
  body=f'''<div class="vf-blueprint-title"><span class="vf-kicker">CONTACT & INFORMATION</span><span>{e(s['category'])}</span></div><div class="vf-blueprint-grid"><div class="vf-spec-sheet"><h2>{message}</h2><dl><div><dt>BUSINESS</dt><dd>{e(s['category'])}</dd></div><div><dt>ADDRESS</dt><dd>{address}</dd></div><div><dt>CONTACT</dt><dd>{phone}</dd></div></dl></div><div class="vf-blueprint-brand"><span class="vf-crosshair" aria-hidden="true">+</span>{b}<p>{tag}</p>{button}</div></div><div class="vf-blueprint-bottom">{nav}<span>BUSINESS DIRECTORY</span></div>'''
 elif layout=='receipt':
  body=f'''<div class="vf-receipt-grid"><div class="vf-coffee-note"><span class="vf-kicker">{tag}</span><h2>{message}</h2>{b}<p>{short}</p></div><div class="vf-receipt-paper"><span class="vf-paper-title">{name}</span><h3>{e(s['cta'])}</h3><div class="vf-receipt-rule"></div><dl><div><dt>VISIT</dt><dd>{address}</dd></div><div><dt>HOURS</dt><dd>{hours}</dd></div><div><dt>CONTACT</dt><dd>{phone}</dd></div></dl>{nav}<span class="vf-paper-thanks">THANK YOU FOR YOUR INTEREST.</span></div></div>'''
 elif layout=='dining':
  body=f'''<div class="vf-dining-center"><span class="vf-dining-rule" aria-hidden="true"></span><span class="vf-kicker">{en}</span>{b}<p>{short}</p>{nav}<div class="vf-dining-visit"><span>LOCATION<br><b>{address}</b></span><span>OPENING HOURS<br><b>{hours}</b></span><span>CONTACT<br><b>{phone}</b></span></div>{button}<span class="vf-dining-rule" aria-hidden="true"></span></div>'''
 elif layout=='monogram':
  body=f'''<div class="vf-monogram-grid"><div class="vf-monogram-display"><span class="vf-kicker">{en}</span><span class="vf-gyeol" aria-hidden="true" style="font-size:{signature_size}">{signature}</span><p>{short}</p></div><div class="vf-salon-panels"><a class="vf-salon-main" href="#contact"><span>CONSULTATION</span><h2>{message}</h2><span class="vf-underlined">{e(s['cta'])}</span></a><div class="vf-salon-mini"><div><h3>CONTACT & VISIT</h3><p>{address}<br>{phone}</p></div>{nav}</div></div></div><div class="vf-salon-name">{b}<span>{e(s['category'])}</span></div>'''
 elif layout=='editorial':
  body=f'''<div class="vf-editorial-head"><span class="vf-kicker">{tag}</span>{button}</div><a class="vf-editorial-word" href="#main" aria-label="{name} 맨 위로" style="font-size:{editorial_size}">{editorial_word}<span>{en}</span></a><div class="vf-editorial-line"><p>{short}</p>{nav}<div class="vf-editorial-address">{brief}</div></div>'''
 elif layout=='noticeboard':
  body=f'''<div class="vf-learning-top">{b}<p>{short}</p></div><div class="vf-notice-cards"><a href="#services" class="vf-note-card vf-note-yellow"><span>PROGRAM</span><h2>어떤 일을<br>하나요?</h2><p>{service_label}</p></a><a href="#story" class="vf-note-card vf-note-lilac"><span>PROCESS</span><h2>어떤 과정을<br>거치나요?</h2><p>{e(s['detail'])}</p></a><a href="#contact" class="vf-note-card vf-note-white"><span>MEET US</span><h2>{message}</h2><p>{e(s['cta'])}</p></a></div><div class="vf-learning-info"><span>방문 주소 · {address}</span><span>상담 연락처 · {phone}</span></div>'''
 elif layout=='poster':
  body=f'''<div class="vf-poster-masthead"><span>{en}</span><span>{tag}</span></div><div class="vf-poster-word" aria-hidden="true" style="font-size:{poster_size}">{poster}</div><div class="vf-poster-action"><h2>{message}</h2>{button}</div><div class="vf-poster-floor">{nav}<div><span>{name} · {e(s['category'])}</span><span>{address}<br>{phone}</span></div></div>'''
 elif layout=='seal':
  body=f'''<div class="vf-bakery-grid"><div class="vf-bakery-side"><span class="vf-kicker">{en}</span><h2>{message}</h2>{nav}</div><div class="vf-bakery-seal"><span>{e(s['category'])}</span><strong style="font-size:clamp(1.7rem,calc(160px / {seal_chars}),4rem)">{seal_name}</strong><i>{en}</i></div><div class="vf-bakery-side vf-bakery-visit"><h3>COME SAY HELLO.</h3><p>{address}<br>{hours}<br>{phone}</p>{button}<span class="vf-small">{short}</span></div></div>'''
 elif layout=='botanical':
  body=f'''<div class="vf-botanical-grid"><div class="vf-flower-portrait"><img src="{prefix}assets/{s['image']}.webp" alt="{e(s['category'])} 참고 사진" width="500" height="650" loading="lazy"><span>{en}</span></div><div class="vf-flower-letter"><span class="vf-kicker">{tag}</span><h2>{message}</h2>{b}<div class="vf-flower-links">{nav}{brief}</div>{button}</div></div>'''
 elif layout=='service':
  body=f'''<div class="vf-cleaning-board"><div class="vf-cleaning-intro"><span class="vf-kicker">{tag}</span><h2>{message}</h2><p>{short}</p>{button}</div><div class="vf-cleaning-services"><a href="#services"><span>SERVICE</span><strong>{service_names[0]}</strong></a><a href="#services"><span>SERVICE</span><strong>{service_names[1]}</strong></a><a href="#story"><span>CARE PROCESS</span><strong>{e(s['detail'])}</strong></a></div></div><div class="vf-cleaning-bottom">{b}{brief}</div>'''
 elif layout=='dashboard':
  body=f'''<div class="vf-auto-top"><span class="vf-kicker">{en}</span><span>SERVICE / PROCESS / CONTACT</span></div><div class="vf-auto-grid"><div class="vf-auto-title"><h2>INFO<br><em>DESK.</em></h2><p>{short}</p></div><div class="vf-auto-controls"><a href="#services"><span>SERVICE</span><strong>{service_label}</strong></a><a href="#story"><span>PROCESS</span><strong>{e(s['detail'])}</strong></a><a href="#contact" class="vf-auto-primary"><span>CONSULTATION</span><strong>{e(s['cta'])}</strong></a></div></div><div class="vf-auto-name">{b}<span>{address}<br>{phone}</span></div>'''
 elif layout=='route':
  body=f'''<div class="vf-route-head">{b}<h2>{message}</h2></div><nav class="vf-route-track" aria-label="하단 바로가기"><a href="#services"><i aria-hidden="true"></i><span>SERVICE</span><strong>{service_label}</strong></a><a href="#story"><i aria-hidden="true"></i><span>PROCESS</span><strong>{e(s['detail'])}</strong></a><a href="#contact"><i aria-hidden="true"></i><span>CONNECT</span><strong>{e(s['cta'])}</strong></a></nav><div class="vf-route-contact"><p>{short}</p><span>{address}<br>{phone}</span>{button}</div>'''
 elif layout=='workshop':
  body=f'''<div class="vf-workshop-grid"><div class="vf-workshop-index"><span class="vf-kicker">{en}</span>{b}<div class="vf-workshop-lines">{nav}{brief}</div></div><div class="vf-workshop-callout"><span class="vf-kicker">{en}</span><h2>{message}</h2><p>{short}</p>{button}</div></div>'''
 elif layout=='packaging':
  body=f'''<div class="vf-package-sheet"><div class="vf-package-masthead">{b}<span>{e(s['cta'])}</span></div><div class="vf-package-body"><div class="vf-package-title"><span class="vf-kicker">{en}</span><h2>{message}</h2>{button}</div><div class="vf-package-data"><div><span>QUICK LINKS</span>{nav}</div><div><span>BUSINESS INFORMATION</span>{details}</div></div></div><div class="vf-package-caption"><span>{en}</span><span>{e(s['category'])} · 가상 업체 샘플</span></div></div>'''
 elif layout=='terminal':
  body=f'''<div class="vf-terminal-frame"><div class="vf-terminal-bar"><span>{en} / CONTACT</span><span>DESIGN PREVIEW</span></div><div class="vf-terminal-grid"><div class="vf-terminal-prompt"><span class="vf-code-label">CONNECT_WITH_US</span><h2>{message}</h2>{b}<p>{short}</p></div><nav class="vf-command-list" aria-label="하단 주요 안내"><a href="#about"><span>ABOUT</span>브랜드 소개</a><a href="#services"><span>SPEC</span>{service_label}</a><a href="#story"><span>PROCESS</span>{e(s['detail'])}</a><a href="#contact"><span>CONTACT</span>{e(s['cta'])}</a></nav></div><div class="vf-terminal-meta"><span>{e(s['category'])} · 업체 안내</span><span>{address}<br>{phone}</span></div></div>'''
 elif layout=='drawing':
  body=f'''<div class="vf-drawing-top">{b}{nav}</div><div class="vf-drawing-frame"><span class="vf-drawing-annotation">{en}</span><h2>{message}</h2>{button}<span class="vf-drawing-caption">{short}</span></div><div class="vf-drawing-address">{brief}<span>{e(s['category'])} · 업체 안내</span></div>'''
 elif layout=='postcard':
  body=f'''<div class="vf-postcard-scene"><img class="vf-stay-photo" src="{prefix}assets/{s['image']}.webp" alt="{e(s['category'])} 참고 사진" width="1600" height="900" loading="lazy"><div class="vf-postcard-paper"><span class="vf-postcard-stamp">{e(s['en'].split()[0])}</span><div><span class="vf-kicker">{en}</span><h2>{message}</h2>{b}</div><div class="vf-postcard-to"><span>INFORMATION</span><p>{short}</p>{button}</div></div><div class="vf-postcard-visit">{nav}<span>{address}<br>{phone}</span></div></div>'''
 else:
  raise ValueError('Unknown footer composition: '+layout)
 basic_class=' basic-footer' if layout in BASIC_LAYOUTS else ''
 return f'<footer class="variant-footer vf-{layout}{basic_class}" id="footer" data-footer-layout="{layout}" data-footer-brand="{name}"><div class="vf-wrap">{body}</div></footer>'
