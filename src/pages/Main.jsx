import './Main.css';
import React from 'react';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import { useState, useEffect } from 'react';
import discordLogo from '../images/discord_logo.png';
import githubLogo from '../images/github_logo.png';
import linkedinLogo from '../images/linkedin_logo.png';
import TypingEffect from '../components/TypingEffect';
import profilePicture from '../images/profile_picture.JPG';
import backgroundImage from '../images/wallpaper3.jpg';
import kipocedImage from '../images/kipoced.png';
import HTML5 from '../images/HTML5.png';
import cosmicImage from '../images/cosmic_adventures.png';
import JAVA from '../images/java_logo.png';
import redakingImage from '../images/redaking_appli.png';
import Python from '../images/python_logo.png';
import mailLogo from '../images/mail_logo.png';
import phoneLogo from '../images/phone_logo.png';

export default function Main() {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleDiscordClick = (event) => {
    event.preventDefault();
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const projects = [
    {
      name: 'Kipoced',
      description: 'Kipoced is a YLN Developpement website that permits the searching of companies based in France by their name or SIREN number. It also provides information about the company such as its address, activity, and legal status. The website is powered by the SIRENE API.',
      image: kipocedImage,
      languages: [
        { name: 'HTML', logo: HTML5 },
      ],
      link: 'https://www.kipoced.com/',
    },
    {
      name: 'Cosmic Adventures',
      description: 'Cosmic Adventures is a 2D hack and slash game not finished yet. The game is developed in Java using JavaFX for the graphics.',
      image: cosmicImage,
      languages: [
        { name: 'Java', logo: JAVA },
      ],
    },
    {
      name: 'Redaking',
      description: 'Redaking is a general discord bot that is powered by an AI based on the GPT-4 model. It is designed to be a fun and interactive bot that can be used in any server.',
      image: redakingImage,
      languages: [
        { name: 'Python', logo: Python },
      ],
    }
  ];

  return (
    <div>
      <Navbar isScrolled={isScrolled} />
      <div className="flex h-screen pt-28" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
        <header class="p-32 w-1/2">
          <h1 class="font-bold text-7xl text-gray-300">
              Wail
              <span class="text-orange-400"> Ameur</span>
              ,
          </h1>
          <TypingEffect />
          <div class="pt-12 flex space-x-4" id="links">
            <a href="#" onClick={handleDiscordClick}>
              <img class="link-logo hover-effect" src={discordLogo} alt="Discord username : .rackam" width="50" height="50" />
            </a>
            <a href="https://github.com/Rackam06" target="_blank">
              <img class="link-logo hover-effect" src={githubLogo} alt="GitHub" width="50" height="50" />
            </a>
            <a href="https://www.linkedin.com/in/wail-ameur-359b39278/" target="_blank">
              <img class="link-logo hover-effect" src={linkedinLogo} alt="LinkedIn" width="50" height="50" />
            </a>
          </div>
        </header>
        <div className="justify-end pl-48">
          <a rel="noopener noreferrer" href={`${process.env.PUBLIC_URL}/WailAmeurCV.pdf`} download="Wail_Ameur_Resume.pdf">
            <img className="mt-10 rounded-full profile-pic" src={profilePicture} alt="Wail Ameur"/>
          </a>
        </div>
      </div>

      <section id="about">
        <h2 class="m-10 animate__animated animate__fadeIn">
            Hello! I'm Wail Ameur, a computer scientist with a deep passion for discovery, particularly in the field of Artificial Intelligence. Driven by a thirst for knowledge, I am constantly seeking new opportunities to fulfill my potential and make meaningful contributions.
        </h2>
      </section>

      <section class="m-10 p-4 bg-slate-500 rounded-xl" id="projects">
        <h2 class="text-xl font-medium text-orange-400">Projects</h2>
        <div class="flex justify-center ">
          {projects.map((project) => (
            <ProjectCard project={project} />
          ))}
        </div>
      </section>

      <section class="m-10 p-4 bg-slate-500 rounded-xl flex flex-col" id="contact">
        <h2 class="text-xl font-medium text-orange-400 mb-4">Contact</h2>
        <div class="flex items-center mb-2">
          <img src={mailLogo} alt="Email" width="50" height="50"/>
          <p class="ml-2">wailhakam06@gmail.com</p>
        </div>
        <div class="flex items-center">
          <img src={phoneLogo} alt="Phone" width="50" height="50"/>
          <p class="ml-2">+33 6 95 02 72 99</p>
        </div>
      </section>

      <footer class="m-10">
        <p class="font-medium">&copy; 2024 Wail AMEUR</p>
      </footer>

      {isPopupVisible && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-5 rounded-lg shadow-lg relative">
                        <button
                            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                            onClick={closePopup}
                        >
                            &times;
                        </button>
                        <p>My Discord Username: <strong>.rackam</strong></p>
                    </div>
                </div>
            )}
    </div>
  );
}