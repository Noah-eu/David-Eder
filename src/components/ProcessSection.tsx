import { siteData } from '../content/siteData'

export function ProcessSection() {
  const { process } = siteData

  return (
    <section
      className="section"
      style={{ background: 'var(--color-surface)' }}
      id={process.id}
      aria-labelledby="process-title"
    >
      <div className="section__inner">
        <h2 className="section__title" id="process-title">
          {process.title}
        </h2>
        <div className="steps">
          {process.steps.map((step) => (
            <article key={step.title} className="step">
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
