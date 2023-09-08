import React from "react";
import LowerCurve from "../components/LowerCurve";

const Policy = () => {
  return (
    <>
      <div className=" bg-gradient-to-br from-orange-200 to-orange-100 relative">
        <div className="max-w-5xl mx-auto">
          <h2 className="py-32 text-6xl font-extrabold italic">
            Privacy Policy
          </h2>
        </div>
        <LowerCurve />
      </div>
      <div className="bg-slate-50 ">
        <div className="max-w-6xl mx-auto pt-10 pb-16 flex flex-col gap-5">
          <p className="underline">Last updated: 13th August 2023</p>
          <p>
            Carthage Media, LLC operates www.carthagemedia.com (the "Site").
            This page informs you of our policies regarding the collection, use,
            and disclosure of Personal Information we receive from users of the
            Site.
          </p>
          <p>
            We use your Personal Information only for providing and improving
            the Site. By using the Site, you agree to the collection and use of
            information in accordance with this policy.
          </p>
          <h3 className="text-lg font-semibold">
            Information Collection And Use
          </h3>
          <p>
            While using our Site, we may ask you to provide us with certain
            personally identifiable information that can be used to contact or
            identify you. Personally identifiable information may include but is
            not limited to your name, email address, and phone number ("Personal
            Information").
          </p>
          <h3 className="text-lg font-semibold">Log Data</h3>
          <p>
            Like many site operators, we collect information that your browser
            sends whenever you visit our Site ("Log Data"). This Log Data may
            include information such as your computer's Internet Protocol ("IP")
            address, browser type, browser version, the pages of our Site that
            you visit, the time and date of your visit, the time spent on those
            pages, and other statistics.
          </p>
          <h3 className="text-lg font-semibold">Communications</h3>
          <p>
            We may use your Personal Information to contact you with
            newsletters, marketing, or promotional materials, and other
            information that pertains to our services.
          </p>
          <h3 className="text-lg font-semibold">Security</h3>
          <p>
            The security of your Personal Information is important to us, but
            remember that no method of transmission over the Internet or method
            of electronic storage is 100% secure. While we strive to use
            commercially acceptable means to protect your Personal Information,
            we cannot guarantee its absolute security.
          </p>
          <h3 className="text-lg font-semibold">
            Changes To This Privacy Policy
          </h3>
          <p>
            This Privacy Policy is effective as of 13th August 2023 and will
            remain in effect except with respect to any changes in its
            provisions in the future, which will be in effect immediately after
            being posted on this page.
          </p>
          <p>
            We reserve the right to update or change our Privacy Policy at any
            time, and you should check this Privacy Policy periodically. Your
            continued use of the Service after we post any modifications to the
            Privacy Policy on this page will constitute your acknowledgment of
            the modifications and your consent to abide and be bound by the
            modified Privacy Policy.
          </p>
          <p>
            If we make any material changes to this Privacy Policy, we will
            notify you either through the email address you have provided us or
            by placing a prominent notice on our website.
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

export default Policy;
