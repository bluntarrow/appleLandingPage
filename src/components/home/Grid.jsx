import { ChevronRightIcon } from "@heroicons/react/20/solid";

// images
import mac from "../../assets/img/mac.jpg";
import ipads from "../../assets/img/ipads.png";
import ipad from "../../assets/img/ipad.png";
import se from "../../assets/img/se.png";
import m2 from "../../assets/img/m2dark.jpg";

const Grid = () => {
  const products = [
    {
      title: 'MacBook Pro 13"',
      header: "Supercharged by",
      m2: true,
      dark: true,
      src: mac,
    },
    {
      title: 'iPad Air"',
      header: "Light. Bright. Full of might",
      m2: false,
      dark: true,
      src: ipads,
    },
    {
      title: "iPad Mini",
      header: "Mega power. Mini sized",
      m2: false,
      dark: false,
      src: ipad,
    },
    {
      title: "iPhone SE",
      header: "Love the power. Love the price",
      m2: false,
      dark: false,
      src: se,
    },
  ];
  return (
    <div className="p-4 pt-24 bg-zinc-50 grid gap-4 grid-cols-2">
      {products.map((product) => (
        <div
          className={`flex flex-col h-[90vh] p-20 justify-center gap-4 cursor-pointer ${
            product.dark ? "bg-black text-zinc-200 " : "text-black"
          }`}
        >
          <div className=" text-center ">
            <h1 className="text-5xl font-semibold">{product.title}</h1>
            <h2 className="text-3xl font-medium my-4">
              {product.header}{" "}
              {product.m2 && (
                <img src={m2} className="inline h-12 w-12" alt="The M2 Chip" />
              )}
            </h2>
            <h3 className="text-xl text-blue-400 hover:underline">
              Learn more
              <ChevronRightIcon className="h-6 w-6 inline"></ChevronRightIcon>
            </h3>
          </div>
          <img src={product.src} alt="" className=" h-3/4 object-contain" />
        </div>
      ))}
    </div>
  );
};

export default Grid;
