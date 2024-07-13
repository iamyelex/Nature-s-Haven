import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { MdOutlineArrowBack, MdOutlineFavoriteBorder } from "react-icons/md";

import onions from "../images/onions.png";
import Spinner from "../components/Spinner";

const baseUrl = process.env.REACT_APP_BASE_URL;
const organizationId = process.env.REACT_APP_ORGANIZATION_ID;
const apiKey = process.env.REACT_APP_API_KEY;
const appId = process.env.REACT_APP_APP_ID;

export default function Product() {
  const { productId } = useParams();
  const navigate = useNavigate();

  console.log(productId);

  const { data, isLoading } = useQuery({
    queryFn: async function () {
      const { data } = await axios.get(
        `${baseUrl}products/${productId}?organization_id=${organizationId}&Appid=${appId}&Apikey=${apiKey}`
      );
      console.log(data);
      return data;
    },
  });
  return (
    <section className="px-6 lg:px-32 font-inter space-y-2 md:space-y-5">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="flex justify-end">
            <button
              className="hidden md:flex items-center space-x-2 border border-[#8B898940] border-opacity-25 py-1 px-2 rounded-lg"
              onClick={() => navigate(-1)}
            >
              <MdOutlineArrowBack className="" />
              <span className="text-base font-semibold">Continue shopping</span>
            </button>

            <button className="md:hidden" onClick={() => navigate(-1)}>
              <MdOutlineArrowBack size={20} />
            </button>
          </div>

          <div className="flex flex-col md:flex-row md:gap-20 space-y-2">
            <img
              src={`${baseUrl}images/${data.photos[0].url}?${organizationId}`}
              alt={data.name}
              className="w-full"
            />

            <div className="pt-2 space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold">{data.name}</p>
                <MdOutlineFavoriteBorder color="orange" className="text-2xl" />
              </div>
              <p className="text-lg font-semibold">N{data.current_price}</p>
              <button className="text-white text-lg w-full py-2 bg-other px-1 rounded-md md:rounded-md">
                Add to cart
              </button>
              <p>
                Description Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Ipsam sed voluptate, ipsa numquam inventore, omnis
                voluptatem rerum iusto vero, odio hic rem quos exercitationem
                aut voluptatum ut perferendis? Reprehenderit, temporibus!
              </p>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
