import { siteData } from '../content/siteData'

export function ContactSection() {
  const { contact, domain } = siteData
  const mailto = `mailto:${contact.email}?subject=${encodeURIComponent('Dotaz na spolupráci')}`
  const telHref = contact.phone.replace(/\s/g, '')

  return (
    <section className="section contact-section" id={contact.id} aria-label="Kontakt">
      <div className="section__inner">
        <div className="contact-box">
          <div className="contact-actions">
            <a className="btn btn--primary btn--lg" href={mailto}>
              {contact.btnEmail}
            </a>
            <a className="btn btn--outline-light btn--lg" href={`tel:${telHref}`}>
              {contact.btnCall}
            </a>
          </div>

          <dl className="contact-rows">
            <div className="contact-row">
              <dt>{contact.emailLabel}</dt>
              <dd>
                <a className="contact-link" href={mailto}>
                  {contact.email}
                </a>
              </dd>
            </div>
            <div className="contact-row">
              <dt>{contact.phoneLabel}</dt>
              <dd>
                <a className="contact-link" href={`tel:${telHref}`}>
                  {contact.phone}
                </a>
              </dd>
            </div>
          </dl>

          <p className="contact-meta">
            Web: <a href={`https://${domain}`}>{domain}</a>
          </p>
        </div>
      </div>
    </section>
  )
}
