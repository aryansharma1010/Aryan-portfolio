const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="5.5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
  </svg>
);

const TrophyIcon = () => (
  <svg className="pk-trophy" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 4h10v4a5 5 0 0 1-5 5 5 5 0 0 1-5-5V4Z" />
    <path d="M7 6H4.5a2 2 0 0 0 0 4H7M17 6h2.5a2 2 0 0 1 0 4H17" />
    <path d="M12 13v3.5M9 20h6M9.5 20l.5-3.5h4l.5 3.5" />
  </svg>
);

export default function GoldenAces() {
  return (
    <section id="golden-aces" className="featured">
      <div className="wrap">
        <div className="reveal">
          <span className="ft-eyebrow">
            <span className="star">★</span> Featured Role · Team Lead
          </span>
          <h2 className="ft-title">Golden Aces</h2>
          <p className="ft-sub">
            India&apos;s first offline cardroom chain · 100% legal Poker &amp; Rummy, 24×7, across
            Bengaluru, Agra &amp; Ghaziabad. I lead social and content across every Golden Aces
            page.
          </p>
        </div>
        <p className="ft-lead reveal">
          As <b>Team Lead for Golden Aces</b>, I own the brand&apos;s complete Instagram presence:
          every account, every strategy and all content planning, from the first idea to what goes
          live. These three pages sit at the heart of it.
        </p>

        <div className="ga-pages reveal">
          <a className="ga-page" href="https://www.instagram.com/goldenaces/" target="_blank" rel="noopener">
            <span className="ig"><InstagramIcon /></span>
            <span className="pg-name">Golden Aces</span>
            <span className="pg-handle">@goldenaces · Flagship</span>
            <span className="pg-foll">51.6K followers</span>
            <span className="pg-go">View page ↗</span>
          </a>
          <a className="ga-page" href="https://www.instagram.com/goldenaces.agra/" target="_blank" rel="noopener">
            <span className="ig"><InstagramIcon /></span>
            <span className="pg-name">Golden Aces Agra</span>
            <span className="pg-handle">@goldenaces.agra</span>
            <span className="pg-foll">4,784 followers</span>
            <span className="pg-go">View page ↗</span>
          </a>
          <a className="ga-page" href="https://www.instagram.com/goldenaces.koramangala/" target="_blank" rel="noopener">
            <span className="ig"><InstagramIcon /></span>
            <span className="pg-name">Golden Aces Bengaluru</span>
            <span className="pg-handle">@goldenaces.koramangala</span>
            <span className="pg-foll">3,955 followers</span>
            <span className="pg-go">View page ↗</span>
          </a>
        </div>

        <div className="ga-poker reveal">
          <TrophyIcon />
          <span className="pk-eyebrow">♠ Tournament Marketing · GAPL 2026</span>
          <p className="pk-text">
            Beyond the always on social, I ran <b>complete marketing management</b> for the{' '}
            <b>Golden Aces Poker League, Agra Edition 2026</b>, a{' '}
            <b>₹30,00,000 guaranteed</b> prize pool series that ran house full with{' '}
            <b>150+ walk ins</b> across the event. As a poker enthusiast, I didn&apos;t just market
            it. I played in it too. I also took charge of the league&apos;s{' '}
            <b>25&nbsp;kg+ trophy</b>, which became the hero of every piece of tournament creative.
          </p>
        </div>

        <div className="ga-gallery reveal">
          <figure className="ga-shot-tall">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img loading="lazy" decoding="async" src="/images/ga-trophy.webp" alt="GAPL 2026 trophy · 25 kg+ · hero of every creative" />
            <figcaption>GAPL 2026 trophy · 25&nbsp;kg+ · hero of every creative</figcaption>
          </figure>
          <figure className="ga-shot-tall">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img loading="lazy" decoding="async" src="/images/ga-poker-league.webp" alt="Poker League · Agra Edition 2026 · ₹30L guaranteed" />
            <figcaption>Poker League · Agra Edition 2026 · ₹30L guaranteed</figcaption>
          </figure>
          <figure className="ga-shot-wide">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img loading="lazy" decoding="async" src="/images/ga-on-felt.webp" alt="On the felt · playing the league I marketed" />
            <figcaption>On the felt · playing the league I marketed</figcaption>
          </figure>
          <figure className="ga-shot-wide">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img loading="lazy" decoding="async" src="/images/ga-house-full.webp" alt="House full tables across the league · 150+ walk ins" />
            <figcaption>House full tables across the league · 150+ walk ins</figcaption>
          </figure>
        </div>

        <div className="ft-stats reveal">
          <div className="ft-stat">
            <div className="n">60K<em>+</em></div>
            <div className="l">Followers across the pages I run</div>
          </div>
          <div className="ft-stat">
            <div className="n">₹30<em>L</em></div>
            <div className="l">GAPL 2026 guaranteed prize pool</div>
          </div>
          <div className="ft-stat">
            <div className="n">150<em>+</em></div>
            <div className="l">Walk ins across the league</div>
          </div>
          <div className="ft-stat">
            <div className="n">25<em>kg+</em></div>
            <div className="l">League trophy, hero of every creative</div>
          </div>
        </div>

        <div className="ft-foot reveal">
          <div className="ft-owned">
            <span className="ft-owned-label">Owned end to end</span>
            <div className="ft-chips">
              <span className="ft-chip">Instagram Strategy</span>
              <span className="ft-chip">Content Planning</span>
              <span className="ft-chip">Account Management</span>
              <span className="ft-chip">Campaign Direction</span>
              <span className="ft-chip">Tournament Marketing</span>
              <span className="ft-chip">Creative Direction</span>
            </div>
          </div>
          <div className="ft-links">
            <a className="btn accent" href="https://www.instagram.com/goldenaces/" target="_blank" rel="noopener">
              Golden Aces on Instagram ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
