import { MdOutlineArrowBack } from "react-icons/md";

import masterCard from "../images/logos_mastercard.png";

export default function Payment() {
  return (
    <section className="px-6">
      <div className="flex justify-between">
        <h3 className="text-xl font-semibold">Payment Details</h3>
        <button className="">
          <MdOutlineArrowBack size={20} />
        </button>
      </div>

      <div className="">
        <div className="space-y-3">
          <p className="text-[15px] font-semibold pt-3">Card number</p>
          <div className="relative flex items-center">
            <input
              type="text"
              name=""
              id=""
              placeholder="XXXX XXXX XXXX XXXX"
              className="text-xs py-[6px] w-[310px] pl-2 border outline-none"
            />
            <img src={masterCard} alt="" className="absolute right-2" />
          </div>

          <div className="flex space-x-12">
            <div className="">
              <p className="text-[15px] font-semibold">Expiration</p>
              <input
                type="text"
                name=""
                id=""
                className="border w-[97px] outline-none mt-3"
              />
            </div>

            <div className="">
              <p className="text-[15px] font-semibold">CVC</p>
              <input
                type="text"
                name=""
                id=""
                className="border w-[97px] outline-none mt-3"
              />
            </div>
          </div>
        </div>

        <div className="mt-12">
          <button className="text-[15px] text-white font-semibold bg-secondary w-full py-1 rounded-lg">
            Confirm Payment
          </button>
        </div>
      </div>
    </section>
  );
}
