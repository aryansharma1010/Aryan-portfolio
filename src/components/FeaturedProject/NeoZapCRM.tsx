'use client';
import { useEffect, useRef } from 'react';

export default function NeoZapCRM() {
  const rootRef = useRef<HTMLElement>(null);

  // Self-contained scroll reveal for the [data-reveal] elements in this section.
  // Mirrors the standalone design: staggered fade-in, disabled under reduced motion.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const items = root.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window) || !items.length) return;
    root.classList.add('crm-js');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-inview');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section ref={rootRef} className="crm-feature" id="crm" aria-labelledby="crm-title">
      <div className="crm-feature__inner">
        {/* header */}
        <p className="crm-eyebrow">
          <span className="crm-star">★</span> Featured Project · CRM &amp; Lifecycle
        </p>
        <h2 className="crm-title" id="crm-title">
          NeoZAP <em>Retention&nbsp;Engine</em>
        </h2>
        <p className="crm-lede">
          A fintech wallet app. I built the lifecycle CRM that turns drop-offs into transactions —
          and first transactions into habits.
        </p>
        <p className="crm-body">
          At <strong>Neofinity</strong> I owned growth and lifecycle for NeoZAP across{' '}
          <strong>email, WhatsApp, push and SMS</strong>. I mapped the exact points where users
          abandoned — wallet funding, the OTP screen — and built a{' '}
          <strong>3-stage drop-off recovery flow</strong> for a base of{' '}
          <strong>50K+ segmented users</strong>, instrumented end to end in{' '}
          <strong>CleverTap and Mixpanel</strong>. Every message was timed, personalised and A/B
          tested against one question: why did they leave, and what brings them back?
        </p>

        {/* the funnel: signature element */}
        <div className="crm-flow-block">
          <p className="crm-sub-eyebrow">The journey, end to end</p>
          <ol className="crm-flow">
            <li className="crm-stage" data-reveal>
              <span className="crm-stage__num">01</span>
              <h3 className="crm-stage__title">Website Visit</h3>
              <p className="crm-stage__desc">
                A user lands but leaves before completing a transaction.
              </p>
              <ul className="crm-chips">
                <li>Entry point</li>
              </ul>
            </li>
            <li className="crm-stage" data-reveal>
              <span className="crm-stage__num">02</span>
              <h3 className="crm-stage__title">Drop-off Detected</h3>
              <p className="crm-stage__desc">
                They&apos;re bucketed into a “Website Drop-off” segment the moment they exit.
              </p>
              <ul className="crm-chips">
                <li>Auto-segmented</li>
              </ul>
            </li>
            <li className="crm-stage" data-reveal>
              <span className="crm-stage__num">03</span>
              <h3 className="crm-stage__title">3-Day Win-back</h3>
              <p className="crm-stage__desc">A timed cross-channel sequence brings them back.</p>
              <ul className="crm-chips">
                <li>Day 1 · Email</li>
                <li>Day 2 · WhatsApp</li>
                <li>Day 3 · Push</li>
              </ul>
            </li>
            <li className="crm-stage" data-reveal>
              <span className="crm-stage__num">04</span>
              <h3 className="crm-stage__title">Activate</h3>
              <p className="crm-stage__desc">
                Show them how to use NeoZAP, then reward the first action.
              </p>
              <ul className="crm-chips">
                <li>Use-case nudges</li>
                <li>Instant rewards</li>
              </ul>
            </li>
            <li className="crm-stage" data-reveal>
              <span className="crm-stage__num">05</span>
              <h3 className="crm-stage__title">Convert &amp; Delight</h3>
              <p className="crm-stage__desc">
                Transaction done — then referrals and rewards keep them in.
              </p>
              <ul className="crm-chips">
                <li>Referrals</li>
                <li>Spin-the-wheel</li>
              </ul>
            </li>
          </ol>
        </div>

        {/* metric tiles */}
        <div className="crm-impact">
          <p className="crm-sub-eyebrow">The impact</p>
          <div className="crm-metrics">
            <div className="crm-metric" data-reveal>
              <span className="crm-metric__value">
                <span className="crm-metric__sign">↓</span>22<span className="crm-metric__unit">%</span>
              </span>
              <span className="crm-metric__label">Drop-offs, after the recovery flow</span>
            </div>
            <div className="crm-metric" data-reveal>
              <span className="crm-metric__value">
                35<span className="crm-metric__unit">%</span>
              </span>
              <span className="crm-metric__label">Disengaged users won back · first 5 days</span>
            </div>
            <div className="crm-metric" data-reveal>
              <span className="crm-metric__value">
                <span className="crm-metric__sign">+</span>16<span className="crm-metric__unit">%</span>
              </span>
              <span className="crm-metric__label">Wallet top-ups</span>
            </div>
            <div className="crm-metric" data-reveal>
              <span className="crm-metric__value">
                <span className="crm-metric__sign">+</span>23<span className="crm-metric__unit">%</span>
              </span>
              <span className="crm-metric__label">Reward-based purchases</span>
            </div>
          </div>
        </div>

        {/* pull quote */}
        <blockquote className="crm-quote">
          <p>
            It&apos;s not about bringing the user back — it&apos;s about understanding why they left,
            and solving it with precision.
          </p>
        </blockquote>

        {/* proof / screenshots (real product dashboards) */}
        <div className="crm-proof">
          <p className="crm-sub-eyebrow">Proof, from the tools</p>
          <div className="crm-figures">
            <figure className="crm-figure" data-reveal>
              <div className="crm-figure__media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  loading="lazy"
                  decoding="async"
                  src="/images/neozap-clevertap.webp"
                  alt="CleverTap stats for the Add_money_Drop win-back push - 3,097 sent, 7.88% clicks, 46.56% CTR, 15.47% of users converted"
                />
              </div>
              <figcaption>
                The win-back push in CleverTap - 46.56% CTR, and 15.47% of targeted users converted.
              </figcaption>
            </figure>

            <figure className="crm-figure" data-reveal>
              <div className="crm-figure__media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  loading="lazy"
                  decoding="async"
                  src="/images/neozap-mixpanel.webp"
                  alt="Mixpanel Trend and Properties for the rewards/paymentsuccess event - 1,140 events from 530 users, charted daily from April to June 2025"
                />
              </div>
              <figcaption>
                Reward conversions tracked in Mixpanel - 1,140 events from 530 users.
              </figcaption>
            </figure>
          </div>
        </div>

        {/* beyond the funnel callout */}
        <div className="crm-callout">
          <div>
            <p className="crm-callout__tag">
              <span className="crm-star">★</span> Beyond the funnel
            </p>
            <h3 className="crm-callout__title">ORM → CRM</h3>
          </div>
          <p className="crm-callout__body">
            I fed real user complaints back into the engine. Spotting recurring confusion around how
            cashback was credited, I turned it into an onboarding nudge instead of a support reply —{' '}
            <strong>support tickets dropped 41%</strong> and <strong>reward usage rose 17%</strong>.
            Every complaint is a conversion opportunity.
          </p>
        </div>

        {/* owned end to end */}
        <div className="crm-owned">
          <p className="crm-owned__label">Owned end to end</p>
          <ul className="crm-pills">
            <li>Segmentation</li>
            <li>Lifecycle Journeys</li>
            <li>Email / WhatsApp / Push / SMS</li>
            <li>A/B Testing</li>
            <li>Activation &amp; Win-back</li>
            <li>CleverTap</li>
            <li>Mixpanel</li>
          </ul>
        </div>

        {/* links */}
        <div className="crm-links">
          <a
            className="crm-link"
            href="https://www.behance.net/gallery/227664911/CRM-Portfolio"
            target="_blank"
            rel="noopener"
          >
            View the full case study on Behance <span className="crm-link__arrow">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
