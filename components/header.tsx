"use client"
import Link from "next/link";
import { MotionTransition } from "./transition-component";
import "@/app/globals.css";
import LanguageDropdown from "./lang_button";

const Header = () => {
    return (
      <>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <MotionTransition position="bottom" className="absolute z-40 inline-block w-full top-5 md:top-10">
          <div style={{ position: 'absolute', top: 20, right: 20 }}>
            <LanguageDropdown />
          </div>
          <header>
            <div className="container justify-between max-w-6xl mx-auto md:flex">
              <Link href="/">
                <div className="image-container">
                  <img src="logo_grande.png" alt="Logo de la empresa" />
                </div>
              </Link>
            </div>
            <MotionTransition position="bottom" className="absolute z-40 inline-block w-full top-5 md:top-10">
              <div className="container justify-between max-w-6xl mx-auto md:flex">
                <button className="big-grey-button" onClick={() => window.location.href = 'https://discord.gg/5htWutRn'}>
                  <img src="discord.png" alt="image-alt" />
                  <span>Join our Discord!</span>
                </button>
              </div>
            </MotionTransition>
          </header>
        </MotionTransition>
      </>
    );
  };

export default Header;