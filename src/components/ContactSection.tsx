import { siteData } from '../content/siteData'

function isHttpUrl(s: string): boolean {
  return s.startsWith('http://') || s.startsWith('https://')
}

export function ContactSection() {
  const { contact, domain } = siteData
  const mailto = `mailto:${contact.email}?subject=Konzultace%20%E2%80%94%20provoz%20ubytov%C3%A1n%C3%AD`
  const telHref = contact.phone.replace(/\s/g, '')
  const linkedinOk = isHttpUrl(contact.linkedinUrl)

  return (
    <section className="section contact-section" id={contact.id} aria-labelledby="contact-title">
      <div className="section__inner">
        <h2 className="section__title" id="contact-title">
          {contact.title}
        </h2>
        <div className="contact-box">
          <h3 style={{ marginTop: 0, fontSize: '1.35rem' }}>{contact.headline}</h3>
          <p style={{ marginBottom: 0, color: 'var(--color-text-muted)' }}>{contact.body}</p>

          <dl className="contact-rows">
            <div className="contact-row">
              <dt>{contact.emailLabel}</dt>
              <dd>
                <a href={mailto}>
                  <span className="contact-placeholder">{contact.email}</span>
                </a>
              </dd>
            </div>
            <div className="contact-row">
              <dt>{contact.phoneLabel}</dt>
              <dd>
                <a href={`tel:${telHref}`}>
                  <span className="contact-placeholder">{contact.phone}</span>
                </a>
              </dd>
            </div>
            <div className="contact-row">
              <dt>{contact.linkedinLabel}</dt>
              <dd>
                {linkedinOk ? (
                  <a href={contact.linkedinUrl} target="_blank" rel="noopener noreferrer">
                    Profil na LinkedIn
                  </a>
                ) : (
                  <span className="contact-placeholder">{contact.linkedinUrl}</span>
                )}
              </dd>
            </div>
          </dl>

          <a className="btn btn--primary" href={mailto}>
            {contact.openEmail}
          </a>
          <p style={{ marginTop: '1rem', marginBottom: 0, fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
            Web:{' '}
            <a href={`https://${domain}`}>{domain}</a>
          </p>
        </div>
      </div>
    </section>
  )
}
