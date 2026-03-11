$file = 'C:\Users\user\Desktop\Adore template\react-adore\src\index.css'
$content = Get-Content $file -Raw -Encoding UTF8

# CSS Variables
$content = $content.Replace('--purple-light: #A78BFA;', '--purple-light: #7C3AED;')
$content = $content.Replace('--orange-light: #FB923C;', '--orange-light: #EA6A00;')
$content = $content.Replace('--bg-dark: #0A0B1A;', '--bg-dark: #F8F6FF;')
$content = $content.Replace('--bg-dark2: #0F1128;', '--bg-dark2: #F0EDFF;')
$content = $content.Replace('--bg-card: #131530;', '--bg-card: #FFFFFF;')
$content = $content.Replace('--bg-card2: #1A1D3A;', '--bg-card2: #F5F3FF;')
$content = $content.Replace('--text-primary: #F1F5F9;', '--text-primary: #1E1033;')
$content = $content.Replace('--text-secondary: #94A3B8;', '--text-secondary: #4B5563;')
$content = $content.Replace('--text-muted: #64748B;', '--text-muted: #6B7280;')
$content = $content.Replace('--border: rgba(255, 255, 255, 0.08);', '--border: rgba(124, 58, 237, 0.12);')
$content = $content.Replace('--shadow-sm: 0 4px 16px rgba(0, 0, 0, 0.3);', '--shadow-sm: 0 4px 16px rgba(124, 58, 237, 0.08);')
$content = $content.Replace('--shadow-md: 0 8px 32px rgba(0, 0, 0, 0.4);', '--shadow-md: 0 8px 32px rgba(124, 58, 237, 0.12);')
$content = $content.Replace('--shadow-lg: 0 16px 64px rgba(0, 0, 0, 0.5);', '--shadow-lg: 0 16px 64px rgba(124, 58, 237, 0.16);')

# gradient-text-light
$content = $content.Replace('background: linear-gradient(135deg, #C4B5FD, #FED7AA);', 'background: linear-gradient(135deg, var(--purple), var(--orange));')

# btn-secondary
$content = $content.Replace(
  'background: rgba(255, 255, 255, 0.08);' + "`r`n" + '  color: white;' + "`r`n" + '  border-radius: 100px;' + "`r`n" + '  font-weight: 600;' + "`r`n" + '  font-size: 0.95rem;' + "`r`n" + '  border: 1px solid rgba(255, 255, 255, 0.15);',
  'background: rgba(124, 58, 237, 0.08);' + "`r`n" + '  color: var(--purple);' + "`r`n" + '  border-radius: 100px;' + "`r`n" + '  font-weight: 600;' + "`r`n" + '  font-size: 0.95rem;' + "`r`n" + '  border: 1px solid rgba(124, 58, 237, 0.25);'
)
$content = $content.Replace(
  'background: rgba(255, 255, 255, 0.15);' + "`r`n" + '  transform: translateY(-3px);' + "`r`n" + '  border-color: rgba(255, 255, 255, 0.3);',
  'background: rgba(124, 58, 237, 0.15);' + "`r`n" + '  transform: translateY(-3px);' + "`r`n" + '  border-color: rgba(124, 58, 237, 0.4);'
)

# section-tag.light
$content = $content.Replace(
  'background: rgba(255, 255, 255, 0.1);' + "`r`n" + '  color: rgba(255, 255, 255, 0.8);' + "`r`n" + '  border-color: rgba(255, 255, 255, 0.2);',
  'background: rgba(124, 58, 237, 0.1);' + "`r`n" + '  color: var(--purple);' + "`r`n" + '  border-color: rgba(124, 58, 237, 0.25);'
)

# section-title.light
$content = $content.Replace(
  '.section-title.light {' + "`r`n" + '  color: white;' + "`r`n" + '}',
  '.section-title.light {' + "`r`n" + '  color: var(--text-primary);' + "`r`n" + '}'
)

# section-subtitle.light
$content = $content.Replace('color: rgba(255, 255, 255, 0.7);', 'color: var(--text-secondary);')

