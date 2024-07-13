import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import OurProductCard from "./OurProductCard";
import Spinner from "./Spinner";

const baseUrl = process.env.REACT_APP_BASE_URL;
const organizationId = process.env.REACT_APP_ORGANIZATION_ID;
const apiKey = process.env.REACT_APP_API_KEY;
const appId = process.env.REACT_APP_APP_ID;

export default function OurProduct() {
  const { data, isLoading } = useQuery({
    queryFn: async function () {
      const { data } = await axios.get(
        `${baseUrl}products?organization_id=${organizationId}&Appid=${appId}&Apikey=${apiKey}`
      );
      console.log(data.items);
      return data;
    },
  });

  return (
    <section
      id="ourProducts"
      className="px-6 lg:px-32 mt-10 space-y-4 md:space-y-8 font-inter"
    >
      <h3 className="text-xl md:text-2xl text-center font-semibold">
        Our Products
      </h3>

      <div className="grid grid-cols-3 lg:grid-cols-5 gap-3 md:gap-6">
        {isLoading ? (
          <Spinner />
        ) : (
          data.items.map((product) => (
            <OurProductCard
              key={product.unique_id}
              label={product.name}
              image={product.photos[0].url}
              price={product.current_price[0].NGN[0]}
              id={product.id}
            />
          ))
        )}
      </div>
    </section>
  );
}
