import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NeonButton from "../components/NeonButton";
import React, {useEffect, useRef, useState} from "react";
import Calculator from "../components/Calculator";
import {motion} from "framer-motion";
import Particles from "react-tsparticles";
// @ts-ignore
import AnimatedNumber from "animated-number-react";
import {InView, useInView} from "react-intersection-observer";
import {ConnectMM} from "../components/ConnectMM";
import {spring} from "popmotion";
import styled from 'styled-components';
import Stacker from "../components/Stacker";
import PlanetCard from "../components/PlanetCard";
import PlanetCardMarketplace from "../components/PlanetCardMarketplace";
import AccountContent from "../components/AccountContent";

const Home: NextPage = () => {
    let spring = "spring" as const

    const [currentTab,setCurrentTab]=useState('dashboard')

  return (
    <div className={styles.container} >
      <Head>
        <title>1 MILLION DAO</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main} >

          <div className={'h-auto w-[100vw] relative block bg-cover bg-[]'} id={'intro'}>

              {/*LEFT-SIDE-MENU*/}

              <Particles
                  id="tsparticles"
                  options={{
                      background: {
                          color: {
                              value: "#000",
                          },
                      },
                      fpsLimit: 1020,
                      interactivity: {
                          events: {
                              onClick: {
                                  enable: false,
                                  mode: "push",
                              },
                              onHover: {
                                  enable: true,
                                  mode: "bounce",
                              },
                              resize: true,
                          },
                          modes: {
                              bubble: {
                                  distance: 400,
                                  duration: 2,
                                  opacity: 0.8,
                                  size: 40,
                              },
                              push: {
                                  quantity: 4,
                              },
                              repulse: {
                                  distance: 200,
                                  duration: 0.4,
                              },
                          },
                      },
                      particles: {
                          number: { value: 160, density: { enable: true, value_area: 800 } },
                          color: { value: "#ffffff" },
                          shape: {
                              type: "circle",
                              stroke: { width: 0, color: "#000000" },
                              polygon: { nb_sides: 5 },
                              image: { src: "img/github.svg", width: 100, height: 100 },
                          },
                          opacity: {
                              value: 1,
                              random: true,
                              anim: { enable: true, speed: 1, opacity_min: 0, sync: false },
                          },
                          size: {
                              value: 3,
                              random: true,
                              anim: { enable: false, speed: 4, size_min: 0.3, sync: false },
                          },
                          line_linked: {
                              enable: false,
                              distance: 150,
                              color: "#ffffff",
                              opacity: 0.4,
                              width: 1,
                          },
                          move: {
                              enable: true,
                              speed: 1,
                              direction: "none",
                              random: true,
                              straight: false,
                              out_mode: "out",
                              bounce: false,
                              attract: { enable: false, rotateX: 600, rotateY: 600 },
                          },
                      },
                      detectRetina: true,
                  }}
                  className={'w-full z-[1] h-full'} />

              <div className={'flex-wrap h-[100vh] bg-cover bg-[url("../public/images/account/account_tabs.png")] top-0 fixed z-[9999] w-[25%] inline-flex justify-center justify-items-center align-top p-[3vw]'}>
                  <div className={'w-full cursor-pointer h-[4vw] block relative '} onClick={()=>{setCurrentTab('dashboard')}}>
                      {currentTab=='dashboard'?
                          <div className={'w-full h-full'}>
                              <div className={'account-tab-active w-[90%] rounded-full h-full text-center text-[1.6vw] leading-[200%] text-white font-gilroy font-medium absolute inline-block right-0 '}>
                                  Dashboard
                              </div>
                              <div className={'w-[3vw] h-[3vw] mx-[0.5vw] my-[0.5vw] absolute inline-block left-0'}>
                                  <Image src={'/images/account/dashboard_active.svg'} layout={'fill'}></Image>
                              </div>
                          </div>
                          :
                          <div className={'w-full h-full'}>
                              <div className={'w-[90%] rounded-full h-full text-center text-[1.6vw] leading-[200%] text-white font-gilroy font-medium absolute inline-block right-0 '}>
                                  Dashboard
                              </div>
                              <div className={'w-[3vw] h-[3vw] mx-[0.5vw] my-[0.5vw] absolute inline-block left-0'}>
                                  <Image src={'/images/account/dashboard.svg'} layout={'fill'}></Image>
                              </div>
                          </div>
                      }
                  </div>
                  <div className={'w-full cursor-pointer h-[4vw] block relative '} onClick={()=>{setCurrentTab('account')}}>
                      {currentTab=='account'?
                          <div className={'w-full h-full'}>
                              <div className={'account-tab-active w-[90%] rounded-full h-full text-center text-[1.6vw] leading-[200%] text-white font-gilroy font-medium absolute inline-block right-0 '}>
                                  Account
                              </div>
                              <div className={'w-[3vw] h-[3vw] mx-[0.5vw] my-[0.5vw] absolute inline-block left-0'}>
                                  <Image src={'/images/account/account_active.svg'} layout={'fill'}></Image>
                              </div>
                          </div>
                          :
                          <div className={'w-full h-full'}>
                              <div className={'w-[90%] rounded-full h-full text-center text-[1.6vw] leading-[200%] text-white font-gilroy font-medium absolute inline-block right-0 '}>
                                  Account
                              </div>
                              <div className={'w-[3vw] h-[3vw] mx-[0.5vw] my-[0.5vw] absolute inline-block left-0'}>
                                  <Image src={'/images/account/account.svg'} layout={'fill'}></Image>
                              </div>
                          </div>
                      }
                  </div>
                  <div className={'w-full cursor-pointer h-[4vw] block relative '} onClick={()=>{setCurrentTab('calculator')}}>
                      {currentTab=='calculator'?
                          <div className={'w-full h-full'}>
                              <div className={'account-tab-active w-[90%] rounded-full h-full text-center text-[1.6vw] leading-[200%] text-white font-gilroy font-medium absolute inline-block right-0 '}>
                                  Calculator
                              </div>
                              <div className={'w-[3vw] h-[3vw] mx-[0.5vw] my-[0.5vw] absolute inline-block left-0'}>
                                  <Image src={'/images/account/calculator_active.svg'} layout={'fill'}></Image>
                              </div>
                          </div>
                          :
                          <div className={'w-full h-full'}>
                              <div className={'w-[90%] rounded-full h-full text-center text-[1.6vw] leading-[200%] text-white font-gilroy font-medium absolute inline-block right-0 '}>
                                  Calculator
                              </div>
                              <div className={'w-[3vw] h-[3vw] mx-[0.5vw] my-[0.5vw] absolute inline-block left-0'}>
                                  <Image src={'/images/account/calculator.svg'} layout={'fill'}></Image>
                              </div>
                          </div>
                      }
                  </div>
                  <div className={'w-full cursor-pointer h-[4vw] block relative '} onClick={()=>{setCurrentTab('swap')}}>
                      {currentTab=='swap'?
                          <div className={'w-full h-full'}>
                              <div className={'account-tab-active w-[90%] rounded-full h-full text-center text-[1.6vw] leading-[200%] text-white font-gilroy font-medium absolute inline-block right-0 '}>
                                  Swap
                              </div>
                              <div className={'w-[3vw] h-[3vw] mx-[0.5vw] my-[0.5vw] absolute inline-block left-0'}>
                                  <Image src={'/images/account/swap_active.svg'} layout={'fill'}></Image>
                              </div>
                          </div>
                          :
                          <div className={'w-full h-full'}>
                              <div className={'w-[90%] rounded-full h-full text-center text-[1.6vw] leading-[200%] text-white font-gilroy font-medium absolute inline-block right-0 '}>
                                  Swap
                              </div>
                              <div className={'w-[3vw] h-[3vw] mx-[0.5vw] my-[0.5vw] absolute inline-block left-0'}>
                                  <Image src={'/images/account/swap.svg'} layout={'fill'}></Image>
                              </div>
                          </div>
                      }
                  </div>
                  <div className={'w-full cursor-pointer h-[4vw] block relative '} onClick={()=>{setCurrentTab('docs')}}>
                      {currentTab=='docs'?
                          <div className={'w-full h-full'}>
                              <div className={'account-tab-active w-[90%] rounded-full h-full text-center text-[1.6vw] leading-[200%] text-white font-gilroy font-medium absolute inline-block right-0 '}>
                                  Docs
                              </div>
                              <div className={'w-[3vw] h-[3vw] mx-[0.5vw] my-[0.5vw] absolute inline-block left-0'}>
                                  <Image src={'/images/account/docs_active.svg'} layout={'fill'}></Image>
                              </div>
                          </div>
                          :
                          <div className={'w-full h-full'}>
                              <div className={'w-[90%] rounded-full h-full text-center text-[1.6vw] leading-[200%] text-white font-gilroy font-medium absolute inline-block right-0 '}>
                                  Docs
                              </div>
                              <div className={'w-[3vw] h-[3vw] mx-[0.5vw] my-[0.5vw] absolute inline-block left-0'}>
                                  <Image src={'/images/account/docs.svg'} layout={'fill'}></Image>
                              </div>
                          </div>
                      }
                  </div>
                  <div className={'w-full cursor-pointer h-[4vw] block relative '} onClick={()=>{setCurrentTab('marketplace')}}>
                      {currentTab=='marketplace'?
                          <div className={'w-full h-full'}>
                              <div className={'account-tab-active w-[90%] rounded-full h-full text-center text-[1.6vw] leading-[200%] text-white font-gilroy font-medium absolute inline-block right-0 '}>
                                  Marketplace
                              </div>
                              <div className={'w-[3vw] h-[3vw] mx-[0.5vw] my-[0.5vw] absolute inline-block left-0'}>
                                  <Image src={'/images/account/marketplace_active.svg'} layout={'fill'}></Image>
                              </div>
                          </div>
                          :
                          <div className={'w-full h-full'}>
                              <div className={'w-[90%] rounded-full h-full text-center text-[1.6vw] leading-[200%] text-white font-gilroy font-medium absolute inline-block right-0 '}>
                                  Marketplace
                              </div>
                              <div className={'w-[3vw] h-[3vw] mx-[0.5vw] my-[0.5vw] absolute inline-block left-0'}>
                                  <Image src={'/images/account/marketplace.svg'} layout={'fill'}></Image>
                              </div>
                          </div>
                      }
                  </div>
                  <div className={'w-full cursor-pointer h-[4vw] flex justify-around relative '} onClick={()=>{setCurrentTab('swap')}}>
                      <div className={'w-[3vw] relative inline-block h-[3vw]'}>
                          <Image src={'/images/account/twitter.svg'} layout={'fill'}></Image>
                      </div>
                      <div className={'w-[3vw] relative inline-block h-[3vw]'}>
                          <Image src={'/images/account/discord.svg'} layout={'fill'}></Image>
                      </div>
                      <div className={'w-[3vw] relative inline-block h-[3vw]'}>
                          <Image src={'/images/account/telegram.svg'} layout={'fill'}></Image>
                      </div>
                  </div>

              </div>
              <div className={'h-full w-[100%] z-[999] overflow-y-visible inline-flex justify-center align-top p-[3vw]'}>
                  <AccountContent currentTab={currentTab}></AccountContent>
              </div>

          </div>

      </main>

      <footer className={styles.footer}>
          <div className={'w-[98vw] h-[21.25vw] bg-[#000] relative block'}>
              {/*<p className={'absolute inline-block top-[4.2vw] left-[12.6vw] text-[1.46vw] text-white font-gilroy font-semibold'}>THE WEB 3 PROJECT</p>*/}
              {/*<p className={'absolute inline-block top-[7.5vw] left-[12.6vw] w-[22vw] text-[1.07vw] text-white font-gilroy font-light'}>Accelerating the transition to a WEB3 world.*/}
              {/*    It is your data, and only yours.</p>*/}

              <p className={'absolute inline-block top-[4.2vw] left-[39vw] text-[1.2vw] text-white font-gilroy font-[400]'}>MENU</p>

              <a className={'absolute inline-block top-[7.7vw] left-[39vw] text-[1.1vw] text-white font-gilroy font-[400]'}>Home</a>
              <a className={'absolute inline-block top-[9.9vw] left-[39vw] text-[1.1vw] text-white font-gilroy font-[400]'}>Our Ecosystem</a>
              <a className={'absolute inline-block top-[12.1vw] left-[39vw] text-[1.1vw] text-white font-gilroy font-[400]'}>Roadmap</a>
              <a className={'absolute inline-block top-[14.3vw] left-[39vw] text-[1.1vw] text-white font-gilroy font-[400]'}>Contact</a>
              <a className={'absolute inline-block top-[16.5vw] left-[39vw] text-[1.1vw] text-white font-gilroy font-[400]'}>Whitepaper</a>


              <p className={'absolute inline-block top-[4.2vw] left-[54vw] text-[1.2vw] text-white font-gilroy font-[400]'}>FOLLOW US</p>

              <a className={'absolute inline-block top-[7.7vw] left-[54vw] text-[1.1vw] text-white font-gilroy font-[400]'}>Telegram</a>
              <a className={'absolute inline-block top-[9.9vw] left-[54vw] text-[1.1vw] text-white font-gilroy font-[400]'}>Discord</a>
              <a className={'absolute inline-block top-[12.1vw] left-[54vw] text-[1.1vw] text-white font-gilroy font-[400]'}>Twitter</a>



              <p className={'absolute inline-block top-[4.2vw] left-[69vw] text-[1.2vw] text-white font-gilroy font-[400]'}>CONTACT US</p>

              <a className={'absolute inline-block top-[7.7vw] left-[69vw] text-[1.1vw] text-white font-gilroy font-[400]'}>social@1milliondao.com</a>


              <p className={'absolute inline-block top-[18vw] left-[12.6vw] text-[1vw] text-[#464199] font-gilroy font-[400]'}>1 Million Dao © 2022 </p>
              <p className={'absolute inline-block top-[18vw] left-[69vw] text-[1vw] text-[#464199] font-gilroy font-[400]'}>Powered by Binance Smart Chain</p>



          </div>
      </footer>
    </div>
  )
};

export default Home