# navbar.scrolled
$content = $content.Replace(
  'background: rgba(10, 11, 26, 0.9);' + "`r`n" + '  backdrop-filter: blur(20px);' + "`r`n" + '  border-bottom: 1px solid var(--border);' + "`r`n" + '  padding: 10px 0;' + "`r`n" + '  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);',
  'background: rgba(248, 246, 255, 0.95);' + "`r`n" + '  backdrop-filter: blur(20px);' + "`r`n" + '  border-bottom: 1px solid var(--border);' + "`r`n" + '  padding: 10px 0;' + "`r`n" + '  box-shadow: 0 4px 20px rgba(124, 58, 237, 0.1);'
)

# nav-logo background
$content = $content.Replace('background: rgba(10, 11, 26, 0.75);', 'background: rgba(255, 255, 255, 0.85);')

# nav-link hover
$content = $content.Replace(
  '.nav-link:hover,' + "`r`n" + '.nav-link.active {' + "`r`n" + '  color: white;' + "`r`n" + '}',
  '.nav-link:hover,' + "`r`n" + '.nav-link.active {' + "`r`n" + '  color: var(--purple);' + "`r`n" + '}'
)

# hamburger span white
$content = $content.Replace('  background: white;' + "`r`n" + '  border-radius: 2px;' + "`r`n" + '  transition: var(--transition);' + "`r`n" + '}' + "`r`n" + "`r`n" + '/* ============================================================' + "`r`n" + '   HERO SECTION',
'  background: var(--purple);' + "`r`n" + '  border-radius: 2px;' + "`r`n" + '  transition: var(--transition);' + "`r`n" + '}' + "`r`n" + "`r`n" + '/* ============================================================' + "`r`n" + '   HERO SECTION')

# blob opacity
$content = $content.Replace('  opacity: 0.35;' + "`r`n" + '  animation: blobFloat', '  opacity: 0.18;' + "`r`n" + '  animation: blobFloat')

# blob colors
$content = $content.Replace(
  'background: radial-gradient(circle, var(--purple), transparent);' + "`r`n" + '  top: -100px;',
  'background: radial-gradient(circle, #A78BFA, transparent);' + "`r`n" + '  top: -100px;'
)
$content = $content.Replace(
  'background: radial-gradient(circle, var(--orange), transparent);' + "`r`n" + '  top: 200px;',
  'background: radial-gradient(circle, #FDBA74, transparent);' + "`r`n" + '  top: 200px;'
)
$content = $content.Replace('background: radial-gradient(circle, var(--blue), transparent);', 'background: radial-gradient(circle, #93C5FD, transparent);')
$content = $content.Replace(
  'background: radial-gradient(circle, var(--purple-dark), transparent);' + "`r`n" + '  top: -200px;' + "`r`n" + '  right: -200px;' + "`r`n" + '  opacity: 0.25;',
  'background: radial-gradient(circle, #C4B5FD, transparent);' + "`r`n" + '  top: -200px;' + "`r`n" + '  right: -200px;' + "`r`n" + '  opacity: 0.15;'
)
$content = $content.Replace(
  'background: radial-gradient(circle, var(--orange), transparent);' + "`r`n" + '  bottom: -100px;' + "`r`n" + '  left: -100px;' + "`r`n" + '  opacity: 0.2;',
  'background: radial-gradient(circle, #FED7AA, transparent);' + "`r`n" + '  bottom: -100px;' + "`r`n" + '  left: -100px;' + "`r`n" + '  opacity: 0.15;'
)

# hero-subtitle
$content = $content.Replace(
  'color: rgba(255, 255, 255, 0.9);' + "`r`n" + '  max-width: 700px;' + "`r`n" + '  margin: 0 auto 3rem;' + "`r`n" + '  animation: fadeInUp 0.6s 0.2s ease both;' + "`r`n" + '  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);',
  'color: var(--text-secondary);' + "`r`n" + '  max-width: 700px;' + "`r`n" + '  margin: 0 auto 3rem;' + "`r`n" + '  animation: fadeInUp 0.6s 0.2s ease both;' + "`r`n" + '  text-shadow: none;'
)

