import { Fragment } from "react";
import { Button, Card, Image } from "components";
import { useState } from "react";

export const OurServices = () => {
  const [show, setShow] = useState(true);
  const handleShow = () => {
    setShow((prev) => !prev);
  };

  const classes = {
    servicesContainer:
      "flex-col sm:flex-row gap-10 sm:gap-2 md:gap-3  2xl:gap-4  py-5 items-center  justify-center  mx-auto box-border",
    headerContainer: "flex justify-between items-center",
    serviceDiv: "flex flex-col gap-2 items-center",
    title: "font-bold sm:text-sm lg:text-lg  whitespace-nowrap ",
    description:
      "text-gray-dark text-[13px] sm:text-xs 2xl:text-sm  whitespace-nowrap",
    imgCurve:
      "translate-y-[10px] md:translate-y-[-23px] hidden lg:inline-block",
    hideButton: "bg-transparent !text-blue-light hover:bg-[#F3F6FF]",
    headerTitle: "font-semibold text-gray-dark",
  };

  return (
    <Card>
      <div className={classes.headerContainer}>
        <h3 className={classes.headerTitle}>Our Services</h3>
        <Button
          buttonSize="small"
          className={classes.hideButton}
          onClick={handleShow}
        >
          {show ? "Hide" : "Show"}
        </Button>
      </div>
      <div
        className={`${classes.servicesContainer} ${show ? "flex " : "hidden"}`}
      >
        {/* first service */}
        <div className={classes.serviceDiv}>
          <Image
            alt="create-invoice"
            src="/assets/img/create-invoice.png"
            width={132}
            height={118}
            // className=" h-0 md:h-100"
            priority
          />

          <h3 className={`sm:!mt-[20px] ${classes.title}`}>Create Invoice</h3>
          <h5 className={classes.description}>Share it via email or link</h5>
        </div>

        {/* arrow */}
        <Image
          alt="curved-arrow"
          src="/assets/img/curved-arrow.svg"
          width={60}
          height={60}
          className={classes.imgCurve}
        />

        {/* sec service */}
        <div className={classes.serviceDiv}>
          <Image
            alt="client-pays"
            src="/assets/img/client-pay.png"
            width={118}
            height={118}
            // className=" h-0 md:h-100"
            priority
          />

          <h3 className={classes.title}>Client Pays It</h3>
          <h5 className={classes.description}>
            (Paypal - Credit Card - Bank Transfer)
          </h5>
        </div>

        {/* arrow */}
        <Image
          alt="curved-arrow"
          src="/assets/img/curved-arrow.svg"
          width={60}
          height={60}
          className={classes.imgCurve}
        />

        {/* third service */}
        <div className={classes.serviceDiv}>
          <Image
            alt="get-paid"
            src="/assets/img/get-paid.png"
            width={118}
            height={118}
            // className=" h-0 md:h-100"
            priority
          />

          <h3 className={classes.title}>Get Paid</h3>
          <h5 className={classes.description}>(Cash-Bank)</h5>
        </div>
      </div>
    </Card>
  );
};
export default OurServices;
