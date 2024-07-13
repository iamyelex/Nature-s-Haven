/* eslint-disable react/prop-types */
const CartRemoveWarning = ({ removeCart, cancelHandler }) => {
  return (
    <div className="absolute z-50 right-0 flex flex-col items-center justify-center space-y-2 text-lg text-center font-bold bg-orange-400 w-full h-32 opacity-95 rounded-lg">
      <p className="">Are you sure you want to remove it?</p>
      <div className="flex items-center justify-between space-x-8">
        <button
          className="w-24 py-1 bg-black uppercase rounded-lg"
          onClick={removeCart}
        >
          okay
        </button>
        <button
          className="w-24 py-1 bg-black uppercase rounded-lg"
          onClick={cancelHandler}
        >
          cancel
        </button>
      </div>
    </div>
  );
};

export default CartRemoveWarning;
