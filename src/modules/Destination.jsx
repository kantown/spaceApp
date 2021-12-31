import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Destination = () => {
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

  const changeMember = (index) => {
    setDest(index);
    const input = document.getElementById(`radio${index}`);
    const labels = document.querySelectorAll(`label`);
    labels.forEach((el) => {
      el.classList.remove("border-b-2");
    });
    input.parentElement.classList.add("border-b-2");
  };

  const [dataDest, setDataDest] = useState({ data: [], isLoaded: false });
  const [dest, setDest] = useState(0);
  useEffect(() => {
    const fetching = () => {
      fetch("/data.json")
        .then((response) => response.json())
        .then((data) => {
          setDataDest({ data: data.crew, isLoaded: true });
        });
    };
    fetching();
  }, []);
  return (
    <div className="bg-dest-sm md:bg-dest-md lg:bg-dest-bg bg-cover min-h-max text-mainLight">
      <header className="flex justify-between lg:pt-14">
        <img
          src="/assets/shared/logo.svg"
          alt="logo"
          className="m-5 w-12 lg:w-14  md:ml-10 aspect-square "
        />
        <button className="hamburger m-8 md:hidden" onClick={() => btnHandle()}>
          <img src="/assets/shared/icon-hamburger.svg" alt="menu button"></img>
        </button>
        <nav
          className="fixed right-0 bg-mainLight w-8/12 h-screen bg-opacity-10 backdrop-filter backdrop-blur-md transition-all translate-x-full
        md:flex  md:relative md:h-auto md:w-auto md:translate-x-0"
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
              <Link to="#" className="flex">
                <span className="mr-4 font-bold md:hidden lg:block">03</span>
                TECHNOLOGY
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex-col-reverse flex justify-center content-center text-center lg:flex lg:flex-row lg:text-left lg:mt-52 lg:pb-12 ">
        <section className="px-8 mt-7 md:px-48 md:pt-24 lg:w-1/2 lg:mx-36 lg:p-0">
          <h1 className="text-6xl uppercase font-bellefair my-2 md:text-5xl ">
            {dataDest.isLoaded && dataDest.data[dest].name}
          </h1>
          <span className="mt-2 font-barlowCondensed text-mainTurquoise font-extralight text-base tracking-wider lg:text-lg">
            {dataDest.isLoaded && dataDest.data[dest].description}
          </span>
          <div className="flex flex-col border-t-2 pt-8 my-8 border-t-mainLight border-opacity-10">
            <article className="flex flex-col">
              <span className="text-xs tracking-widest mb-3 text-mainTurquoise font-bellefair uppercase lg:text-3xl">
                AVG. DISTANCE
              </span>
              <span className="text-2xl tracking-wider m-2 text-mainLight font-bellefair uppercase lg:text-3xl">
                {dataDest.isLoaded && dataDest.data[dest].distance}
              </span>
            </article>
            <article className="flex flex-col my-4">
              <span className="text-xs tracking-widest mb-3 text-mainTurquoise font-bellefair uppercase lg:text-3xl">
                EST. TRAVEL TIME
              </span>
              <span className="text-2xl tracking-wider text-mainLight font-bellefair uppercase lg:text-3xl">
                {dataDest.isLoaded && dataDest.data[dest].travel}
              </span>
            </article>
          </div>
        </section>

        <div className="flex  justify-center mt-8">
          {dataDest.data.map((member, index) => (
            <label className="font-barlowCondensed font-light uppercase mx-3 tracking-widest">
              <input
                className="hidden"
                type="radio"
                id={`radio${index}`}
                key={index}
                checked={dest === index}
                onChange={() => changeMember(index)}
              />
              {member.name}
            </label>
          ))}
        </div>

        <section className="flex justify-center w-full h-fit mt-2 md:mt-14 md:py-24">
          <div
            className="flex items-center justify-center   text-lg flex-col font-barlowCondensed tracking-widest
          md:w-60 md:text-3xl"
          >
            <p className="text-sm tracking-widest02">
              <span className="text-mainLight text-opacity-20 font-semibold mr-3">
                01
              </span>
              PICK YOUR DESTINATION
            </p>
            {dataDest.isLoaded && (
              <img
                src={dataDest.data[dest].images.webp}
                className="h-44 mt-9"
                alt={`Destination ${dataDest.data[dest].name}`}
              ></img>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Destination;
