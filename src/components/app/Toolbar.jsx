import { mdiApple } from "@mdi/js";
import {MagnifyingGlassIcon, Bars2Icon} from '@heroicons/react/20/solid'
import {Icon} from "@mdi/react";


const Toolbar = () => {
  const links = ["Mac", "iPad", "iPhone", "Music", "Support", "Where to Buy"];

  return (
    <div className="fixed top-0 w-full py-4 text-zinc-400 bg-black/80 backdrop-blur-xl z-30">
      <Bars2Icon className="absolute left-4 md:hidden h-5 w-5 text-zinc-200" />
      <ul className=" max-w-5xl mx-auto w-full flex justify-center md:justify-between items-center px-4">
        <li>
          <Icon path={mdiApple} className="h-6 w-6 text-zinc-200 hover:text-zinc-100 transition cursor-pointer"></Icon>
        </li>
        {links.map((link) => (
          <li className="hidden md:block w-32 text-center text-xs hover:text-zinc-300 transition cursor-pointer" key={link}>{link}</li>
        ))}
        <li>
          <MagnifyingGlassIcon className="hidden md:block h-5 w-5 hover:text-zinc-300 transition cursor-pointer" />
        </li>
      </ul>
    </div>
  );
};

export default Toolbar;
