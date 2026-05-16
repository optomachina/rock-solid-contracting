import type { Metadata } from "next";
import {
  LegalList,
  LegalPage,
  LegalParagraph,
  LegalSection,
  legalLinkClassName,
} from "@/components/LegalContent";

export const metadata: Metadata = {
  title: "Privacy Policy — Rock Solid Contractors",
  description:
    "How Rock Solid Contractors collects, uses, and protects information from visitors and customers, including SMS messaging consent and opt-out.",
};

const EFFECTIVE_DATE = "May 7, 2026";

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy Policy"
      title="Privacy Policy"
      effectiveDate={EFFECTIVE_DATE}
    >
      <LegalSection title="Who we are">
        <LegalParagraph>
          Rock Solid Contractors (&ldquo;Rock Solid,&rdquo; &ldquo;we,&rdquo;
          &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is a licensed general
          contractor based at 3808 E 32nd St, Tucson, AZ 85713. This policy
          explains how we handle information collected through our website at
          azrocksolid.com, our estimate form, our chat widget, phone calls,
          and text messages.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="Information we collect">
        <LegalParagraph>
          We collect information you give us directly when you:
        </LegalParagraph>
        <LegalList>
          <li>
            Submit the estimate request form: full name, phone number, email
            address, project address or city, service requested, project
            description, preferred appointment date and time, and any photos
            or video you choose to upload.
          </li>
          <li>
            Send us a message through the chat widget on our site: your name,
            phone number, email, and the contents of your message.
          </li>
          <li>
            Call or text our published phone number, or email us directly:
            caller ID, message contents, and any details you share about your
            project.
          </li>
        </LegalList>
        <LegalParagraph>
          We may also receive limited automatic information from standard
          server logs and analytics tools (browser type, pages visited,
          approximate location based on IP). We do not use this information
          to build advertising profiles.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="How we use your information">
        <LegalList>
          <li>To respond to estimate requests and schedule on-site visits.</li>
          <li>To communicate about your project by phone, SMS, or email.</li>
          <li>To send appointment reminders and project updates.</li>
          <li>To improve the website and our service.</li>
          <li>To comply with legal obligations.</li>
        </LegalList>
      </LegalSection>

      <LegalSection title="SMS / text message terms">
        <LegalParagraph>
          By providing your phone number through our website, our chat
          widget, or by texting us directly, you consent to receive text
          messages from Rock Solid Contractors related to your project,
          estimate, scheduling, and service follow-ups.
        </LegalParagraph>
        <LegalList>
          <li>
            <strong>Message frequency:</strong> message frequency varies
            based on your conversation with us. We do not send recurring
            marketing blasts.
          </li>
          <li>
            <strong>Message and data rates:</strong> standard message and
            data rates may apply, depending on your mobile carrier and plan.
          </li>
          <li>
            <strong>Opt out:</strong> you can opt out at any time by replying{" "}
            <strong>STOP</strong> to any text message from us. After you
            reply STOP, we will stop sending automated text messages to your
            number.
          </li>
          <li>
            <strong>Help:</strong> reply <strong>HELP</strong> to any text
            message for assistance, or contact us at{" "}
            <a href="mailto:contact@azrocksolid.com" className={legalLinkClassName}>
              contact@azrocksolid.com
            </a>
            {"."}
          </li>
          <li>
            <strong>Carriers:</strong> mobile carriers are not liable for
            delayed or undelivered messages.
          </li>
        </LegalList>
        <LegalParagraph>
          <strong>
            We do not share phone numbers or SMS opt-in consent data with
            third parties or affiliates for marketing purposes.
          </strong>{" "}
          Your phone number and your consent to receive messages from us are
          used only to communicate with you about your project.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="How we share information">
        <LegalParagraph>
          We do not sell your personal information. We share information only with:
        </LegalParagraph>
        <LegalList>
          <li>
            Service providers we use to operate the business — for example,
            our email delivery provider (Resend), our chat widget provider
            (LeadConnector / GoHighLevel), and our web host (Vercel) — and
            only to the extent needed to provide the service.
          </li>
          <li>
            Subcontractors or trade partners assigned to your project,
            limited to the project details they need.
          </li>
          <li>
            Government or law enforcement when required by valid legal
            process.
          </li>
        </LegalList>
        <LegalParagraph>
          We do not buy or sell leads, and we do not engage in affiliate
          marketing arrangements that share your information with unrelated
          companies.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="Cookies and analytics">
        <LegalParagraph>
          Our site and our chat widget use a small number of cookies and
          similar technologies necessary for the chat to function and for
          basic analytics. You can disable cookies in your browser; some
          site features may not work without them.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="Data retention">
        <LegalParagraph>
          We retain estimate requests, project communications, and customer
          records as long as needed to operate the business and meet legal,
          tax, and accounting requirements. You can ask us to delete your
          information at any time using the contact details below; we will
          honor the request to the extent the law allows.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="Your choices">
        <LegalList>
          <li>You can opt out of SMS at any time by replying STOP.</li>
          <li>
            You can ask us to access, correct, or delete information we hold
            about you by emailing contact@azrocksolid.com.
          </li>
          <li>
            You can decline to provide information, but we may not be able
            to provide an estimate without the basics (name, phone or email,
            project location).
          </li>
        </LegalList>
      </LegalSection>

      <LegalSection title="Children">
        <LegalParagraph>
          Our services are not directed to children under 13. We do not
          knowingly collect personal information from children.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="Changes to this policy">
        <LegalParagraph>
          We may update this policy from time to time. The effective date at
          the top of this page reflects the most recent update. Material
          changes will be highlighted on the site.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="Contact">
        <LegalParagraph>
          Questions, requests, or privacy concerns? Reach us at:
        </LegalParagraph>
        <LegalParagraph>
          Rock Solid Contractors
          <br />
          3808 E 32nd St
          <br />
          Tucson, AZ 85713
          <br />
          <a href="mailto:contact@azrocksolid.com" className={legalLinkClassName}>
            contact@azrocksolid.com
          </a>
          <br />
          <a href="tel:+15205579161" className={legalLinkClassName}>
            (520) 557-9161
          </a>
        </LegalParagraph>
      </LegalSection>
    </LegalPage>
  );
}
