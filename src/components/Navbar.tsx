import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const navLinks = [
    {
      url: "/explore",
      link: "Explore",
    },
    {
      url: "/features",
      link: "Features",
    },
    {
      url: "/community",
      link: "Community",
    },
  ];

  return (
    <header className="mx-auto bg-black flex w-4/5 items-center justify-between py-4 md:justify-center">
      {/* logo */}
      <div className="md:flex-[0.5 flex flex-initial flex-row items-center justify-start">
        {/* <Image src="" alt="" className="w-8 cursor-pointer" /> */}
        <span className="ml-2 text-2xl text-white">Marketplace</span>
      </div>

      {/* nav links */}
      <nav className="hidden flex-initial list-none flex-row items-center justify-between text-white md:flex md:flex-[0.5]">
        <ul>
          {navLinks.map(({ url, link }, index) => (
            <li key={index} className="mx-4 cursor-pointer">
              <Link href={url}>{link}</Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* buttons */}
      <div>
        {/* connect wallet */}
        <button className="rounded-full bg-[#e32860] p-2 text-white shadow-xl shadow-black hover:bg-[#bd255f] md:text-xs">
          Connect Wallet
        </button>
      </div>
    </header>
  );
};

export default Navbar;
