import { useEffect, useState } from 'react';
import { CvIncon, DownloadArrow, ExternalArrow, GitHubIcon, HammerIcon, LinkedinIcon, LocationIcon, MailIcon } from './components/icons';
import TEXT_ES from './assets/TEXT_ES.json';
import TEXT_EN from './assets/TEXT_EN.json';
import { Tecnologies } from './components/Tecnologies';
import { getWeatherAndCity } from './services/getWeatherAndCity';
import './queries.css';

export function App() {
  const [language, setLanguage] = useState(true);
  const [lightsOn, setLightsOn] = useState(false);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(false);
  const [city, setCity] = useState(null);
  const [temp, setTemp] = useState(null);
  const [weather, setWeather] = useState(null);
  const texts = language ? TEXT_EN : TEXT_ES;

  const handleChangeLanguage = () => {
    setLanguage(prevState => !prevState);
  };

  const handleTurnOnLights = () => {
    setLightsOn(prevState => !prevState);
    if (lightsOn) document.body.style.backgroundColor = '#121111';
    if (!lightsOn) document.body.style.backgroundColor = '#f7f2f2';
  };

  useEffect(() => {

    const onSuccess = async (position) => {
      const { latitude: lat, longitude: lng } = position.coords;
      const data = await getWeatherAndCity({ lat, lng });
      if (!data) {
        setError(true);
        return;
      }
      setCity(data.cityName);
      setWeather(data.weather);
      setTemp(data.temp);
      setLocation(true);
    };

    const onError = () => {
      setLocation(false);
    };

    navigator.geolocation.getCurrentPosition(onSuccess, onError);

  }, []);

  return (
    <main className={`${lightsOn ? 'bg-background-light text-black' : 'bg-background-dark text-white'} duration-300 aspect-4/6 grid grid-cols-4 grid-rows-6 gap-4 max-w-7xl ml-auto mr-auto responsive-main-grid`} >
      <div className={`col-span-3 ${lightsOn ? 'bg-white' : 'bg-black'} row-span-2 aspect-auto rounded-3xl border-darkgrey border-solid border-1 duration-300 responsive-about-card responsive-card`}>
        <div className='pl-8'>
          <div className='flex gap-18 items-center pt-16 mb-8 responsive-container-name-img '>
            <div>
              <p className='text-4xl'>{texts.nameHeader}</p>
              <h2 className='text-5xl font-semibold text-gold pb-4'>{texts.name}</h2>
            </div>
            <img className='w-32 rounded-full border-darkgrey border-1' src="/thumbnail.jpeg" alt="Santiago thumbnail" />
          </div>
          <p className='text-2xl max-w-600 responsive-about-text'>{texts.about}</p>
          <img className="scale-75 absolute top-70 z-50 responsive-signature" src="/signature.png" alt="signature" />
        </div>
      </div>
      <div className={`flex items-center aspect-square justify-center rounded-3xl ${lightsOn ? 'bg-white' : 'bg-black'} border-darkgrey border-solid border-1 duration-300 responsive-toggler-container`}>
        <button className='cursor-pointer w-full h-full flex items-center justify-center' onClick={handleTurnOnLights}>
          <img className='w-24' src={lightsOn ? '/moon.png' : '/sun.png'} alt="sun/moon icon"></img>
        </button>
      </div>
      <div className="flex flex-col gap-2.5 items-center aspect-square justify-center rounded-3xl bg-purple border-darkgrey border-solid border-1 duration-300 responsive-language-container">
        <button onClick={handleChangeLanguage} className='cursor-pointer'>
          <p className='text-7xl font-bold text-white'>{texts.lang}</p>
        </button>
        <div className='flex gap-1 text-1xl font-bold'>
          <p className={`${language ? 'text-gold' : 'text-white'}`}>EN</p>
          <p className={`${language ? 'text-white' : 'text-gold'}`}>ES</p>
        </div>
      </div>
      <div className="flex items-center aspect-square justify-center rounded-3xl bg-blue hover:scale-97 duration-300 border-darkgrey border-solid border-1 relative responsive-linkedin-container">
        <div className='absolute top-2 right-2 w-6 bg-white flex items-center justify-center h-6 rounded-3xl'>
          <ExternalArrow />
        </div>
        <a className='w-full h-full flex items-center justify-center' href='https://www.linkedin.com/in/santiago-armesto1/' target='_blank' aria-label='Go to LikedIn' rel="noreferrer">
          <LinkedinIcon />
        </a>
      </div>
      <div className="flex items-center aspect-square justify-center rounded-3xl bg-grey hover:scale-97 duration-300 border-darkgrey border-solid border-1 relative">
        <div className='absolute top-2 right-2 w-6 bg-white flex items-center justify-center h-6 rounded-3xl'>
          <ExternalArrow />
        </div>
        <a className='w-full h-full flex items-center justify-center' href='https://github.com/armestoSantiago/' target='_blank' aria-label='Go to github' rel="noreferrer">
          <GitHubIcon />
        </a>
      </div>
      <div className={`flex items-center aspect-square justify-center rounded-3xl ${lightsOn ? 'bg-white' : 'bg-black'} duration-300 hover:scale-97 border-darkgrey border-solid border-1 relative`}>
        <div className={`absolute top-2 right-2 w-6 ${lightsOn ? 'bg-black' : 'bg-white'} flex items-center justify-center h-6 rounded-3xl`}>
          <DownloadArrow lightsOn={lightsOn} />
        </div>
        <a className='w-full h-full flex items-center justify-center' href='https://drive.google.com/file/d/1AC25Vt8mGSyaDuotDSgAq6fdjYOgtfdw' target='_blank' aria-label='curriculum' rel="noreferrer">
          <CvIncon lightsOn={lightsOn} />
        </a>
      </div>
      <div className="flex items-center aspect-square justify-center rounded-3xl bg-rose hover:scale-97 duration-300 border-darkgrey border-solid border-1 relative">
        <div className='absolute top-2 right-2 w-6 bg-white flex items-center justify-center h-6 rounded-3xl'>
          <ExternalArrow />
        </div>
        <a className='w-full h-full flex items-center justify-center' href='mailto:contactosantiagoarmesto@gmail.com' target='_blank' aria-label='Mail me' rel="noreferrer">
          <MailIcon />
        </a>
      </div>
      <div className="aspect-auto grid grid-cols-4 grid-rows-4 rounded-3xl bg-black col-span-2 row-span-2 border-darkgrey border-solid border-1 duration-300 responsive-tecnologies-container">
        <Tecnologies />
      </div>
      <div className={`flex flex-col items-center aspect-auto justify-center rounded-3xl ${lightsOn ? 'bg-white' : 'bg-black'} duration-300 col-span-2 border-darkgrey border-solid border-1`}>

        {error && <p className='text-gold text-center'>{texts.failFetch}</p>}
        {!location && !error && <p className='text-gold text-center font-semibold pl-1 pr-1 text-lg'>{texts.errorMessage}</p>}
        {location && <p className='text-1xl'>{texts.headerWelcomeMessage}</p>}
        {city && <p className='text-gold text-4xl font-semibold'>{city}</p>}
      </div>
      <div className={`flex flex-col gap-2 items-center aspect-auto justify-center rounded-3xl duration-300 ${lightsOn ? 'bg-white' : 'bg-black'} col-span-2 border-darkgrey border-solid border-1`}>

        {error &&
          <>
            <HammerIcon />
            <p className='text-center'>{texts.failFetch2}</p>
          </>
        }
        {!error && !location && <>
          <LocationIcon lightsOn={lightsOn} />
          <p>{texts.weatherErrorMessage}</p>
        </>
        }
        {city && <div className='flex'>
          <div>
            <p className='text-gold text-3xl pb-4 font-semibold'>{city}</p>
            <span className='text-5xl text-center font-semibold'>{temp} °C</span>
          </div>
          <img className='w-32 -ml-12' src={`${weather.toLowerCase()}.png`} alt={`${weather} img`} />
        </div>}
      </div>
      <div className={`aspect-square gap-3 rounded-3xl ${lightsOn ? 'bg-white' : 'bg-black'} border-darkgrey border-solid border-1 duration-300 hover:scale-97 relative`}>
        <div className={`absolute top-2 right-2 w-6 ${lightsOn ? 'bg-black' : 'bg-white'} flex items-center justify-center h-6 rounded-3xl`}>
          <ExternalArrow lightsOn={lightsOn} />
        </div>
        <a href='https://cert.efset.org/ZQ5yHN' target='_blank' className='flex flex-col items-center justify-center cursor-pointer w-full h-full' rel="noreferrer">
          <p>{texts.organization}</p>
          <p className='text-6xl font-bold text-gold'>{texts.level}</p>
          <p>{texts.english}</p>
        </a>
      </div>
      <div className={`flex flex-col items-center aspect-auto justify-center duration-300 rounded-3xl ${lightsOn ? 'bg-white' : 'bg-black'} col-span-2 border-darkgrey border-solid border-1`}>
        <p className='text-gold text-lg mb-3 text-center font-semibold'>{texts.degree}</p>
        <p>{texts.institute}</p>
        <p>{texts.location}</p>
      </div>
      <div className="flex flex-col items-center aspect-square justify-center rounded-3xl duration-300 bg-green border-darkgrey gap-2 border-solid border-1">
        <p className='text-7xl font-semibold text-white'>{texts.age}</p>
        <p className='text-1xl font-semibold text-white'>{texts.ageText}</p>
      </div>
    </main >
  );
}