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
import Swiper from "../components/Swiper";



const Parallax = styled.div<{xPosition: string, yPosition:string}>`
  left: ${props => props.xPosition};
  top: ${props => props.yPosition};
`

const Home: NextPage = () => {
    const [apyValue,setApyValue]=useState(0);
    const [apyDuration,setApyDuration]=useState(1500);
    const { ref, inView, entry, } = useInView();

    let spring = "spring" as const

  return (
    <div className={styles.container} >
      <Head>
        <title>1 MILLION DAO</title>
        <meta name="description" content="PERFECT AUTO STACKING PROTOCOL" />
        <link rel="icon" href="/favicon.ico" />
          <link
              rel="preload"
              href="/images/loading.png"
              as="image"
              crossOrigin=""
          />
          <link
              rel="preload"
              href="/images/logodao.svg"
              as="image"
              crossOrigin=""
          />
          <link
              rel="preload"
              href="/images/graphic.svg"
              as="image"
              crossOrigin=""
          />
          <link
              rel="preload"
              href="/images/galactic1.png"
              as="image"
              crossOrigin=""
          />
          <link
              rel="preload"
              href="/images/galactic2.png"
              as="image"
              crossOrigin=""
          />
          <link
              rel="preload"
              href="/images/galactic3.png"
              as="image"
              crossOrigin=""
          />
          <link
              rel="preload"
              href="/images/planet1.png"
              as="image"
              crossOrigin=""
          />
          <link
              rel="preload"
              href="/images/planet2.png"
              as="image"
              crossOrigin=""
          />
          <link
              rel="preload"
              href="/images/partners_planet.png"
              as="image"
              crossOrigin=""
          />
          <link
              rel="preload"
              href="/images/stakemoon.png"
              as="image"
              crossOrigin=""
          />
          <link
              rel="preload"
              href="/images/planets/1.png"
              as="image"
              crossOrigin=""
          />
          <link
              rel="preload"
              href="/images/planets/2.png"
              as="image"
              crossOrigin=""
          />
          <link
              rel="preload"
              href="/images/planets/3.png"
              as="image"
              crossOrigin=""
          />
          <link
              rel="preload"
              href="/images/planets/4.png"
              as="image"
              crossOrigin=""
          />
          <link
              rel="preload"
              href="/images/metaverse/metaverse1.mp4"
              as="video"
              crossOrigin=""
          />
          <link
              rel="preload"
              href="/images/metaverse/metaverse2.mp4"
              as="video"
              crossOrigin=""
          />
          <link
              rel="preload"
              href="/images/metaverse/metaverse3.mp4"
              as="video"
              crossOrigin=""
          />
          <link
              rel="preload"
              href="/images/metaverse/metaverse4.mp4"
              as="video"
              crossOrigin=""
          />

      </Head>

      <main className={styles.main}>


          {/*MENU*/}
          BUY $TOKEN

          <motion.div initial="hidden"
                      animate={'visible'}
                      transition={{ type:"tween",duration: 1, delay:0.3,}}
                      variants={{
                          visible: { opacity: 1, y:0 },
                          hidden: { opacity: 0, y:-200 }
                      }} className={'z-[9999] w-full fixed top-0 left-0 menu-bg h-[6vw]'}>
              <div className={'z-[9999] cursor-pointer fixed inline-flex left-[14vw] top-[-1vw] w-[14vw] h-[7vw]'}>
                  <Image src={'/images/logodao.svg'} layout={'fill'}></Image>
              </div>
              <div className={'z-[9999] justify-between justify-items-center items-center w-[38.4vw] h-[2vw] fixed inline-flex left-[29.7vw] top-[1.1vw]'}>
                  <a className={'cursor-pointer text-white text-center uppercase text-[1.2vw] font-gilroy font-regular'} href={'#marketplace'}>nft marketplace</a>
                  <a className={'cursor-pointer text-white text-center uppercase text-[1.2vw] font-gilroy font-regular'} href={'#metaverse'}>metaverse</a>
                  <a className={'cursor-pointer text-white text-center uppercase text-[1.2vw] font-gilroy font-regular'} href={'#'}>swap</a>
                  <a className={'cursor-pointer text-white text-center uppercase text-[1.2vw] font-gilroy font-regular'} href={'#teaser'}>TEASER</a>
                  <a className={'cursor-pointer text-white text-center uppercase text-[1.2vw] font-gilroy font-regular'} href={'#dao'}>DAO</a>
              </div>
              <div className={'z-[9999] justify-between justify-items-center items-center w-[28vw] h-[2vw] fixed inline-flex left-[33.6vw] top-[3.1vw]'}>
                  <a className={'cursor-pointer text-white text-center uppercase text-[1.2vw] font-gilroy font-regular'} href={'#stacker'}>Stake</a>
                  <a className={'cursor-pointer text-white text-center uppercase text-[1.2vw] font-gilroy font-regular'} href={'#team'}>TEAM</a>
                  <a className={'cursor-pointer text-white text-center uppercase text-[1.2vw] font-gilroy font-regular'} href={'#roadmap'}>ROADMAP</a>
                  <a className={'cursor-pointer text-white text-center uppercase text-[1.2vw] font-gilroy font-regular'} href={'#partners'}>PARTNERS</a>
              </div>
              <div className={'z-[9999] justify-items-center justify-center items-center fixed inline-flex left-[71.2vw] top-[1.2vw] w-[12.5vw] h-[3.4vw] rounded-full bg-purple'}>
                  <ConnectMM/>
              </div>
              <div className={'font-bold text-white z-[9999] justify-items-center justify-center items-center fixed font-gilroy text-[1.3vw] inline-flex right-[5vw] top-[1.2vw] w-[10vw] h-[3.4vw] rounded-full bg-blue'}>
                  <a href={'/account'}>APP</a>
              </div>
          </motion.div>



          {/*INTRO*/}

          <div className={'w-[100vw] relative block h-[61vw] bg-cover bg-[#000]'} id={'intro'}>
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
                  className={'w-full h-full'} />
              <motion.div initial="hidden"
                          animate={'visible'}
                          transition={{ duration: 80, repeat:Infinity, repeatType:'loop', ease:'linear'}}
                          variants={{
                              visible: { opacity: 1, rotate:0 },
                              hidden: { opacity: 1, rotate:-360 }
                          }} className={'w-[139vw] h-[162vw] absolute inline-block top-[-86vw] left-[-21vw]'}>
                  <Image src={'/images/galactic1.png'} layout={'fill'}></Image>
              </motion.div>
              <div className={' justify-items-center items-center justify-align-center w-[22vw] h-[5.5vw] left-[38vw] top-[9vw] rounded-full absolute inline-flex offer-gradient'}>
                  <h2 className={'animate-pulse w-full text-center text-white font-gilroy font-extrabold text-[2.2vw]'}>1 041 035% APY</h2>
              </div>
              <p className={' animate-pulse text-left text-white font-gilroy font-normal text-[1.2vw] w-[22vw] h-[5.5vw] left-[41vw] top-[15vw] absolute inline-flex '}>
                  rebase function block per block
              </p>
              {/*<motion.div className={'absolute inline-block left-0 bottom-0'} ></motion.div>*/}
              <div className={'w-[28vw] h-[28vw] absolute inline-block bottom-[13vw] left-[16vw]'}>
                  <Image src={'/images/phone.png'} layout={'fill'}></Image>
              </div>
              <div className={'cursor-pointer z-[8000] left-[14.4vw] top-[37vw] w-[8.7vw] h-[2.3vw] absolute inline-block'}>
                  <Image src={'/images/appstore.png'} layout={'fill'}></Image>
              </div>
              <div className={'cursor-pointer z-[8000] left-[14.4vw] top-[40vw] w-[8.7vw] h-[2.3vw] absolute inline-block'}>
                  <Image src={'/images/googleplay.png'} layout={'fill'}></Image>
              </div>
              <motion.h1 className={'tracking-[0.015em] absolute right-[11.5vw] text-[4.72vw] top-[24.8vw] text-right text-white font-gilroy font-black'} initial="hidden"
                         whileInView={'visible'}

                         viewport={{once:true}}
                         transition={{ type:'spring',duration: 1.9, bounce:0.5 , delay:0.3, }}
                         variants={{
                             visible: { opacity: 1, x:0 },
                             hidden: { opacity: 0, x: 200 }
                         }}>STAKE PLAY EARN</motion.h1>
              <motion.h2 className={'absolute right-[11.5vw] text-[2.2vw] top-[22.2vw] text-right text-white font-gilroy font-regular'} initial="hidden"
                  whileInView={'visible'}

                  viewport={{once:true}}
                  transition={{ type:"spring",duration: 1.0, bounce:0.1 , delay:0.9, }}
                  variants={{
                      visible: { opacity: 1, y:0 },
                      hidden: { opacity: 0, y: 50 }
                  }}>First DeFi & Metaverse platform</motion.h2>
              <a href={'#stacker'}><motion.div className={'cursor-pointer absolute inline-block left-[48vw] top-[33.4vw] w-[14.5vw] h-[3.6vw] text-[1.7vw] rounded-[20px]'} initial="hidden"
                   whileInView={'visible'}

                   viewport={{once:true}}
                   transition={{ type:"spring",duration: 1.4, bounce:0.6 , delay:1.6,}}
                   variants={{
                       visible: { opacity: 1, y:0 },
                       hidden: { opacity: 0, y: -50 }
                   }}>
                  <NeonButton title={'Stake $Token'}></NeonButton>
              </motion.div></a>
              <a href={'#metaverse'}><motion.div className={'cursor-pointer absolute inline-block left-[64vw] top-[33.4vw] w-[12.4vw] h-[3.6vw] text-[1.7vw] rounded-[20px]'} initial="hidden"
                   whileInView={'visible'}

                   viewport={{once:true}}
                   transition={{ type:"spring",duration: 1.4, bounce:0.6 , delay:1.4,}}
                   variants={{
                       visible: { opacity: 1, y:0 },
                       hidden: { opacity: 0, y: -50 }
                   }}>
                  <NeonButton title={'Metaverse'}></NeonButton>
              </motion.div></a>
              <a href={'#marketplace'}><motion.div className={'cursor-pointer absolute inline-block left-[78.2vw] top-[33.4vw] w-[8.2vw] h-[3.6vw] text-[1.7vw] rounded-[20px]'} initial="hidden"
                   whileInView={'visible'}

                   viewport={{once:true}}
                   transition={{ type:"spring",duration: 1.4, bounce:0.6 , delay:1.2,}}
                   variants={{
                       visible: { opacity: 1, y:0 },
                       hidden: { opacity: 0, y: -50 }
                   }}>
                  <NeonButton title={'NFT'}></NeonButton>
              </motion.div></a>
              <motion.div className={'cursor-pointer absolute inline-block left-[50.7vw] top-[38.6vw] w-[8.2vw] h-[3.6vw] text-[1.7vw] rounded-[20px]'} initial="hidden"
                   whileInView={'visible'}

                   viewport={{once:true}}
                   transition={{ type:"spring",duration: 1.4, bounce:0.6 , delay:1.8,}}
                   variants={{
                       visible: { opacity: 1, y:0 },
                       hidden: { opacity: 0, y: -50 }
                   }}>
                  <NeonButton title={'DEX'}></NeonButton>
              </motion.div>
              <a href={'#dao'}><motion.div className={'cursor-pointer absolute inline-block left-[61.1vw] top-[38.6vw] w-[8vw] h-[3.6vw] text-[1.7vw] rounded-[20px]'} initial="hidden"
                   whileInView={'visible'}

                   viewport={{once:true}}
                   transition={{ type:"spring",duration: 1.4, bounce:0.6 , delay:2,}}
                   variants={{
                       visible: { opacity: 1, y:0 },
                       hidden: { opacity: 0, y: -50 }
                   }}>
                  <NeonButton title={'DAO'}></NeonButton>
              </motion.div></a>
              <a href={'#teaser'}><motion.div className={'cursor-pointer absolute inline-block left-[71.5vw] top-[38.6vw] w-[13.5vw] h-[3.6vw] text-[1.7vw] rounded-[20px]'} initial="hidden"
                   whileInView={'visible'}

                   viewport={{once:true}}
                   transition={{ type:"spring",duration: 1.4, bounce:0.6 , delay:2.2,}}
                   variants={{
                       visible: { opacity: 1, y:0 },
                       hidden: { opacity: 0, y: -50 }
                   }}>
                  <NeonButton title={'Play-2-Earn'}></NeonButton>
              </motion.div></a>
              <div className={'cursor-pointer w-[2.3vw] h-[2.3vw] bottom-[15.4vw] left-[14.45vw] absolute inline-block'}>
                  <Image src={'/images/twitter.svg'} layout={'fill'}></Image>
              </div>
              <div className={'cursor-pointer w-[2.3vw] h-[2.5vw] bottom-[15.4vw] left-[17.45vw] absolute inline-block'}>
                  <Image src={'/images/discord.svg'} layout={'fill'}></Image>
              </div>
              <div className={'cursor-pointer w-[2.3vw] h-[2.3vw] bottom-[15.4vw] left-[20.5vw] absolute inline-block'}>
                  <Image src={'/images/telegram.svg'} layout={'fill'}></Image>
              </div>
          </div>


          {/*STACKING*/}

          <div className={'w-[100vw] relative block h-[52.5vw] bg-cover bg-[]'} id={'release'} >
              <motion.div
                  initial="hidden"
                  animate={'visible'}
                  transition={{ type:"tween",duration: 4, repeat:Infinity, repeatType:'reverse'}}
                  variants={{
                      visible: { opacity: 1, scale:1 },
                      hidden: { opacity: 1, scale:0.9 }
                  }}
                  className={' left-[-8vw] top-[6.3vw] w-[41vw] h-[41vw] rounded-full bg-[#000] absolute inline-block'}>
                  <Image src={'/images/planet1.png'} layout={'fill'}></Image>
              </motion.div>
              <motion.div className={'left-[18vw] top-[5vw] w-[64vw] h-[3.5vw] absolute inline-block'}>
                  <Image src={'/images/release.svg'} layout={'fill'}></Image>
              </motion.div>

              <motion.div initial="hidden"
                          whileInView={'visible'}
                          viewport={{once:true}}
                          transition={{ type:"spring",duration: 1, delay:0.3, bounce:0.6 ,}}
                          variants={{
                              visible: { opacity: 1, y:0 },
                              hidden: { opacity: 0, y:100 }
                          }}>
                  <p className={'tracking-[0.015em] absolute left-[21.6vw] text-[4.5vw] top-[14vw] text-right text-white font-gilroy font-bold'}>1 041 035%</p>
              </motion.div>


              {/*<h2 className={'tracking-[0.015em] absolute left-[21.6vw] text-[4.5vw] top-[14vw] text-right text-white font-gilroy font-bold'}>383,025.80%</h2>*/}
              <motion.h2 initial="hidden"
                         whileInView={'visible'}
                         viewport={{once:true}}
                         transition={{ type:"spring",duration: 1.5, delay:0.3, bounce:0.6 ,}}
                         variants={{
                             visible: { opacity: 1, y:0 },
                             hidden: { opacity: 0, y:100 }
                         }}  className={'absolute left-[25vw] text-[2.2vw] top-[20.5vw] text-right text-white font-gilroy font-regular'}>Fixed Staking APY</motion.h2>



              <motion.div initial="hidden"
                          whileInView={'visible'}
                          viewport={{once:true}}
                          transition={{ type:"spring",duration: 1, delay:0.3, bounce:0.6 ,}}
                          variants={{
                              visible: { opacity: 1, y:0 },
                              hidden: { opacity: 0, y:100 }
                          }} className={'cursor-pointer w-[9.1vw] h-[3.7vw] left-[21.7vw] top-[25.6vw] rounded-full text-in-shape absolute inline-flex offer-purple'}>
                  <p className={'text-white font-gilroy font-semibold text-[1.7vw]'}>AUDIT</p>
              </motion.div>


              {/*<div className={'cursor-pointer offer-gradient w-[15.5vw] h-[3.7vw] left-[31.5vw] top-[25.6vw] rounded-full text-in-shape absolute inline-flex'}>*/}
              {/*    <p className={'text-white font-gilroy font-semibold text-[1.7vw]'}>WHITEPAPER</p>*/}
              {/*</div>*/}

              {/*<div className={'cursor-pointer bg-purple w-[16.7vw] h-[4.5vw] left-[32vw] top-[40.9vw] rounded-full text-in-shape absolute inline-flex'}>*/}
              {/*    <p className={'text-white font-gilroy font-semibold text-[1.7vw]'}>BUY $TOKEN</p>*/}
              {/*</div>*/}

              <a href={'#calculator'}><motion.div initial="hidden"
                          whileInView={'visible'}
                          viewport={{once:true}}
                          transition={{ type:"spring",duration: 1.5, delay:0.3, bounce:0.6 ,}}
                          variants={{
                              visible: { opacity: 1, y:0 },
                              hidden: { opacity: 0, y:100 }
                          }} className={'cursor-pointer bg-blue w-[17.1vw] h-[4.5vw] left-[51.2vw] top-[40.9vw] rounded-full text-in-shape absolute inline-flex'}>
                  <p className={'text-white font-gilroy font-semibold text-[1.7vw]'}>CALCULATOR</p>
              </motion.div></a>

              <div className={'absolute inline-block rotate-180 left-[20.2vw] top-[34.3vw]  w-[59.7vw] h-[4.3vw] rounded-full'}>
                  <div className={'w-[inherit] h-[inherit] relative flex items-center justify-items-center justify-center rounded-[inherit]'}>
                    <div className={'z-[4] w-[99.5%] absolute flex h-[99.5%] rounded-[inherit] border-white border-solid border-[1px] m-[0.5%]'}></div>
                    <div className={'relative inline-block flex justify-center justify-items-center blur-[1px] rounded-[inherit] h-full w-full'}>
                      <div className={'z-[1] absolute w-full h-full border-[3px] rounded-[inherit] neon-border'}></div>
                    </div>
                  </div>
              </div>
              <div className={'absolute inline-block left-[20.2vw] top-[34.8vw]  w-[59.7vw] h-[3.0vw] rounded-full'}>
                  {/*<Image src={'/images/formul.svg'} layout={'fill'}></Image>*/}
                  <p className={'text-white font-gilroy text-center font-semibold text-[2vw]'}>block per block 0,000088%</p>
              </div>

              <motion.div  className={'w-[32vw] h-[22vw] left-[50vw] top-[11vw] absolute inline-block'}>
                  <Image src={'/images/graphic.svg'} layout={'fill'}></Image>
              </motion.div>

          </div>

          {/*CALCULATOR*/}

          <motion.div  className={'w-[100vw] relative block h-[57vw] bg-cover bg-[]'} id={'calculator'}>
              <motion.div initial="hidden"
                          whileInView={'visible'}
                          viewport={{once:true}}
                          transition={{ duration: 1, delay:0.3, ease:'easeInOut'}}
                          variants={{
                              visible: { opacity: 1, scale:1 },
                              hidden: { opacity: 0, scale:0.8 }
                          }} className={'w-[100vw] z-50 absolute top-0 block h-[57vw]'}>
                  <Calculator></Calculator>
              </motion.div>

          </motion.div>


          {/*STACKER*/}

          <motion.div  className={'w-[100vw] relative block h-[64.65vw] bg-[]'} id={'stacker'}>
              <div className={'w-[56vw] right-[-6vw] top-[8vw] h-[56vw] absolute inline-block'}>
                  <Image src={'/images/stakemoon.png'} layout={'fill'}></Image>
              </div>
              <motion.div className={'w-[100vw] z-50 absolute top-0 block h-[57vw]'}>
                  <h2 className={'w-[60%] mx-[20%] text-center text-[3.45vw] text-white font-gilroy font-semibold leading-[100%] mt-[3vw] uppercase'}><strong>Stake your $token</strong><br/>to earn $bnb</h2>
                  <div className={'justify-center absolute w-[32.3vw] h-[36vw] flex top-[4vw] left-[34vw] top-[13.6vw]'}>
                      <div className={'neon-border border-4 rounded-[1vw] w-full h-full absolute'}></div>
                      <div className={'border-white border-2 rounded-[1vw] w-[99.7%] h-[99.7%] absolute'}></div>
                      <div className={'w-[98%] mt-[6%] h-[98%] absolute'}>
                          <Stacker></Stacker>
                      </div>
                  </div>
                  <div className={'w-[9vw] h-[6vw] top-[50vw] left-[30vw] absolute inline-block'}>
                      <Image src={'/images/30procents.svg'} layout={'fill'}></Image>
                  </div>
                  <p className={'w-[8vw] absolute inline-block top-[50vw] text-[1.6vw] w-[31.2vw] left-[40vw] text-white font-gilroy font-medium'}>from all BNB collected on Pinksale presale will be distributed in $BNB Rewards pool</p>
                  {/*<button className={'absolute w-[14.7vw] h-[4vw] top-[57vw] left-[34vw] text-[1.5vw] bg-purple text-white rounded-full font-gilroy font-bold'}>BUY $TOKEN</button>*/}
                  <button className={'absolute w-[14.7vw] h-[4vw] top-[57vw] left-[51vw] text-[1.5vw] bg-blue text-white rounded-full font-gilroy font-bold'}>LEARN MORE</button>
              </motion.div>

          </motion.div>


          {/*BNB*/}

          <div className={'w-[100vw] relative block h-[41.25vw] bg-[]'} id={'bnb'}>
              <motion.div initial="hidden"
                          whileInView={'visible'}
                          viewport={{once:true}}
                          transition={{ type:"spring",duration: 1.5, delay:0.3, bounce:0.6 ,}}
                          variants={{
                              visible: { opacity: 1, scale:1 },
                              hidden: { opacity: 0, scale:0.8 }
                          }} className={'left-[20vw] top-[7vw] w-[59.9vw] text-in-shape h-[6vw] absolute inline-flex '}>
                  <div className={'w-full h-full neon-border border-[2px] rounded-full'}></div>
                  <motion.h2 initial="hidden"
                             whileInView={'visible'}
                             viewport={{once:true}}
                             transition={{ duration: 1, repeat:Infinity, repeatType:"reverse",ease:'easeInOut'}}
                             variants={{
                                 visible: { opacity: 1,},
                                 hidden: { opacity: 0.6, }
                             }} className={'text-white inline-block absolute text-center text-[2.3vw] font-gilroy font-medium'}>$BNB distribution offer closing Pinksale presale</motion.h2>
              </motion.div>
              <motion.h2 initial="hidden"
                         whileInView={'visible'}
                         viewport={{once:true}}
                         transition={{ type:"spring",duration: 1.5, delay:0.3, bounce:0.6 ,}}
                         variants={{
                             visible: { opacity: 1, y:0 },
                             hidden: { opacity: 0, y:-100 }
                         }} className={'text-white font-gilroy font-black absolute inline-block uppercase left-[36.4vw] top-[15.8vw] text-[3.37vw]'}>$BNB collected</motion.h2>
              <motion.div initial="hidden"
                          whileInView={'visible'}
                          viewport={{once:true}}
                          transition={{ type:"spring",duration: 1.5, delay:0.9, bounce:0.6 ,}}
                          variants={{
                              visible: { opacity: 1, x:0 },
                              hidden: { opacity: 0, x:50 }
                          }} className={'w-[9vw] left-[27vw] top-[18vw] h-[5vw] absolute inline-block'}>
                  <Image src={'/images/corner_left.svg'} layout={'fill'}></Image>
              </motion.div>
              <motion.div initial="hidden"
                          whileInView={'visible'}
                          viewport={{once:true}}
                          transition={{ type:"spring",duration: 1.5, delay:1.3, bounce:0.6 ,}}
                          variants={{
                              visible: { opacity: 1, y:0 },
                              hidden: { opacity: 0, y:-50 }
                          }} className={'w-[1vw] left-[48.1vw] top-[20vw] h-[7vw] absolute inline-block'}>
                  <Image src={'/images/corner_bottom.svg'} layout={'fill'}></Image>
              </motion.div>
              <motion.div initial="hidden"
                        whileInView={'visible'}
                        viewport={{once:true}}
                        transition={{ type:"spring",duration: 1.5, delay:1.7, bounce:0.6 ,}}
                        variants={{
                            visible: { opacity: 1, x:0 },
                            hidden: { opacity: 0, x:-50 }
                        }} className={'w-[7.4vw] left-[64vw] top-[18vw] h-[5vw] absolute inline-block'}>
                  <Image src={'/images/corner_right.svg'} layout={'fill'}></Image>
              </motion.div>
              <motion.p initial="hidden"
                        whileInView={'visible'}
                        viewport={{once:true}}
                        transition={{ type:"spring",duration: 1.5, delay:0.9, bounce:0.6 ,}}
                        variants={{
                            visible: { opacity: 1, x:0 },
                            hidden: { opacity: 0, x:50 }
                        }} className={'font-semibold text-semiblue top-[22vw] left-[23.8vw] inline-block absolute text-center text-[3.8vw] font-gilroy '}>60%</motion.p>
              <motion.p initial="hidden"
                        whileInView={'visible'}
                        viewport={{once:true}}
                        transition={{ type:"spring",duration: 1.5, delay:1.3, bounce:0.6 ,}}
                        variants={{
                            visible: { opacity: 1, y:0 },
                            hidden: { opacity: 0, y:-50 }
                        }} className={'font-semibold text-semiblue top-[27vw] left-[45.6vw] inline-block absolute text-center text-[3.8vw] font-gilroy '}>10%</motion.p>
              <motion.p initial="hidden"
                        whileInView={'visible'}
                        viewport={{once:true}}
                        transition={{ type:"spring",duration: 1.5, delay:1.7, bounce:0.6 ,}}
                        variants={{
                            visible: { opacity: 1, x:0 },
                            hidden: { opacity: 0, x:-50 }
                        }} className={'font-semibold text-semiblue top-[22vw] left-[68.5vw] inline-block absolute text-center text-[3.8vw] font-gilroy '}>30%</motion.p>

              <motion.p initial="hidden"
                        whileInView={'visible'}
                        viewport={{once:true}}
                        transition={{ type:"spring",duration: 1.5, delay:0.9, bounce:0.6 ,}}
                        variants={{
                            visible: { opacity: 1, x:0 },
                            hidden: { opacity: 0, x:50 }
                        }} className={'font-medium uppercase text-white top-[26.4vw] left-[23.8vw] inline-block absolute text-center text-[2.1vw] font-gilroy '}>liquidity</motion.p>
              <motion.p initial="hidden"
                        whileInView={'visible'}
                        viewport={{once:true}}
                        transition={{ type:"spring",duration: 1.5, delay:1.3, bounce:0.6 ,}}
                        variants={{
                            visible: { opacity: 1, y:0 },
                            hidden: { opacity: 0, y:-50 }
                        }} className={'font-medium uppercase text-white top-[31.4vw] left-[45.6vw] inline-block absolute text-center text-[2.1vw] font-gilroy '}>team%</motion.p>
              <motion.p initial="hidden"
                        whileInView={'visible'}
                        viewport={{once:true}}
                        transition={{ type:"spring",duration: 1.5, delay:1.7, bounce:0.6 ,}}
                        variants={{
                            visible: { opacity: 1, x:0 },
                            hidden: { opacity: 0, x:-50 }
                        }} className={'leading-[111%] font-medium uppercase text-white top-[27.4vw] left-[60.5vw] inline-block absolute text-right w-[15vw] text-[1.8vw] font-gilroy '}>$BNB staking rewards pool</motion.p>

          </div>



          {/*MARKETPLACE*/}


          <div className={'w-[100vw] relative block  h-[71.6vw] bg-cover bg-[]'} id={'marketplace'}>
              <h2 className={'absolute top-[6vw] left-[29vw] inline-block text-white font-gilroy font-bold text-[5.1vw]'}>NFT MARKETPLACE</h2>
              <p className={'absolute top-[15vw] left-[32vw] inline-block text-white font-gilroy font-medium uppercase text-[2vw]'}>NFT Boosters for <strong>$BNB</strong> Rewards pool</p>
              <div className={'left-[12vw] top-[20vw] w-[79vw] h-[37vw] absolute inline-block] neon-border rounded-[2vw] border-4 '}></div>
              <div className={'left-[12vw] top-[20vw] w-[79vw] h-[30vw] absolute inline-block] '}>
                  <div className={'justify-around top-[3vw] flex absolute bottom-0 w-full h-[70%]'}>
                      <div className={'w-[20%] h-full relative'}>
                          <PlanetCardMarketplace cost={0.5} planetName={'X-3121'} image={'/images/planets/1.png'} apyIncrease={3} ></PlanetCardMarketplace>
                          <button className={' w-[75%] mx-[12.5%] mt-[4vw] h-[3.5vw] text-[1.8vw] bg-blue text-white rounded-full font-gilroy font-bold'}>BUY</button>
                      </div>
                      <div className={'w-[20%] h-full relative'}>
                          <PlanetCardMarketplace cost={1} planetName={'Y-8265'} image={'/images/planets/2.png'} apyIncrease={6}></PlanetCardMarketplace>
                          <button className={' w-[75%] mx-[12.5%] mt-[4vw] h-[3.5vw] text-[1.8vw] bg-blue text-white rounded-full font-gilroy font-bold'}>BUY</button>
                      </div>
                      <div className={'w-[20%] h-full relative'}>
                          <PlanetCardMarketplace cost={1.5} planetName={'Zyx-3512'} image={'/images/planets/3.png'} apyIncrease={9}></PlanetCardMarketplace>
                          <button className={' w-[75%] mx-[12.5%] mt-[4vw] h-[3.5vw] text-[1.8vw] bg-blue text-white rounded-full font-gilroy font-bold'}>BUY</button>
                      </div>
                      <div className={'w-[20%] h-full relative'}>
                          <PlanetCardMarketplace cost={2} planetName={'UMY-1010'} image={'/images/planets/4.png'} apyIncrease={12}></PlanetCardMarketplace>
                          <button className={' w-[75%] mx-[12.5%] mt-[4vw] h-[3.5vw] text-[1.8vw] bg-blue text-white rounded-full font-gilroy font-bold'}>BUY</button>
                      </div>
                  </div>



              </div>
          </div>



          {/*METAVERSE*/}

          <div className={'w-[100vw] relative block  h-[69.4vw] bg-cover bg-[]'} id={'metaverse'}>
              <motion.div
                  initial="hidden"
                  animate={'visible'}
                  transition={{ type:"tween",duration: 4, repeat:Infinity, repeatType:'reverse'}}
                  variants={{
                      visible: { opacity: 1, scale:1 },
                      hidden: { opacity: 1, scale:0.9 }
                  }}
                  className={'w-[55vw] right-[-3vw] top-[11vw] rounded-full bg-[#000] h-[55vw] absolute inline-block'}>
                  <Image src={'/images/planet2.png'} layout={'fill'}></Image>
              </motion.div>
              <motion.h2 initial="hidden"
                         whileInView={'visible'}
                         viewport={{once:true}}
                         transition={{ type:"spring",duration: 2.5, delay:0.3, bounce:0.6 ,}}
                         variants={{
                             visible: { opacity: 1, scale:1 },
                             hidden: { opacity: 0, scale:0.1 }
                         }} className={'tracking-[0.03em] text-white font-gilroy font-black absolute inline-block uppercase left-[22.2vw] top-[7vw] text-[5.9vw]'}>METAVERSE</motion.h2>
              <motion.div initial="hidden"
                         whileInView={'visible'}
                         viewport={{once:true}}
                         transition={{ type:"tween",duration: 2.5, delay:0.0 ,}}
                         variants={{
                             visible: { opacity: 1, scale:1 },
                             hidden: { opacity: 0, scale:0.1 }
                         }} className={'justify-center justify-items-center items-center absolute inline-flex left-[58.5vw] top-[3.2vw] w-[28.6vw] h-[28.6vw]'}>
                  {/*<Image src={'/images/1.png'} layout={'fill'}></Image>*/}
                  <div className={'w-[95%] absolute h-[95%]'}>
                      <video
                          id="background-video"
                          loop
                          autoPlay
                          muted
                          style={{
                              position: "relative",
                              width: "inherit",
                              height: "inherit",
                              left: 0,
                              top: 0,
                              backgroundSize:"cover",
                              borderRadius:'100%',
                          }} className={'relative w-[100vw] h-[58vw]'}
                      >
                          <source src={'/images/metaverse/metaverse1.mp4'} type="video/mp4" />
                          Your browser does not support the video tag.
                      </video>
                  </div>
                  <div className={'w-full absolute h-full'}>
                      <Image src={'/images/metaverse/1.svg'} layout={'fill'}></Image>
                  </div>
                  <div className={'w-[9vw] h-[9vw] top-0 left-[1vw] absolute'}>
                      <Image src={'/images/metaverse/num1.svg'} layout={'fill'}></Image>
                  </div>
                  <p className={'text-white inline-block absolute text-center w-[65%] mt-[14vw] leading-[100%] text-[2vw] font-gilroy font-regular'}>Create your own character</p>
              </motion.div>
              <motion.div initial="hidden"
                         whileInView={'visible'}
                         viewport={{once:true}}
                         transition={{ type:"tween",duration: 2.5, delay:0.0 ,}}
                         variants={{
                             visible: { opacity: 1, scale:1 },
                             hidden: { opacity: 0, scale:0.1 }
                         }} className={'absolute inline-block left-[-3vw] top-[15.2vw] w-[33vw] h-[33vw]'}>
                  {/*<Image src={'/images/2.png'} layout={'fill'}></Image>*/}
                  <div className={'w-[95%] left-[3%] absolute h-[95%]'}>
                      <video
                          id="background-video"
                          loop
                          autoPlay
                          muted
                          style={{
                              position: "relative",
                              width: "inherit",
                              height: "inherit",
                              left: 0,
                              top: 0,
                              backgroundSize:"cover",
                              borderRadius:'100%',
                          }} className={'relative w-[100vw] h-[58vw]'}
                      >
                          <source src={'/images/metaverse/metaverse2.mp4'} type="video/mp4" />
                          Your browser does not support the video tag.
                      </video>
                  </div>
                  <div className={'w-full absolute h-full'}>
                      <Image src={'/images/metaverse/2.svg'} layout={'fill'}></Image>
                  </div>
                  <div className={'w-[9vw] h-[9vw] top-[-2vw] left-[3vw] absolute'}>
                      <Image src={'/images/metaverse/num2.svg'} layout={'fill'}></Image>
                  </div>
                  <p className={'text-white inline-block absolute text-center w-[65%] mx-[17.5%] mt-[22vw] leading-[100%] text-[1.8vw] font-gilroy font-regular'}>Investigate space with friends & create alliance</p>
              </motion.div>
              <motion.div initial="hidden"
                         whileInView={'visible'}
                         viewport={{once:true}}
                         transition={{ type:"tween",duration: 2.5, delay:0.0 ,}}
                         variants={{
                             visible: { opacity: 1, scale:1 },
                             hidden: { opacity: 0, scale:0.1 }
                         }} className={'absolute inline-block left-[34.4vw] top-[24.5vw] w-[31vw] h-[32vw]'}>
                  {/*<Image src={'/images/3.png'} layout={'fill'}></Image>*/}
                  <div className={'w-[95%] left-[3%] top-[3%] absolute h-[95%]'}>
                      <video
                          id="background-video"
                          loop
                          autoPlay
                          muted
                          style={{
                              position: "relative",
                              width: "inherit",
                              height: "inherit",
                              left: 0,
                              top: 0,
                              backgroundSize:"cover",
                              borderRadius:'100%',
                          }} className={'relative w-[100vw] h-[58vw]'}
                      >
                          <source src={'/images/metaverse/metaverse3.mp4'} type="video/mp4" />
                          Your browser does not support the video tag.
                      </video>
                  </div>
                  <div className={'w-full absolute h-full'}>
                      <Image src={'/images/metaverse/3.svg'} layout={'fill'}></Image>
                  </div>
                  <div className={'w-[9vw] h-[9vw] top-[-2.5vw] left-[4vw] absolute'}>
                      <Image src={'/images/metaverse/num3.svg'} layout={'fill'}></Image>
                  </div>
                  <p className={'text-white inline-block absolute text-center w-[70%] mx-[15%] mt-[20.5vw] leading-[100%] text-[1.8vw] font-gilroy font-regular'}>Develope your space base, strenthen defences, get unique resourses</p>
              </motion.div>
              <motion.div initial="hidden"
                         whileInView={'visible'}
                         viewport={{once:true}}
                         transition={{ type:"tween",duration: 2.5, delay:0.0 ,}}
                         variants={{
                             visible: { opacity: 1, scale:1 },
                             hidden: { opacity: 0, scale:0.1 }
                         }} className={'absolute inline-block right-0 top-[32vw] w-[33.5vw] h-[37.5vw]'}>
                  {/*<Image src={'/images/4.png'} layout={'fill'}></Image>*/}
                  <div className={'w-[95%] left-[3%] top-[6%] absolute h-[93%]'}>
                      <video
                          id="background-video"
                          loop
                          autoPlay
                          muted
                          style={{
                              position: "relative",
                              width: "inherit",
                              height: "inherit",
                              left: 0,
                              top: 0,
                              backgroundSize:"cover",
                              borderRadius:'100%',
                          }} className={'relative w-[100vw] h-[58vw]'}
                      >
                          <source src={'/images/metaverse/metaverse4.mp4'} type="video/mp4" />
                          Your browser does not support the video tag.
                      </video>
                  </div>
                  <div className={'w-full absolute h-full'}>
                      <Image src={'/images/metaverse/4.svg'} layout={'fill'}></Image>
                  </div>
                  <div className={'w-[9vw] h-[9vw] top-[24.5vw] left-[-2vw] absolute'}>
                      <Image src={'/images/metaverse/num4.svg'} layout={'fill'}></Image>
                  </div>
                  <p className={'text-white inline-block absolute text-center w-[70%] mx-[15%] mt-[24.0vw] leading-[100%] text-[1.8vw] font-gilroy font-regular'}>Develope your space base, strenthen defences, get unique resourses</p>
              </motion.div>
              <motion.div initial="hidden"
                          whileInView={'visible'}
                          viewport={{once:true}}
                          transition={{ type:"spring",duration: 2.5, delay:0.3, bounce:0.6 ,}}
                          variants={{
                              visible: { opacity: 1, y:0 },
                              hidden: { opacity: 0, y:100 }
                          }} className={'cursor-pointer left-[16.4vw] top-[55.5vw] w-[28vw] text-in-shape h-[9vw] absolute inline-flex '}>
                  <div className={'w-full h-full neon-border border-[5px] inline-block rounded-full'}></div>
                  <div className={'offer-gradient w-[90%] rounded-full h-[75%] p-[2vw] inline-block absolute'}></div>
                  <h2 className={'text-white inline-block absolute text-center text-[3.2vw] font-gilroy font-regular'}><strong>PLAY</strong> DEMO</h2>
              </motion.div>
          </div>


          {/*TEASER*/}

          <div className={'w-[100vw] relative block h-[60.5vw] bg-[]]'} id={'teaser'}>
              <iframe className={'inline-block absolute left-[14vw] w-[72vw] h-[37vw] top-[7vw]'} width="949" height="534" src="https://www.youtube.com/embed/0Eo1c2grmq8"
                      title="YouTube video player" frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen></iframe>
              {/*<div className={'justify-items-center justify-center items-center absolute inline-flex left-[39.67vw] top-[47.7vw] w-[20.8vw] h-[5.5vw] rounded-full bg-purple'}>*/}
              {/*    <h2 className={'text-white text-center uppercase text-[1.7vw] font-gilroy font-bold'}>BUY $TOKEN</h2>*/}
              {/*</div>*/}
          </div>


          {/*SWIPER*/}

          <motion.div  className={'w-[100vw] relative block h-[57vw] bg-cover bg-[]'} id={'calculator'}>
              <div className={'w-[20vw] h-full absolute top-0 right-0'}>
                  <Image src={'/images/swap_planet.png'} layout={'fill'}></Image>
              </div>
              <motion.div initial="hidden"
                          whileInView={'visible'}
                          viewport={{once:true}}
                          transition={{ duration: 1, delay:0.3, ease:'easeInOut'}}
                          variants={{
                              visible: { opacity: 1, scale:1 },
                              hidden: { opacity: 0, scale:0.8 }
                          }} className={'w-[100vw] z-50 absolute top-0 block h-[57vw]'}>
                  <h2 className={'absolute top-[2vw] left-[28vw] inline-block text-white font-gilroy font-bold text-[5.1vw]'}>SWAP</h2>
                  <div className={'absolute w-[41vw] top-[10vw] left-[28vw] h-[47.3vw]'}>
                      <Swiper></Swiper>
                  </div>
              </motion.div>

          </motion.div>


          {/*DAO*/}

          <div className={'w-[100vw] relative block h-[58vw] bg-cover bg-[]'} id={'dao'}>
              <div className={'top-[1vw] left-[6vw] w-[53vw] h-[53vw] absolute inline-block'}>
                  <Image src={'/images/galactic3.png'} layout={'fill'}></Image>
              </div>
              <div className={'w-[49vw] h-[25.45vw] absolute inline-block top-[12.2vw] left-[28vw]'}>
                  <Image src={'/images/daovectors.svg'} layout={'fill'}></Image>
              </div>
              <motion.p initial="hidden"
                          whileInView={'visible'}
                          viewport={{once:true}}
                          transition={{ type:"tween",duration: 1.5, delay:0.0 ,}}
                          variants={{
                              visible: { opacity: 1, scale:1 },
                              hidden: { opacity: 0, scale:0.1 }
                          }} className={'absolute inline-block text-white left-[32vw] top-[11vw] font-gilroy font-semibold text-[3vw]'}>Investors</motion.p>
              <motion.p initial="hidden"
                          whileInView={'visible'}
                          viewport={{once:true}}
                          transition={{ type:"tween",duration: 1.5, delay:0.0 ,}}
                          variants={{
                              visible: { opacity: 1, scale:1 },
                              hidden: { opacity: 0, scale:0.1 }
                          }} className={'absolute inline-block text-white left-[17.5vw] top-[17vw] font-gilroy font-semibold text-[2.6vw]'}>Engineering</motion.p>
              <motion.p initial="hidden"
                          whileInView={'visible'}
                          viewport={{once:true}}
                          transition={{ type:"tween",duration: 1.5, delay:0.0 ,}}
                          variants={{
                              visible: { opacity: 1, scale:1 },
                              hidden: { opacity: 0, scale:0.1 }
                          }} className={'absolute inline-block text-white left-[24.2vw] top-[29.5vw] font-gilroy font-semibold text-[2.6vw]'}>Management</motion.p>
              <motion.p initial="hidden"
                          whileInView={'visible'}
                          viewport={{once:true}}
                          transition={{ type:"tween",duration: 1.5, delay:0.0 ,}}
                          variants={{
                              visible: { opacity: 1, scale:1 },
                              hidden: { opacity: 0, scale:0.1 }
                          }} className={'absolute inline-block text-white left-[49.4vw] top-[16.4vw] font-gilroy font-semibold text-[2.55vw]'}>Contractors</motion.p>
              <motion.p initial="hidden"
                          whileInView={'visible'}
                          viewport={{once:true}}
                          transition={{ type:"tween",duration: 1.5, delay:0.0 ,}}
                          variants={{
                              visible: { opacity: 1, scale:1 },
                              hidden: { opacity: 0, scale:0.1 }
                          }} className={'absolute inline-block text-white left-[53.5vw] top-[28.8vw] font-gilroy font-semibold text-[2.55vw]'}>Community</motion.p>
              <motion.p initial="hidden"
                          whileInView={'visible'}
                          viewport={{once:true}}
                          transition={{ type:"tween",duration: 1.5, delay:0.0 ,}}
                          variants={{
                              visible: { opacity: 1, scale:1 },
                              hidden: { opacity: 0, scale:0.1 }
                          }} className={'absolute inline-block text-white left-[66vw] top-[9vw] font-gilroy font-normal text-[2.55vw]'}>DEV</motion.p>
              <motion.p initial="hidden"
                          whileInView={'visible'}
                          viewport={{once:true}}
                          transition={{ type:"tween",duration: 1.5, delay:0.0 ,}}
                          variants={{
                              visible: { opacity: 1, scale:1 },
                              hidden: { opacity: 0, scale:0.1 }
                          }} className={'absolute inline-block text-white left-[68.6vw] top-[16.1vw] font-gilroy font-normal text-[2.55vw]'}>Research</motion.p>
              <motion.p initial="hidden"
                          whileInView={'visible'}
                          viewport={{once:true}}
                          transition={{ type:"tween",duration: 1.5, delay:0.0 ,}}
                          variants={{
                              visible: { opacity: 1, scale:1 },
                              hidden: { opacity: 0, scale:0.1 }
                          }} className={'absolute inline-block text-white left-[71vw] top-[22vw] font-gilroy font-normal text-[2.55vw]'}>Vote</motion.p>
              <motion.p initial="hidden"
                          whileInView={'visible'}
                          viewport={{once:true}}
                          transition={{ type:"tween",duration: 1.5, delay:0.0 ,}}
                          variants={{
                              visible: { opacity: 1, scale:1 },
                              hidden: { opacity: 0, scale:0.1 }
                          }} className={'absolute inline-block text-white left-[73vw] top-[33vw] font-gilroy font-normal text-center leading-[100%] w-[12vw] text-[2.55vw]'}>Liquidity providers</motion.p>
              <motion.p initial="hidden"
                          whileInView={'visible'}
                          viewport={{once:true}}
                          transition={{ type:"tween",duration: 1.5, delay:0.0 ,}}
                          variants={{
                              visible: { opacity: 1, scale:1 },
                              hidden: { opacity: 0, scale:0.1 }
                          }} className={'absolute inline-block text-white left-[34.5vw] top-[36.3vw] font-gilroy font-normal text-center leading-[100%] w-[16vw] text-[2.55vw]'}>Initial cooperation</motion.p>
              <motion.p initial="hidden"
                          whileInView={'visible'}
                          viewport={{once:true}}
                          transition={{ type:"tween",duration: 1.5, delay:0.0 ,}}
                          variants={{
                              visible: { opacity: 1, scale:1 },
                              hidden: { opacity: 0, scale:0.1 }
                          }} className={'absolute inline-block text-white left-[60vw] top-[37vw] font-gilroy font-normal text-[2.55vw]'}>Gamers</motion.p>
              <motion.p initial="hidden"
                          whileInView={'visible'}
                          viewport={{once:true}}
                          transition={{ type:"tween",duration: 1.5, delay:0.0 ,}}
                          variants={{
                              visible: { opacity: 1, scale:1 },
                              hidden: { opacity: 0, scale:0.1 }
                          }} className={'absolute inline-block text-white left-[19vw] top-[36.5vw] font-gilroy font-normal text-[2.55vw]'}>Marketing</motion.p>
              <div className={'animate-ping absolute inline-block text-white left-[36vw] top-[21vw] text-[3.5vw] font-gilroy font-bold w-[12vw] h-[5.5vw] dao-gradient text-in-shape flex rounded-full'}></div>
              <div className={'absolute inline-block text-white left-[36vw] top-[21vw] text-[3.5vw] font-gilroy font-bold w-[12vw] h-[5.5vw] dao-gradient text-in-shape flex rounded-full'}>DAO</div>
          </div>



          {/*TEAM*/}

          <div className={'w-[100vw] relative block h-[71.6vw] bg-cover bg-[]'} id={'team'}>
              <motion.div
                  initial="hidden"
                  whileInView={'visible'}
                  viewport={{once:true}}
                  transition={{ duration: 30, repeat:Infinity, repeatType:'loop', ease:'linear'}}
                  variants={{
                      visible: { opacity: 1, rotate:0 },
                      hidden: { opacity: 1, rotate: -360 }
                  }}
                  className={'w-[60vw] h-[60vw] top-[9vw] left-[-9vw] absolute'}>
                  <Image src={'/images/galactic2.png'} layout={'fill'}></Image>
              </motion.div>
              <h2 className={'tracking-[0.03em] text-white font-gilroy font-black absolute inline-block uppercase right-[9.2vw] top-[6vw] text-[5.9vw]'}>TEAM</h2>

              <div className={'w-[15.5vw] h-[21vw] left-[38.7vw] top-[18.6vw] absolute justify-center  inline-flex border-white border-2 rounded-[2vw]'}>
                  <div className={'absolute top-[-3vw] w-[13.4vw] h-[13.4vw] justify-center justify-items-center items-center flex'}>
                      <div className={'absolute w-[11.9vw] h-[11.9vw] rounded-full border-[1.5vw] neon-border'}></div>
                      <div className={'absolute w-[10.4vw] h-[10.4vw] rounded-full'}>
                          <Image src={'/images/fufel1.png'} layout={'fill'}></Image>
                      </div>
                  </div>
                  <p className={'text-white inline-block absolute text-center top-[10vw] text-[3vw] font-gilroy font-regular'}>Name</p>
                  <p className={'text-white inline-block absolute text-center top-[13.7vw] text-[1.5vw] font-gilroy font-regular'}>CEO</p>
                  <div className={'w-[9vw] h-[4vw] absolute top-[16vw]'}>
                      <Image src={'/images/linkedin.svg'} layout={'fill'}></Image>
                  </div>
              </div>

              <div className={'w-[15.5vw] h-[21vw] left-[58vw] top-[18.6vw] absolute justify-center  inline-flex border-white border-2 rounded-[2vw]'}>
                  <div className={'absolute top-[-3vw] w-[13.4vw] h-[13.4vw] justify-center justify-items-center items-center flex'}>
                      <div className={'absolute w-[11.9vw] h-[11.9vw] rounded-full border-[1.5vw] neon-border'}></div>
                      <div className={'absolute w-[10.4vw] h-[10.4vw] rounded-full'}>
                          <Image src={'/images/fufel2.png'} layout={'fill'}></Image>
                      </div>
                  </div>
                  <p className={'text-white inline-block absolute text-center top-[10vw] text-[3vw] font-gilroy font-regular'}>Name</p>
                  <p className={'text-white inline-block absolute text-center top-[13.7vw] text-[1.5vw] font-gilroy font-regular'}>CEO</p>
                  <div className={'w-[9vw] h-[4vw] absolute top-[16vw]'}>
                      <Image src={'/images/linkedin.svg'} layout={'fill'}></Image>
                  </div>
              </div>


              <div className={'w-[15.5vw] h-[21vw] left-[77vw] top-[18.6vw] absolute justify-center  inline-flex border-white border-2 rounded-[2vw]'}>
                  <div className={'absolute top-[-3vw] w-[13.4vw] h-[13.4vw] justify-center justify-items-center items-center flex'}>
                      <div className={'absolute w-[11.9vw] h-[11.9vw] rounded-full border-[1.5vw] neon-border'}></div>
                      <div className={'absolute w-[10.4vw] h-[10.4vw] rounded-full'}>
                          <Image src={'/images/fufel3.png'} layout={'fill'}></Image>
                      </div>
                  </div>
                  <p className={'text-white inline-block absolute text-center top-[10vw] text-[3vw] font-gilroy font-regular'}>Name</p>
                  <p className={'text-white inline-block absolute text-center top-[13.7vw] text-[1.5vw] font-gilroy font-regular'}>CEO</p>
                  <div className={'w-[9vw] h-[4vw] absolute top-[16vw]'}>
                      <Image src={'/images/linkedin.svg'} layout={'fill'}></Image>
                  </div>
              </div>

              <div className={'w-[15.5vw] h-[21vw] left-[58vw] top-[43vw] absolute justify-center  inline-flex border-white border-2 rounded-[2vw]'}>
                  <div className={'absolute top-[-3vw] w-[13.4vw] h-[13.4vw] justify-center justify-items-center items-center flex'}>
                      <div className={'absolute w-[11.9vw] h-[11.9vw] rounded-full border-[1.5vw] neon-border'}></div>
                      <div className={'absolute w-[10.4vw] h-[10.4vw] rounded-full'}>
                          <Image src={'/images/fufel4.png'} layout={'fill'}></Image>
                      </div>
                  </div>
                  <p className={'text-white inline-block absolute text-center top-[10vw] text-[3vw] font-gilroy font-regular'}>Name</p>
                  <p className={'text-white inline-block absolute text-center top-[13.7vw] text-[1.5vw] font-gilroy font-regular'}>CEO</p>
                  <div className={'w-[9vw] h-[4vw] absolute top-[16vw]'}>
                      <Image src={'/images/linkedin.svg'} layout={'fill'}></Image>
                  </div>
              </div>


              <div className={'w-[15.5vw] h-[21vw] left-[77vw] top-[43vw] absolute justify-center  inline-flex border-white border-2 rounded-[2vw]'}>
                  <div className={'absolute top-[-3vw] w-[13.4vw] h-[13.4vw] justify-center justify-items-center items-center flex'}>
                      <div className={'absolute w-[11.9vw] h-[11.9vw] rounded-full border-[1.5vw] neon-border'}></div>
                      <div className={'absolute w-[10.4vw] h-[10.4vw] rounded-full'}>
                          <Image src={'/images/fufel5.png'} layout={'fill'}></Image>
                      </div>
                  </div>
                  <p className={'text-white inline-block absolute text-center top-[10vw] text-[3vw] font-gilroy font-regular'}>Name</p>
                  <p className={'text-white inline-block absolute text-center top-[13.7vw] text-[1.5vw] font-gilroy font-regular'}>CEO</p>
                  <div className={'w-[9vw] h-[4vw] absolute top-[16vw]'}>
                      <Image src={'/images/linkedin.svg'} layout={'fill'}></Image>
                  </div>
              </div>
          </div>


          {/*ROADMAP*/}

          <div className={'w-[100vw] relative block h-[112vw] bg-cover bg-[]'} id={'roadmap'}>

              <div className={'absolute inline-block rotate-180 left-[6vw] top-[6.5vw]  w-[88vw] h-[95.3vw] rounded-[4.5vw] rotate-180'}>
                  <div className={'w-[inherit] h-[inherit] relative flex items-center justify-items-center justify-center rounded-[inherit]'}>
                      <div className={'z-[4] w-[99.9%] absolute flex h-[99.9%] rounded-[inherit] border-white border-solid border-[1px] m-[0.1%]'}></div>
                      <div className={'relative inline-block flex justify-center justify-items-center blur-[1px] rounded-[inherit] h-full w-full'}>
                          <div className={'z-[1] absolute w-full h-full border-[3px] rounded-[inherit] neon-border'}></div>
                      </div>
                  </div>
              </div>
              <motion.h2 initial="hidden"
                         whileInView={'visible'}
                         viewport={{once:true}}
                         transition={{ type:"tween",duration: 1, delay:0.3 ,}}
                         variants={{
                             visible: { opacity: 1, scale:1 },
                             hidden: { opacity: 0, scale:0.5 }
                         }} className={'text-white font-gilroy font-black absolute inline-block left-[38.1vw] top-[8.9vw] text-[4.9vw]'}>ROADMAP</motion.h2>
              <div className={'w-[51vw] h-[20vw] absolute inline-block left-[19.5vw] top-[5.53vw]'}>
                  <Image src={'/images/roadmap_vectors.svg'} layout={'fill'}></Image>
              </div>
              <div className={'justify-between justify-items-center flex-nowrap w-[71vw] h-[75vw] absolute inline-flex left-[14.5vw] top-[24vw]'}>
                  <motion.div initial="hidden"
                         whileInView={'visible'}
                         viewport={{once:true}}
                         transition={{ type:"tween",duration: 1, delay:0.6 ,}}
                         variants={{
                             visible: { opacity: 1, x:0 },
                             hidden: { opacity: 0, x:-100 }
                         }} className={'w-[30%] h-full inline-block flex roadmap-card rounded-[1vw] text-in-roadmap-card p-[3%]'}>
                      <div className={'w-[13vw] h-[4.4vw] top-[-2.5vw] rounded-[1vw] flex text-in-shape bg-purple absolute'}>
                          <p className={'leading-[89%]  text-[2vw] text-white font-gilroy font-bold'}>1H’2022</p>
                      </div>
                      <div className={'w-[2.5vw] h-[2.5vw] left-[-1vw] top-[3.4vw] absolute inline-block'}>
                          <Image src={'/images/roadmap_complete.svg'} layout={'fill'}></Image>
                      </div>
                      <div className={'w-[2.5vw] h-[2.5vw] left-[-1vw] top-[7vw] absolute inline-block'}>
                          <Image src={'/images/roadmap_complete.svg'} layout={'fill'}></Image>
                      </div>
                      <div className={'w-[2.5vw] h-[2.5vw] left-[-1vw] top-[9.8vw] absolute inline-block'}>
                          <Image src={'/images/roadmap_complete.svg'} layout={'fill'}></Image>
                      </div>
                      <p className={'leading-[89%] mt-[1.5vw] text-[1.545vw] text-white font-gilroy font-normal'}>
                          <span className={'text-[#F3ACFF] font-semibold'}>Website development</span><br/>
                          <span className={'text-[#F3ACFF] font-semibold'}>contract deploy</span><br/><br/>
                          <span className={'text-[#F3ACFF] font-semibold'}>Seed round</span><br/><br/>
                          <span className={'text-[#F3ACFF] font-semibold'}>KOL management</span><br/><br/>
                          Coinscope audit<br/><br/>
                          KYC by Pinksale<br/><br/>
                          Presale on Pinksale<br/><br/>
                          10 Voice AMA<br/><br/>
                          DEX marketing activities<br/><br/>
                          Launching the protocol<br/><br/>
                          Dex Launch<br/><br/>
                          Articles in cryptomagazines<br/><br/>
                          Results of autostaking APY rates<br/><br/>
                          Boost APR NFTs sale<br/><br/>
                          P2E game beta launch<br/><br/>
                          Dextools marketing ads<br/><br/>
                          Coinsniper rating top 5<br/><br/>
                          Coinmarketcap list and rate<br/><br/>
                          CoinGecko list and rate<br/><br/>
                          ASP app<br/><br/>
                          DAO pool opening<br/><br/>
                          DAO voting system<br/><br/>
                          Collaboration laboratory

                      </p>
                  </motion.div>
                  <motion.div initial="hidden"
                         whileInView={'visible'}
                         viewport={{once:true}}
                         transition={{ type:"tween",duration: 1, delay:0.9 ,}}
                         variants={{
                             visible: { opacity: 1, x:0 },
                             hidden: { opacity: 0, x:-100 }
                         }} className={'w-[30%] h-[90%] inline-block flex roadmap-card rounded-[1vw] text-in-roadmap-card p-[3%]'}>
                      <div className={'w-[13vw] h-[4.4vw] top-[-2.5vw] rounded-[1vw] flex text-in-shape bg-semiblue absolute'}>
                          <p className={'leading-[89%]  text-[2vw] text-white font-gilroy font-bold'}>2H’2022</p>
                      </div>
                      <p className={'leading-[89%] mt-[1.5vw] text-[1.545vw] text-white font-gilroy font-normal'}>ASP app in appStore<br/><br/>
                          first wave of DAO rewards<br/><br/>
                          NFT marketplace<br/><br/>
                          official P2E game opening<br/><br/>
                          Collaboration with guilds<br/><br/>
                          NFT artists contest<br/><br/>
                          Certik Audit<br/><br/>
                          ASP app modification. Chat<br/><br/>
                          ASP app modification. News<br/><br/>
                          Collaboration with space-gaming projects<br/><br/>
                          IDO governance token sale<br/><br/>
                          Collected 10 mln foundraise form Tier1-Tier2 partners<br/><br/>
                          NFT Avatar sale<br/><br/>
                          Social network opening<br/><br/>
                          Networking online contest<br/><br/>
                          Grant unicorn program<br/><br/>
                          80 mln Market Cap<br/><br/>
                      </p>
                  </motion.div>
                  <motion.div initial="hidden"
                         whileInView={'visible'}
                         viewport={{once:true}}
                         transition={{ type:"tween",duration: 1, delay:1.2 ,}}
                         variants={{
                             visible: { opacity: 1, x:0 },
                             hidden: { opacity: 0, x:-100 }
                         }} className={'w-[30%] h-[85%] inline-block flex roadmap-card rounded-[1vw] text-in-roadmap-card p-[3%]'}>
                      <div className={'w-[17vw] h-[4.4vw] top-[-2.5vw] rounded-[1vw] flex text-in-shape bg-blue absolute'}>
                          <p className={'leading-[89%]  text-[2vw] text-white font-gilroy uppercase font-bold'}>2023 pipeline</p>
                      </div>
                      <p className={'leading-[89%] mt-[1.5vw] text-[1.545vw] text-white font-gilroy font-normal'}>DEX optimisation protocol<br/><br/>
                          ASP desktop crypted version<br/><br/>
                          ASP wallet<br/><br/>
                          Holland auction mechanics for NFT sale of the projects<br/><br/>
                          Multichain launch<br/><br/>
                          NFT mechanics for social network ASP<br/><br/>
                          Multichain NFT marketplace<br/><br/>
                          Bloomberg article<br/><br/>
                          Charity program for African education<br/><br/>
                          GameFi liquidity pools<br/><br/>
                          Network safety crypto protocol<br/><br/>
                          OpenSea collaboration<br/><br/>
                          Layer2 eth upgrade<br/><br/>
                          Offline ASP conference<br/><br/>
                          Offline grants program and competition<br/><br/>
                          800 mln Market Cap<br/><br/>
                      </p>
                  </motion.div>
              </div>

          </div>


          {/*PARTNERS*/}

          <div className={'w-[100vw] relative block h-[58vw] bg-cover bg-[]'} id={'partners'}>
              <motion.h2 className={'text-white font-gilroy font-black absolute inline-block left-[17vw] top-[38vw] text-[5.7vw]'}>PARTNERS</motion.h2>
              <div className={'w-[67.5vw] absolute inline-block left-[16.3vw] top-[8.6vw] h-[26.7vw] bg-[#AF52D0] opacity-[0.22]'}>
              </div>
              <div className={'w-[55vw] left-[-3vw] bottom-[-3vw] h-[41vw] absolute inline-block'}>
                  <Image src={'/images/partners_planet.png'} layout={'fill'}></Image>
              </div>
          </div>
      {/*    initial="hidden"*/}
      {/*    whileInView={'visible'}*/}
      {/*    viewport={{once:true}}*/}
      {/*    transition={{ type:"tween",duration: 1, delay:0.3 ,}}*/}
      {/*    variants={{*/}
      {/*    visible: { opacity: 1, scale:1 },*/}
      {/*    hidden: { opacity: 0, scale:0.5 }*/}
      {/*}}*/}

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
