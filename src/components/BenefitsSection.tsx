import { siteData } from '../content/siteData'

export function BenefitsSection() {
  const { benefits } = siteData

  return (
    <section className="section benefits-band" id={benefits.id} aria-labelledby="benefits-title">
      <div className="section__inner">
        <h2 className="section__title" id="benefits-title">
          {benefits.title}
        </h2>
        <p className="section__intro">{benefits.intro}</p>
        <ul className="benefits-list">
          {benefits.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
