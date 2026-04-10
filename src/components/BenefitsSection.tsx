import { siteData } from '../content/siteData'

export function BenefitsSection() {
  const { benefits } = siteData

  return (
    <section className="section" id={benefits.id} aria-labelledby="benefits-title">
      <div className="section__inner">
        <h2 className="section__title" id="benefits-title">
          {benefits.title}
        </h2>
        <p className="section__intro">{benefits.intro}</p>
        <div className="benefits-grid" role="list">
          {benefits.items.map((item) => (
            <div key={item} className="benefit-card" role="listitem">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
