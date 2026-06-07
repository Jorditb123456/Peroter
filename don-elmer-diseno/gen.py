# -*- coding: utf-8 -*-
import base64, cairosvg, os

BASE = os.path.dirname(os.path.abspath(__file__))
with open(os.path.join(BASE,'assets','don-elmer-retrato.png'),'rb') as f:
    PORTRAIT = 'data:image/png;base64,' + base64.b64encode(f.read()).decode()

# ---------- palette ----------
NAVY   = '#0c1f47'
NAVY_D = '#07132c'
CREAM  = '#fbf7ee'
GOLD_L = '#f7e6b0'
GOLD_M = '#cd9f55'
GOLD_D = '#8a6326'
RIB    = '#6f4a22'

def gold_defs():
    return '''
    <linearGradient id="gold" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#fbeec0"/>
      <stop offset="14%" stop-color="#e9cd84"/>
      <stop offset="40%" stop-color="#c39440"/>
      <stop offset="55%" stop-color="#a87a2c"/>
      <stop offset="72%" stop-color="#d9b466"/>
      <stop offset="100%" stop-color="#8a6326"/>
    </linearGradient>
    <linearGradient id="goldH" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#9c7330"/>
      <stop offset="20%" stop-color="#e6c87e"/>
      <stop offset="50%" stop-color="#f7e6b0"/>
      <stop offset="80%" stop-color="#e6c87e"/>
      <stop offset="100%" stop-color="#9c7330"/>
    </linearGradient>
    <linearGradient id="navy" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#16336a"/>
      <stop offset="55%" stop-color="#0c1f47"/>
      <stop offset="100%" stop-color="#06112a"/>
    </linearGradient>
    <radialGradient id="vign" cx="50%" cy="42%" r="75%">
      <stop offset="60%" stop-color="#000000" stop-opacity="0"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0.45"/>
    </radialGradient>
    <linearGradient id="goldPanel" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#d9b266"/>
      <stop offset="45%" stop-color="#b9893d"/>
      <stop offset="100%" stop-color="#8c6326"/>
    </linearGradient>
    '''

def monogram(cx, cy, h, idp=''):
    # elegant intertwined DE monogram in gold
    fs = h
    return f'''
    <g text-anchor="middle" font-family="Gloock">
      <text x="{cx-h*0.20}" y="{cy+fs*0.34}" font-size="{fs}" fill="url(#gold)" stroke="#6e4f20" stroke-width="{fs*0.012}">D</text>
      <text x="{cx+h*0.20}" y="{cy+fs*0.34}" font-size="{fs}" fill="url(#gold)" stroke="#6e4f20" stroke-width="{fs*0.012}">E</text>
    </g>'''

def wheat(cx, cy, s, fill):
    # tiny wheat sprig ornament
    return f'''<g transform="translate({cx},{cy})" stroke="{fill}" stroke-width="{s*0.12}" fill="none" stroke-linecap="round">
      <line x1="0" y1="{s*0.9}" x2="0" y2="{-s*0.9}"/>
      {''.join(f'<path d="M0 {y} Q {s*0.5} {y-s*0.25} {s*0.55} {y-s*0.7}" /><path d="M0 {y} Q {-s*0.5} {y-s*0.25} {-s*0.55} {y-s*0.7}" />' for y in [s*0.55,s*0.15,-s*0.25,-s*0.65])}
    </g>'''

def diamond(cx,cy,s,fill):
    return f'<path d="M{cx} {cy-s} L{cx+s} {cy} L{cx} {cy+s} L{cx-s} {cy} Z" fill="{fill}"/>'

def campoverde(cx, cy, w, dark=False):
    # Molinera Campo Verde script badge
    txtcol = CREAM if dark else CREAM
    return f'''
    <g transform="translate({cx},{cy})" text-anchor="middle">
      <text x="0" y="{-w*0.16}" font-family="Outfit" font-weight="bold" font-size="{w*0.085}" letter-spacing="{w*0.02}" fill="{CREAM}">MOLINERA</text>
      {wheat(-w*0.34,-w*0.02,w*0.13,CREAM)}
      <text x="{w*0.03}" y="{w*0.10}" font-family="Nothing You Could Do" font-size="{w*0.30}" fill="{CREAM}">Campo</text>
      <text x="{w*0.12}" y="{w*0.34}" font-family="Nothing You Could Do" font-size="{w*0.30}" fill="{CREAM}">Verde</text>
    </g>'''

