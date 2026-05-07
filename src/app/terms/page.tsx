import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Terms of Service — Rock Solid Contractors",
  description:
    "Terms governing the use of azrocksolid.com, the estimate request form, the chat widget, and SMS messaging from Rock Solid Contractors.",
};

const EFFECTIVE_DATE = "May 7, 2026";

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        <article className="border-t border-[var(--on-paper-line)] bg-caliche py-24 text-[var(--on-paper-text)]">
          <div className="mx-auto max-w-[860px] px-4 md:px-8">
            <SectionLabel tone="paper" marker="§">Terms of Service</SectionLabel>
            <h1 className="fv-display mt-2 font-display text-[clamp(40px,5.2vw,76px)] font-bold leading-[1.04] text-[var(--on-paper-text)]">
              Terms of <em className="fv-italic italic text-iron">Service.</em>
            </h1>
            <p className="mt-4 font-mono text-[13px] uppercase tracking-[0.14em] text-[var(--on-paper-muted)]">
              Effective {EFFECTIVE_DATE}
            </p>

            <Section title="Agreement">
              <P>
                These Terms of Service (&ldquo;Terms&rdquo;) govern your use of
                azrocksolid.com (the &ldquo;Site&rdquo;), the estimate request
                form, the on-site chat widget, and any text messages,
                emails, or calls between you and Rock Solid Contractors
                (&ldquo;Rock Solid,&rdquo; &ldquo;we,&rdquo; or
                &ldquo;us&rdquo;). By using the Site or contacting us
                through any of these channels, you agree to these Terms.
              </P>
            </Section>

            <Section title="Our services">
              <P>
                Rock Solid is a licensed Arizona general contractor. We
                provide remodeling and outdoor living services across
                southern Arizona, including Tucson, Phoenix, and the
                surrounding communities. Services include kitchens,
                bathrooms, flooring, whole-home renovations, pergolas,
                outdoor kitchens, stonework, and related general
                contracting.
              </P>
            </Section>

            <Section title="Estimates are not contracts">
              <P>
                Submitting the estimate form, chatting with us, or speaking
                with us by phone does not create a binding contract for
                construction work. Pricing, scope, materials, and timeline
                are finalized only in a separate written project agreement
                signed by both parties. Estimates given before a site visit
                are preliminary and may change based on inspection,
                permitting, and material availability.
              </P>
            </Section>

            <Section title="Use of the site">
              <P>
                You agree to use the Site only for lawful purposes and not
                to attempt to interfere with its operation, copy or
                redistribute its content without permission, or submit false
                or misleading information through forms or chat.
              </P>
            </Section>

            <Section title="SMS / text message terms">
              <P>
                When you provide a phone number through our website, our
                chat widget, or by texting our published number, you consent
                to receive text messages from Rock Solid related to your
                project, scheduling, estimates, and follow-ups.
              </P>
              <List>
                <li>
                  <strong>Message frequency</strong> varies based on your
                  conversation with us; we do not send recurring marketing
                  blasts.
                </li>
                <li>
                  <strong>Message and data rates</strong> may apply,
                  depending on your mobile carrier and plan.
                </li>
                <li>
                  Reply <strong>STOP</strong> at any time to opt out of
                  automated text messages.
                </li>
                <li>
                  Reply <strong>HELP</strong> for support, or email{" "}
                  <a
                    href="mailto:contact@azrocksolid.com"
                    className="underline decoration-iron underline-offset-4 transition hover:text-iron"
                  >
                    contact@azrocksolid.com
                  </a>
                  .
                </li>
                <li>
                  Mobile carriers are not liable for delayed or undelivered
                  messages.
                </li>
                <li>
                  We do not share phone numbers or SMS opt-in consent data
                  with third parties or affiliates for marketing purposes.
                </li>
              </List>
              <P>
                Full details about how we handle phone-number and consent
                data are in our{" "}
                <a
                  href="/privacy"
                  className="underline decoration-iron underline-offset-4 transition hover:text-iron"
                >
                  Privacy Policy
                </a>
                .
              </P>
            </Section>

            <Section title="Photos and uploads">
              <P>
                When you upload photos or video through the estimate form,
                you grant us a limited license to use those files for the
                sole purpose of preparing your estimate and performing the
                work, if you hire us. We will not publish your photos
                without your separate written permission.
              </P>
            </Section>

            <Section title="Disclaimers">
              <P>
                The Site and any preliminary estimates are provided
                &ldquo;as is&rdquo; without warranties of any kind. We do
                not guarantee that the Site will be available without
                interruption or free of errors. Once a written project
                agreement is signed, the warranties in that agreement
                govern the work performed.
              </P>
            </Section>

            <Section title="Limitation of liability">
              <P>
                To the fullest extent permitted by law, Rock Solid&apos;s
                aggregate liability arising from your use of the Site or any
                pre-contract communications is limited to one hundred US
                dollars (USD 100). Liability for the construction work
                itself is governed by the signed project agreement and
                applicable Arizona law.
              </P>
            </Section>

            <Section title="Governing law">
              <P>
                These Terms are governed by the laws of the State of
                Arizona, without regard to conflict-of-laws rules. Any
                dispute that is not resolved informally shall be brought in
                the state or federal courts located in Pima County,
                Arizona.
              </P>
            </Section>

            <Section title="Changes to these terms">
              <P>
                We may update these Terms from time to time. The effective
                date at the top of this page reflects the most recent
                update. Continued use of the Site after a change means you
                accept the updated Terms.
              </P>
            </Section>

            <Section title="Contact">
              <P>
                Rock Solid Contractors
                <br />
                3808 E 32nd St
                <br />
                Tucson, AZ 85713
                <br />
                <a
                  href="mailto:contact@azrocksolid.com"
                  className="underline decoration-iron underline-offset-4 transition hover:text-iron"
                >
                  contact@azrocksolid.com
                </a>
                <br />
                <a
                  href="tel:+15209108898"
                  className="underline decoration-iron underline-offset-4 transition hover:text-iron"
                >
                  (520) 910-8898
                </a>
              </P>
            </Section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12 border-t border-[var(--on-paper-line)] pt-10">
      <h2 className="fv-display-sm font-display text-[28px] font-bold leading-[1.15] text-[var(--on-paper-text)] md:text-[34px]">
        {title}
      </h2>
      <div className="mt-5 space-y-5 text-[19px] leading-[1.65] text-[var(--on-paper-text)]">
        {children}
      </div>
    </section>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p>{children}</p>;
}

function List({ children }: { children: React.ReactNode }) {
  return (
    <ul className="ml-5 list-disc space-y-2 marker:text-iron">{children}</ul>
  );
}
