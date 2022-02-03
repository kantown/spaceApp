import { useEffect, useState } from "react";
import Header from "./components/Header";

const Technology = () => {
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
    <div className="bg-tech-sm md:bg-tech-md lg:bg-tech-bg bg-cover min-h-full md:h-fit  text-mainLight">
      <Header />
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
