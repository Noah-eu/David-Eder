import { siteData } from '../content/siteData'

export function Footer() {
  const { brand, domain, footer, contact } = siteData
  const year = new Date().getFullYear()
  const mailto = `mailto:${contact.email}`

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <p className="site-footer__name">{brand}</p>
          <p style={{ margin: 0, maxWidth: '28rem' }}>{footer.tagline}</p>
        </div>
        <div className="site-footer__meta">
          <a href={`https://${domain}`}>{domain}</a>
          <a href={mailto}>{contact.email}</a>
          <span>
            {footer.copyrightPrefix} {year} {brand}
          </span>
        </div>
      </div>
    </footer>
  )
}
