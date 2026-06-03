export default function About() {
  return (
    <div className="wrap">
      <section id="about">
        <div className="sec-head reveal">
          <span className="sec-idx">01</span>
          <h2 className="sec-title">
            About<em>, the short version</em>
          </h2>
        </div>
        <div className="about-grid">
          <div className="about-lead reveal">
            <p>
              I&apos;m a full stack marketer and storyteller with six years across social strategy,
              product communication, and brand building. I&apos;ve led content and growth for tech
              startups, creators, and consumer brands, managing Instagram and YouTube for founders
              and CEOs, building CRM strategies that boost retention, and scripting viral content
              with industry leaders.
            </p>
            <p>
              I grew up in a tier 2 city where every Piyush Pandey ad (the Hutch pug, the Vodafone
              Zoozoos) felt like a tiny masterpiece. That&apos;s where the obsession with
              storytelling started.
            </p>
            <blockquote className="pullquote">
              People don&apos;t just buy goods and services. They invest in relationships, stories,
              and moments of magic.
            </blockquote>
            <p>
              I work at the intersection of content, communication, and product, always aiming to
              make things that resonate, convert, and grow.
            </p>
            <p className="signoff">
              &ldquo;Don&apos;t be salad, be the best damn broccoli you could ever be.&rdquo;
            </p>
          </div>
          <div className="about-side reveal">
            <dl>
              <div className="fact">
                <dt>Based in</dt>
                <dd>Gurugram, IN</dd>
              </div>
              <div className="fact">
                <dt>Experience</dt>
                <dd>6 years</dd>
              </div>
              <div className="fact">
                <dt>Currently</dt>
                <dd>Marketing Lead, Revamp</dd>
              </div>
              <div className="fact">
                <dt>Education</dt>
                <dd>MBA · NMIMS</dd>
              </div>
              <div className="fact">
                <dt>Focus</dt>
                <dd>Performance · CRM</dd>
              </div>
              <div className="fact">
                <dt>Open to</dt>
                <dd>Full time · Freelance</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="about-reels reveal">
          <div className="ar-head">
            <span className="ar-kicker">On camera &amp; on the ground</span>
            <p className="ar-text">
              Not camera shy in the slightest. I host, present and front campaigns. I{' '}
              <b>hosted the Agra Adventure Rally</b>, and create alongside top brands like{' '}
              <b>PlayAll Sports</b> and influencers across India.
            </p>
          </div>
          <div className="ar-grid">
            <figure>
              <a
                className="ar-link"
                href="https://www.instagram.com/reel/DVJRIZWEkUt/"
                target="_blank"
                rel="noopener"
                aria-label="Watch the Agra Adventure Rally reel on Instagram"
              />
              <span className="ar-play" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                loading="lazy"
                src="/images/reel-agra-rally.webp"
                alt="Hosting the Agra Adventure Rally on camera"
              />
              <figcaption>
                Hosting the Agra Adventure Rally
                <span className="ar-watch">&#9654; Watch reel</span>
              </figcaption>
            </figure>
            <figure>
              <span className="ar-play" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                loading="lazy"
                src="/images/reel-playall-sports.webp"
                alt="On camera with PlayAll Sports at the stadium"
              />
              <figcaption>On camera · PlayAll Sports</figcaption>
            </figure>
            <figure>
              <span className="ar-play" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                loading="lazy"
                src="/images/reel-brand-collab.webp"
                alt="Brand collaboration creator content"
              />
              <figcaption>Brand collab · creator content</figcaption>
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
}
