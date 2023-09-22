import React from "react";
import LowerCurve from "../components/LowerCurve";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Carthage Media - Terms</title>
        <meta
          name="description"
          content="Carthage Media offers comprehensive digital marketing solutions to excavation contractors, including SEO, PPC, social media management, web design, and reputation management. Boost your business growth today."
        ></meta>
        <link rel="canonical" href="/terms" />
      </Helmet>
      <div className=" bg-gradient-to-br from-orange-200 to-orange-100 relative">
        <div className="max-w-5xl lg:mx-auto mx-10">
          <h2 className="py-32 text-6xl font-extrabold italic">
            Terms & Conditions
          </h2>
        </div>
        <LowerCurve />
      </div>
      <div className="bg-slate-50 ">
        <div className="max-w-6xl lg:mx-auto mx-5  pt-10 pb-16 flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <p>
              Please read these Terms and Conditions ("Terms", "Terms and
              Conditions") carefully before using{" "}
              <a
                className="underline text-orange-900"
                href="https://carthagemedia.com"
              >
                carthagemedia.com
              </a>{" "}
              (the "Site") operated by Carthage Media, LLC.
            </p>
            <p>
              Your access to and use of the Site is conditioned upon your
              acceptance of and compliance with these Terms. These Terms apply
              to all visitors, users, and others who wish to access or use the
              Site.
            </p>
            <p>
              By accessing or using the Site, you agree to be bound by these
              Terms. If you disagree with any part of the terms, then you do not
              have permission to access the Site.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="underline">Last updated: 21st August 2023</p>
          </div>

          <div className="flex flex-col gap-3">
            <p>
              By engaging the services of Carthage Media, the Client
              acknowledges and agrees to be bound by these Terms.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-bold">Services Provided</h2>
            <p>
              Carthage Media offers digital marketing services tailored to
              excavating companies, which may include but are not limited to:
            </p>
            <ul>
              <li className="list-disc">Search Engine Optimization (SEO)</li>
              <li className="list-disc">Social Media Marketing</li>
              <li className="list-disc">Pay-Per-Click (PPC) Advertising</li>
              <li className="list-disc">Content Marketing</li>
              <li className="list-disc">Email Marketing</li>
              <li className="list-disc">Website Development and Design</li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-bold">Payment</h2>
            <h3 className="text-lg font-semibold">Pricing:</h3>
            <p>
              The pricing for Carthage Media's services will be outlined in the
              proposal or agreement provided to the Client.
            </p>

            <h3 className="text-lg font-semibold">
              Invoicing and Payment Terms:
            </h3>
            <p>
              Invoices will be issued to the Client according to the agreed-upon
              schedule. Payments are due within 7 days from the date of the
              invoice. If the Client anticipates a delay in payment, it is
              expected that they promptly inform Carthage Media to discuss and
              agree upon an alternative payment arrangement.
            </p>

            <h3 className="text-lg font-semibold">
              Late Payments and Communication:
            </h3>
            <p>
              Carthage Media understands that unforeseen circumstances may lead
              to delayed payments. If the Client is unable to make a payment on
              time, they must contact Carthage Media in advance to discuss the
              situation and agree upon a revised payment schedule. Carthage
              Media encourages open communication to find mutually acceptable
              solutions in such cases. Carthage Media does not charge any
              interest for late payments.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-bold">Refunds and Cancellations</h2>
            <h3 className="text-lg font-semibold">Refunds:</h3>
            <p>
              Carthage Media does not offer refunds for services provided. All
              payments are non-refundable.
            </p>

            <h3 className="text-lg font-semibold">Cancellation of Services:</h3>
            <p>
              Clients may cancel services by providing written notice to
              Carthage Media. Any prepaid but unused services will not be
              refunded.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-bold">Confidentiality</h2>
            <p>
              Carthage Media will treat all information provided by the Client
              as confidential and will not disclose it to third parties, except
              as required by law.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-bold">Data Collection and Use</h2>
            <p>
              When you submit information through forms on our Site, you
              acknowledge that we may collect and use that information to
              contact you, provide services, and improve our offerings. We are
              committed to safeguarding your privacy and using your data
              responsibly. For more details, please refer to our{" "}
              <Link className="underline text-orange-900" to="/policy">
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-bold">Links to Other Websites</h2>
            <h3 className="text-lg font-semibold">Third-Party Links:</h3>
            <p>
              Carthage Media's website or communications may contain links to
              third-party websites. These links are provided for convenience and
              informational purposes only. Carthage Media does not endorse,
              control, or make any representations about these third-party
              sites.
            </p>

            <h3 className="text-lg font-semibold">
              Responsibility for Linked Content:
            </h3>
            <p>
              Carthage Media is not responsible for the content, privacy
              policies, or practices of any third-party websites. It is the
              responsibility of the Client to review and understand the terms
              and conditions and privacy policies of these linked websites.
            </p>

            <h3 className="text-lg font-semibold">No Endorsement:</h3>
            <p>
              Inclusion of any linked website does not imply endorsement by
              Carthage Media. Carthage Media disclaims any liability for any
              information, materials, products, or services posted or offered on
              these third-party websites.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-bold">Intellectual Property</h2>
            <h3 className="text-lg font-semibold">Client's Content:</h3>
            <p>
              The Client retains ownership of all content provided to Carthage
              Media for use in marketing efforts.
            </p>

            <h3 className="text-lg font-semibold">Agency's Work:</h3>
            <p>
              Carthage Media retains ownership of any original works, designs,
              reports, or other materials created during the provision of
              services unless otherwise specified in writing.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-bold">Copyright Concerns</h2>
            <p>
              We respect the intellectual property rights of others and strive
              to use only authorized media (images/text) on our Site. If you
              believe that any content on our Site infringes upon your
              copyright, please contact us at{" "}
              <a
                className="underline text-orange-900"
                href="mailto:mouna@carthagemedia.com"
              >
                support@carthagemedia.com
              </a>
              . We take such concerns seriously and will promptly investigate
              and address any valid claims. If we find that any content has been
              used without proper authorization, we will take immediate steps to
              remove or rectify the situation.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-bold">Limitation of Liability</h2>
            <p>
              Carthage Media shall not be liable for any direct, indirect,
              incidental, special, or consequential damages arising from the use
              or inability to use Carthage Media's services.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-bold">Governing Law</h2>
            <p>
              These Terms and any disputes arising under or in connection with
              these Terms shall be governed by the laws of the United States,
              and the state of Wyoming, without regard to its conflicts of law
              principles.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-bold">Modification of Terms</h2>
            <p>
              Carthage Media reserves the right to modify these Terms at any
              time. Changes will become effective immediately upon posting on
              Carthage Media's website. It is the Client's responsibility to
              review these Terms periodically for updates.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-bold">Contact Us</h2>
            <p>
              For any inquiries, concerns, or questions regarding these Terms
              and Conditions, please contact us via email at{" "}
              <a
                className="underline text-orange-900"
                href="mailto:mouna@carthagemedia.com"
              >
                support@carthagemedia.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;
