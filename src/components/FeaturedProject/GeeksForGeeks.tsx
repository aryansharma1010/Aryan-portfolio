export default function GeeksForGeeks() {
  return (
    <section id="geeksforgeeks" className="featured">
      <div className="wrap">
        <div className="reveal">
          <span className="ft-eyebrow">
            <span className="star">★</span> Featured Project · Brand &amp; Social
          </span>
          <h2 className="ft-title">GeeksforGeeks</h2>
          <p className="ft-sub">
            One of India&apos;s largest computer science learning platforms, used by millions of
            programmers. Two things from my time at GFG became part of the brand&apos;s identity —
            and both are still everywhere.
          </p>
        </div>
        <p className="ft-lead reveal">
          At <b>GeeksforGeeks</b> I did two things I&apos;m especially proud of: I gave the brand a{' '}
          <b>mascot</b> that became the face of GFG, and a <b>tagline</b> so catchy it turned into a
          trending hashtag across LinkedIn and Instagram.
        </p>

        <div className="gfg-duo reveal">
          <div className="gfg-card">
            <span className="gc-eyebrow">01 · The Mascot</span>
            <h3>The face of GFG</h3>
            <p>
              I brought the <b>GFG mascot</b> to life and pushed it into every corner of the
              brand&apos;s content. Today it&apos;s the first thing the community recognises —{' '}
              <b>every GFG meme</b> is fronted by it, from Snoozasana to Ctrl&#8209;Z&#8209;Asana.
            </p>
          </div>
          <div className="gfg-card">
            <span className="gc-eyebrow">02 · The Tagline</span>
            <h3>&ldquo;GFG Karlo Hojayega&rdquo;</h3>
            <p>
              I drove <b>&ldquo;GFG Karlo Hojayega&rdquo;</b> as the brand&apos;s main line — and we
              made it so famous that <b>#gfgkarlohojayega</b> trended on{' '}
              <b>LinkedIn and Instagram</b>, with tech creators across the ecosystem using it in
              their own content.
            </p>
          </div>
        </div>

        <div className="gfg-gallery reveal">
          <figure className="gfg-shot-wide">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              loading="lazy"
              decoding="async"
              src="/images/gfg-memes-wall.webp"
              alt="A wall of GeeksforGeeks memes, every one fronted by the GFG mascot"
            />
            <figcaption>The mascot, front and centre — in every single GFG meme</figcaption>
          </figure>
          <figure className="gfg-shot-tall">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              loading="lazy"
              decoding="async"
              style={{ objectPosition: 'center 72%' }}
              src="/images/gfg-hashtag-reel.webp"
              alt="A tech creator's Instagram reel using the #gfgkarlohojayega hashtag"
            />
            <figcaption>Tech creators riding #gfgkarlohojayega on Instagram</figcaption>
          </figure>
          <figure className="gfg-shot-tall">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              loading="lazy"
              decoding="async"
              style={{ objectPosition: 'center 18%' }}
              src="/images/gfg-tagline-video.webp"
              alt="GeeksforGeeks video page titled GFG Karlo, Ho Jaega"
            />
            <figcaption>&ldquo;GFG Karlo, Ho Jaega!!&rdquo; — the tagline, live on the platform</figcaption>
          </figure>
        </div>

        <div className="ft-foot reveal">
          <div className="ft-owned">
            <span className="ft-owned-label">Owned end to end</span>
            <div className="ft-chips">
              <span className="ft-chip">Brand Mascot</span>
              <span className="ft-chip">Meme Marketing</span>
              <span className="ft-chip">Viral Campaigns</span>
              <span className="ft-chip">Hashtag Strategy</span>
              <span className="ft-chip">Content Creation</span>
              <span className="ft-chip">Community Building</span>
            </div>
          </div>
          <div className="ft-links">
            <a
              className="btn accent"
              href="https://www.instagram.com/geeks_for_geeks/"
              target="_blank"
              rel="noopener"
            >
              GFG on Instagram ↗
            </a>
            <a
              className="btn ft-ghost"
              href="https://www.geeksforgeeks.org/"
              target="_blank"
              rel="noopener"
            >
              geeksforgeeks.org ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
