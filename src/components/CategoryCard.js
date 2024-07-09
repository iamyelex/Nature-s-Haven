const colors = ["#FDE7BC", "#F4FFD2", "#FFA29E", "#F8C79E"];
let pickedColor;

export default function CategoryCard({ image, label }) {
  switch (label) {
    case "fruits":
      pickedColor = colors[0];
      break;
    case "vegetables":
      pickedColor = colors[1];
      break;
    case "drinks":
      pickedColor = colors[2];
      break;
    case "spices":
      pickedColor = colors[3];
      break;
    default:
      pickedColor = colors[0];
      break;
  }

  return (
    <div
      style={{ backgroundColor: pickedColor }}
      className="flex flex-col items-center pt-3 md:pt-6 space-y-1 md:space-y-3 lg:space-y-10 w-[80px] h-[138px] md:w-[160px] md:h-[300px] lg:w-[250px] lg:h-[350px] rounded-xl shadow-md shadow-shadowColor"
    >
      <img src={image} alt="" className="h-[70%] md:w-[80%] md:h-[212px]" />
      <p className="text-xs md:text-lg font-semibold capitalize">{label}</p>
    </div>
  );
}
