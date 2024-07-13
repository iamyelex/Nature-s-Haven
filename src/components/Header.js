import { MdOutlineShoppingCart, MdSearch } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const headerList = ["home", "about us", "blog", "contact"];

export default function Header() {
  const { items } = useSelector((store) => store.cart);

  return (
    <>
      <header className="flex justify-between items-center pt-4 lg:pt-8 pb-5 px-6 lg:px-32 font-inter">
        <Link to="/">
          <h1 className="text-other1 text-sm font-semibold">Nature’sHaven.</h1>
        </Link>

        <ul className="hidden md:flex md:space-x-3 lg:space-x-10">
          {headerList.map((list) => (
            <NavLink
              key={list}
              className="lg:font-semibold uppercase hover:text-gray-200 hover:cursor-pointer hover:underline"
            >
              {list}
            </NavLink>
          ))}
        </ul>

        <div className="hidden md:block relative">
          <input
            type="search"
            name=""
            id=""
            className="shadow-md rounded-md outline-none pl-5"
          />
          <MdSearch className="absolute top-1 left-1" />
        </div>

        <Link to="cart" className="relative">
          <MdOutlineShoppingCart
            size="25px"
            targetY={180}
            className="hidden md:block"
          />
          {items.length > 0 ? (
            <span className="absolute flex items-center justify-center top-0 right-[4px] text-xs text-white font-bold rounded-full w-4 h-4 bg-black">
              {items.length}
            </span>
          ) : null}
        </Link>

        <div className="md:hidden flex items-center space-x-4">
          <Link to="cart">
            <MdOutlineShoppingCart size="25px" targetY={180} />
          </Link>

          {/* HAMBURGER MENU  */}
          <RxHamburgerMenu />
        </div>
      </header>

      <div className="text-center md:hidden relative px-6 pb-6">
        <input
          type="search"
          name=""
          id=""
          className="shadow-md rounded-md outline-none pl-6 w-full"
        />
        <MdSearch className="absolute top-1 left-8" />
      </div>
    </>
  );
}
