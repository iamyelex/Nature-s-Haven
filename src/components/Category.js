import CategoryCard from "./CategoryCard";

import fruit from "../images/orange.png";
import vegetable from "../images/vegetables.png";
import drink from "../images/drinks.png";
import spice from "../images/spices.png";

const categoryList = [
  { label: "fruits", image: fruit },
  { label: "vegetables", image: vegetable },
  { label: "drinks", image: drink },
  { label: "spices", image: spice },
];

export default function Category() {
  return (
    <section className="px-6 lg:px-32 pt-4 md:pt-8 space-y-3 md:space-y-4 font-inter">
      <div className="flex items-center justify-between ">
        <h3 className="md:text-2xl font-semibold">Category</h3>
        <button className="md:hidden text-xs">see all</button>
      </div>

      <div className="hidden md:flex justify-between">
        {categoryList.map((list) => (
          <CategoryCard
            key={list.label}
            label={list.label}
            image={list.image}
          />
        ))}

        {/* {categoryList.length(3)} */}

        {/* <CategoryCard label="fruits" image={fruit} /> */}
        {/* <CategoryCard label="vegetables" image={orange} />
        <CategoryCard label="drinks" image={orange} />
        <CategoryCard label="spices" image={orange} /> */}
      </div>

      <div className="md:hidden flex justify-between">
        {categoryList.slice(0, 3).map((list) => (
          <CategoryCard
            key={list.label}
            label={list.label}
            image={list.image}
          />
        ))}
      </div>
    </section>
  );
}
