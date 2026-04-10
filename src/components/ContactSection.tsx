import { siteData } from '../content/siteData'

function isHttpUrl(s: string): boolean {
  return s.startsWith('http://') || s.startsWith('https://')
}

export function ContactSection() {
  const { contact, domain } = siteData
  const mailto = `mailto:${contact.email}?subject=${encodeURIComponent('Dotaz na spolupráci')}`
  const telHref = contact.phone.replace(/\s/g, '')
  const linkedinOk = isHttpUrl(contact.linkedinUrl)

  return (
    <section className="section contact-section" id={contact.id} aria-labelledby="contact-title">
      <div className="section__inner contact-layout">
        <div>
          <h2 className="section__title" id="contact-title">
            {contact.title}
          </h2>
          <p className="section__intro contact-section__lead">{contact.body}</p>
        </div>
        <div className="contact-box">
          <h3 className="contact-box__title">{contact.headline}</h3>
          <p className="contact-box__lead">{contact.contactLead}</p>

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
            <div className="contact-row">
              <dt>{contact.linkedinLabel}</dt>
              <dd>
                {linkedinOk ? (
                  <a className="contact-link" href={contact.linkedinUrl} target="_blank" rel="noopener noreferrer">
                    Profil na LinkedIn
                  </a>
                ) : (
                  <span className="contact-placeholder">{contact.linkedinUrl}</span>
                )}
              </dd>
            </div>
          </dl>

          <p className="contact-meta">
            Web:{' '}
            <a href={`https://${domain}`}>{domain}</a>
          </p>
        </div>
      </div>
    </section>
  )
}
