import ChevronRightIcon from "@heroicons/react/20/solid/ChevronRightIcon";
import macs from "../../assets/img/macs.png";
import m2 from "../../assets/img/m2.png";
const Macs = () => {
  return (
    <div className="h-[80vh] md:h-[90vh] flex flex-col md:flex-row justify-center cursor-pointer text-black items-center pt-24 bg-zinc-50 ">
      <div className=" text-center">
        <h1 className="text-4xl md:text-6xl font-semibold">MacBook Air</h1>
        <h2 className="text-2xl md:text-3xl font-medium my-2 md:my-4">
          Supercharged by{" "}
          <img src={m2} className="inline h-12 w-12" alt="The M2 Chip" />
        </h2>
        <h3 className="text-lg md:text-2xl text-blue-400 hover:underline">
          Learn more
          <ChevronRightIcon className="h-6 w-6 inline"></ChevronRightIcon>
        </h3>
      </div>
      <img src={macs} alt="" className=" h-full object-contain" />
    </div>
  );
};

export default Macs;
