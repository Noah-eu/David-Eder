import { siteData } from '../content/siteData'

export function AboutSection() {
  const { about } = siteData

  return (
    <section className="section" id={about.id} aria-labelledby="about-title">
      <div className="section__inner">
        <h2 className="section__title" id="about-title">
          {about.title}
        </h2>
        {about.paragraphs.map((p, i) => (
          <p key={i} className="section__intro" style={{ maxWidth: '42rem' }}>
            {p}
          </p>
        ))}
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
