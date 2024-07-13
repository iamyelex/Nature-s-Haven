import { MdOutlineFavoriteBorder } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../cart/CartSlice";
// import { useNavigate } from "react-router-dom";

const baseUrl = process.env.REACT_APP_BASE_URL;
const organizationId = process.env.REACT_APP_ORGANIZATION_ID;

export default function OurProductCard({ label, price, image, id }) {
  const dispatch = useDispatch();

  // const navigate = useNavigate();
  // const handleProduct = function () {
  //   navigate(`/products/${id}`);
  // };
  return (
    <div className="flex flex-col justify-between rounded-lg md:rounded-xl space-y-1 shadow-md shadow-shadowColor pb-2">
      <Link to={`/products/${id}`}>
        <img
          src={`${baseUrl}images/${image}?organization_id=${organizationId}`}
          alt={label}
          className="w-[94px] h-[92px] md:w-[235px] md:h-[232px]"
        />
      </Link>
      <div className="flex items-center justify-between px-1 md:px-4">
        <p className="text-[7px] md:text-base w-3/4">{label}</p>
        <MdOutlineFavoriteBorder color="orange" className="md:text-2xl" />
      </div>
      <div className="flex justify-between px-1 md:px-4">
        <span className="text-[7px] md:text-base font-semibold">N{price}</span>
        <button
          className="text-white text-[6px] md:text-[9px] bg-other px-1 rounded-md md:rounded-md"
          onClick={() => dispatch(addToCart(price, label, id, image))}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