def kilos(cx, cy, s, num="49"):
    return f'''
    <g transform="translate({cx},{cy})" text-anchor="middle">
      <text x="0" y="0" font-family="Young Serif" font-size="{s}" fill="{CREAM}">{num}</text>
      <g transform="translate(0,{s*0.34})">
        {diamond(-s*0.62,0,s*0.06,'url(#gold)')}
        <text x="0" y="{s*0.07}" font-family="Outfit" font-weight="bold" letter-spacing="{s*0.05}" font-size="{s*0.20}" fill="url(#gold)">Kilos</text>
        {diamond(s*0.62,0,s*0.06,'url(#gold)')}
      </g>
    </g>'''

def ribbon(cx, cy, w, text):
    h = w*0.12
    return f'''
    <g transform="translate({cx},{cy})">
      <path d="M{-w/2-22} {-h/2} L{-w/2} 0 L{-w/2-22} {h/2} L{-w/2+6} {h/2} L{-w/2+6} {-h/2} Z" fill="{GOLD_D}"/>
      <path d="M{w/2+22} {-h/2} L{w/2} 0 L{w/2+22} {h/2} L{w/2-6} {h/2} L{w/2-6} {-h/2} Z" fill="{GOLD_D}"/>
      <rect x="{-w/2}" y="{-h/2}" width="{w}" height="{h}" rx="3" fill="url(#goldPanel)" stroke="#6e4f20" stroke-width="1.2"/>
      <text x="0" y="{h*0.18}" text-anchor="middle" font-family="IBM Plex Serif" font-weight="bold" font-size="{h*0.52}" letter-spacing="{w*0.012}" fill="#3b2a10">{text}</text>
    </g>'''

def front_panel(W, H, idp='f'):
    s = []
    s.append(f'<rect width="{W}" height="{H}" rx="14" fill="url(#navy)"/>')
    # vertical pinstripes top area
    cxp = W/2
    s.append(f'<g stroke="url(#gold)" stroke-width="2" opacity="0.8">')
    for i in range(1,6):
        s.append(f'<line x1="{cxp-150-i*15}" y1="24" x2="{cxp-150-i*15}" y2="250"/>')
        s.append(f'<line x1="{cxp+150+i*15}" y1="24" x2="{cxp+150+i*15}" y2="250"/>')
    s.append('</g>')
    # central gold panel
    gpw, gpx = 300, W/2-150
    s.append(f'<rect x="{gpx}" y="20" width="{gpw}" height="248" rx="10" fill="url(#goldPanel)" stroke="#6e4f20" stroke-width="2"/>')
    s.append(f'<rect x="{gpx+8}" y="28" width="{gpw-16}" height="232" rx="7" fill="none" stroke="#f1d999" stroke-width="1.2" opacity="0.7"/>')
    # monogram + premium wordmark
    s.append(monogram(W/2, 74, 60))
    s.append(f'<text x="{W/2}" y="152" text-anchor="middle" font-family="IBM Plex Serif" font-weight="bold" font-size="27" letter-spacing="13" fill="#3b2a10">ARROZ</text>')
    s.append(f'<text x="{W/2}" y="210" text-anchor="middle" font-family="Gloock" font-size="54" letter-spacing="5" fill="#2e2009">AÑEJO</text>')
    s.append(f'<g>{diamond(W/2-80,242,4,"#3b2a10")}{diamond(W/2+80,242,4,"#3b2a10")}<text x="{W/2}" y="250" text-anchor="middle" font-family="Outfit" font-weight="bold" font-size="17" letter-spacing="8" fill="#3b2a10">PREMIUM</text></g>')
    # medallion
    mcx, mcy, rx, ry = W/2, 415, 142, 150
    s.append(f'<ellipse cx="{mcx}" cy="{mcy}" rx="{rx+11}" ry="{ry+11}" fill="url(#gold)" stroke="#6e4f20" stroke-width="2"/>')
    s.append(f'<ellipse cx="{mcx}" cy="{mcy}" rx="{rx+4}" ry="{ry+4}" fill="{NAVY_D}"/>')
    s.append(f'<clipPath id="mclip{idp}"><ellipse cx="{mcx}" cy="{mcy}" rx="{rx}" ry="{ry}"/></clipPath>')
    s.append(f'<image href="{PORTRAIT}" x="{mcx-rx}" y="{mcy-ry}" width="{rx*2}" height="{ry*2}" preserveAspectRatio="xMidYMid slice" clip-path="url(#mclip{idp})"/>')
    s.append(f'<ellipse cx="{mcx}" cy="{mcy}" rx="{rx}" ry="{ry}" fill="none" stroke="url(#gold)" stroke-width="6"/>')
    # DON ELMER
    s.append(f'<text x="{W/2}" y="640" text-anchor="middle" font-family="Young Serif" font-size="72" letter-spacing="0" fill="{CREAM}" stroke="#22325c" stroke-width="0.5">DON ELMER</text>')
    s.append(ribbon(W/2, 680, 286, 'ORGULLO UCAYALINO'))
    # bottom row
    s.append(campoverde(W*0.31, H-92, 188))
    s.append(kilos(W*0.73, H-92, 92))
    # vignette
    s.append(f'<rect width="{W}" height="{H}" rx="14" fill="url(#vign)"/>')
    return ''.join(s)

