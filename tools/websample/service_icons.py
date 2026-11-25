# -*- coding: utf-8 -*-
"""Lucide pictograms selected for the meaning of each service, not its position."""
from pathlib import Path
from html import escape
ICON_SETS = {
 'company': ('chart-no-axes-combined', 'notebook-pen', 'handshake'),
 'factory': ('cog', 'anvil', 'ruler'),
 'cafe': ('coffee', 'cup-soda', 'croissant'),
 'restaurant': ('utensils', 'cooking-pot', 'cake-slice'),
 'beauty': ('scissors', 'waves-horizontal', 'palette'),
 'interior': ('house', 'store', 'paint-roller'),
 'academy': ('book-open', 'messages-square', 'calendar-check'),
 'fitness': ('dumbbell', 'activity', 'calendar-days'),
 'bakery': ('wheat', 'croissant', 'cake-slice'),
 'flower': ('flower-2', 'sprout', 'gift'),
 'cleaning': ('brush-cleaning', 'building-complex', 'sparkles'),
 'auto': ('car', 'wrench', 'clipboard-check'),
 'logistics': ('warehouse', 'truck', 'route'),
 'machinery': ('anvil', 'settings-2', 'ruler'),
 'foodfactory': ('notebook-pen', 'cooking-pot', 'package-check'),
 'electronics': ('cpu', 'circuit-board', 'boxes'),
 'construction': ('landmark', 'drafting-compass', 'pencil-ruler'),
 'stay': ('bed-double', 'sunrise', 'mountain'),
 'saas': ('panels-top-left', 'workflow', 'chart-no-axes-combined'),
 'energy': ('solar-panel', 'leaf', 'battery-charging'),
 'professional': ('briefcase-business', 'calculator', 'files'),
 'automation': ('workflow', 'bot', 'settings-2'),
 'packaging': ('box', 'layers', 'package-check'),
 'materials': ('leaf', 'flask-conical', 'recycle'),
 'pet': ('scissors', 'paw-print', 'calendar-heart'),
 'esthetic': ('sparkles', 'hand-heart', 'droplets'),
 'studio': ('camera', 'contact-round', 'scan-square'),
 'yoga': ('person-standing', 'users-round', 'wind'),
 'farm': ('carrot', 'shopping-basket', 'sprout'),
 'craft': ('paintbrush', 'notebook-pen', 'users-round'),
}

def service_icon(sample_id, index):
 name=ICON_SETS[sample_id][index]
 source=Path(__file__).resolve().parents[2]/'public/websample/assets/icons/lucide'/f'{name}.svg'
 svg=source.read_text().strip().replace('<svg', '<svg class="service-pictogram" focusable="false"', 1)
 return f'<span class="service-icon" data-service-icon="{escape(name)}" aria-hidden="true">{svg}</span>'