# hero-stats
$content = $content.Replace(
  'background: rgba(255, 255, 255, 0.08);' + "`r`n" + '  border: 1px solid rgba(255, 255, 255, 0.1);' + "`r`n" + '  border-radius: var(--radius-xl);' + "`r`n" + '  padding: 1.5rem 2.5rem;' + "`r`n" + '  backdrop-filter: blur(15px);' + "`r`n" + '  animation: fadeInUp 0.6s 0.4s ease both;',
  'background: rgba(255, 255, 255, 0.85);' + "`r`n" + '  border: 1px solid rgba(124, 58, 237, 0.15);' + "`r`n" + '  border-radius: var(--radius-xl);' + "`r`n" + '  padding: 1.5rem 2.5rem;' + "`r`n" + '  backdrop-filter: blur(15px);' + "`r`n" + '  animation: fadeInUp 0.6s 0.4s ease both;' + "`r`n" + '  box-shadow: var(--shadow-sm);'
)

# floating-card
$content = $content.Replace(
  'background: rgba(255, 255, 255, 0.06);' + "`r`n" + '  border: 1px solid rgba(255, 255, 255, 0.12);',
  'background: rgba(255, 255, 255, 0.92);' + "`r`n" + '  border: 1px solid rgba(124, 58, 237, 0.15);'
)

# fc-text strong
$content = $content.Replace(
  '.fc-text strong {' + "`r`n" + '  font-size: 0.85rem;' + "`r`n" + '  color: white;' + "`r`n" + '}',
  '.fc-text strong {' + "`r`n" + '  font-size: 0.85rem;' + "`r`n" + '  color: var(--text-primary);' + "`r`n" + '}'
)

# marquee-section
$content = $content.Replace(
  'background: rgba(124, 58, 237, 0.08);' + "`r`n" + '  border-top: 1px solid var(--border);' + "`r`n" + '  border-bottom: 1px solid var(--border);',
  'background: rgba(124, 58, 237, 0.05);' + "`r`n" + '  border-top: 1px solid rgba(124, 58, 237, 0.12);' + "`r`n" + '  border-bottom: 1px solid rgba(124, 58, 237, 0.12);'
)

# about-badge-float
$content = $content.Replace(
  '.about-badge-float strong {' + "`r`n" + '  display: block;' + "`r`n" + '  font-size: 0.9rem;' + "`r`n" + '  color: white;' + "`r`n" + '}' + "`r`n" + "`r`n" + '.about-badge-float span {' + "`r`n" + '  font-size: 0.75rem;' + "`r`n" + '  color: var(--text-muted);',
  '.about-badge-float strong {' + "`r`n" + '  display: block;' + "`r`n" + '  font-size: 0.9rem;' + "`r`n" + '  color: var(--text-primary);' + "`r`n" + '}' + "`r`n" + "`r`n" + '.about-badge-float span {' + "`r`n" + '  font-size: 0.75rem;' + "`r`n" + '  color: var(--text-secondary);'
)

# program-card h3
$content = $content.Replace(
  '.program-card h3 {' + "`r`n" + '  font-size: 1.15rem;' + "`r`n" + '  margin-bottom: 0.75rem;' + "`r`n" + '  color: white;' + "`r`n" + '}',
  '.program-card h3 {' + "`r`n" + '  font-size: 1.15rem;' + "`r`n" + '  margin-bottom: 0.75rem;' + "`r`n" + '  color: var(--text-primary);' + "`r`n" + '}'
)

# program-card.featured
$content = $content.Replace(
  'background: linear-gradient(135deg, rgba(124, 58, 237, 0.15), rgba(249, 115, 22, 0.1));' + "`r`n" + '  border-color: rgba(124, 58, 237, 0.35);',
  'background: linear-gradient(135deg, rgba(124, 58, 237, 0.07), rgba(249, 115, 22, 0.05));' + "`r`n" + '  border-color: rgba(124, 58, 237, 0.35);'
)

