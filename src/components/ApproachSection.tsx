import { siteData } from '../content/siteData'

export function ApproachSection() {
  const { approach } = siteData

  return (
    <section
      className="section benefits-band"
      id={approach.id}
      aria-labelledby="approach-title"
    >
      <div className="section__inner">
        <h2 className="section__title" id="approach-title">
          {approach.title}
        </h2>
        <p className="section__intro">{approach.intro}</p>
        <div className="approach-grid">
          {approach.no.map((item) => (
            <div key={item.label} className="approach-no">
              <strong>{item.label}</strong>
              <p>{item.text}</p>
            </div>
          ))}
          <div className="approach-yes">
            <strong>{approach.yes.label}</strong>
            <p>{approach.yes.text}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
