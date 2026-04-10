import { useState } from 'react'
import { siteData } from '../content/siteData'

export function Hero() {
  const { hero, contact } = siteData
  const [portraitOk, setPortraitOk] = useState(true)
  const mailto = `mailto:${contact.email}?subject=Konzultace%20%E2%80%94%20provoz%20ubytov%C3%A1n%C3%AD`

  return (
    <section className="section hero" id={hero.id} aria-labelledby="hero-heading">
      <div className="section__inner">
        <div className="hero__grid">
          <div>
            <h1 id="hero-heading">{hero.headline}</h1>
            <p className="section__intro" style={{ marginBottom: '1rem' }}>
              {hero.subheadline}
            </p>
            <p className="hero__trust">{hero.trustLine}</p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="#kontakt">
                {hero.ctaConsult}
              </a>
              <a className="btn btn--secondary" href={mailto}>
                {hero.ctaEmail}
              </a>
            </div>
          </div>
          <div className="hero__portrait-wrap">
            {portraitOk ? (
              <img
                className="hero__portrait"
                src={hero.portraitSrc}
                alt={hero.portraitAlt}
                width={320}
                height={400}
                onError={() => setPortraitOk(false)}
              />
            ) : (
              <div className="hero__portrait-placeholder" aria-hidden="true">
                DE
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