# prog-meta span
$content = $content.Replace(
  'color: var(--text-muted);' + "`r`n" + '  background: rgba(255, 255, 255, 0.05);',
  'color: var(--text-secondary);' + "`r`n" + '  background: rgba(124, 58, 237, 0.06);'
)

# prog-link color
$content = $content.Replace(
  'color: var(--purple-light);' + "`r`n" + '  font-weight: 600;' + "`r`n" + '  font-size: 0.88rem;' + "`r`n" + '  transition: var(--transition);' + "`r`n" + '}' + "`r`n" + "`r`n" + '.prog-link:hover {' + "`r`n" + '  color: white;',
  'color: var(--purple);' + "`r`n" + '  font-weight: 600;' + "`r`n" + '  font-size: 0.88rem;' + "`r`n" + '  transition: var(--transition);' + "`r`n" + '}' + "`r`n" + "`r`n" + '.prog-link:hover {' + "`r`n" + '  color: var(--purple-dark);'
)

# idea-card h4
$content = $content.Replace(
  '.idea-card h4 {' + "`r`n" + '  font-size: 1.1rem;' + "`r`n" + '  margin-bottom: 0.75rem;' + "`r`n" + '  color: white;' + "`r`n" + '}',
  '.idea-card h4 {' + "`r`n" + '  font-size: 1.1rem;' + "`r`n" + '  margin-bottom: 0.75rem;' + "`r`n" + '  color: var(--text-primary);' + "`r`n" + '}'
)

# idea-author
$content = $content.Replace(
  '.idea-author strong {' + "`r`n" + '  display: block;' + "`r`n" + '  font-size: 0.9rem;' + "`r`n" + '  color: white;' + "`r`n" + '}' + "`r`n" + "`r`n" + '.idea-author span {' + "`r`n" + '  display: block;' + "`r`n" + '  font-size: 0.75rem;' + "`r`n" + '  color: var(--text-muted);' + "`r`n" + '}',
  '.idea-author strong {' + "`r`n" + '  display: block;' + "`r`n" + '  font-size: 0.9rem;' + "`r`n" + '  color: var(--text-primary);' + "`r`n" + '}' + "`r`n" + "`r`n" + '.idea-author span {' + "`r`n" + '  display: block;' + "`r`n" + '  font-size: 0.75rem;' + "`r`n" + '  color: var(--text-secondary);' + "`r`n" + '}'
)

# tag background
$content = $content.Replace(
  '  background: rgba(255, 255, 255, 0.06);' + "`r`n" + '  border: 1px solid var(--border);' + "`r`n" + '  border-radius: 100px;' + "`r`n" + '  font-size: 0.75rem;' + "`r`n" + '  color: var(--text-secondary);',
  '  background: rgba(124, 58, 237, 0.06);' + "`r`n" + '  border: 1px solid rgba(124, 58, 237, 0.15);' + "`r`n" + '  border-radius: 100px;' + "`r`n" + '  font-size: 0.75rem;' + "`r`n" + '  color: var(--text-secondary);'
)

# ideas-cta-box
$content = $content.Replace(
  'background: linear-gradient(135deg, rgba(124, 58, 237, 0.15), rgba(249, 115, 22, 0.1));' + "`r`n" + '  border: 1px solid rgba(124, 58, 237, 0.3);',
  'background: linear-gradient(135deg, rgba(124, 58, 237, 0.07), rgba(249, 115, 22, 0.05));' + "`r`n" + '  border: 1px solid rgba(124, 58, 237, 0.2);'
)
$content = $content.Replace(
  '.ideas-cta-box h3 {' + "`r`n" + '  font-size: 1.8rem;' + "`r`n" + '  margin-bottom: 0.75rem;' + "`r`n" + '}',
  '.ideas-cta-box h3 {' + "`r`n" + '  font-size: 1.8rem;' + "`r`n" + '  margin-bottom: 0.75rem;' + "`r`n" + '  color: var(--text-primary);' + "`r`n" + '}'
)

# impact section
$content = $content.Replace(
  'background: linear-gradient(135deg, #0A0320, #12052A, #1A0A0A);',
  'background: linear-gradient(135deg, #F3EEFF, #FFF0E8, #EEF2FF);'
)

