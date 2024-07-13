/* eslint-disable react/prop-types */
const CartRemoveWarning = ({ removeCart, cancelHandler }) => {
  return (
    <div className="z-50 flex flex-col items-center justify-center space-y-2 text-lg text-center font-bold bg-primary md:px-8 h-32 opacity-95 rounded-lg">
      <p className="">Are you sure you want to remove it?</p>
      <div className="flex items-center justify-between space-x-4">
        <button
          className="w-24 py-1 bg-secondary uppercase rounded-lg"
          onClick={removeCart}
        >
          okay
        </button>
        <button
          className="w-24 py-1 bg-other uppercase rounded-lg"
          onClick={cancelHandler}
        >
          cancel
        </button>
      </div>
    </div>
  );
};

export default CartRemoveWarning;
