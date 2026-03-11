$file = 'C:\Users\user\Desktop\Adore template\react-adore\src\index.css'
$content = [System.IO.File]::ReadAllText($file, [System.Text.Encoding]::UTF8)

# 1. Nav link default color: white (readable over dark hero image)
$content = $content.Replace(
  '.nav-link {' + "`r`n" + '  font-size: 0.9rem;' + "`r`n" + '  font-weight: 500;' + "`r`n" + '  color: var(--text-secondary);',
  '.nav-link {' + "`r`n" + '  font-size: 0.9rem;' + "`r`n" + '  font-weight: 500;' + "`r`n" + '  color: rgba(255, 255, 255, 0.9);'
)

# 2. Nav link hover/active: white
$content = $content.Replace(
  '.nav-link:hover,' + "`r`n" + '.nav-link.active {' + "`r`n" + '  color: var(--purple);' + "`r`n" + '}',
  '.nav-link:hover,' + "`r`n" + '.nav-link.active {' + "`r`n" + '  color: white;' + "`r`n" + '}'
)

# 3. Navbar scrolled: dark text for nav links (add override)
$content = $content.Replace(
  '.navbar.scrolled {' + "`r`n" + '  background: rgba(248, 246, 255, 0.95);' + "`r`n" + '  backdrop-filter: blur(20px);' + "`r`n" + '  border-bottom: 1px solid var(--border);' + "`r`n" + '  padding: 10px 0;' + "`r`n" + '  box-shadow: 0 4px 20px rgba(124, 58, 237, 0.1);' + "`r`n" + '}',
  '.navbar.scrolled {' + "`r`n" + '  background: rgba(248, 246, 255, 0.95);' + "`r`n" + '  backdrop-filter: blur(20px);' + "`r`n" + '  border-bottom: 1px solid var(--border);' + "`r`n" + '  padding: 10px 0;' + "`r`n" + '  box-shadow: 0 4px 20px rgba(124, 58, 237, 0.1);' + "`r`n" + '}' + "`r`n" + "`r`n" + '.navbar.scrolled .nav-link {' + "`r`n" + '  color: var(--text-secondary);' + "`r`n" + '}' + "`r`n" + "`r`n" + '.navbar.scrolled .nav-link:hover,' + "`r`n" + '.navbar.scrolled .nav-link.active {' + "`r`n" + '  color: var(--purple);' + "`r`n" + '}'
)

# 4. Hero title: white text (over dark bg image)
$content = $content.Replace(
  '.hero-title {' + "`r`n" + '  font-size: clamp(2.8rem, 6vw, 4.5rem);' + "`r`n" + '  font-weight: 900;' + "`r`n" + '  line-height: 1.05;' + "`r`n" + '  margin-bottom: 1.5rem;' + "`r`n" + '  animation: fadeInUp 0.6s 0.1s ease both;' + "`r`n" + '}',
  '.hero-title {' + "`r`n" + '  font-size: clamp(2.8rem, 6vw, 4.5rem);' + "`r`n" + '  font-weight: 900;' + "`r`n" + '  line-height: 1.05;' + "`r`n" + '  margin-bottom: 1.5rem;' + "`r`n" + '  animation: fadeInUp 0.6s 0.1s ease both;' + "`r`n" + '  color: white;' + "`r`n" + '  text-shadow: 0 2px 12px rgba(0,0,0,0.4);' + "`r`n" + '}'
)

# 5. Hero subtitle: white text
$content = $content.Replace(
  '.hero-subtitle {' + "`r`n" + '  font-size: 1.25rem;' + "`r`n" + '  color: var(--text-secondary);' + "`r`n" + '  max-width: 700px;' + "`r`n" + '  margin: 0 auto 3rem;' + "`r`n" + '  animation: fadeInUp 0.6s 0.2s ease both;' + "`r`n" + '  text-shadow: none;' + "`r`n" + '}',
  '.hero-subtitle {' + "`r`n" + '  font-size: 1.25rem;' + "`r`n" + '  color: rgba(255, 255, 255, 0.92);' + "`r`n" + '  max-width: 700px;' + "`r`n" + '  margin: 0 auto 3rem;' + "`r`n" + '  animation: fadeInUp 0.6s 0.2s ease both;' + "`r`n" + '  text-shadow: 0 1px 8px rgba(0,0,0,0.3);' + "`r`n" + '}'
)