# impact-card
$content = $content.Replace(
  '  background: rgba(255, 255, 255, 0.04);' + "`r`n" + '  border: 1px solid rgba(255, 255, 255, 0.1);' + "`r`n" + '  border-radius: var(--radius-lg);' + "`r`n" + '  transition: var(--transition);' + "`r`n" + '  backdrop-filter: blur(10px);' + "`r`n" + '}' + "`r`n" + "`r`n" + '.impact-card:hover {' + "`r`n" + '  transform: translateY(-8px);' + "`r`n" + '  background: rgba(255, 255, 255, 0.07);',
  '  background: rgba(255, 255, 255, 0.8);' + "`r`n" + '  border: 1px solid rgba(124, 58, 237, 0.12);' + "`r`n" + '  border-radius: var(--radius-lg);' + "`r`n" + '  transition: var(--transition);' + "`r`n" + '  backdrop-filter: blur(10px);' + "`r`n" + '  box-shadow: var(--shadow-sm);' + "`r`n" + '}' + "`r`n" + "`r`n" + '.impact-card:hover {' + "`r`n" + '  transform: translateY(-8px);' + "`r`n" + '  background: rgba(255, 255, 255, 0.97);'
)

# impact-number gradient
$content = $content.Replace(
  'background: linear-gradient(135deg, #C4B5FD, #FED7AA);' + "`r`n" + '  -webkit-background-clip: text;' + "`r`n" + '  -webkit-text-fill-color: transparent;' + "`r`n" + '  background-clip: text;' + "`r`n" + '  line-height: 1;',
  'background: linear-gradient(135deg, var(--purple), var(--orange));' + "`r`n" + '  -webkit-background-clip: text;' + "`r`n" + '  -webkit-text-fill-color: transparent;' + "`r`n" + '  background-clip: text;' + "`r`n" + '  line-height: 1;'
)

# impact-label
$content = $content.Replace(
  'color: rgba(255, 255, 255, 0.6);' + "`r`n" + '  font-size: 0.9rem;' + "`r`n" + '}' + "`r`n" + "`r`n" + '/* Testimonials',
  'color: var(--text-secondary);' + "`r`n" + '  font-size: 0.9rem;' + "`r`n" + '}' + "`r`n" + "`r`n" + '/* Testimonials'
)

# testimonial-card
$content = $content.Replace(
  '  background: rgba(255, 255, 255, 0.04);' + "`r`n" + '  border: 1px solid rgba(255, 255, 255, 0.1);' + "`r`n" + '  border-radius: var(--radius-xl);' + "`r`n" + '  padding: 2.5rem;' + "`r`n" + '  display: none;' + "`r`n" + '  backdrop-filter: blur(10px);' + "`r`n" + '}',
  '  background: rgba(255, 255, 255, 0.9);' + "`r`n" + '  border: 1px solid rgba(124, 58, 237, 0.15);' + "`r`n" + '  border-radius: var(--radius-xl);' + "`r`n" + '  padding: 2.5rem;' + "`r`n" + '  display: none;' + "`r`n" + '  backdrop-filter: blur(10px);' + "`r`n" + '  box-shadow: var(--shadow-sm);' + "`r`n" + '}'
)

# testimonial p
$content = $content.Replace(
  '  color: rgba(255, 255, 255, 0.8);' + "`r`n" + '  font-size: 1.05rem;',
  '  color: var(--text-secondary);' + "`r`n" + '  font-size: 1.05rem;'
)

# testi-author
$content = $content.Replace(
  '.testi-author strong {' + "`r`n" + '  display: block;' + "`r`n" + '  font-size: 0.9rem;' + "`r`n" + '  color: white;' + "`r`n" + '}' + "`r`n" + "`r`n" + '.testi-author span {' + "`r`n" + '  font-size: 0.8rem;' + "`r`n" + '  color: rgba(255, 255, 255, 0.5);' + "`r`n" + '}',
  '.testi-author strong {' + "`r`n" + '  display: block;' + "`r`n" + '  font-size: 0.9rem;' + "`r`n" + '  color: var(--text-primary);' + "`r`n" + '}' + "`r`n" + "`r`n" + '.testi-author span {' + "`r`n" + '  font-size: 0.8rem;' + "`r`n" + '  color: var(--text-secondary);' + "`r`n" + '}'
)

