import type { MetaFunction, LoaderFunction, LinksFunction } from "remix";
import { useLoaderData, json, Link } from "remix";
import styles from "../styles/index.css";

import { AmjCreations, AmjCreationsLong } from "../../public/svg";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const meta: MetaFunction = () => {
  return {
    title: "Custom Quilts & Sewing in Fort St John",
    description:
      "Your one-stop shop for all things custom when it comes to quilting and custom sewing. Proudly serving Fort St John and the greater Peace Region.",
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  return (
    <div className="index-wrapper">
      <div className="amj-logo-wrapper">
        <AmjCreations />
      </div>
      <div className="amj-logo-fs-wrapper">
        <AmjCreationsLong />
      </div>

      <a className="amj-call-us" href="tel:2507939248">
        Call Us
      </a>

      <a className="amj-email-us" href="mailto:amj-creations@pm.me">
        Send Us A Message
      </a>

      <h1 className="amj-page-title">
        Custom Quilts and Sewing In Fort St John
      </h1>

      <h2 className="amj-coming-soon">Site coming soon!</h2>

      <p className="amj-coming-soon-desc">
        We've got one more quilt to build and then we'll get our site built. We
        promise. Just one more..
      </p>
    </div>
  );
}
