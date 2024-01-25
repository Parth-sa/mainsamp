import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import rtl from "../../rtl";
import { useRouter } from "next/router";

export const Services = () => {
  const [location, setLocation] = useState("");
  useEffect(() => {
    setLocation(window.location.pathname);
  }, []);
  return (
    <Fragment>
      <li>
        <a
          href={`${rtl()}web-app-development`}
          className={`${
            location.includes("web-app-development") ? "active-class" : ""
          }`}
        >
          Web App Development
        </a>
      </li>
      <li>
        <a
          href={`${rtl()}mobile-app-development`}
          className={`${
            location.includes("mobile-app-development") ? "active-class" : ""
          }`}
        >
          Mobile App Development
        </a>
      </li>
      <li>
        <a
          href={`${rtl()}blockchain-nft`}
          className={`${
            location.includes("blockchain-nft") ? "active-class" : ""
          }`}
        >
          Blockchain/NFT
        </a>
      </li>
      <li>
        <a
          href={`${rtl()}game-development`}
          className={`${
            location.includes("game-development") ? "active-class" : ""
          }`}
        >
          Game Development
        </a>
      </li>
      <li>
        <a
          href={`${rtl()}hire-dedicated-developers`}
          className={`${
            location.includes("hire-dedicated-developers") ? "active-class" : ""
          }`}
        >
          Hire Dedicated Developers
        </a>
      </li>
    </Fragment>
  );
};

export const Pages = () => (
  <Fragment>
    <li>
      <Link href={`${rtl()}about`}>About Us</Link>
    </li>
    <li>
      <Link href={`${rtl()}pricing`}>Pricing</Link>
    </li>
    <li>
      <Link href={`${rtl()}faq`}>Faq</Link>
    </li>
    <li>
      <Link href={`${rtl()}team`}>Our Team</Link>
    </li>
    <li>
      <Link href={`${rtl()}team-details`}>Team Details</Link>
    </li>
    <li>
      <Link href={`${rtl()}shop`}>Shop</Link>
    </li>
    <li>
      <Link href={`${rtl()}shop-details`}>Shop Details</Link>
    </li>
  </Fragment>
);
export const Contact = () => {
  const router = useRouter();
  return (
    <Fragment>
      <a
        href={`${rtl()}contact`}
        className={`${
          router.pathname.includes("contact") ? "active-link-nav" : ""
        }`}
      >
        Contact
      </a>
    </Fragment>
  );
};