# testi-dot
$content = $content.Replace(
  '  background: rgba(255, 255, 255, 0.2);' + "`r`n" + '  transition: var(--transition);' + "`r`n" + '  cursor: pointer;' + "`r`n" + '}' + "`r`n" + "`r`n" + '.testi-dot.active {' + "`r`n" + '  background: var(--purple-light);',
  '  background: rgba(124, 58, 237, 0.2);' + "`r`n" + '  transition: var(--transition);' + "`r`n" + '  cursor: pointer;' + "`r`n" + '}' + "`r`n" + "`r`n" + '.testi-dot.active {' + "`r`n" + '  background: var(--purple);'
)

# team-card h4
$content = $content.Replace(
  '.team-card h4 {' + "`r`n" + '  font-size: 1rem;' + "`r`n" + '  color: white;',
  '.team-card h4 {' + "`r`n" + '  font-size: 1rem;' + "`r`n" + '  color: var(--text-primary);'
)

# team-role
$content = $content.Replace(
  '.team-role {' + "`r`n" + '  display: block;' + "`r`n" + '  font-size: 0.78rem;' + "`r`n" + '  color: var(--purple-light);',
  '.team-role {' + "`r`n" + '  display: block;' + "`r`n" + '  font-size: 0.78rem;' + "`r`n" + '  color: var(--purple);'
)

# social-btn
$content = $content.Replace(
  '  background: rgba(255, 255, 255, 0.06);' + "`r`n" + '  border: 1px solid var(--border);' + "`r`n" + '  border-radius: var(--radius-sm);' + "`r`n" + '  display: flex;' + "`r`n" + '  align-items: center;' + "`r`n" + '  justify-content: center;' + "`r`n" + '  font-size: 0.75rem;' + "`r`n" + '  font-weight: 700;',
  '  background: rgba(124, 58, 237, 0.06);' + "`r`n" + '  border: 1px solid rgba(124, 58, 237, 0.15);' + "`r`n" + '  border-radius: var(--radius-sm);' + "`r`n" + '  display: flex;' + "`r`n" + '  align-items: center;' + "`r`n" + '  justify-content: center;' + "`r`n" + '  font-size: 0.75rem;' + "`r`n" + '  font-weight: 700;'
)

# contact-item strong
$content = $content.Replace(
  '.contact-item strong {' + "`r`n" + '  display: block;' + "`r`n" + '  font-size: 0.85rem;' + "`r`n" + '  color: white;',
  '.contact-item strong {' + "`r`n" + '  display: block;' + "`r`n" + '  font-size: 0.85rem;' + "`r`n" + '  color: var(--text-primary);'
)

# social-icon
$content = $content.Replace(
  '  background: var(--bg-card);' + "`r`n" + '  border: 1px solid var(--border);' + "`r`n" + '  border-radius: var(--radius-sm);' + "`r`n" + '  display: flex;' + "`r`n" + '  align-items: center;' + "`r`n" + '  justify-content: center;' + "`r`n" + '  color: var(--text-secondary);',
  '  background: rgba(255, 255, 255, 0.8);' + "`r`n" + '  border: 1px solid rgba(124, 58, 237, 0.15);' + "`r`n" + '  border-radius: var(--radius-sm);' + "`r`n" + '  display: flex;' + "`r`n" + '  align-items: center;' + "`r`n" + '  justify-content: center;' + "`r`n" + '  color: var(--text-secondary);'
)

# form inputs
$content = $content.Replace(
  '  background: var(--bg-card2);' + "`r`n" + '  border: 1px solid var(--border);' + "`r`n" + '  border-radius: var(--radius-md);' + "`r`n" + '  color: white;',
  '  background: #FAFAFA;' + "`r`n" + '  border: 1px solid rgba(124, 58, 237, 0.15);' + "`r`n" + '  border-radius: var(--radius-md);' + "`r`n" + '  color: var(--text-primary);'
)

