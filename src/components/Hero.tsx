import { useState } from 'react'
import { siteData } from '../content/siteData'

export function Hero() {
  const { hero, contact } = siteData
  const [portraitOk, setPortraitOk] = useState(true)
  const mailto = `mailto:${contact.email}?subject=${encodeURIComponent('Dotaz na spolupráci')}`

  return (
    <section className="section hero" id={hero.id} aria-labelledby="hero-heading">
      <div className="section__inner">
        <div className="hero__grid">
          <div className="hero__copy">
            <p className="hero__badge">{hero.badge}</p>
            <h1 id="hero-heading">{hero.headline}</h1>
            <p className="section__intro hero__sub">{hero.subheadline}</p>
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
            <div className="hero__portrait-glow" aria-hidden="true" />
            <div className="hero__portrait-stage">
              {portraitOk ? (
                <figure className="hero__portrait-frame">
                  <img
                    className="hero__portrait"
                    src={hero.portraitSrc}
                    alt={hero.portraitAlt}
                    width={960}
                    height={1280}
                    decoding="async"
                    onError={() => setPortraitOk(false)}
                  />
                </figure>
              ) : (
                <div className="hero__portrait-placeholder" aria-hidden="true">
                  DE
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