# 6. Hero badge: white text over dark image
$content = $content.Replace(
  'background: rgba(124, 58, 237, 0.15);' + "`r`n" + '  border: 1px solid rgba(124, 58, 237, 0.3);' + "`r`n" + '  border-radius: 100px;' + "`r`n" + '  font-size: 0.8rem;' + "`r`n" + '  font-weight: 500;' + "`r`n" + '  color: var(--purple-light);',
  'background: rgba(255, 255, 255, 0.15);' + "`r`n" + '  border: 1px solid rgba(255, 255, 255, 0.3);' + "`r`n" + '  border-radius: 100px;' + "`r`n" + '  font-size: 0.8rem;' + "`r`n" + '  font-weight: 500;' + "`r`n" + '  color: rgba(255, 255, 255, 0.95);'
)

# 7. Hero bg-slide: make the dark photo show properly (darker overlay for readability)
$content = $content.Replace(
  '  filter: brightness(0.9) saturate(0.8);' + "`r`n" + '  background-image: linear-gradient(rgba(248, 246, 255, 0.3), rgba(248, 246, 255, 0.3));',
  '  filter: brightness(0.55);' + "`r`n" + '  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));'
)

# 8. btn-secondary in hero: white glass style  
$content = $content.Replace(
  'background: rgba(124, 58, 237, 0.08);' + "`r`n" + '  color: var(--purple);' + "`r`n" + '  border-radius: 100px;' + "`r`n" + '  font-weight: 600;' + "`r`n" + '  font-size: 0.95rem;' + "`r`n" + '  border: 1px solid rgba(124, 58, 237, 0.25);' + "`r`n" + '  transition: var(--transition);' + "`r`n" + '  backdrop-filter: blur(10px);' + "`r`n" + '  font-family: ''Outfit'', sans-serif;' + "`r`n" + '}' + "`r`n" + "`r`n" + '.btn-secondary:hover {' + "`r`n" + '  background: rgba(124, 58, 237, 0.15);' + "`r`n" + '  transform: translateY(-3px);' + "`r`n" + '  border-color: rgba(124, 58, 237, 0.4);',
  'background: rgba(255, 255, 255, 0.15);' + "`r`n" + '  color: white;' + "`r`n" + '  border-radius: 100px;' + "`r`n" + '  font-weight: 600;' + "`r`n" + '  font-size: 0.95rem;' + "`r`n" + '  border: 1px solid rgba(255, 255, 255, 0.4);' + "`r`n" + '  transition: var(--transition);' + "`r`n" + '  backdrop-filter: blur(10px);' + "`r`n" + '  font-family: ''Outfit'', sans-serif;' + "`r`n" + '}' + "`r`n" + "`r`n" + '.btn-secondary:hover {' + "`r`n" + '  background: rgba(255, 255, 255, 0.25);' + "`r`n" + '  transform: translateY(-3px);' + "`r`n" + '  border-color: rgba(255, 255, 255, 0.6);'
)

# 9. Navbar logo background: keep white on both scroll states
$content = $content.Replace(
  '.navbar .nav-logo,' + "`r`n" + '.footer-brand .nav-logo {' + "`r`n" + '  background: rgba(255, 255, 255, 0.85);',
  '.navbar .nav-logo,' + "`r`n" + '.footer-brand .nav-logo {' + "`r`n" + '  background: rgba(255, 255, 255, 0.92);'
)

# 10. Hamburger: white by default (over dark hero)
$content = $content.Replace(
  '  background: var(--purple);' + "`r`n" + '  border-radius: 2px;' + "`r`n" + '  transition: var(--transition);' + "`r`n" + '}' + "`r`n" + "`r`n" + '/* ============================================================' + "`r`n" + '   HERO SECTION',
  '  background: white;' + "`r`n" + '  border-radius: 2px;' + "`r`n" + '  transition: var(--transition);' + "`r`n" + '}' + "`r`n" + "`r`n" + '.navbar.scrolled .hamburger span {' + "`r`n" + '  background: var(--purple);' + "`r`n" + '}' + "`r`n" + "`r`n" + '/* ============================================================' + "`r`n" + '   HERO SECTION'
)

[System.IO.File]::WriteAllText($file, $content, [System.Text.Encoding]::UTF8)
Write-Host "Hero and navbar fixes applied!"
