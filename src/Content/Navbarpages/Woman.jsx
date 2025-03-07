import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const categories = [
  {
    title: "Shoes",
    items: ["Running shoes", "Walking shoes", "Casual shoes", "Sports shoes", "Sneakers"],
  },
  {
    title: "Sandal Floaters",
    items: ["Casual", "Sports", "Clogs"],
  },
  {
    title: "Slippers",
    items: ["Flip Flops", "Slides"],
  },
  {
    title: "Featured Collection",
    items: ["Retro Kicks", "Air Capsule", "Nitrofly", "Nitro Boots", "Ball tech", "OGs", "Motomania"],
  },
  {
    title: "Accessories",
    items: ["Socks"],
  },
];

export default function ResponsiveMenu() {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  return (
    <div className="px-4 md:px-8">
     <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
  {categories.map((category, index) => (
    <div key={index} className="flex flex-col">
      {/* Small Screens: Collapsible with Chevron Icons */}
      <div
        className="md:hidden flex items-center justify-between text-black text-sm cursor-pointer hover:text-[#C16452] mb-2"
        onClick={() => toggleCategory(index)}
      >
        <h1>{category.title}</h1>
        {openCategory === index ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </div>

      {/* Small Screens: Show items only when clicked */}
      {openCategory === index && (
        <div className="md:hidden flex flex-col gap-1">
          {category.items.map((item, i) => (
            <div key={i} className="text-gray-500 text-sm hover:text-[#C16452]">
              {item}
            </div>
          ))}
        </div>
      )}

      {/* Medium & Large Screens: Always Show Items */}
      <div className="hidden md:flex flex-col gap-1">
        <h1 className="text-black text-sm mb-2">{category.title}</h1>
        {category.items.map((item, i) => (
          <div key={i} className="text-gray-500 text-sm hover:text-[#C16452]">
            {item}
          </div>
        ))}
      </div>
    </div>
  ))}
</div>

      <div className="flex flex-col items-start mt-4">
        <img
          className="h-[200px] w-[250px]"
          src="https://img.freepik.com/free-photo/beautiful-female-shopaholic-kissing-high-heels_329181-3849.jpg?ga=GA1.1.416566523.1736844263&semt=ais_hybrid"
          alt="Women's Shoes"
        />
        <div className="text-sm font-medium">Women's Shoes</div>
      </div>
    </div>
  );
}
