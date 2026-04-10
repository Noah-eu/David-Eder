import { siteData } from '../content/siteData'

export function PackagesSection() {
  const { packages } = siteData

  return (
    <section className="section section--alt" id={packages.id} aria-labelledby="packages-title">
      <div className="section__inner">
        <h2 className="section__title" id="packages-title">
          {packages.title}
        </h2>
        <p className="section__intro">{packages.intro}</p>
        <div className="cards-grid cards-grid--3">
          {packages.items.map((pkg) => (
            <article key={pkg.title} className="card package-card">
              <h3>{pkg.title}</h3>
              <p>{pkg.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
