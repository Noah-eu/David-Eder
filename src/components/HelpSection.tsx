import { siteData } from '../content/siteData'

export function HelpSection() {
  const { help } = siteData

  return (
    <section className="section help-section" id={help.id} aria-labelledby="help-title">
      <div className="section__inner">
        <h2 className="section__title" id="help-title">
          {help.title}
        </h2>
        <ul className="help-chips" aria-label="Oblasti spolupráce">
          {help.chips.map((label) => (
            <li key={label} className="help-chips__item">
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
