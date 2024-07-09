// import { lazy } from "react";

// const CTA = lazy(() => import("../components/CTA"));
// const Category = lazy(() => import("../components/Category"));
// const OurProduct = lazy(() => import("../components/OurProduct"));

import CTA from "../components/CTA";
import Category from "../components/Category";
import OurProduct from "../components/OurProduct";

export default function Home() {
  return (
    <>
      <CTA />

      <Category />

      <OurProduct />
    </>
  );
}
