# -*- coding: utf-8 -*-
from html import escape as e

def render_variant(s,content,image):
 inner=content[len('<div class="wrap">'):-len('</div>')]
 variant=s['variant']
 photo=f'<figure class="neo-visual">{image}</figure>'
 if variant=='bento':
  photo=f'<div class="neo-bento-visual">{photo}<div class="neo-bento-note"><span>WORKFLOW</span><strong>팀의 작업을<br>하나의 흐름으로.</strong></div><div class="neo-bento-note neo-bento-note--accent"><span>CONNECT</span><strong>도구와 데이터,<br>필요한 연결부터.</strong></div></div>'
 if variant=='playful':photo=f'<div class="neo-pet-visual">{photo}<span class="neo-pet-label">A LITTLE<br>MORE COMFORT.</span></div>'
 return f'<div class="wrap neo-grid neo-grid--{e(variant)}">{inner}{photo}</div>'
