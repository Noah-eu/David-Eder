import { siteData } from '../content/siteData'

export function Header() {
  const { brand, header } = siteData

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-logo" href="#uvod">
          {brand}
        </a>
        <nav className="site-nav" aria-label="Hlavní navigace">
          {header.nav.map((item) => (
            <a key={item.id} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="btn btn--primary btn--header" href="#kontakt">
          {header.ctaContact}
        </a>
      </div>
    </header>
  )
}