def side_panel(W, H, idp='s'):
    s = []
    s.append(f'<rect width="{W}" height="{H}" rx="12" fill="url(#navy)"/>')
    # top monogram inside small gold tab
    s.append(monogram(W/2, 64, 46))
    s.append(f'<g>{diamond(W/2,118,4,"url(#gold)")}</g>')
    # big vertical DON ELMER (white serif) reading upward
    s.append(f'<g transform="translate({W*0.40},{H*0.52}) rotate(-90)">'
             f'<text x="0" y="0" text-anchor="middle" font-family="Young Serif" font-size="62" '
             f'fill="{CREAM}" stroke="#22325c" stroke-width="0.5">DON ELMER</text></g>')
    # small vertical ARROZ AÑEJO PREMIUM (gold)
    s.append(f'<g transform="translate({W*0.64},{H*0.52}) rotate(-90)">'
             f'<text x="0" y="0" text-anchor="middle" font-family="IBM Plex Serif" font-weight="bold" '
             f'font-size="19" letter-spacing="6" fill="url(#gold)">ARROZ AÑEJO PREMIUM</text></g>')
    s.append(f'<g>{diamond(W/2,H*0.80,4,"url(#gold)")}</g>')
    # bottom: campo verde mini + kilos
    s.append(campoverde(W/2, H-150, 120))
    s.append(kilos(W/2, H-58, 60))
    s.append(f'<rect width="{W}" height="{H}" rx="12" fill="url(#vign)"/>')
    return ''.join(s)

def cupicon(x, y, s, fill):
    return (f'<path d="M{x-s*0.42} {y-s*0.5} L{x+s*0.42} {y-s*0.5} L{x+s*0.32} {y+s*0.5} '
            f'L{x-s*0.32} {y+s*0.5} Z" fill="none" stroke="{fill}" stroke-width="{s*0.09}"/>'
            f'<rect x="{x-s*0.42}" y="{y-s*0.5}" width="{s*0.84}" height="{s*0.16}" fill="{fill}" opacity="0.85"/>')

def datgrid(x, y, label, cells):
    g = [f'<text x="{x}" y="{y+11}" font-family="Work Sans" font-weight="bold" font-size="12" fill="{GOLD_L}">{label}</text>']
    cw, ch, x0 = 13, 17, x+34
    for i in range(cells):
        g.append(f'<rect x="{x0+i*cw}" y="{y}" width="{cw-2}" height="{ch}" fill="none" stroke="#8fa6cf" stroke-width="1"/>')
    return ''.join(g)

