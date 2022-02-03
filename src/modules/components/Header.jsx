import { Link } from "react-router-dom";

const btnHandle = () => {
  const hamBtn = document.querySelector(".hamburger");
  const menu = document.querySelector("nav");
  if (hamBtn.classList.contains("hidden")) {
    hamBtn.classList.remove("hidden");
    menu.classList.add("translate-x-full");
  } else {
    hamBtn.classList.add("hidden");
    menu.classList.remove("translate-x-full");
  }
};

const Header = () => {
  return (
    <header className="flex justify-between lg:pt-14">
      <img
        src="/assets/shared/logo.svg"
        alt="logo"
        className="m-5 md:ml-10 aspect-square w-14"
      />
      <button className="hamburger m-8 md:hidden" onClick={() => btnHandle()}>
        <img src="/assets/shared/icon-hamburger.svg" alt="menu-open"></img>
      </button>
      <nav
        className="fixed right-0 bg-mainLight w-8/12 h-screen bg-opacity-10 backdrop-filter backdrop-blur-md transition-all translate-x-full
        md:flex  md:relative md:h-auto md:w-auto md:translate-x-0"
      >
        <div className="flex w-full justify-end">
          <button className="close m-8 md:hidden" onClick={() => btnHandle()}>
            <img src="/assets/shared/icon-close.svg" alt="menu-close"></img>
          </button>
        </div>
        <ul
          className="pl-7 pt-10 font-barlowCondensed tracking-widest font-thin justify-center items-center
          md:flex md:flex-row  md:text-sm md:h-20 md:pl-5 md:pr-10 md:pt-0 
          lg:pl-24 lg:pr-36 lg:h-24 lg:before:content-none lg:before:border-t lg:before:border-mainLight lg:before:relative"
        >
          <li className="pb-5 md:active:border-b-2 mx-5 md:pb-0 md:h-full md:flex md:items-center">
            <Link to="/" className="flex">
              <span className="mr-4 font-bold md:hidden lg:block">00</span>
              HOME
            </Link>
          </li>
          <li className="pb-5  md:active:border-b-2 mx-5  md:pb-0 md:h-full md:flex md:items-center">
            <Link to="/destination" className="flex">
              <span className="mr-4 font-bold md:hidden lg:block">01</span>
              DESTINATION
            </Link>
          </li>
          <li className="pb-5  md:active:border-b-2 mx-5  md:pb-0 md:h-full md:flex md:items-center">
            <Link to="/crew" className="flex">
              <span className="mr-4 font-bold md:hidden lg:block">02</span>
              CREW
            </Link>
          </li>
          <li className="pb-5  md:active:border-b-2 mx-5  md:pb-0 md:h-full md:flex md:items-center">
            <Link to="/technology" className="flex">
              <span className="mr-4 font-bold md:hidden lg:block">03</span>
              TECHNOLOGY
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
