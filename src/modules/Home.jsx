import Header from "./components/Header";
const Home = () => {
  

  return (
    <div className="bg-home-sm md:bg-home-md lg:bg-home-bg text-mainLight bg-cover min-h-screen md:h-fit">
      <Header />
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
