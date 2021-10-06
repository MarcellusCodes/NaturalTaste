import Link from "next/link";
import Image from "next/image";
import NavItem from "./navitem";
import Branding from "../../assets/branding.svg";

const Navbar = ({ items }) => {
  return (
    <>
      <div className="bg-secondary py-2 rounded-tr-lg rounded-tl-lg">
        <div className="flex-row flex items-center justify-between container mx-auto">
          <div className="flex flex-row items-center">
            <Image
              src={Branding}
              alt="Branding of NaturalTaste"
              width={50}
              height={50}
            />
            <Link href="/">
              <a className="text-xl text-white font-bold font-mono hover:text-[#FF6E00] transition duration-200 ease-in">
                NaturalTaste
              </a>
            </Link>
          </div>
          <div>
            <ul className="flex flex-row items-center space-x-5 text-white font-bold font-mono text-xl">
              {items.map((item) => (
                <NavItem item={item} key={item.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
