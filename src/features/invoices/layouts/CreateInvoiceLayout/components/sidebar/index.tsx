import React from "react";
import { useRouter } from "next/router";
import { MainMenuData } from "data";
import { Link } from "components";
import {
  ArrowRightOnRectangleIconMini,
  Cog8ToothIconMini,
} from "lib/@heroicons";

export const Sidebar = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  const classes = {
    asideTitle:
      "text-lg text-gray-dark font-medium  pl-2 md:pl-5 lg:pl-10 pb-2 block mt-8 md:mt-16",
    ulContainer: "flex flex-col  gap-1",
    link: "flex  flex-row items-center py-2 pl-2 md:pl-5 lg:pl-10   text-base font-medium text-gray-dark hover:text-blue-light transition hover:bg-[#EAEEF2]    rounded-r-lg before:content-['|'] before:mr-1  ",
    linkName:
      " text-sm sm:text-base   mt-1  font-normal md:font-semibold",
  };
  return (
    <>
      <aside
        id="default-sidebar"
        aria-label="Sidebar"
        className="h-full"
      >
        <span className={classes.asideTitle}>Create</span>
        
          <ul className={classes.ulContainer}>
             
              <Link
                className={`${classes.link} ${
                  '/invoices/create-invoice' === currentRoute
                    ? "bg-gray-light text-blue-light"
                    : "hover:text-blue-light"
                }`}
                href="/invoices/create-invoice"
                 
              >
      
                <span className={classes.linkName}>Invoice</span>
              </Link>
              <Link
                className={`${classes.link} ${
                    "/invoices/create-link" === currentRoute
                    ? "bg-gray-light text-blue-light"
                    : "hover:text-blue-light"
                }`}
                href="/invoices/create-link"
               
              >
              
                <span className={classes.linkName}>Link</span>
              </Link>
          
          </ul>
    
      </aside>
    </>
  );
};

export default Sidebar;