# form select option
$content = $content.Replace(
  '.form-group select option {' + "`r`n" + '  background: var(--bg-card2);' + "`r`n" + '}',
  '.form-group select option {' + "`r`n" + '  background: #FFFFFF;' + "`r`n" + '  color: var(--text-primary);' + "`r`n" + '}'
)

# form placeholder
$content = $content.Replace(
  '.form-group input::placeholder,' + "`r`n" + '.form-group textarea::placeholder {' + "`r`n" + '  color: var(--text-muted);' + "`r`n" + '}',
  '.form-group input::placeholder,' + "`r`n" + '.form-group textarea::placeholder {' + "`r`n" + '  color: #9CA3AF;' + "`r`n" + '}'
)

# footer
$content = $content.Replace('.footer {' + "`r`n" + '  background: #06071A;', '.footer {' + "`r`n" + '  background: #F0EDFF;')
$content = $content.Replace(
  'border-top: 1px solid var(--border);' + "`r`n" + '  padding: 60px 0 0;',
  'border-top: 1px solid rgba(124, 58, 237, 0.15);' + "`r`n" + '  padding: 60px 0 0;'
)

# footer links heading
$content = $content.Replace(
  '  color: var(--purple-light);' + "`r`n" + '  text-transform: uppercase;',
  '  color: var(--purple);' + "`r`n" + '  text-transform: uppercase;'
)

# footer link hover
$content = $content.Replace(
  '.footer-links-group ul a:hover {' + "`r`n" + '  color: white;',
  '.footer-links-group ul a:hover {' + "`r`n" + '  color: var(--purple);'
)

# footer newsletter bg
$content = $content.Replace(
  '  background: var(--bg-card);' + "`r`n" + '  border: 1px solid var(--border);' + "`r`n" + '  border-radius: 100px;',
  '  background: rgba(255, 255, 255, 0.8);' + "`r`n" + '  border: 1px solid rgba(124, 58, 237, 0.2);' + "`r`n" + '  border-radius: 100px;'
)

# footer newsletter input color
$content = $content.Replace(
  '  color: white;' + "`r`n" + '  font-size: 0.85rem;' + "`r`n" + '  font-family: ''Inter'', sans-serif;' + "`r`n" + '}' + "`r`n" + "`r`n" + '.footer-newsletter input::placeholder',
  '  color: var(--text-primary);' + "`r`n" + '  font-size: 0.85rem;' + "`r`n" + '  font-family: ''Inter'', sans-serif;' + "`r`n" + '}' + "`r`n" + "`r`n" + '.footer-newsletter input::placeholder'
)

# footer-bottom-links
$content = $content.Replace(
  '.footer-bottom-links a {' + "`r`n" + '  font-size: 0.8rem;' + "`r`n" + '  color: var(--text-muted);',
  '.footer-bottom-links a {' + "`r`n" + '  font-size: 0.8rem;' + "`r`n" + '  color: var(--text-secondary);'
)
$content = $content.Replace(
  '.footer-bottom-links a:hover {' + "`r`n" + '  color: white;' + "`r`n" + '}',
  '.footer-bottom-links a:hover {' + "`r`n" + '  color: var(--purple);' + "`r`n" + '}'
)

# mobile nav-links backdrop
$content = $content.Replace(
  'background: rgba(10, 11, 26, 0.98);',
  'background: rgba(248, 246, 255, 0.98);'
)

# hero-bg-slide
$content = $content.Replace(
  '  filter: brightness(0.45);' + "`r`n" + '  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));',
  '  filter: brightness(0.9) saturate(0.8);' + "`r`n" + '  background-image: linear-gradient(rgba(248, 246, 255, 0.3), rgba(248, 246, 255, 0.3));'
)

[System.IO.File]::WriteAllText($file, $content, [System.Text.Encoding]::UTF8)
Write-Host "Light theme applied successfully!"
