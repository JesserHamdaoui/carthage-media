import React from "react";
import LowerCurve from "../components/LowerCurve";
import { Helmet } from "react-helmet-async";

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
          <p className="underline">Last updated: 13th August 2023</p>
          <p>
            Please read these Terms and Conditions ("Terms", "Terms and
            Conditions") carefully before using carthagemedia.com (the "Site")
            operated by Carthage Media, LLC.
          </p>
          <p>
            Your access to and use of the Site is conditioned upon your
            acceptance of and compliance with these Terms. These Terms apply to
            all visitors, users, and others who wish to access or use the Site.
          </p>
          <p>
            By accessing or using the Site, you agree to be bound by these
            Terms. If you disagree with any part of the terms, then you do not
            have permission to access the Site.
          </p>

          <h3 className="text-lg font-semibold">Content</h3>
          <p>
            Our Site allows you to post, link, store, share, and otherwise make
            available certain information, text, graphics, videos, or other
            material ("Content"). You are responsible for the Content that you
            submit through forms or otherwise provide to us, including its
            legality, reliability, and appropriateness.
          </p>
          <p>
            By submitting Content to us, you grant us the right to use, modify,
            publicly perform, publicly display, reproduce, and distribute such
            Content on and through the Site. You retain any and all of your
            rights to any Content you submit and you are responsible for
            protecting those rights.
          </p>
          <h3 className="text-lg font-semibold">Links To Other Web Sites</h3>
          <p>
            Our Site may contain links to third-party websites or services that
            are not owned or controlled by Carthage Media.
          </p>
          <p>
            Carthage Media has no control over and assumes no responsibility for
            the content, privacy policies, or practices of any third-party
            websites or services. We do not warrant the offerings of any of
            these entities/individuals or their websites.
          </p>
          <p>
            You acknowledge and agree that Carthage Media shall not be
            responsible or liable, directly or indirectly, for any damage or
            loss caused or alleged to be caused by or in connection with the use
            of or reliance on any such content, goods, or services available on
            or through any such third-party websites or services.
          </p>
          <h3 className="text-lg font-semibold">Data Collection and Use</h3>
          <p>
            When you submit information through forms on our Site, you
            acknowledge that we may collect and use that information to contact
            you, provide services, and improve our offerings. We are committed
            to safeguarding your privacy and using your data responsibly. For
            more details, please refer to our Privacy Policy.
          </p>
          <h3 className="text-lg font-semibold">Changes</h3>
          <p>
            We reserve the right, at our sole discretion, to modify or replace
            these Terms at any time. If a revision is material, we will provide
            at least 30 days notice prior to any new terms taking effect. What
            constitutes a material change will be determined at our sole
            discretion.
          </p>
          <p>
            By continuing to access or use our Site after those revisions become
            effective, you agree to be bound by the revised terms. If you do not
            agree to the new terms, please stop using the Site.
          </p>
          <h3 className="text-lg font-semibold">Copyright Concerns</h3>
          <p>
            We respect the intellectual property rights of others and strive to
            use only authorized media (images/text) on our Site. If you believe
            that any content on our Site infringes upon your copyright, please
            contact us at support@carthagemedia.com. We take such concerns
            seriously and will promptly investigate and address any valid
            claims. If we find that any content has been used without proper
            authorization, we will take immediate steps to remove or rectify the
            situation.
          </p>

          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p>
            If you have any questions about these Terms or wish to report a
            copyright concern, please contact us at{" "}
            <a href="mailto:mouna@carthagemedia.com?subject=Hello%20Subject&body=Hello%20Body">
              support@carthagemedia.com
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default Terms;
