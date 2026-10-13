import math, os
out='public/images/collect'
os.makedirs(out,exist_ok=True)

def wrap(name,c1,c2,body):
    svg=f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 420" role="img" aria-label="{name}">
<defs>
<linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="{c1}"/><stop offset="1" stop-color="{c2}"/></linearGradient>
<linearGradient id="metal" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#E5E9EE"/><stop offset=".5" stop-color="#9AA5B1"/><stop offset="1" stop-color="#5F6B78"/></linearGradient>
<linearGradient id="copper" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F6B07A"/><stop offset=".5" stop-color="#D9772F"/><stop offset="1" stop-color="#9A4A14"/></linearGradient>
<linearGradient id="brass" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FBE08A"/><stop offset=".5" stop-color="#E0B23C"/><stop offset="1" stop-color="#A97D16"/></linearGradient>
</defs>
<rect width="600" height="420" fill="url(#bg)"/>
<circle cx="500" cy="70" r="150" fill="#fff" opacity=".25"/>
<circle cx="70" cy="380" r="120" fill="#fff" opacity=".18"/>
<ellipse cx="300" cy="372" rx="230" ry="22" fill="#000" opacity=".14"/>
{body}
</svg>'''
    open(f'{out}/{name}.svg','w').write(svg)

# 1 Iron & steel: bundle of pipes + gear
def gear(cx,cy,r,teeth=12):
    pts=[]
    for i in range(teeth*4):
        a=2*math.pi*i/(teeth*4)
        rr=r if (i%4) in (0,1) else r*0.82
        pts.append(f'{cx+rr*math.cos(a):.1f},{cy+rr*math.sin(a):.1f}')
    return f'<polygon points="{" ".join(pts)}" fill="url(#metal)" stroke="#4B5663" stroke-width="3"/><circle cx="{cx}" cy="{cy}" r="{r*0.35}" fill="#CBD3DB" stroke="#4B5663" stroke-width="3"/><circle cx="{cx}" cy="{cy}" r="{r*0.14}" fill="#4B5663"/>'
b=gear(160,230,95)
rows=[(3,[300,372,444]),(2,[336,408]),(3,[300,372,444])]
ys=[330,275,220]
b+='<rect x="268" y="165" width="210" height="14" rx="4" fill="#6B7785"/>'
for y,(n,xs) in zip([320,264,208],rows):
    for x in xs:
        b+=f'<circle cx="{x}" cy="{y}" r="34" fill="url(#metal)" stroke="#4B5663" stroke-width="3"/><circle cx="{x}" cy="{y}" r="18" fill="#3E4752"/><circle cx="{x-5}" cy="{y-5}" r="6" fill="#fff" opacity=".25"/>'
b+='<rect x="120" y="318" width="360" height="26" rx="6" fill="#7A8794" opacity="0"/>'
wrap('iron-steel','#E4EBF1','#B9C7D4',b)

# 2 Copper: coil + pipes
b=''
for i,r in enumerate([120,104,88,72,56]):
    b+=f'<ellipse cx="190" cy="{250}" rx="{r}" ry="{r*0.62}" fill="none" stroke="url(#copper)" stroke-width="16"/>'
b+='<ellipse cx="190" cy="250" rx="34" ry="21" fill="#7A3A10"/>'
b+='<path d="M80 250 Q190 185 300 250" fill="none" stroke="#fff" stroke-width="5" opacity=".28" stroke-linecap="round"/>'
for y in (200,255,310):
    b+=f'<rect x="330" y="{y}" width="200" height="38" rx="19" fill="url(#copper)" stroke="#8A4210" stroke-width="2"/><ellipse cx="530" cy="{y+19}" rx="10" ry="19" fill="#7A3A10"/><rect x="345" y="{y+7}" width="150" height="6" rx="3" fill="#fff" opacity=".35"/>'
wrap('copper','#FCE9D9','#F2BF96',b)

# 3 Aluminium & brass: cans + brass pot
b=''
for x in (80,170,260):
    b+=f'<rect x="{x}" y="200" width="70" height="140" rx="10" fill="url(#metal)" stroke="#4B5663" stroke-width="3"/><ellipse cx="{x+35}" cy="200" rx="35" ry="10" fill="#D8DEE4" stroke="#4B5663" stroke-width="3"/><ellipse cx="{x+35}" cy="340" rx="35" ry="10" fill="#6B7785" opacity=".5"/><rect x="{x+10}" y="240" width="50" height="40" rx="6" fill="#fff" opacity=".3"/>'
b+='<path d="M360 220 H540 L520 345 H380 Z" fill="url(#brass)" stroke="#8A650C" stroke-width="3"/><ellipse cx="450" cy="220" rx="90" ry="16" fill="#F7DB7C" stroke="#8A650C" stroke-width="3"/><ellipse cx="450" cy="220" rx="76" ry="11" fill="#7A5A0A"/>'
b+='<path d="M360 235 Q325 235 335 270" fill="none" stroke="#8A650C" stroke-width="10" stroke-linecap="round"/><path d="M540 235 Q575 235 565 270" fill="none" stroke="#8A650C" stroke-width="10" stroke-linecap="round"/>'
b+='<rect x="395" y="250" width="30" height="80" rx="8" fill="#fff" opacity=".3"/>'
wrap('aluminium-brass','#EEF2F6','#D5DDE6',b)

# 4 Paper & cardboard
b=''
for i,(y,c) in enumerate([(300,'#F3F1EA'),(272,'#E9E6DB'),(244,'#F7F5EE'),(216,'#E4E0D2')]):
    b+=f'<rect x="60" y="{y}" width="190" height="30" rx="3" fill="{c}" stroke="#8C8777" stroke-width="2"/>'
    for k in range(3):
        b+=f'<line x1="{75+k*55}" y1="{y+10}" x2="{105+k*55}" y2="{y+10}" stroke="#9A957F" stroke-width="3"/><line x1="{75+k*55}" y1="{y+20}" x2="{120+k*55}" y2="{y+20}" stroke="#B5B09B" stroke-width="2"/>'
for x,y,w,h in [(280,230,140,112),(400,270,150,72)]:
    b+=f'<rect x="{x}" y="{y}" width="{w}" height="{h}" fill="#C9955A" stroke="#7B5429" stroke-width="3"/><rect x="{x+w/2-14}" y="{y}" width="28" height="{h}" fill="#E3BE8B" opacity=".8"/><path d="M{x} {y} l12 -14 h{w-24} l12 14 z" fill="#B7824B" stroke="#7B5429" stroke-width="3"/>'
b+='<rect x="320" y="168" width="52" height="62" rx="4" fill="#F4F1E6" stroke="#8C8777" stroke-width="2" transform="rotate(-8 346 199)"/>'
wrap('paper-cardboard','#F6EFDD','#E8D7B2',b)

# 5 Plastic bottles + crate
b=''
for x,c in [(90,'#7CC4F2'),(170,'#9AD7F7'),(250,'#6BB5E8')]:
    b+=f'<path d="M{x+20} 150 h30 v22 q26 16 26 52 v110 q0 10 -10 10 h-62 q-10 0 -10 -10 v-110 q0 -36 26 -52 z" fill="{c}" fill-opacity=".85" stroke="#2D6C97" stroke-width="3"/><rect x="{x+18}" y="132" width="34" height="20" rx="4" fill="#1E8E5A" stroke="#14653F" stroke-width="2"/><rect x="{x-2}" y="250" width="74" height="40" fill="#fff" opacity=".55"/><path d="M{x+8} 200 v100" stroke="#fff" stroke-width="6" opacity=".4" stroke-linecap="round"/>'
b+='<rect x="340" y="230" width="200" height="112" rx="10" fill="#E5484D" stroke="#9C2A2E" stroke-width="3"/>'
for k in range(3):
    b+=f'<rect x="356" y="{248+k*30}" width="168" height="16" rx="8" fill="#9C2A2E" opacity=".55"/>'
b+='<rect x="332" y="218" width="216" height="22" rx="8" fill="#F26B70" stroke="#9C2A2E" stroke-width="3"/>'
b+='<circle cx="400" cy="195" r="22" fill="#F2C94C" stroke="#A8841A" stroke-width="3"/><circle cx="400" cy="195" r="12" fill="#FFF3C4"/>'
wrap('plastic','#E2F3FB','#B9E0F3',b)

# 6 E-waste: monitor, circuit board, phone
b='<rect x="60" y="130" width="230" height="160" rx="12" fill="#2B3440" stroke="#151B22" stroke-width="4"/><rect x="76" y="146" width="198" height="126" rx="4" fill="#5C7A8F"/><path d="M76 146 L274 272" stroke="#fff" stroke-width="3" opacity=".25"/><path d="M92 200 l30 -30 M130 262 l60 -50" stroke="#fff" stroke-width="2" opacity=".3"/><rect x="150" y="290" width="50" height="30" fill="#3B4654"/><rect x="110" y="318" width="130" height="14" rx="6" fill="#2B3440"/>'
b+='<rect x="320" y="200" width="220" height="140" rx="8" fill="#1F9D55" stroke="#116036" stroke-width="3"/>'
for x,y,w,h in [(345,222,60,50),(425,222,40,34),(425,268,90,40),(345,288,50,34)]:
    b+=f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="4" fill="#1B2430" stroke="#0B1118" stroke-width="2"/>'
b+='<path d="M405 245 H425 M465 238 H515 V268 M395 305 H425 M330 215 V335" stroke="#F2D27A" stroke-width="3" fill="none"/>'
for x,y in [(330,210),(530,210),(330,330),(530,330)]:
    b+=f'<circle cx="{x}" cy="{y}" r="5" fill="#E5E9EE"/>'
b+='<g transform="rotate(10 470 150)"><rect x="430" y="70" width="64" height="120" rx="10" fill="#2B3440" stroke="#151B22" stroke-width="3"/><rect x="438" y="84" width="48" height="90" rx="3" fill="#7BA3BF"/><path d="M438 84 L486 174" stroke="#fff" stroke-width="2" opacity=".35"/></g>'
wrap('e-waste','#E6EEE8','#C3D8CB',b)
print('ok')
