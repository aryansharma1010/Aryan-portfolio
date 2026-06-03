export default function AgraRally() {
  return (
    <section id="featured" className="featured">
      <div className="wrap">
        <div className="reveal">
          <span className="ft-eyebrow">
            <span className="star">★</span> Featured Project · Official Media Partner
          </span>
          <h2 className="ft-title">Agra Adventure Rally 2026</h2>
          <p className="ft-sub">
            A U.P. Tourism initiative · Premium 3 day Car &amp; Bike Rally · 20 to 22 Feb 2026 ·
            Agra → Chambal Badlands → Jhansi
          </p>
        </div>
        <p className="ft-lead reveal">
          I led the entire project as the <b>sole official media partner</b> of the rally, owning
          all advertising, PR, website management and a Pan India influencer roster. The result: a
          Government of U.P. backed motorsport event that went{' '}
          <b>house full in just one month</b> of marketing.
        </p>

        <div className="ft-stats reveal">
          <div className="ft-stat">
            <div className="n">
              ~1<em>mo</em>
            </div>
            <div className="l">To sell the rally house full</div>
          </div>
          <div className="ft-stat">
            <div className="n">
              2 Cr<em>+</em>
            </div>
            <div className="l">Views, Pan India</div>
          </div>
          <div className="ft-stat">
            <div className="n">
              3.9M<em>+</em>
            </div>
            <div className="l">Instagram views · 95.9% from ads</div>
          </div>
          <div className="ft-stat">
            <div className="n">
              U.P.<em>Govt.</em>
            </div>
            <div className="l">Officially backed event</div>
          </div>
        </div>

        <div className="ft-gallery reveal">
          <figure className="ft-hero-shot">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              loading="lazy"
              src="/images/agra-hero-shot.webp"
              alt="Agra Adventure Rally 2026 official website"
            />
            <figcaption>The official rally website · design &amp; management</figcaption>
          </figure>
          <div className="ft-row3">
            <figure>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                loading="lazy"
                src="/images/agra-media-award.webp"
                alt="Team with the official media partner award"
              />
              <figcaption>Sole official media partner · on the ground</figcaption>
            </figure>
            <figure>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                loading="lazy"
                src="/images/agra-influencer-campaign.webp"
                alt="Pan India influencer campaign creatives"
              />
              <figcaption>Pan India influencer campaign</figcaption>
            </figure>
            <figure>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                loading="lazy"
                src="/images/agra-analytics.webp"
                alt="Instagram reach analytics"
              />
              <figcaption>3.9M+ views · 95.9% paid driven</figcaption>
            </figure>
          </div>
        </div>

        <div className="ft-result reveal">
          <figure className="ft-result-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              loading="lazy"
              decoding="async"
              src="/images/agra-trophy-race.webp"
              alt="Me with my 3rd place Novice trophy at the Agra Adventure Rally 2026"
            />
          </figure>
          <div className="ft-result-body">
            <span className="rs-eyebrow">
              <span className="star">★</span> I raced it too
            </span>
            <h3 className="rs-title">3rd Place · Novice</h3>
            <p className="rs-text">
              I didn&apos;t only run the marketing for this rally. I drove it too, finishing{' '}
              <b>3rd in the Novice category</b> at the Agra Adventure Rally 2026.
            </p>
          </div>
        </div>

        <div className="ft-foot reveal">
          <div className="ft-owned">
            <span className="ft-owned-label">Owned end to end</span>
            <div className="ft-chips">
              <span className="ft-chip">Advertising</span>
              <span className="ft-chip">PR</span>
              <span className="ft-chip">Website</span>
              <span className="ft-chip">Influencers · Pan India</span>
              <span className="ft-chip">Social &amp; Content</span>
              <span className="ft-chip">Performance Ads</span>
            </div>
          </div>
          <div className="ft-links">
            <a
              className="btn accent"
              href="https://www.mscagra.com/"
              target="_blank"
              rel="noopener"
            >
              Visit mscagra.com ↗
            </a>
            <a
              className="btn ft-ghost"
              href="https://www.instagram.com/agraadventurerally2026/"
              target="_blank"
              rel="noopener"
            >
              Rally on Instagram ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
