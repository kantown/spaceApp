import { useEffect, useState } from "react";
import Header from "./components/Header";

const Crew = () => {
  

  const changeMember = (index) => {
    setCrewMember(index);
  };

  const [dataCrew, setdataCrew] = useState({ data: [], isLoaded: false });
  const [crewMember, setCrewMember] = useState(0);

  useEffect(() => {
    const fetching = () => {
      fetch("/data.json")
        .then((response) => response.json())
        .then((data) => {
          setdataCrew({ data: data.crew, isLoaded: true });
        });
    };
    fetching();
  }, []);
  return (
    <div className="bg-crew-sm md:bg-crew-md lg:bg-crew-bg bg-cover min-h-max md:h-fit text-mainLight">
      <Header />
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
                alt={`Crew Member ${dataCrew.data[crewMember].name}`}
              ></img>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Crew;
