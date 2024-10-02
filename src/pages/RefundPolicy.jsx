import React from "react";

const RefundPolicy = () => {
  return (
    <div className=" bg-white h-fit">
      <div>
        <div className="flex flex-col items-center justify-center gap-6">
          <h1 className="text-2xl font-bold mt-5">Refund Policy</h1>
          <p className="text-xl font-semibold px-10 md:px-24">
            Thank you for choosing SmartDocs365. Please read this policy
            carefully to understand our practices regarding refunds.
          </p>
        </div>
        <div className="px-10 md:px-32 flex flex-col gap-4 my-5">
          <div>
            <h1 className="font-bold"> 1. Refund Eligibility</h1>
          </div>
          <p>
            1.1. Service-Specific Terms: Refund eligibility may vary depending
            on the specific service or product you have purchased.
          </p>
          <p>
            1.2. Timeframe: Refund requests must be submitted within 2 days from
            the date of purchase of our services.
          </p>
          <div>
            <h1 className="font-bold"> 2. Non-Refundable Services</h1>
          </div>
          <p>
            2.1. Customized Services: Services that involve customization or
            personalization may be non-refundable once the customization <br />
            process has begun.
          </p>
          <div>
            <h1 className="font-bold"> 3. Refund Process</h1>
          </div>
          <p>
            3.1. Submission of Refund Request: To request a refund, please
            contact our customer support team at support@smartdocs365.com.{" "}
            <br />
            Clearly state the reason for your refund request and provide
            relevant details.
          </p>
          <p>
            3.2. Review and Approval: Each refund request will be reviewed on a
            case-by-case basis. We reserve the right to approve or deny <br />
            refund requests based on the specific circumstances. If our services
            are used fully or partially then no Refund will be issued.
          </p>
          <p>
            3.3. Refund Method: Approved refunds will be processed using the
            original payment method. Please allow 30 days for the refund to be{" "}
            <br /> reflected in your account.
          </p>
          <div>
            <h1 className="font-bold"> 4. Exceptions</h1>
          </div>
          <p>
            4.1. Force Majeure: We are not liable for refunds in cases of force
            majeure events, including but not limited to natural disasters,{" "}
            <br /> acts of war, or other unforeseeable circumstances beyond our
            control.
          </p>
          <div>
            <h1 className="font-bold"> 5. Contact Us</h1>
          </div>
          <p>
            If you have any questions, concerns, or requests regarding our
            Refund Policy, please contact us at{" "}
            <span className="font-bold">support@SmartDocs365.com</span> By{" "}
            <br />
            using our services, you agree to abide by the terms outlined in this
            Refund Policy. Thank you for choosing SmartDocs365!
          </p>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
