import { siteData } from '../content/siteData'

export function AudienceSection() {
  const { audience } = siteData

  return (
    <section className="section section--alt" id={audience.id} aria-labelledby="audience-title">
      <div className="section__inner">
        <h2 className="section__title" id="audience-title">
          {audience.title}
        </h2>
        <ul className="audience-chips" aria-label="Typy provozů">
          {audience.chips.map((label) => (
            <li key={label} className="audience-chips__item">
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
