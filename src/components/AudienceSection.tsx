import { siteData } from '../content/siteData'

export function AudienceSection() {
  const { audience } = siteData

  return (
    <section className="section section--alt" id={audience.id} aria-labelledby="audience-title">
      <div className="section__inner">
        <h2 className="section__title" id="audience-title">
          {audience.title}
        </h2>
        <p className="section__intro">{audience.intro}</p>
        <div className="audience-grid">
          {audience.items.map((item) => (
            <article key={item.title} className="card audience-card">
              <h3>{item.title}</h3>
              <p className="card__hint">{item.hint}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
