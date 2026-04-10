import { siteData } from '../content/siteData'

export function AboutSection() {
  const { about } = siteData

  return (
    <section className="section section--alt" id={about.id} aria-labelledby="about-title">
      <div className="section__inner">
        <h2 className="section__title" id="about-title">
          {about.title}
        </h2>
        <div className="about__text">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="section__intro">
              {p}
            </p>
          ))}
        </div>
        <div className="about__proof">
          <h3>Z praxe</h3>
          <ul>
            {about.proofPoints.map((pt) => (
              <li key={pt}>{pt}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
