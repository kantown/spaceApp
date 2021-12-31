import { Link } from "react-router-dom";

const Home = () => {
  const hamburgerHandle = () => {
    const hamBtn = document.querySelector(".hamburger");
    const menu = document.querySelector("nav");
    hamBtn.classList.add("hidden");
    menu.classList.remove("translate-x-full");
  };
  const closeHandle = () => {
    const hamBtn = document.querySelector(".hamburger");
    const menu = document.querySelector("nav");
    hamBtn.classList.remove("hidden");
    menu.classList.add("translate-x-full");
  };

  return (
    <div className="bg-home-sm md:bg-home-md lg:bg-home-bg bg-cover h-full sm:bg-home-md text-mainLight">
      <header className="flex justify-between lg:pt-14">
        <img
          src="/assets/shared/logo.svg"
          alt="logo"
          className="m-5 md:ml-10 aspect-square w-14"
        />
        <button
          className="hamburger m-8 md:hidden"
          onClick={() => hamburgerHandle()}
        >
          <img src="/assets/shared/icon-hamburger.svg"></img>
        </button>
        <nav
          className="fixed right-0 bg-mainLight w-8/12 h-screen bg-opacity-10 backdrop-filter backdrop-blur-md transition-all translate-x-full
        md:flex  md:relative md:h-auto md:w-auto md:translate-x-0"
        >
          <div className="flex w-full justify-end">
            <button
              className="close m-8 md:hidden"
              onClick={() => closeHandle()}
            >
              <img src="/assets/shared/icon-close.svg"></img>
            </button>
          </div>
          <ul
            className="pl-7 pt-10 font-barlowCondensed tracking-widest font-thin justify-center items-center
          md:flex md:flex-row  md:text-sm md:h-20 md:pl-5 md:pr-10 md:pt-0 
          lg:pl-24 lg:pr-36 lg:h-24 lg:before:content-none lg:before:border-t lg:before:border-mainLight lg:before:relative"
          >
            <li className="pb-5 md:active:border-b-2 mx-5 md:pb-0 md:h-full md:flex md:items-center">
              <Link to="/home" className="flex">
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
              <Link to="#" className="flex">
                <span className="mr-4 font-bold md:hidden lg:block">03</span>
                TECHNOLOGY
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className=" content-center text-center lg:flex lg:flex-row lg:text-left lg:mt-52 lg:mb-12 ">
        <section className="px-8 mt-7 md:px-48 md:pt-24 lg:w-1/2 lg:mx-36 lg:p-0">
          <span className="text-lg tracking-widest text-mainTurquoise font-extralight font-barlowCondensed uppercase lg:text-3xl">
            So, you want to travel to
          </span>
          <h1 className="text-7xl  font-bellefair my-6 md:text-9xl ">SPACE</h1>
          <span className="mt-2 font-barlowCondensed text-mainTurquoise font-extralight text-base tracking-wider lg:text-lg">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </span>
        </section>
        <section className="flex justify-center text-mainDark w-full mt-8 my-14 md:mt-14 md:my-24">
          <div
            className="flex items-center justify-center rounded-full bg-mainLight w-40 aspect-square text-lg font-bellefair tracking-widest
          md:w-60 md:text-3xl"
          >
            EXPLORE
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
