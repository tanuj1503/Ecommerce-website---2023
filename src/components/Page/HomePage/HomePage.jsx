import React from "react";
import ProductSection1 from "../../HomeProductSection/ProductSection1";
import { MensKurtas } from "../../HomeProductSection/MensKurtas";
import { MenJeans } from "../../HomeProductSection/MenJeans";
import { MenShirts } from "../../HomeProductSection/MenShirts";
import { WomenDress } from "../../HomeProductSection/WomenDress";
import { WomenJeans } from "../../HomeProductSection/WomenJeans";
import { WomenTops } from "../../HomeProductSection/WomenTops";
import { LenghaCholi } from "../../HomeProductSection/LenghaCholi";
import Footer from "../Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <ProductSection1 data={MensKurtas} sectionName={"Men Kurta's"} />
      <ProductSection1 data={MenJeans} sectionName={"Men Jeans"} />
      <ProductSection1 data={MenShirts} sectionName={"Men Shirts"} />
      <ProductSection1 data={WomenDress} sectionName={"Women Dress"} />
      <ProductSection1 data={WomenJeans} sectionName={"Women Jeans"} />
      <ProductSection1 data={WomenTops} sectionName={"Women Tops"} />
      <ProductSection1
        data={LenghaCholi}
        sectionName={"Women Lengha Choli's"}
      />
      <Footer />
    </div>
  );
};

export default HomePage;
