import { useEffect, useCallback, useState } from "react";
import { Link } from "react-router-dom";

const Crew = () => {
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

  const changeMember = (index) => {
    setCrewMember(index);
  };

  const [dataCrew, setdataCrew] = useState({ data: [], isLoaded: false });
  const [crewMember, setCrewMember] = useState(0);
  const fetching = useCallback(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setdataCrew({ data: data.crew, isLoaded: true });
      });
  }, []);

  useEffect(() => {
    fetching();
  }, []);
  return (
    <div className="bg-crew-sm md:bg-crew-md lg:bg-crew-bg bg-cover min-h-max text-mainLight">
      <header className="flex justify-between lg:pt-14">
        <img
          src="/assets/shared/logo.svg"
          alt="logo"
          className="m-5 w-12 lg:w-14  md:ml-10 aspect-square "
        />
        <button
          className="hamburger m-8 md:hidden"
          onClick={() => hamburgerHandle()}
        >
          <img src="/assets/shared/icon-hamburger.svg" alt="menu button"></img>
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
      <main className="flex-col-reverse flex justify-center content-center text-center pb-24 lg:flex lg:flex-row lg:text-left lg:mt-52 lg:pb-12 ">
        <section className="px-8 mt-7 md:px-48 md:pt-24 lg:w-1/2 lg:mx-36 lg:p-0">
          <span className="text-lg tracking-widest text-mainTurquoise text-opacity-50 font-bellefair uppercase lg:text-3xl">
            {dataCrew.isLoaded && dataCrew.data[crewMember].role}
          </span>
          <h1 className="text-2xl uppercase font-bellefair my-2 md:text-5xl ">
            {dataCrew.isLoaded && dataCrew.data[crewMember].name}
          </h1>
          <span className="mt-2 font-barlowCondensed text-mainTurquoise font-extralight text-base tracking-wider lg:text-lg">
            {dataCrew.isLoaded && dataCrew.data[crewMember].bio}
          </span>
        </section>

        <div className="flex  justify-center mt-8">
          {dataCrew.data.map((member, index) => (
            <input
              className="form-check-input appearance-none rounded-full h-3 w-3 border border-gray-300 bg-white checked:bg-mainTurquoise checked:border-blue-600 my-1 align-top float-left mr-2"
              type="radio"
              id={`radio${index}`}
              key={index}
              checked={crewMember === index}
              onChange={() => changeMember(index)}
            />
          ))}
        </div>

        <section className="flex justify-center w-full h-fit mt-2 md:mt-14 md:py-24">
          <div
            className="flex items-center justify-center border-b w-10/12 border-b-mainLight border-opacity-10  text-lg flex-col font-barlowCondensed tracking-widest
          md:w-60 md:text-3xl"
          >
            <p className="text-sm tracking-widest02">
              <span className="text-mainLight text-opacity-20 font-semibold mr-3">
                02
              </span>
              MEET YOUR CREW
            </p>
            {dataCrew.isLoaded && (
              <img
                src={dataCrew.data[crewMember].images.webp}
                className="h-52 mt-9"
                alt="Crew Member Picture"
              ></img>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Crew;
