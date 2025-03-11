import { useState } from 'react';
import { CvIncon, GitHubIcon, LinkedinIcon, MailIcon } from './components/icons';
import TEXT_ES from './assets/TEXT_ES.json';
import TEXT_EN from './assets/TEXT_EN.json';
import { Tecnologies } from './components/Tecnologies';

export function App() {
  const [language, setLanguage] = useState(true);
  const [lightsOn, setLightsOn] = useState(false);
  const texts = language ? TEXT_EN : TEXT_ES;

  const handleChangeLanguage = () => {
    setLanguage(prevState => !prevState);
  };
  return (
    <main className="bg-background-dark aspect-4/6 grid grid-cols-4 grid-rows-6 gap-4 max-w-7xl ml-auto h-[calc(100vh)] mr-auto text-white" >
      <div className="col-span-3 bg-black row-span-2 aspect-auto rounded-3xl border-darkgrey border-solid border-1">
        <div className='pl-8 pt-8'>
          <div className='flex gap-12 items-center '>
            <div>
              <p className='text-3xl'>{texts.nameHeader}</p>
              <h2 className='text-4xl font-semibold text-gold pb-4'>{texts.name}</h2>
            </div>
            <img className='w-32 rounded-full border-darkgrey border-1' src="/public/thumbnail.jpeg" alt="Santiago thumbnail" />
          </div>
          <p className='text-2xl'>{texts.about}</p>
          <img className="scale-75 absolute top-60" src="/public/signature.png" alt="signature" />
        </div>
      </div>
      <div className="flex items-center aspect-square justify-center rounded-3xl bg-black border-darkgrey border-solid border-1">
        <button className='cursor-pointer w-full h-full flex items-center justify-center' onClick={() => { setLightsOn(prevState => !prevState); }}>
          <img className='w-24' src={lightsOn ? '/moon.png' : '/sun.png'} alt="sun/moon icon"></img>
        </button>
      </div>
      <div className="flex flex-col gap-2.5 items-center aspect-square justifytion-duration justify-center rounded-3xl bg-purple border-darkgrey border-solid border-1">
        <button onClick={handleChangeLanguage} className='cursor-pointer'>
          <p className='text-7xl font-bold'>{texts.lang}</p>
        </button>
        <div className='flex gap-1 text-1xl font-bold'>
          <p className="text-gold">EN</p>
          <p>ES</p>
        </div>
      </div>
      <div className="flex items-center aspect-square justify-center rounded-3xl bg-blue hover:scale-97 duration-300 border-darkgrey border-solid border-1">
        <a className='w-full h-full flex items-center justify-center' href='https://www.linkedin.com/in/santiago-armesto1/' target='_blank' aria-label='Go to LikedIn' rel="noreferrer">
          <LinkedinIcon />
        </a>
      </div>
      <div className="flex items-center aspect-square justify-center rounded-3xl bg-grey hover:scale-97 duration-300 border-darkgrey border-solid border-1">
        <a className='w-full h-full flex items-center justify-center' href='https://github.com/armestoSantiago/' target='_blank' aria-label='Go to github' rel="noreferrer">
          <GitHubIcon />
        </a>
      </div>
      <div className="flex items-center aspect-square justify-center rounded-3xl bg-black hover:scale-97 duration-300 border-darkgrey border-solid border-1">
        <a className='w-full h-full flex items-center justify-center' href='src/assets/CV_SantiagoArmesto.pdf' target='_blank' aria-label='curriculum' rel="noreferrer">
          <CvIncon />
        </a>
      </div>
      <div className="flex items-center aspect-square justify-center rounded-3xl bg-rose hover:scale-97 duration-300 border-darkgrey border-solid border-1">
        <a className='w-full h-full flex items-center justify-center' href='mailto:contactosantiagoarmesto@gmail.com' target='_blank' aria-label='Mail me' rel="noreferrer">
          <MailIcon />
        </a>
      </div>
      <div className="aspect-auto grid grid-cols-4 grid-rows-4 rounded-3xl bg-black col-span-2 row-span-2 border-darkgrey border-solid border-1">
        <Tecnologies />
      </div>
      <div className="flex items-center aspect-auto justify-center rounded-3xl bg-black col-span-2 border-darkgrey border-solid border-1">9</div>
      <div className="flex items-center aspect-auto justify-center rounded-3xl bg-black col-span-2 border-darkgrey border-solid border-1">10</div>
      <div className="flex items-center aspect-square justify-center rounded-3xl bg-black border-darkgrey border-solid border-1">11</div>
      <div className="flex items-center aspect-auto justify-center rounded-3xl bg-black col-span-2 border-darkgrey border-solid border-1">12</div>
      <div className="flex flex-col items-center aspect-square justify-center rounded-3xl bg-green border-darkgrey gap-2 border-solid border-1">
        <p className='text-7xl font-semibold'>{texts.age}</p>
        <p className='text-1xl font-semibold'>{texts.ageText}</p>
      </div>
    </main >
  );
}