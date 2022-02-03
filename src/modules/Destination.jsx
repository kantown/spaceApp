import { useEffect, useState, StrictMode } from "react";
import Header from "./components/Header";

const Destination = () => {
  
  const changeMember = (index) => {
    setDest(index);
  };

  const [dataDest, setDataDest] = useState({ data: [], isLoaded: false });
  const [dest, setDest] = useState(0);

  useEffect(() => {
    const fetching = () => {
      fetch("/data.json")
        .then((response) => response.json())
        .then((data) => {
          setDataDest({ data: data.destinations, isLoaded: true });
        });
    };
    fetching();
  }, []);
  return (
    <div className="bg-dest-sm md:bg-dest-md lg:bg-dest-bg bg-cover min-h-screen md:h-fit text-mainLight">
      <Header/>
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
            <StrictMode>
              <input
                className="hidden"
                type="radio"
                id={`radio${index}`}
                key={index}
                checked={dest === index}
                onChange={() => changeMember(index)}
              />
              <label
                className="font-barlowCondensed font-light uppercase mx-3 tracking-widest"
                htmlFor={`radio${index}`}
              >
                {member.name}
              </label>
            </StrictMode>
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
