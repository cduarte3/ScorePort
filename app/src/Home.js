import './App.css';

function Home() {
  return (
    <>
      <div
        className="bg-cover min-h-screen bg-fixed text-white"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' %3E%3Crect fill='%23000000' width='24' height='24'/%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='0' y2='1' gradientTransform='rotate(0,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%23656565'/%3E%3Cstop offset='1' stop-color='%23000000'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpattern id='b' width='35' height='35' patternUnits='userSpaceOnUse'%3E%3Ccircle fill='%23000000' cx='17.5' cy='17.5' r='17.5'/%3E%3C/pattern%3E%3Crect width='100%25' height='100%25' fill='url(%23a)'/%3E%3Crect width='100%25' height='100%25' fill='url(%23b)' fill-opacity='0.21'/%3E%3C/svg%3E")`
        }}
      >
        <div className="flex items-center justify-center font-barlow-condensed">
          <div className="text-center mt-[5%] md:mt-[3%] w-[90%] lg:w-[60%]">
            <img src="/logo.svg" alt="Menu Icon" className="mx-auto w-[40%] sm:w-[30%] lg:w-[25%]"/>
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold">ScorePort</h1>
            <p className="text-3xl sm:text-4xl mt-8 font-bold">Discover ScorePort – your new destination for team stats, standings, and match updates. Stay in the know with live scores, upcoming fixtures, and past results. <br/><br/> Select your league below to get started!</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center font-barlow-condensed mt-[20%] md:mt-[7%] pb-[7%]">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">Leagues</h1>
          <div className="mt-10 w-[45%] sm:w-[90%] lg:w-[70%] xl:w-[50%] p-5 gap-5 columns-1 sm:columns-5 justify-center content-center">
            <a href="prem"><img src="/prem_button.svg" alt="EPL Logo" className="w-[90%] mx-auto hover:w-[100%] mb-5"/></a>
            <a href="laliga"><img src="/laliga_button.svg" alt="La Liga Logo" className="w-[90%] mx-auto hover:w-[100%] mb-5"/></a>
            <a href="bundesliga"><img src="/bundes_button.svg" alt="Bundesliga Logo" className="w-[90%] mx-auto hover:w-[100%] mb-5"/></a>
            <a href="seriea"><img src="/seriea_button.svg" alt="Serie A Logo" className="w-[90%] mx-auto hover:w-[100%] mb-5"/></a>
            <a href="ligue1"><img src="/ligue1_button.svg" alt="Ligue 1 Logo" className="w-[90%] mx-auto hover:w-[100%] mb-5"/></a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;