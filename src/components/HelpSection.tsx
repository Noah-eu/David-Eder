import { siteData } from '../content/siteData'

export function HelpSection() {
  const { help } = siteData

  return (
    <section className="section help-section" id={help.id} aria-labelledby="help-title">
      <div className="section__inner">
        <h2 className="section__title" id="help-title">
          {help.title}
        </h2>
        <p className="section__intro help-section__intro">{help.intro}</p>
        <div className="cards-grid cards-grid--2 cards-grid--3">
          {help.cards.map((card) => (
            <article key={card.title} className="card card--service">
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
