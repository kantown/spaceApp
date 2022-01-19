import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Technology = () => {
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

  const changeTech = (index) => {
    setTech(index);
  };

  const [dataTech, setdataTech] = useState({ data: [], isLoaded: false });
  const [tech, setTech] = useState(0);

  useEffect(() => {
    const fetching = () => {
      fetch("/data.json")
        .then((response) => response.json())
        .then((data) => {
          setdataTech({ data: data.technology, isLoaded: true });
        });
    };
    fetching();
  }, []);
  return (
    <div className="bg-tech-sm md:bg-tech-md lg:bg-tech-bg bg-cover min-h-max md:h-fit  text-mainLight">
      <header className="flex justify-between lg:pt-14">
        <img
          src="/assets/shared/logo.svg"
          alt="logo"
          className="m-5 w-12 lg:w-14  md:ml-10 aspect-square "
        />
        <button
          className="hamburger m-8 z-30 md:hidden"
          onClick={() => btnHandle()}
        >
          <img src="/assets/shared/icon-hamburger.svg" alt="menu button"></img>
        </button>
        <nav
          className="fixed right-0 bg-mainLight w-8/12 h-screen bg-opacity-10 backdrop-filter backdrop-blur-md transition-all translate-x-full
        md:flex  md:relative md:h-auto md:w-auto md:translate-x-0 z-50"
        >
          <div className="flex w-full justify-end">
            <button className="close m-8 md:hidden" onClick={() => btnHandle()}>
              <img
                src="/assets/shared/icon-close.svg"
                alt="close menu icon"
              ></img>
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
      <main className="flex-col-reverse flex justify-center content-center text-center pb-24 lg:flex lg:flex-row lg:text-left lg:mt-52 lg:pb-12 ">
        <section className="px-8 mt-7 md:px-48 md:pt-24 lg:w-1/2 lg:mx-36 lg:p-0">
          <span className="text-base tracking-widest text-mainTurquoise text-opacity-50 font-bellefair uppercase lg:text-3xl">
            THE TERMINOLOGY...
          </span>
          <h1 className="text-2xl uppercase font-bellefair my-2 md:text-5xl ">
            {dataTech.isLoaded && dataTech.data[tech].name}
          </h1>
          <span className="mt-2 font-barlowCondensed text-mainTurquoise font-extralight text-base tracking-wider lg:text-lg">
            {dataTech.isLoaded && dataTech.data[tech].description}
          </span>
        </section>
        <section className="w-full flex justify-center">
          <div className="flex justify-between w-40 mt-8">
            {dataTech.data.map((member, index) => (
              <label className="relative radioLabel">
                <input
                  className="radioInput"
                  type="radio"
                  id={`radio${index}`}
                  key={index}
                  checked={tech === index}
                  onChange={() => changeTech(index)}
                />
                <div className="font-bellefair text-center">{index}</div>
              </label>
            ))}
          </div>
        </section>
        <section className="flex justify-center w-full h-fit mt-2 md:mt-14 md:py-24">
          <div
            className="flex items-center justify-center text-lg w-full flex-col font-barlowCondensed tracking-widest
           md:text-3xl"
          >
            <p className="text-sm tracking-widest02">
              <span className="text-mainLight text-opacity-20 font-semibold mr-3">
                03
              </span>
              SPACE LAUNCH 101
            </p>
            {dataTech.isLoaded && (
              <img
                src={dataTech.data[tech].images.landscape}
                className="h-44 mt-9 w-full"
                alt={`Crew Member ${dataTech.data[tech].name}`}
              ></img>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Technology;
