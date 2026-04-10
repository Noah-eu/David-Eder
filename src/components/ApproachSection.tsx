import { siteData } from '../content/siteData'

export function ApproachSection() {
  const { approach } = siteData

  return (
    <section className="section" id={approach.id} aria-labelledby="approach-title">
      <div className="section__inner">
        <h2 className="section__title" id="approach-title">
          {approach.title}
        </h2>
        <p className="section__intro">{approach.intro}</p>
        <ul className="approach-principles">
          {approach.principles.map((text, index) => (
            <li key={index}>{text}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