def back_panel(W, H, idp='b'):
    s = []
    s.append(f'<rect width="{W}" height="{H}" rx="14" fill="url(#navy)"/>')
    cxp = W/2
    s.append('<g stroke="url(#gold)" stroke-width="2" opacity="0.8">')
    for i in range(1,6):
        s.append(f'<line x1="{cxp-150-i*15}" y1="24" x2="{cxp-150-i*15}" y2="240"/>')
        s.append(f'<line x1="{cxp+150+i*15}" y1="24" x2="{cxp+150+i*15}" y2="240"/>')
    s.append('</g>')
    gpw, gpx = 300, W/2-150
    s.append(f'<rect x="{gpx}" y="20" width="{gpw}" height="236" rx="10" fill="url(#goldPanel)" stroke="#6e4f20" stroke-width="2"/>')
    s.append(f'<rect x="{gpx+8}" y="28" width="{gpw-16}" height="220" rx="7" fill="none" stroke="#f1d999" stroke-width="1.2" opacity="0.7"/>')
    s.append(monogram(W/2, 72, 56))
    s.append(f'<text x="{W/2}" y="146" text-anchor="middle" font-family="IBM Plex Serif" font-weight="bold" font-size="25" letter-spacing="12" fill="#3b2a10">ARROZ</text>')
    s.append(f'<text x="{W/2}" y="200" text-anchor="middle" font-family="Gloock" font-size="50" letter-spacing="5" fill="#2e2009">AÑEJO</text>')
    s.append(f'<g>{diamond(W/2-76,230,4,"#3b2a10")}{diamond(W/2+76,230,4,"#3b2a10")}<text x="{W/2}" y="238" text-anchor="middle" font-family="Outfit" font-weight="bold" font-size="16" letter-spacing="7" fill="#3b2a10">PREMIUM</text></g>')
    mcx, mcy, rx, ry = W/2, 388, 128, 136
    s.append(f'<ellipse cx="{mcx}" cy="{mcy}" rx="{rx+10}" ry="{ry+10}" fill="url(#gold)" stroke="#6e4f20" stroke-width="2"/>')
    s.append(f'<ellipse cx="{mcx}" cy="{mcy}" rx="{rx+4}" ry="{ry+4}" fill="{NAVY_D}"/>')
    s.append(f'<clipPath id="mclip{idp}"><ellipse cx="{mcx}" cy="{mcy}" rx="{rx}" ry="{ry}"/></clipPath>')
    s.append(f'<image href="{PORTRAIT}" x="{mcx-rx}" y="{mcy-ry}" width="{rx*2}" height="{ry*2}" preserveAspectRatio="xMidYMid slice" clip-path="url(#mclip{idp})"/>')
    s.append(f'<ellipse cx="{mcx}" cy="{mcy}" rx="{rx}" ry="{ry}" fill="none" stroke="url(#gold)" stroke-width="5"/>')
    s.append(f'<text x="{W/2}" y="592" text-anchor="middle" font-family="Young Serif" font-size="62" fill="{CREAM}" stroke="#22325c" stroke-width="0.5">DON ELMER</text>')
    s.append(ribbon(W/2, 624, 250, 'ORGULLO UCAYALINO'))
    # ---- info block ----
    s.append(f'<line x1="40" y1="664" x2="{W-40}" y2="664" stroke="url(#goldH)" stroke-width="2"/>')
    # left: date grids
    s.append(datgridwrap(46, 686))
    # right: producer text
    px = W*0.48
    lines = ['PROCESADO Y ENVASADO POR:',
             'INDUSTRIAS MOLINERA CAMPO VERDE S.A.C.',
             'CAR. FEDERICO BASADRE KM.35 CAS. SAN JOSÉ',
             'UCAYALI - CORONEL PORTILLO - CAMPOVERDE',
             'REG. SANIT.: E1561326N / XAIDML']
    for i,ln in enumerate(lines):
        wgt = 'bold' if i==0 else 'normal'
        col = GOLD_L if i==0 else CREAM
        s.append(f'<text x="{px}" y="{690+i*15.5}" font-family="Work Sans" font-weight="{wgt}" font-size="10" fill="{col}">{ln}</text>')
    # divider
    s.append(f'<line x1="40" y1="792" x2="{W-40}" y2="792" stroke="url(#goldH)" stroke-width="1.5" opacity="0.8"/>')
    # bottom utility row: campo verde | preparacion | kilos
    s.append(campoverde(W*0.16, 838, 96))
    # preparacion sugerida
    bx = W*0.46
    s.append(f'<text x="{bx}" y="816" text-anchor="middle" font-family="Outfit" font-weight="bold" font-size="12" letter-spacing="1" fill="{GOLD_L}">PREPARACIÓN SUGERIDA</text>')
    s.append(cupicon(bx-46, 846, 26, CREAM))
    s.append(f'<text x="{bx-46}" y="872" text-anchor="middle" font-family="Work Sans" font-size="9" fill="{CREAM}">1 taza arroz</text>')
    s.append(f'<text x="{bx-8}" y="850" text-anchor="middle" font-family="Young Serif" font-size="22" fill="{GOLD_L}">+</text>')
    s.append(cupicon(bx+30, 846, 26, CREAM))
    s.append(cupicon(bx+58, 846, 26, CREAM))
    s.append(f'<text x="{bx+44}" y="872" text-anchor="middle" font-family="Work Sans" font-size="9" fill="{CREAM}">2 tazas agua</text>')
    s.append(kilos(W*0.83, 836, 58))
    # storage note
    s.append(f'<rect x="40" y="888" width="{W-80}" height="2" fill="url(#goldH)"/>')
    s.append(f'<text x="{W/2}" y="912" text-anchor="middle" font-family="Outfit" font-weight="bold" font-size="14" letter-spacing="2" fill="{CREAM}">ALMACENAR EN UN LUGAR CERRADO, FRESCO Y SEGURO</text>')
    s.append(f'<rect width="{W}" height="{H}" rx="14" fill="url(#vign)"/>')
    return ''.join(s)

