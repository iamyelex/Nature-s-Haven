import { MdOutlineFavoriteBorder } from "react-icons/md";

export default function OurProductCard({ label, price, image }) {
  return (
    <div className="rounded-lg md:rounded-xl space-y-1 shadow-md shadow-shadowColor pb-2">
      <img
        src={image}
        alt={label}
        className="w-[94px] h-[92px] md:w-[235px] md:h-[232px]"
      />
      <div className="flex items-center justify-between px-1 md:px-4">
        <p className="text-[7px] md:text-base">{label}</p>
        <MdOutlineFavoriteBorder color="orange" size="10px" />
      </div>
      <div className="flex items-center justify-between px-1 md:px-4">
        <span className="text-[7px] md:text-base font-semibold">N{price}</span>
        <button className="text-white text-[6px] md:text-[9px] bg-other px-1 rounded-md md:rounded-md">
          Add to cart
        </button>
      </div>
    </div>
  );
}
