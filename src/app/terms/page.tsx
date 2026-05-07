import type { Metadata } from "next";
import { LegalLayout, LegalLink, LegalList, LegalSection } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service — Rock Solid Contractors",
  description:
    "Terms governing the use of azrocksolid.com, the estimate request form, the chat widget, and SMS messaging from Rock Solid Contractors.",
};

const EFFECTIVE_DATE = "May 7, 2026";

export default function TermsPage() {
  return (
    <LegalLayout
      eyebrow="Terms of Service"
      effectiveDate={EFFECTIVE_DATE}
      title={
        <>
          Terms of <em className="fv-italic italic text-iron">Service.</em>
        </>
      }
    >
      <LegalSection title="Agreement">
        <p>
          These Terms of Service (&ldquo;Terms&rdquo;) govern your use of
          azrocksolid.com (the &ldquo;Site&rdquo;), the estimate request
          form, the on-site chat widget, and any text messages, emails, or
          calls between you and Rock Solid Contractors (&ldquo;Rock Solid,&rdquo;
          &ldquo;we,&rdquo; or &ldquo;us&rdquo;). By using the Site or
          contacting us through any of these channels, you agree to these
          Terms.
        </p>
      </LegalSection>

      <LegalSection title="Our services">
        <p>
          Rock Solid is a licensed Arizona general contractor. We provide
          remodeling and outdoor living services across southern Arizona,
          including Tucson, Phoenix, and the surrounding communities.
          Services include kitchens, bathrooms, flooring, whole-home
          renovations, pergolas, outdoor kitchens, stonework, and related
          general contracting.
        </p>
      </LegalSection>

      <LegalSection title="Estimates are not contracts">
        <p>
          Submitting the estimate form, chatting with us, or speaking with
          us by phone does not create a binding contract for construction
          work. Pricing, scope, materials, and timeline are finalized only
          in a separate written project agreement signed by both parties.
          Estimates given before a site visit are preliminary and may
          change based on inspection, permitting, and material
          availability.
        </p>
      </LegalSection>

      <LegalSection title="Use of the site">
        <p>
          You agree to use the Site only for lawful purposes and not to
          attempt to interfere with its operation, copy or redistribute
          its content without permission, or submit false or misleading
          information through forms or chat.
        </p>
      </LegalSection>

      <LegalSection title="SMS / text message terms">
        <p>
          When you provide a phone number through our website, our chat
          widget, or by texting our published number, you consent to
          receive text messages from Rock Solid related to your project,
          scheduling, estimates, and follow-ups.
        </p>
        <LegalList>
          <li>
            <strong>Message frequency</strong> varies based on your
            conversation with us; we do not send recurring marketing
            blasts.
          </li>
          <li>
            <strong>Message and data rates</strong> may apply, depending
            on your mobile carrier and plan.
          </li>
          <li>
            Reply <strong>STOP</strong> at any time to opt out of automated
            text messages.
          </li>
          <li>
            Reply <strong>HELP</strong> for support, or email{" "}
            <LegalLink href="mailto:contact@azrocksolid.com">
              contact@azrocksolid.com
            </LegalLink>
            .
          </li>
          <li>
            Mobile carriers are not liable for delayed or undelivered
            messages.
          </li>
          <li>
            We do not share phone numbers or SMS opt-in consent data with
            third parties or affiliates for marketing purposes.
          </li>
        </LegalList>
        <p>
          Full details about how we handle phone-number and consent data
          are in our <LegalLink href="/privacy">Privacy Policy</LegalLink>.
        </p>
      </LegalSection>

      <LegalSection title="Photos and uploads">
        <p>
          When you upload photos or video through the estimate form, you
          grant us a limited license to use those files for the sole
          purpose of preparing your estimate and performing the work, if
          you hire us. We will not publish your photos without your
          separate written permission.
        </p>
      </LegalSection>

      <LegalSection title="Disclaimers">
        <p>
          The Site and any preliminary estimates are provided &ldquo;as
          is&rdquo; without warranties of any kind. We do not guarantee
          that the Site will be available without interruption or free of
          errors. Once a written project agreement is signed, the
          warranties in that agreement govern the work performed.
        </p>
      </LegalSection>

      <LegalSection title="Limitation of liability">
        <p>
          To the fullest extent permitted by law, Rock Solid&apos;s
          aggregate liability arising from your use of the Site or any
          pre-contract communications is limited to one hundred US dollars
          (USD 100). Liability for the construction work itself is
          governed by the signed project agreement and applicable Arizona
          law.
        </p>
      </LegalSection>

      <LegalSection title="Governing law">
        <p>
          These Terms are governed by the laws of the State of Arizona,
          without regard to conflict-of-laws rules. Any dispute that is
          not resolved informally shall be brought in the state or federal
          courts located in Pima County, Arizona.
        </p>
      </LegalSection>

      <LegalSection title="Changes to these terms">
        <p>
          We may update these Terms from time to time. The effective date
          at the top of this page reflects the most recent update.
          Continued use of the Site after a change means you accept the
          updated Terms.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Rock Solid Contractors
          <br />
          3808 E 32nd St
          <br />
          Tucson, AZ 85713
          <br />
          <LegalLink href="mailto:contact@azrocksolid.com">
            contact@azrocksolid.com
          </LegalLink>
          <br />
          <LegalLink href="tel:+15209108898">(520) 910-8898</LegalLink>
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