def datgridwrap(x, y):
    g = []
    g.append(datgrid(x, y, 'F.P.', 9))
    g.append(datgrid(x, y+24, 'F.V.', 9))
    g.append(f'<text x="{x}" y="{y+59}" font-family="Work Sans" font-weight="bold" font-size="12" fill="{GOLD_L}">LOTE</text>')
    g.append(f'<rect x="{x+40}" y="{y+47}" width="120" height="17" fill="none" stroke="#8fa6cf" stroke-width="1"/>')
    g.append(f'<text x="{x}" y="{y+92}" font-family="Outfit" font-weight="bold" font-size="12" letter-spacing="1" fill="{GOLD_L}">CÓMPRALE AL PERÚ</text>')
    return ''.join(g)

# ================= COMPOSITE CLICHÉ =================
Wf, Hf = 540, 880          # front / back panels
Wl = 168                   # lateral panels
GAP = 26
MX, MY = 46, 96
order_w = [Wl, Wf, Wl, Wf]
CW = MX*2 + sum(order_w) + GAP*(len(order_w)-1)
CH = MY + 980 + 70

xs = []
cx = MX
for w in order_w:
    xs.append(cx); cx += w + GAP

def header():
    return (f'<text x="{CW/2}" y="52" text-anchor="middle" font-family="Gloock" font-size="30" fill="#33518f">'
            f'DON ELMER · ARROZ AÑEJO PREMIUM</text>'
            f'<text x="{CW/2}" y="74" text-anchor="middle" font-family="Work Sans" font-size="13" letter-spacing="3" fill="#7d8aa3">'
            f'CLICHÉ DE SACO 49 KILOS — MOLINERA CAMPO VERDE S.A.C.</text>')

panels = [
    side_panel(Wl, 880, 's1'),
    front_panel(Wf, 880, 'f'),
    side_panel(Wl, 880, 's2'),
    back_panel(Wf, 920, 'b'),
]
labels = ['LATERAL', 'CARA FRONTAL', 'LATERAL', 'CARA POSTERIOR']

body = [f'<rect width="{CW}" height="{CH}" fill="#eceef2"/>', header()]
for x, w, p, lb in zip(xs, order_w, panels, labels):
    body.append(f'<g transform="translate({x},{MY})">{p}</g>')
    body.append(f'<text x="{x+w/2}" y="{MY+940}" text-anchor="middle" font-family="Work Sans" '
                f'font-weight="bold" font-size="13" letter-spacing="2" fill="#5a6strok">{lb}</text>'.replace('5a6strok','5a6478'))

svg = (f'<svg xmlns="http://www.w3.org/2000/svg" width="{CW}" height="{CH}" viewBox="0 0 {CW} {CH}">'
       f'<defs>{gold_defs()}</defs>{"".join(body)}</svg>')
open(os.path.join(BASE,'don-elmer-cliche.svg'),'w').write(svg)
cairosvg.svg2png(bytestring=svg.encode(), write_to=os.path.join(BASE,'don-elmer-cliche.png'), scale=2.0)
print('cliche rendered', CW, CH)

# also render individual faces
for name, fn, w, h in [('frontal', front_panel, Wf, 880), ('posterior', back_panel, Wf, 920),
                       ('lateral', side_panel, Wl, 880)]:
    one = (f'<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}">'
           f'<defs>{gold_defs()}</defs>{fn(w,h)}</svg>')
    cairosvg.svg2png(bytestring=one.encode(), write_to=os.path.join(BASE,f'don-elmer-{name}.png'), scale=2.0)
    cairosvg.svg2pdf(bytestring=one.encode(), write_to=os.path.join(BASE,f'don-elmer-{name}.pdf'))
print('faces rendered')
