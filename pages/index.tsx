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
import Swaper from "../components/Swaper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import {MintButton} from "../components/MintButton";
const Parallax = styled.div<{xPosition: string, yPosition:string}>`
  left: ${props => props.xPosition};
  top: ${props => props.yPosition};
`
const Home: NextPage = () => {
    const [apyValue,setApyValue]=useState(0);
    const [apyDuration,setApyDuration]=useState(1500);
    const { ref, inView, entry, } = useInView();

    const [openGame,setOpenGame]=useState(false);

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
                {/*BUY $OMD*/}

                <motion.div initial="hidden"
                            animate={'visible'}
                            transition={{ type:"tween",duration: 1, delay:0.3,}}
                            variants={{
                                visible: { opacity: 1, y:0 },
                                hidden: { opacity: 0, y:-200 }
                            }} className={'z-[9999] w-full fixed top-0 left-0 menu-bg h-[6vw]'}>
                    <a href={'#intro'}><div className={'z-[9999] cursor-pointer fixed inline-flex left-[14vw] top-[-1vw] w-[14vw] h-[7vw]'}>
                        <Image src={'/images/logodao.svg'} layout={'fill'}></Image>
                    </div></a>
                    <div className={'z-[9999] justify-between justify-items-center items-center w-[38.4vw] h-[2vw] fixed inline-flex left-[29.7vw] top-[1.1vw]'}>
                        <a className={'cursor-pointer text-white text-center uppercase text-[1.2vw] font-gilroy font-regular hover:nav-item-hover'} href={'#marketplace'}>nft marketplace</a>
                        <a className={'cursor-pointer text-white text-center uppercase text-[1.2vw] font-gilroy font-regular hover:nav-item-hover'} href={'#stacker'}>Stake</a>
                        <a className={'cursor-pointer text-white text-center uppercase text-[1.2vw] font-gilroy font-regular hover:nav-item-hover'} href={'#metaverse'}>metaverse</a>
                        {/*<a className={'cursor-pointer text-white text-center uppercase text-[1.2vw] font-gilroy font-regular hover:nav-item-hover'} href={'#swiper'}>DEX</a>*/}
                        <a className={'cursor-pointer text-white text-center uppercase text-[1.2vw] font-gilroy font-regular hover:nav-item-hover'} href={'#moveearn'}>m2e</a>

                    </div>
                    <div className={'z-[9999] justify-between justify-items-center items-center w-[28vw] h-[2vw] fixed inline-flex left-[33.6vw] top-[3.1vw]'}>

                        {/*<a className={'cursor-pointer text-white text-center uppercase text-[1.2vw] font-gilroy font-regular hover:nav-item-hover'} href={'#team'}>TEAM</a>*/}

                        {/*<a className={'cursor-pointer text-white text-center uppercase text-[1.2vw] font-gilroy font-regular hover:nav-item-hover'} href={'#teaser'}>TEASER</a>*/}
                        <a className={'cursor-pointer text-white text-center uppercase text-[1.2vw] font-gilroy font-regular hover:nav-item-hover'} href={'#roadmap'}>ROADMAP</a>
                        <a className={'cursor-pointer text-white text-center uppercase text-[1.2vw] font-gilroy font-regular hover:nav-item-hover'} href={'#dao'}>DAO</a>
                        <a className={'cursor-pointer text-white text-center uppercase text-[1.2vw] font-gilroy font-regular hover:nav-item-hover'} href={'#partners'}>PARTNERS</a>
                        <a className={'cursor-pointer text-white text-center uppercase text-[1.2vw] font-gilroy font-regular hover:nav-item-hover'} href={'https://admin-176.gitbook.io/1-million-dao/about-1-million-dao/what-is-a-rebase-token'}>DOCS</a>
                    </div>
                    <div className={'z-[9999] justify-items-center justify-center items-center fixed inline-flex left-[71.2vw] text-[1vw] top-[1.2vw] w-[12.5vw] h-[3.4vw] rounded-full bg-purple'}>
                        <ConnectMM/>
                    </div>
                    {/*<div className={'font-bold text-white z-[9999] justify-items-center justify-center items-center fixed font-gilroy text-[1.3vw] inline-flex right-[5vw] top-[1.2vw] w-[10vw] h-[3.4vw] rounded-full bg-blue'}>*/}
                    {/*    <a href={'/account'}>APP</a>*/}
                    {/*</div>*/}
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
                        rebase function is each block
                    </p>
                    {/*<motion.div className={'absolute inline-block left-0 bottom-0'} ></motion.div>*/}
                    <div className={'w-[36vw] h-[36vw] absolute inline-block bottom-[8vw] left-[10vw]'}>
                        <Image src={'/images/phone.png'} layout={'fill'}></Image>
                    </div>
                    <div className={'cursor-pointer z-[8000] left-[14.4vw] top-[37vw] w-[8.7vw] h-[2.3vw] absolute inline-block'}>
                        <Image src={'/images/appstore.png'} layout={'fill'}></Image>
                    </div>
                    <div className={'cursor-pointer z-[8000] left-[14.4vw] top-[40vw] w-[8.7vw] h-[2.3vw] absolute inline-block'}>
                        <Image src={'/images/googleplay.png'} layout={'fill'}></Image>
                    </div>
                    <motion.h1 className={'tracking-[0.015em] absolute right-[11.5vw] text-[4.72vw] top-[25.7vw] text-right text-white font-gilroy font-black'} initial="hidden"
                               whileInView={'visible'}

                               viewport={{once:true}}
                               transition={{ type:'spring',duration: 1.9, bounce:0.5 , delay:0.3, }}
                               variants={{
                                   visible: { opacity: 1, x:0 },
                                   hidden: { opacity: 0, x: 200 }
                               }}>STAKE MOVE PLAY EARN</motion.h1>
                    <motion.h2 className={'absolute right-[11.5vw] leading-[100%] text-right text-[2.2vw] top-[22.2vw] text-right text-white font-gilroy font-regular'} initial="hidden"
                               whileInView={'visible'}

                               viewport={{once:true}}
                               transition={{ type:"spring",duration: 1.0, bounce:0.1 , delay:0.9, }}
                               variants={{
                                   visible: { opacity: 1, y:0 },
                                   hidden: { opacity: 0, y: 50 }
                               }}>First DeFi & Metaverse platform, <br/>with move-2-earn</motion.h2>
                    <a href={'#stacker'}><motion.div className={'cursor-pointer absolute inline-block left-[48vw] top-[33.4vw] w-[14.5vw] h-[3.6vw] text-[1.7vw] rounded-[20px]'} initial="hidden"
                                                     whileInView={'visible'}

                                                     viewport={{once:true}}
                                                     transition={{ type:"spring",duration: 1.4, bounce:0.6 , delay:1.6,}}
                                                     variants={{
                                                         visible: { opacity: 1, y:0 },
                                                         hidden: { opacity: 0, y: -50 }
                                                     }}>
                        <NeonButton title={'Stake'}></NeonButton>
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
                    {/*<a href={'#dao'}><motion.div className={'cursor-pointer absolute inline-block left-[64vw] top-[33.4vw] w-[12.4vw] h-[3.6vw] text-[1.7vw] rounded-[20px]'} initial="hidden"*/}
                    {/*                                   whileInView={'visible'}*/}

                    {/*                                   viewport={{once:true}}*/}
                    {/*                                   transition={{ type:"spring",duration: 1.4, bounce:0.6 , delay:1.4,}}*/}
                    {/*                                   variants={{*/}
                    {/*                                       visible: { opacity: 1, y:0 },*/}
                    {/*                                       hidden: { opacity: 0, y: -50 }*/}
                    {/*                                   }}>*/}
                    {/*    <NeonButton title={'DAO'}></NeonButton>*/}
                    {/*</motion.div></a>*/}
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
                    {/*<a href={'#swiper'}><motion.div className={'cursor-pointer absolute inline-block left-[50.7vw] top-[38.6vw] w-[8.2vw] h-[3.6vw] text-[1.7vw] rounded-[20px]'} initial="hidden"*/}
                    {/*                                whileInView={'visible'}*/}

                    {/*                                viewport={{once:true}}*/}
                    {/*                                transition={{ type:"spring",duration: 1.4, bounce:0.6 , delay:1.8,}}*/}
                    {/*                                variants={{*/}
                    {/*                                    visible: { opacity: 1, y:0 },*/}
                    {/*                                    hidden: { opacity: 0, y: -50 }*/}
                    {/*                                }}>*/}
                    {/*    <NeonButton title={'DEX'}></NeonButton>*/}
                    {/*</motion.div></a>*/}
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
                    <a href={'#moveearn'}><motion.div className={'cursor-pointer absolute inline-block left-[71.5vw] top-[38.6vw] w-[13.5vw] h-[3.6vw] text-[1.7vw] rounded-[20px]'} initial="hidden"
                                                      whileInView={'visible'}

                                                      viewport={{once:true}}
                                                      transition={{ type:"spring",duration: 1.4, bounce:0.6 , delay:2.2,}}
                                                      variants={{
                                                          visible: { opacity: 1, y:0 },
                                                          hidden: { opacity: 0, y: -50 }
                                                      }}>
                        <NeonButton title={'Move-2-Earn'}></NeonButton>
                    </motion.div></a>
                    <a target={'_blank'} rel={'noreferrer'} href={'https://twitter.com/1MillionDAO'}><div className={'cursor-pointer w-[2.3vw] h-[2.3vw] bottom-[15.4vw] left-[14.45vw] absolute inline-block'}>
                        <Image src={'/images/twitter.svg'} layout={'fill'}></Image>
                    </div></a>
                    <a target={'_blank'} rel={'noreferrer'} href={'https://discord.gg/3b3SbG4N'}><div className={'cursor-pointer w-[2.3vw] h-[2.5vw] bottom-[15.4vw] left-[17.45vw] absolute inline-block'}>
                        <Image src={'/images/discord.svg'} layout={'fill'}></Image>
                    </div></a>
                    <a target={'_blank'} rel={'noreferrer'} href={'https://t.me/one_mln_dao'}><div className={'cursor-pointer w-[2.3vw] h-[2.3vw] bottom-[15.4vw] left-[20.5vw] absolute inline-block'}>
                        <Image src={'/images/telegram.svg'} layout={'fill'}></Image>
                    </div></a>
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
                               }}  className={'absolute left-[25vw] text-[2.2vw] top-[20.5vw] text-right text-white font-gilroy font-regular'}>Fixed APY</motion.h2>


                    <motion.div initial="hidden"
                                whileInView={'visible'}
                                viewport={{once:true}}
                                transition={{ type:"spring",duration: 1, delay:0.3, bounce:0.6 ,}}
                                variants={{
                                    visible: { opacity: 1, y:0 },
                                    hidden: { opacity: 0, y:100 }
                                }} className={'cursor-pointer w-[9.1vw] h-[3.7vw] left-[21.7vw] top-[25.6vw] rounded-full text-in-shape absolute inline-flex offer-purple'}>
                        <a href={'https://github.com/interfinetwork/smart-contract-audits/blob/audit-updates/1millionDAO_AuditReport_InterFi.pdf'} target={'_blank'} rel={'noreferrer'} className={'text-white font-gilroy font-semibold text-[1.7vw]'}>AUDIT</a>
                    </motion.div>


                    {/*<div className={'cursor-pointer offer-gradient w-[15.5vw] h-[3.7vw] left-[31.5vw] top-[25.6vw] rounded-full text-in-shape absolute inline-flex'}>*/}
                    {/*    <p className={'text-white font-gilroy font-semibold text-[1.7vw]'}>WHITEPAPER</p>*/}
                    {/*</div>*/}

                    {/*<div className={'cursor-pointer bg-purple w-[16.7vw] h-[4.5vw] left-[32vw] top-[40.9vw] rounded-full text-in-shape absolute inline-flex'}>*/}
                    {/*    <p className={'text-white font-gilroy font-semibold text-[1.7vw]'}>BUY $OMD</p>*/}
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


                    <a href={'https://admin-176.gitbook.io/1-million-dao/about-1-million-dao/how-does-the-autostake-feature-work'}><motion.div initial="hidden"
                                                        whileInView={'visible'}
                                                        viewport={{once:true}}
                                                        transition={{ type:"spring",duration: 1.5, delay:0.3, bounce:0.6 ,}}
                                                        variants={{
                                                            visible: { opacity: 1, y:0 },
                                                            hidden: { opacity: 0, y:100 }
                                                        }} className={'cursor-pointer swiper-background w-[17.1vw] h-[4.5vw] left-[31.2vw] top-[40.9vw] rounded-full text-in-shape absolute inline-flex'}>
                        <p className={'text-white font-gilroy font-semibold text-[1.7vw]'}>LEARN MORE</p>
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
                        <p className={'text-white font-gilroy text-center font-semibold text-[2vw]'}>0,000088% in each block</p>
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
                                   }} className={'text-white inline-block absolute text-center text-[2.3vw] font-gilroy font-medium'}>$BNB distribution after the end of PinkSale presale</motion.h2>
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
                              }} className={'font-semibold text-semiblue top-[22vw] left-[23.8vw] inline-block absolute text-center text-[3.8vw] font-gilroy '}>51%</motion.p>
                    <motion.p initial="hidden"
                              whileInView={'visible'}
                              viewport={{once:true}}
                              transition={{ type:"spring",duration: 1.5, delay:1.3, bounce:0.6 ,}}
                              variants={{
                                  visible: { opacity: 1, y:0 },
                                  hidden: { opacity: 0, y:-50 }
                              }} className={'font-semibold text-semiblue top-[27vw] left-[45.6vw] inline-block absolute text-center text-[3.8vw] font-gilroy '}>19%</motion.p>
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
                              }} className={'font-medium uppercase text-white top-[31.4vw] left-[45.6vw] inline-block absolute text-center text-[2.1vw] font-gilroy '}>team</motion.p>
                    <motion.p initial="hidden"
                              whileInView={'visible'}
                              viewport={{once:true}}
                              transition={{ type:"spring",duration: 1.5, delay:1.7, bounce:0.6 ,}}
                              variants={{
                                  visible: { opacity: 1, x:0 },
                                  hidden: { opacity: 0, x:-50 }
                              }} className={'leading-[111%] font-medium uppercase text-white top-[27.4vw] left-[60.5vw] inline-block absolute text-right w-[15vw] text-[1.8vw] font-gilroy '}>initial foundation of 1MDAO in $BNB</motion.p>

                    <a href={'https://admin-176.gitbook.io/1-million-dao/about-1-million-dao/auto-liquidity-engine'}>
                        <motion.div initial="hidden"
                                    whileInView={'visible'}
                                    viewport={{once:true}}
                                    transition={{ type:"spring",duration: 1.5, delay:0.3, bounce:0.6 ,}}
                                    variants={{
                                        visible: { opacity: 1, y:0 },
                                        hidden: { opacity: 0, y:100 }
                                    }} className={'cursor-pointer swiper-background w-[17.1vw] h-[4.5vw] left-[41.2vw] top-[37vw] rounded-full text-in-shape absolute inline-flex'}>
                        <p className={'text-white font-gilroy font-semibold text-[1.7vw]'}>LEARN MORE</p>
                    </motion.div></a>

                </div>


                {/*SECOND DISTRIBUTION*/}

                <div className={'w-[100vw] relative block  h-[73vw] bg-cover bg-[]'} id={'dsgnyt'}>


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
                                   }} className={'text-white inline-block absolute text-center text-[2.3vw] leading-[110%] font-gilroy font-medium'}>Distribution of 1MDAO foundation earnings </motion.h2>
                    </motion.div>
                    <motion.h2 initial="hidden"
                               whileInView={'visible'}
                               viewport={{once:true}}
                               transition={{ type:"spring",duration: 1.5, delay:0.3, bounce:0.6 ,}}
                               variants={{
                                   visible: { opacity: 1, y:0 },
                                   hidden: { opacity: 0, y:-100 }
                               }} className={'text-white font-gilroy font-black absolute inline-block uppercase left-[40vw] top-[15.8vw] text-[3.37vw]'}>distribution</motion.h2>
                    <motion.div initial="hidden"
                                whileInView={'visible'}
                                viewport={{once:true}}
                                transition={{ type:"spring",duration: 1.5, delay:0.9, bounce:0.6 ,}}
                                variants={{
                                    visible: { opacity: 1, x:0 },
                                    hidden: { opacity: 0, x:50 }
                                }} className={'w-[19vw] left-[19vw] top-[18vw] h-[5vw] absolute inline-block'}>
                        <Image src={'/images/dist_left.svg'} layout={'fill'}></Image>
                    </motion.div>


                    <motion.div initial="hidden"
                                whileInView={'visible'}
                                viewport={{once:true}}
                                transition={{ type:"spring",duration: 1.5, delay:1.7, bounce:0.6 ,}}
                                variants={{
                                    visible: { opacity: 1, x:0 },
                                    hidden: { opacity: 0, x:-50 }
                                }} className={'w-[19vw] left-[64vw] top-[18vw] h-[6vw] absolute inline-block'}>
                        <Image src={'/images/dist_right.svg'} layout={'fill'}></Image>
                    </motion.div>
                    <motion.p initial="hidden"
                              whileInView={'visible'}
                              viewport={{once:true}}
                              transition={{ type:"spring",duration: 1.5, delay:0.9, bounce:0.6 ,}}
                              variants={{
                                  visible: { opacity: 1, x:0 },
                                  hidden: { opacity: 0, x:50 }
                              }} className={'font-semibold text-semiblue top-[22vw] left-[17vw] inline-block absolute text-center text-[3.8vw] font-gilroy '}>80%</motion.p>


                    <motion.p initial="hidden"
                              whileInView={'visible'}
                              viewport={{once:true}}
                              transition={{ type:"spring",duration: 1.5, delay:1.7, bounce:0.6 ,}}
                              variants={{
                                  visible: { opacity: 1, x:0 },
                                  hidden: { opacity: 0, x:-50 }
                              }} className={'font-semibold text-semiblue top-[23vw] left-[80vw] inline-block absolute text-center text-[3.8vw] font-gilroy '}>20%</motion.p>

                    <motion.p initial="hidden"
                              whileInView={'visible'}
                              viewport={{once:true}}
                              transition={{ type:"spring",duration: 1.5, delay:0.9, bounce:0.6 ,}}
                              variants={{
                                  visible: { opacity: 1, x:0 },
                                  hidden: { opacity: 0, x:50 }
                              }} className={'font-normal text-white top-[26.4vw] left-[17vw] inline-block absolute leading-[130%] text-left text-[2.1vw] w-[22vw]  font-gilroy '}>of income will be distributed among the $OMD holders</motion.p>


                    <motion.p initial="hidden"
                              whileInView={'visible'}
                              viewport={{once:true}}
                              transition={{ type:"spring",duration: 1.5, delay:1.7, bounce:0.6 ,}}
                              variants={{
                                  visible: { opacity: 1, x:0 },
                                  hidden: { opacity: 0, x:-50 }
                              }} className={'leading-[111%] font-normal text-white top-[28.4vw] right-[13vw]  inline-block absolute text-right w-[30vw] text-[2.1vw] font-gilroy '}>of income will be distributed among the `&#34;`Founders collection`&#34;` NFT stakers</motion.p>
                    Found
                    <motion.div initial="hidden"
                                whileInView={'visible'}
                                viewport={{once:true}}
                                transition={{ type:"spring",duration: 1.5, delay:0.3, bounce:0.6 ,}}
                                variants={{
                                    visible: { opacity: 1, x:0 },
                                    hidden: { opacity: 0, x:-50 }
                                }} className={'w-[25.5vw] h-[23.5vw] rounded-[1vw] absolute left-[9vw] top-[42.6vw]  dashboard-shape'}>
                        <div className={'h-[30%] mt-[32%] align-top relative  inline-block w-[20%]'}>
                            <Image src={'/images/dit1.svg'} layout={'fill'}></Image>
                        </div>
                        <div className={'justify-center items-center w-[70%] h-full align-top inline-flex relative'}>
                            <p className={'font-normal text-white  inline-block absolute leading-[130%] text-left text-[2vw] font-gilroy'}>At listing 1MDAO Bank will accumulate 30% of all collected BNB on presale
                            </p>
                        </div>
                    </motion.div>
                    <motion.div initial="hidden"
                                whileInView={'visible'}
                                viewport={{once:true}}
                                transition={{ type:"spring",duration: 1.5, delay:0.6, bounce:0.6 ,}}
                                variants={{
                                    visible: { opacity: 1, x:0 },
                                    hidden: { opacity: 0, x:-50 }
                                }} className={'w-[25.5vw] h-[23.5vw] rounded-[1vw] absolute left-[37.4vw] top-[42.6vw]  dashboard-shape'}>
                        <div className={'h-[30%] mt-[32%] align-top relative  inline-block w-[20%]'}>
                            <Image src={'/images/dit2.svg'} layout={'fill'}></Image>
                        </div>
                        <div className={'justify-center items-center w-[70%] h-full align-top inline-flex relative'}>
                            <p className={'font-normal text-white  inline-block absolute leading-[130%] text-left text-[2vw] font-gilroy'}>Holders will vote for the ways of distribution of trading and staking pools</p>
                        </div>
                    </motion.div>
                    <motion.div initial="hidden"
                                whileInView={'visible'}
                                viewport={{once:true}}
                                transition={{ type:"spring",duration: 1.5, delay:0.9, bounce:0.6 ,}}
                                variants={{
                                    visible: { opacity: 1, x:0 },
                                    hidden: { opacity: 0, x:-50 }
                                }} className={'w-[25.5vw] h-[23.5vw] rounded-[1vw] absolute left-[66vw] top-[42.6vw]  dashboard-shape'}>
                        <div className={'h-[30%] mt-[32%] align-top relative  inline-block w-[20%]'}>
                            <Image src={'/images/dit3.svg'} layout={'fill'}></Image>
                        </div>
                        <div className={'justify-center items-center w-[70%] h-full align-top inline-flex relative'}>
                            <p className={'font-normal text-white  inline-block absolute leading-[130%] text-left text-[2vw] font-gilroy'}>20% of income will be distributed among the `&#34;`Founders collection`&#34;` NFT stakers</p>
                        </div>
                    </motion.div>
                </div>


                {/*DISTRIBUTION*/}

                <div className={'w-[100vw] relative block h-[70vw] bg-cover bg-[]'} id={'distribution'}>


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
                                   }} className={'text-white inline-block absolute text-center text-[2.3vw] leading-[110%] font-gilroy font-medium'}>Profit Distribution to the `&#34;`Founders collection`&#34;` NFT holders
                            (20% of 1MDAO Fund profit)</motion.h2>
                    </motion.div>
                    <motion.h2 initial="hidden"
                               whileInView={'visible'}
                               viewport={{once:true}}
                               transition={{ type:"spring",duration: 1.5, delay:0.3, bounce:0.6 ,}}
                               variants={{
                                   visible: { opacity: 1, y:0 },
                                   hidden: { opacity: 0, y:-100 }
                               }} className={'text-white font-gilroy font-black absolute inline-block uppercase left-[40vw] top-[15.8vw] text-[3.37vw]'}>distribution</motion.h2>
                    <motion.div initial="hidden"
                                whileInView={'visible'}
                                viewport={{once:true}}
                                transition={{ type:"spring",duration: 1.5, delay:0.9, bounce:0.6 ,}}
                                variants={{
                                    visible: { opacity: 1, x:0 },
                                    hidden: { opacity: 0, x:50 }
                                }} className={'w-[19vw] left-[19vw] top-[18vw] h-[5vw] absolute inline-block'}>
                        <Image src={'/images/dist_left.svg'} layout={'fill'}></Image>
                    </motion.div>
                    <motion.div initial="hidden"
                                whileInView={'visible'}
                                viewport={{once:true}}
                                transition={{ type:"spring",duration: 1.5, delay:1.3, bounce:0.6 ,}}
                                variants={{
                                    visible: { opacity: 1, y:0 },
                                    hidden: { opacity: 0, y:-50 }
                                }} className={'w-[1.5vw] left-[42vw] top-[20vw] h-[10vw] absolute inline-block'}>
                        <Image src={'/images/dist_bott.svg'} layout={'fill'}></Image>
                    </motion.div>

                    <motion.div initial="hidden"
                                whileInView={'visible'}
                                viewport={{once:true}}
                                transition={{ type:"spring",duration: 1.5, delay:1.3, bounce:0.6 ,}}
                                variants={{
                                    visible: { opacity: 1, y:0 },
                                    hidden: { opacity: 0, y:-50 }
                                }} className={'w-[1.5vw] left-[62vw] top-[20vw] h-[10vw] absolute inline-block'}>
                        <Image src={'/images/dist_bott.svg'} layout={'fill'}></Image>
                    </motion.div>

                    <motion.div initial="hidden"
                                whileInView={'visible'}
                                viewport={{once:true}}
                                transition={{ type:"spring",duration: 1.5, delay:1.7, bounce:0.6 ,}}
                                variants={{
                                    visible: { opacity: 1, x:0 },
                                    hidden: { opacity: 0, x:-50 }
                                }} className={'w-[19vw] left-[64vw] top-[18vw] h-[6vw] absolute inline-block'}>
                        <Image src={'/images/dist_right.svg'} layout={'fill'}></Image>
                    </motion.div>
                    <motion.p initial="hidden"
                              whileInView={'visible'}
                              viewport={{once:true}}
                              transition={{ type:"spring",duration: 1.5, delay:0.9, bounce:0.6 ,}}
                              variants={{
                                  visible: { opacity: 1, x:0 },
                                  hidden: { opacity: 0, x:50 }
                              }} className={'font-semibold text-semiblue top-[22vw] left-[17vw] inline-block absolute text-center text-[3.8vw] font-gilroy '}>2%</motion.p>
                    <motion.p initial="hidden"
                              whileInView={'visible'}
                              viewport={{once:true}}
                              transition={{ type:"spring",duration: 1.5, delay:1.3, bounce:0.6 ,}}
                              variants={{
                                  visible: { opacity: 1, y:0 },
                                  hidden: { opacity: 0, y:-50 }
                              }} className={'font-semibold text-semiblue top-[29vw] left-[40.6vw] inline-block absolute text-center text-[3.8vw] font-gilroy '}>4%</motion.p>


                    <motion.p initial="hidden"
                              whileInView={'visible'}
                              viewport={{once:true}}
                              transition={{ type:"spring",duration: 1.5, delay:1.3, bounce:0.6 ,}}
                              variants={{
                                  visible: { opacity: 1, y:0 },
                                  hidden: { opacity: 0, y:-50 }
                              }} className={'font-semibold text-semiblue top-[29vw] left-[60.6vw] inline-block absolute text-center text-[3.8vw] font-gilroy '}>6%</motion.p>


                    <motion.p initial="hidden"
                              whileInView={'visible'}
                              viewport={{once:true}}
                              transition={{ type:"spring",duration: 1.5, delay:1.7, bounce:0.6 ,}}
                              variants={{
                                  visible: { opacity: 1, x:0 },
                                  hidden: { opacity: 0, x:-50 }
                              }} className={'font-semibold text-semiblue top-[23vw] left-[80vw] inline-block absolute text-center text-[3.8vw] font-gilroy '}>8%</motion.p>

                    <motion.p initial="hidden"
                              whileInView={'visible'}
                              viewport={{once:true}}
                              transition={{ type:"spring",duration: 1.5, delay:0.9, bounce:0.6 ,}}
                              variants={{
                                  visible: { opacity: 1, x:0 },
                                  hidden: { opacity: 0, x:50 }
                              }} className={'font-normal text-white top-[26.4vw] left-[15vw] inline-block absolute leading-[130%] text-center text-[2.1vw] font-gilroy '}> Bronze <br/> NFTs <br/> holders</motion.p>
                    <motion.p initial="hidden"
                              whileInView={'visible'}
                              viewport={{once:true}}
                              transition={{ type:"spring",duration: 1.5, delay:1.3, bounce:0.6 ,}}
                              variants={{
                                  visible: { opacity: 1, y:0 },
                                  hidden: { opacity: 0, y:-50 }
                              }} className={'font-normal text-white top-[34vw] left-[39vw] inline-block leading-[130%] absolute text-center text-[2.1vw] font-gilroy '}> Silver <br/> NFTs <br/> holders</motion.p>

                    <motion.p initial="hidden"
                              whileInView={'visible'}
                              viewport={{once:true}}
                              transition={{ type:"spring",duration: 1.5, delay:1.3, bounce:0.6 ,}}
                              variants={{
                                  visible: { opacity: 1, y:0 },
                                  hidden: { opacity: 0, y:-50 }
                              }} className={'font-normal text-white top-[34vw] left-[59vw] inline-block leading-[130%] absolute text-center text-[2.1vw] font-gilroy '}> Gold <br/> NFTs <br/> holders</motion.p>


                    <motion.p initial="hidden"
                              whileInView={'visible'}
                              viewport={{once:true}}
                              transition={{ type:"spring",duration: 1.5, delay:1.7, bounce:0.6 ,}}
                              variants={{
                                  visible: { opacity: 1, x:0 },
                                  hidden: { opacity: 0, x:-50 }
                              }} className={'leading-[111%] font-normal text-white top-[28.4vw] left-[74vw] inline-block absolute text-center w-[15vw] text-[2.1vw] font-gilroy '}> Platinum <br/> NFTs <br/> holders</motion.p>


                    <div className={'w-[87vw] bottom-0 left-[8vw] h-[26vw] absolute'}>
                        <Image src={'/images/dist_cards.svg'} layout={'fill'}></Image>
                    </div>
                </div>




                {/*NFT FOUNDERS COLLECTION*/}

                <div className={'w-[100vw] relative block  h-[40vw] bg-cover bg-[]'} id={'dxcds'}>
                    <motion.h2 initial="hidden"
                               whileInView={'visible'}
                               viewport={{once:true}}
                               transition={{ type:"spring",duration: 1.5, delay:0.3, bounce:0.6 ,}}
                               variants={{
                                   visible: { opacity: 1, y:0 },
                                   hidden: { opacity: 0, y:-50 }
                               }} className={'absolute top-[5.6vw] left-0 w-full text-center inline-block text-white font-gilroy uppercase font-black text-[4.95vw]'}>FOUNDERS COLLECTION NFT</motion.h2>
                    <motion.p initial="hidden"
                              whileInView={'visible'}
                              viewport={{once:true}}
                              transition={{ type:"spring",duration: 1.5, delay:0.6, bounce:0.6 ,}}
                              variants={{
                                  visible: { opacity: 1, y:0 },
                                  hidden: { opacity: 0, y:-50 }
                              }} className={'absolute top-[12.9vw] left-0 w-full text-center inline-block leading-[110%] text-white font-gilroy uppercase font-medium text-[1.92vw]'}>created for the early investors who will have 20% of 1MDAO fund profit. These NFTs can be sold on the marketplace.</motion.p>
                    <motion.div initial="hidden"
                                whileInView={'visible'}
                                viewport={{once:true}}
                                transition={{ type:"spring",duration: 1.5, delay:0.3, bounce:0.6 ,}}
                                variants={{
                                    visible: { opacity: 1, x:0 },
                                    hidden: { opacity: 0, x:-50 }
                                }} className={'w-[13vw] h-[5vw] absolute left-[16vw] top-[22.8vw]'}>
                        <Image src={'/images/bronze.svg'} layout={'fill'}></Image>
                    </motion.div>
                    <motion.div initial="hidden"
                                whileInView={'visible'}
                                viewport={{once:true}}
                                transition={{ type:"spring",duration: 1.5, delay:0.6, bounce:0.6 ,}}
                                variants={{
                                    visible: { opacity: 1, x:0 },
                                    hidden: { opacity: 0, x:-50 }
                                }} className={'w-[11vw] h-[5vw] absolute left-[35.4vw] top-[22.8vw]'}>
                        <Image src={'/images/silver.svg'} layout={'fill'}></Image>
                    </motion.div>
                    <motion.div initial="hidden"
                                whileInView={'visible'}
                                viewport={{once:true}}
                                transition={{ type:"spring",duration: 1.5, delay:0.9, bounce:0.6 ,}}
                                variants={{
                                    visible: { opacity: 1, x:0 },
                                    hidden: { opacity: 0, x:-50 }
                                }} className={'w-[9.8vw] h-[5vw] absolute left-[54.5vw] top-[22.8vw]'}>
                        <Image src={'/images/gold.svg'} layout={'fill'}></Image>
                    </motion.div>
                    <motion.div initial="hidden"
                                whileInView={'visible'}
                                viewport={{once:true}}
                                transition={{ type:"spring",duration: 1.5, delay:1.2, bounce:0.6 ,}}
                                variants={{
                                    visible: { opacity: 1, x:0 },
                                    hidden: { opacity: 0, x:-50 }
                                }} className={'w-[16.8vw] h-[5vw] absolute left-[69.7vw] top-[22.8vw]'}>
                        <Image src={'/images/platinum.svg'} layout={'fill'}></Image>
                    </motion.div>
                    <motion.div initial="hidden"
                                whileInView={'visible'}
                                viewport={{once:true}}
                                transition={{ type:"spring",duration: 1.5, delay:0.3, bounce:0.6 ,}}
                                variants={{
                                    visible: { opacity: 1, x:0 },
                                    hidden: { opacity: 0, x:-50 }
                                }} className={'w-[13vw] h-[5vw] absolute left-[16vw] top-[26.8vw]'}>
                        <p className={'w-full text-white font-semibold text-center font-gilroy text-[2.3vw] uppercase'}>200 NFT</p>
                    </motion.div>
                    <motion.div initial="hidden"
                                whileInView={'visible'}
                                viewport={{once:true}}
                                transition={{ type:"spring",duration: 1.5, delay:0.6, bounce:0.6 ,}}
                                variants={{
                                    visible: { opacity: 1, x:0 },
                                    hidden: { opacity: 0, x:-50 }
                                }} className={'w-[11vw] h-[5vw] absolute left-[35.4vw] top-[26.8vw]'}>
                        <p className={'w-full text-white font-semibold text-center font-gilroy text-[2.3vw] uppercase'}>100 NFT</p>
                    </motion.div>
                    <motion.div initial="hidden"
                                whileInView={'visible'}
                                viewport={{once:true}}
                                transition={{ type:"spring",duration: 1.5, delay:0.9, bounce:0.6 ,}}
                                variants={{
                                    visible: { opacity: 1, x:0 },
                                    hidden: { opacity: 0, x:-50 }
                                }} className={'w-[9.8vw] h-[5vw] absolute left-[54.5vw] top-[26.8vw]'}>
                        <p className={'w-full text-white font-semibold text-center font-gilroy text-[2.3vw] uppercase'}>50 NFT</p>
                    </motion.div>
                    <motion.div initial="hidden"
                                whileInView={'visible'}
                                viewport={{once:true}}
                                transition={{ type:"spring",duration: 1.5, delay:1.2, bounce:0.6 ,}}
                                variants={{
                                    visible: { opacity: 1, x:0 },
                                    hidden: { opacity: 0, x:-50 }
                                }} className={'w-[16.8vw] h-[5vw] absolute left-[69.7vw] top-[26.8vw]'}>
                        <p className={'w-full text-white font-semibold text-center font-gilroy text-[2.3vw] uppercase'}>20 NFT</p>
                    </motion.div>

                    <a href={'https://admin-176.gitbook.io/1-million-dao/ecosystem-1-million-dao/nft-tokens'}>
                        <motion.div initial="hidden"
                                    whileInView={'visible'}
                                    viewport={{once:true}}
                                    transition={{ type:"spring",duration: 1.5, delay:0.3, bounce:0.6 ,}}
                                    variants={{
                                        visible: { opacity: 1, y:0 },
                                        hidden: { opacity: 0, y:100 }
                                    }} className={'cursor-pointer swiper-background w-[17.1vw] h-[4.5vw] left-[41.2vw] top-[37vw] rounded-full text-in-shape absolute inline-flex'}>
                            <p className={'text-white font-gilroy font-semibold text-[1.7vw]'}>LEARN MORE</p>
                        </motion.div></a>

                </div>

                {/*MARKETPLACE*/}


                <div className={'w-[100vw] relative block  h-[71.6vw] bg-cover bg-[]'} id={'marketplace'}>
                    <h2 className={'absolute top-[6vw] w-full text-center inline-block text-white font-gilroy uppercase font-bold text-[5.1vw]'}>FOUNDERS LIMITED COLLECTION</h2>
                    <p className={'absolute top-[15vw] left-[32vw] inline-block text-white font-gilroy font-medium uppercase text-[2vw]'}></p>
                    <div className={'left-[12vw] top-[20vw] w-[79vw] h-[37vw] absolute inline-block] neon-border rounded-[2vw] border-4 '}></div>
                    <div className={'left-[12vw] top-[20vw] w-[79vw] h-[30vw] absolute inline-block] '}>
                        <div className={'justify-around top-[3vw] flex absolute bottom-0 w-full h-[80.3%]'}>
                            <div className={'w-[20%] h-full relative'}>
                                <PlanetCardMarketplace category={'bronze'} quantity={200} cost={0.4} planetName={'Jupiter'} image={'/images/planets/1.png'} apyIncrease={0.01} ></PlanetCardMarketplace>
                                <MintButton category={"bronze"}/>
                            </div>
                            <div className={'w-[20%] h-full relative'}>
                                <PlanetCardMarketplace category={'silver'} quantity={100} cost={0.8} planetName={'Neptun'} image={'/images/planets/2.png'} apyIncrease={0.04}></PlanetCardMarketplace>
                                <MintButton category={"silver"}/>
                            </div>
                            <div className={'w-[20%] h-full relative'}>
                                <PlanetCardMarketplace category={'gold'} quantity={50} cost={2.4} planetName={'Mars'} image={'/images/planets/3.png'} apyIncrease={0.12}></PlanetCardMarketplace>
                                <MintButton category={"gold"}/>
                            </div>
                            <div className={'w-[20%] h-full relative'}>
                                <PlanetCardMarketplace category={'platinum'} quantity={20} cost={10} planetName={'Pluto'} image={'/images/planets/4.png'} apyIncrease={0.4}></PlanetCardMarketplace>
                                <MintButton category={"platinum"}/>
                            </div>
                        </div>
                    </div>

                </div>


                {/*STACKER*/}

                <motion.div  className={'w-[100vw] relative block h-[64.65vw] bg-[]'} id={'stacker'}>
                    <div className={'w-[56vw] right-[-6vw] top-[8vw] h-[56vw] absolute inline-block'}>
                        <Image src={'/images/stakemoon.png'} layout={'fill'}></Image>
                    </div>
                    <motion.div className={'w-[100vw] z-50 absolute top-0 block h-[57vw]'}>
                        <h2 className={'w-[60%] mx-[20%] text-center text-[3.45vw] text-white font-gilroy font-semibold leading-[100%] mt-[3vw] uppercase'}><strong>Stake your NFT<br/><span className={'font-medium text-[2vw]'}>to get rewards from  1MDAO Fund</span></strong></h2>
                        <div className={'justify-center absolute w-[32.3vw] h-[25vw] flex top-[4vw] left-[34vw] top-[13.6vw]'}>
                            <div className={'neon-border border-4 rounded-[1vw] w-full h-full absolute'}></div>
                            <div className={'border-white border-2 rounded-[1vw] w-[99.7%] h-[99.7%] absolute'}></div>
                            <div className={'w-[98%] mt-[6%] h-[98%] absolute'}>
                                <Stacker></Stacker>
                            </div>

                        </div>
                        {/*<div className={'w-[9vw] h-[6vw] top-[50vw] left-[30vw] absolute inline-block'}>*/}
                        {/*    <Image src={'/images/30procents.svg'} layout={'fill'}></Image>*/}
                        {/*</div>*/}
                        {/*<p className={'w-[8vw] absolute inline-block top-[50vw] text-[1.6vw] w-[31.2vw] left-[40vw] text-white font-gilroy font-medium'}>from all BNB collected on Pinksale presale will be distributed in $BNB Rewards pool</p>*/}
                        {/*/!*<button className={'absolute w-[14.7vw] h-[4vw] top-[57vw] left-[34vw] text-[1.5vw] bg-purple text-white rounded-full font-gilroy font-bold'}>BUY $OMD</button>*!/*/}
                    </motion.div>

                </motion.div>



                {/*MOVE-2-EARN*/}

                <div className={'w-[100vw] relative block  h-[55vw] bg-cover bg-[]'} id={'moveearn'}>
                    <p className={'absolute top-[2vw] w-[45vw] left-[38vw] inline-block text-white font-gilroy uppercase font-black text-[6vw]'}>Move 2 earn</p>
                    <p className={'absolute top-[17vw] w-[45vw] left-[38vw] inline-block text-white font-gilroy uppercase font-medium text-[3vw]'}>EARN $GMD, Upgrade endurance for more rewards
                        <br/><br/>STAY HEALTHY
                    </p>
                    <Swiper
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        speed={400}
                        effect={'fade'}
                        modules={[Autoplay,]}
                        className={'w-[25vw] justify-center items-center inline-flex h-[47vw] absolute left-[10vw] top-0 '}>
                        <SwiperSlide><div className={'w-[93%] ml-[4%] mt-[4%] absolute h-[95%]'}>
                            <Image src={'/images/move1.png'} layout={'fill'}></Image>
                        </div></SwiperSlide>
                        <SwiperSlide><div className={'w-[93%] ml-[4%] mt-[4%] absolute h-[95%]'}>
                            <Image src={'/images/move2.png'} layout={'fill'}></Image>
                        </div></SwiperSlide>
                        <SwiperSlide><div className={'w-[93%] ml-[4%] mt-[4%] absolute h-[95%]'}>
                            <Image src={'/images/move3.png'} layout={'fill'}></Image>
                        </div></SwiperSlide>
                        <SwiperSlide><div className={'w-[93%] ml-[4%] mt-[4%] absolute h-[95%]'}>
                            <Image src={'/images/move4.png'} layout={'fill'}></Image>
                        </div></SwiperSlide>
                        <SwiperSlide><div className={'w-[93%] ml-[4%] mt-[4%] absolute h-[95%]'}>
                            <Image src={'/images/move5.png'} layout={'fill'}></Image>
                        </div></SwiperSlide>
                        {/*<div className={'w-full z-[99] absolute h-full'}>*/}
                        {/*    <Image src={'/images/move_base.png'} layout={'fill'}></Image>*/}
                        {/*</div>*/}
                    </Swiper>
                    <div className={'border-[1.35vw] border-[#000] w-[25.05vw] z-[99] justify-center items-center inline-flex h-[47vw] absolute left-[10vw] top-0 '}>
                    </div>
                    <div className={' w-[25vw] z-[99] justify-center items-center inline-flex h-[47vw] absolute left-[10vw] top-0 '}>
                        <Image src={'/images/move_base.png'} layout={'fill'}></Image>
                    </div>
                    <a href={'https://admin-176.gitbook.io/1-million-dao/ecosystem-1-million-dao/move-to-earn'}>
                        <motion.div initial="hidden"
                                    whileInView={'visible'}
                                    viewport={{once:true}}
                                    transition={{ type:"spring",duration: 1.5, delay:0.3, bounce:0.6 ,}}
                                    variants={{
                                        visible: { opacity: 1, y:0 },
                                        hidden: { opacity: 0, y:100 }
                                    }} className={'cursor-pointer swiper-background w-[17.1vw] h-[4.5vw] left-[62vw] top-[35vw] rounded-full text-in-shape absolute inline-flex'}>
                            <p className={'text-white font-gilroy font-semibold text-[1.7vw]'}>LEARN MORE</p>
                        </motion.div></a>
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
                                    hidden: { opacity: 0, scale:1 }
                                }} className={'justify-center justify-items-center items-center absolute inline-flex left-[58.5vw] top-[3.2vw] w-[28.6vw] h-[28.6vw]'}>
                        {/*<Image src={'/images/1.png'} layout={'fill'}></Image>*/}
                        <div className={'w-[95%] absolute h-[95%]'}>
                            <div className={'w-[95%] absolute h-[95%]'}>
                                <Image src={'/images/metaverse/met1.png'} layout={'fill'}></Image>
                            </div>
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
                                }} className={'relative hidden sm:inline-block w-[100vw] h-[58vw]'}
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
                                    hidden: { opacity: 0, scale:1 }
                                }} className={'absolute inline-block left-[-3vw] top-[15.2vw] w-[33vw] h-[33vw]'}>
                        {/*<Image src={'/images/2.png'} layout={'fill'}></Image>*/}
                        <div className={'w-[95%] left-[3%] absolute h-[95%]'}>
                            <div className={'w-[95%] absolute h-[95%]'}>
                                <Image src={'/images/metaverse/met2.png'} layout={'fill'}></Image>
                            </div>
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
                                }} className={'relative hidden sm:inline-block w-[100vw] h-[58vw]'}
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
                        <p className={'text-white inline-block absolute text-center w-[65%] mx-[17.5%] mt-[22vw] leading-[100%] text-[1.8vw] font-gilroy font-regular'}>Explore the space with your friends and create alliances</p>
                    </motion.div>
                    <motion.div initial="hidden"
                                whileInView={'visible'}
                                viewport={{once:true}}
                                transition={{ type:"tween",duration: 2.5, delay:0.0 ,}}
                                variants={{
                                    visible: { opacity: 1, scale:1 },
                                    hidden: { opacity: 0, scale:1 }
                                }} className={'absolute inline-block left-[34.4vw] top-[24.5vw] w-[31vw] h-[32vw]'}>
                        {/*<Image src={'/images/3.png'} layout={'fill'}></Image>*/}
                        <div className={'w-[95%] left-[3%] top-[3%] absolute h-[95%]'}>
                            <div className={'w-[95%] absolute h-[95%]'}>
                                <Image src={'/images/metaverse/met3.png'} layout={'fill'}></Image>
                            </div>
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
                                }} className={'relative hidden sm:inline-block w-[100vw] h-[58vw]'}
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
                        <p className={'text-white inline-block absolute text-center w-[70%] mx-[15%] mt-[20.5vw] leading-[100%] text-[1.8vw] font-gilroy font-regular'}>Develop your space base and strengthen your defense</p>
                    </motion.div>
                    <motion.div initial="hidden"
                                whileInView={'visible'}
                                viewport={{once:true}}
                                transition={{ type:"tween",duration: 2.5, delay:0.0 ,}}
                                variants={{
                                    visible: { opacity: 1, scale:1 },
                                    hidden: { opacity: 0, scale:1 }
                                }} className={'absolute inline-block right-0 top-[32vw] w-[33.5vw] h-[37.5vw]'}>
                        {/*<Image src={'/images/4.png'} layout={'fill'}></Image>*/}
                        <div className={'w-[95%] left-[3%] top-[6%] absolute h-[93%]'}>
                            <div className={'w-[95%] absolute h-[95%]'}>
                                <Image src={'/images/metaverse/met4.png'} layout={'fill'}></Image>
                            </div>
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
                                }} className={'relative hidden sm:inline-block w-[100vw] h-[58vw]'}
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
                        <p className={'text-white inline-block absolute text-center w-[70%] mx-[15%] mt-[24.0vw] leading-[100%] text-[1.8vw] font-gilroy font-regular'}>Acquire unique resources and trade them on the marketplace for profit</p>
                    </motion.div>
                    <motion.div initial="hidden"
                                whileInView={'visible'}
                                viewport={{once:true}}
                                transition={{ type:"spring",duration: 2.5, delay:0.3, bounce:0.6 ,}}
                                variants={{
                                    visible: { opacity: 1, y:0 },
                                    hidden: { opacity: 0, y:100 }
                                }}
                                onClick={()=>{setOpenGame(true)}}
                                className={'cursor-pointer left-[16.4vw] top-[55.5vw] w-[28vw] text-in-shape h-[9vw] absolute sm:inline-flex hidden '}>
                        <div className={'w-full h-full neon-border border-[5px] inline-block rounded-full'}></div>
                        <div className={'offer-gradient w-[90%] rounded-full h-[75%] p-[2vw] inline-block absolute'}></div>
                        <a href={'/game.html'} className={'text-white inline-block absolute text-center text-[3.2vw] font-gilroy font-regular'}><strong>PLAY</strong> DEMO</a>
                    </motion.div>
                </div>


                {/*TEASER*/}

                {/*<div className={'w-[100vw] relative block h-[60.5vw] bg-[]]'} id={'teaser'}>*/}
                {/*    <iframe className={'inline-block absolute left-[14vw] w-[72vw] h-[37vw] top-[7vw]'} width="949" height="534" src="https://www.youtube.com/embed/0Eo1c2grmq8"*/}
                {/*            title="YouTube video player" frameBorder="0"*/}
                {/*            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
                {/*            allowFullScreen></iframe>*/}
                {/*    <div className={'justify-items-center justify-center items-center absolute inline-flex left-[39.67vw] top-[47.7vw] w-[20.8vw] h-[5.5vw] rounded-full bg-purple'}>*/}
                {/*        <h2 className={'text-white text-center uppercase text-[1.7vw] font-gilroy font-bold'}>BUY $OMD</h2>*/}
                {/*    </div>*/}
                {/*</div>*/}


                {/*SWIPER*/}

                {/*<motion.div  className={'w-[100vw] relative block h-[57vw] bg-cover bg-[]'} id={'swiper'}>*/}
                {/*    <div className={'w-[20vw] h-full absolute top-0 right-0'}>*/}
                {/*        <Image src={'/images/swap_planet.png'} layout={'fill'}></Image>*/}
                {/*    </div>*/}
                {/*    <motion.div initial="hidden"*/}
                {/*                whileInView={'visible'}*/}
                {/*                viewport={{once:true}}*/}
                {/*                transition={{ duration: 1, delay:0.3, ease:'easeInOut'}}*/}
                {/*                variants={{*/}
                {/*                    visible: { opacity: 1, scale:1 },*/}
                {/*                    hidden: { opacity: 0, scale:0.8 }*/}
                {/*                }} className={'w-[100vw] z-50 absolute top-0 block h-[57vw]'}>*/}
                {/*        <h2 className={'absolute top-[2vw] left-[28vw] inline-block text-white font-gilroy font-bold text-[5.1vw]'}>DEX</h2>*/}
                {/*        <div className={'absolute w-[41vw] top-[10vw] left-[28vw] h-[47.3vw]'}>*/}
                {/*            <Swaper></Swaper>*/}
                {/*        </div>*/}

                {/*    </motion.div>*/}

                {/*</motion.div>*/}


                {/*DAO*/}

                <div className={'w-[100vw] relative block h-[58vw] bg-cover bg-[]'} id={'dao'}>
                    <div className={'top-[1vw] left-[6vw] w-[53vw] h-[53vw] absolute inline-block'}>
                        <Image src={'/images/galactic3.png'} layout={'fill'}></Image>
                    </div>
                    <div className={'w-[53.45vw] h-[13vw] absolute inline-block top-[19vw] left-[31vw]'}>
                        <Image src={'/images/dao_vectors_temp.svg'} layout={'fill'}></Image>
                    </div>

                    <motion.div initial="hidden"
                                whileInView={'visible'}
                                viewport={{once:true}}
                                transition={{ duration: 1, delay:0.3, ease:'easeInOut'}}
                                variants={{
                                    visible: { opacity: 1, scale:1 },
                                    hidden: { opacity: 0, scale:0.8 }
                                }} className={'absolute w-[18.5vw] h-[11.2vw] p-[1vw] top-[11vw] left-[22vw] dashboard-shape rounded-[1vw]'}>
                        <p className={'text-white font-gilroy font-bold text-[2.3vw]'}>Strategy</p>
                        <ul className={'list-disc ext-white font-gilroy font-bold'}>
                            <li className={'list-disc text-white font-gilroy font-medium text-[1.7vw] ml-[3vw]'}>play-to-earn</li>
                            <li className={'list-disc text-white font-gilroy font-medium text-[1.7vw] ml-[3vw]'}>move-to-earn</li>
                        </ul>
                    </motion.div>


                    <motion.div initial="hidden"
                                whileInView={'visible'}
                                viewport={{once:true}}
                                transition={{ duration: 1, delay:0.3, ease:'easeInOut'}}
                                variants={{
                                    visible: { opacity: 1, scale:1 },
                                    hidden: { opacity: 0, scale:0.8 }
                                }} className={'absolute w-[18.5vw] h-[13.2vw] p-[1vw] top-[30vw] left-[70.6vw] dashboard-shape rounded-[1vw]'}>
                        <p className={'text-white font-gilroy font-bold text-[2vw]'}>Passive income</p>
                        <ul className={'list-disc ext-white font-gilroy font-bold'}>
                            <li className={'list-disc text-white font-gilroy font-medium text-[1.7vw] leading-[115%] ml-[2vw]'}>rebase long term strategy</li>
                            <li className={'list-disc text-white font-gilroy font-medium text-[1.7vw] leading-[115%] ml-[2vw]'}>NFT staking</li>
                        </ul>
                    </motion.div>

                    <motion.div initial="hidden"
                                whileInView={'visible'}
                                viewport={{once:true}}
                                transition={{ duration: 1, delay:0.3, ease:'easeInOut'}}
                                variants={{
                                    visible: { opacity: 1, scale:1 },
                                    hidden: { opacity: 0, scale:0.8 }
                                }} className={'absolute w-[18.5vw] h-[13.2vw] p-[1vw] top-[6.4vw] left-[63.5vw] dashboard-shape rounded-[1vw]'}>
                        <p className={'text-white font-gilroy font-bold text-[1.8vw] leading-[130%]'}>Distribution of 1MDAO foundation profit to 1MDAO members</p>
                    </motion.div>

                    <motion.div initial="hidden"
                                whileInView={'visible'}
                                viewport={{once:true}}
                                transition={{ duration: 1, delay:0.3, ease:'easeInOut'}}
                                variants={{
                                    visible: { opacity: 1, scale:1 },
                                    hidden: { opacity: 0, scale:0.8 }
                                }} className={'absolute w-[18.5vw] h-[14.5vw] p-[1vw] top-[31.7vw] left-[34.5vw] dashboard-shape rounded-[1vw]'}>
                        <p className={'text-white font-gilroy font-bold text-[2.7vw] text-center leading-[150%]'}>Marketing</p>
                        <ul className={'list-disc ext-white font-gilroy font-bold'}>
                            <li className={'list-disc text-white font-gilroy font-medium text-[1.9vw] leading-[115%] ml-[2vw]'}>cooperation</li>
                            <li className={'list-disc text-white font-gilroy font-medium text-[1.9vw] leading-[115%] ml-[2vw]'}>collaboration</li>
                            <li className={'list-disc text-white font-gilroy font-medium text-[1.9vw] leading-[115%] ml-[2vw]'}>promotion</li>
                        </ul>
                    </motion.div>

                    {/*<motion.div initial="hidden"*/}
                    {/*            whileInView={'visible'}*/}
                    {/*            viewport={{once:true}}*/}
                    {/*            transition={{ duration: 1, delay:0.3, ease:'easeInOut'}}*/}
                    {/*            variants={{*/}
                    {/*                visible: { opacity: 1, scale:1 },*/}
                    {/*                hidden: { opacity: 0, scale:0.8 }*/}
                    {/*            }} className={'absolute w-[18vw] h-[7.5vw] p-[1.7vw] top-[42vw] left-[27vw] dashboard-shape rounded-[1vw]'}>*/}
                    {/*    <ul className={'list-disc ext-white font-gilroy font-bold'}>*/}
                    {/*        <li className={'list-disc text-white font-gilroy font-medium text-[1.7vw] leading-[115%] ml-[2vw]'}>cooperation</li>*/}
                    {/*        <li className={'list-disc text-white font-gilroy font-medium text-[1.7vw] leading-[115%] ml-[2vw]'}>collaboration</li>*/}
                    {/*    </ul>*/}
                    {/*</motion.div>*/}

                    {/*<motion.div initial="hidden"*/}
                    {/*            whileInView={'visible'}*/}
                    {/*            viewport={{once:true}}*/}
                    {/*            transition={{ duration: 1, delay:0.3, ease:'easeInOut'}}*/}
                    {/*            variants={{*/}
                    {/*                visible: { opacity: 1, scale:1 },*/}
                    {/*                hidden: { opacity: 0, scale:0.8 }*/}
                    {/*            }} className={'absolute w-[18vw] h-[7.5vw] p-[1.7vw] top-[42vw] left-[47vw] dashboard-shape rounded-[1vw]'}>*/}
                    {/*    <ul className={'list-disc ext-white font-gilroy font-bold'}>*/}
                    {/*        <li className={'list-disc text-white font-gilroy font-medium text-[1.7vw] leading-[222%] ml-[2vw]'}>promotion</li>*/}
                    {/*    </ul>*/}
                    {/*</motion.div>*/}


                    <a href={'https://admin-176.gitbook.io/1-million-dao/ecosystem-1-million-dao/dao'}>
                        <motion.div initial="hidden"
                                    whileInView={'visible'}
                                    viewport={{once:true}}
                                    transition={{ type:"spring",duration: 1.5, delay:0.3, bounce:0.6 ,}}
                                    variants={{
                                        visible: { opacity: 1, y:0 },
                                        hidden: { opacity: 0, y:100 }
                                    }} className={'cursor-pointer swiper-background w-[17.1vw] h-[4.5vw] left-[47vw] top-[49vw] rounded-full text-in-shape absolute inline-flex'}>
                            <p className={'text-white font-gilroy font-semibold text-[1.7vw]'}>LEARN MORE</p>
                        </motion.div></a>


                    {/*<div className={'animate-ping absolute inline-block text-white left-[47.2vw] top-[21vw] text-[3.5vw] font-gilroy font-bold w-[18.3vw] h-[6.2vw] dao-gradient text-in-shape flex rounded-[1.5vw]'}></div>*/}
                    <div className={'absolute inline-block text-white left-[47.2vw] top-[21vw] text-[5vw] font-gilroy font-bold w-[18.6vw] h-[6.2vw] dashboard-shape text-in-shape flex rounded-[1.5vw]'}>DAO</div>
                </div>





                {/*TEAM*/}

                {/*<div className={'w-[100vw] relative block h-[71.6vw] bg-cover bg-[]'} id={'team'}>*/}
                {/*    <motion.div*/}
                {/*        initial="hidden"*/}
                {/*        whileInView={'visible'}*/}
                {/*        viewport={{once:true}}*/}
                {/*        transition={{ duration: 30, repeat:Infinity, repeatType:'loop', ease:'linear'}}*/}
                {/*        variants={{*/}
                {/*            visible: { opacity: 1, rotate:0 },*/}
                {/*            hidden: { opacity: 1, rotate: -360 }*/}
                {/*        }}*/}
                {/*        className={'w-[60vw] h-[60vw] top-[9vw] left-[-9vw] absolute'}>*/}
                {/*        <Image src={'/images/galactic2.png'} layout={'fill'}></Image>*/}
                {/*    </motion.div>*/}
                {/*    <h2 className={'tracking-[0.03em] text-white font-gilroy font-black absolute inline-block uppercase right-[9.2vw] top-[6vw] text-[5.9vw]'}>TEAM</h2>*/}

                {/*    <div className={'w-[15.5vw] h-[21vw] left-[38.7vw] top-[18.6vw] absolute justify-center  inline-flex border-white border-2 rounded-[2vw]'}>*/}
                {/*        <div className={'absolute top-[-3vw] w-[13.4vw] h-[13.4vw] justify-center justify-items-center items-center flex'}>*/}
                {/*            <div className={'absolute w-[11.9vw] h-[11.9vw] rounded-full border-[1.5vw] neon-border'}></div>*/}
                {/*            <div className={'absolute w-[10.4vw] h-[10.4vw] rounded-full'}>*/}
                {/*                <Image src={'/images/fufel1.png'} layout={'fill'}></Image>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <p className={'text-white inline-block absolute text-center top-[10vw] text-[3vw] font-gilroy font-regular'}>Name</p>*/}
                {/*        <p className={'text-white inline-block absolute text-center top-[13.7vw] text-[1.5vw] font-gilroy font-regular'}>CEO</p>*/}
                {/*        <div className={'w-[9vw] h-[4vw] absolute top-[16vw]'}>*/}
                {/*            <Image src={'/images/linkedin.svg'} layout={'fill'}></Image>*/}
                {/*        </div>*/}
                {/*    </div>*/}

                {/*    <div className={'w-[15.5vw] h-[21vw] left-[58vw] top-[18.6vw] absolute justify-center  inline-flex border-white border-2 rounded-[2vw]'}>*/}
                {/*        <div className={'absolute top-[-3vw] w-[13.4vw] h-[13.4vw] justify-center justify-items-center items-center flex'}>*/}
                {/*            <div className={'absolute w-[11.9vw] h-[11.9vw] rounded-full border-[1.5vw] neon-border'}></div>*/}
                {/*            <div className={'absolute w-[10.4vw] h-[10.4vw] rounded-full'}>*/}
                {/*                <Image src={'/images/fufel2.png'} layout={'fill'}></Image>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <p className={'text-white inline-block absolute text-center top-[10vw] text-[3vw] font-gilroy font-regular'}>Name</p>*/}
                {/*        <p className={'text-white inline-block absolute text-center top-[13.7vw] text-[1.5vw] font-gilroy font-regular'}>CEO</p>*/}
                {/*        <div className={'w-[9vw] h-[4vw] absolute top-[16vw]'}>*/}
                {/*            <Image src={'/images/linkedin.svg'} layout={'fill'}></Image>*/}
                {/*        </div>*/}
                {/*    </div>*/}


                {/*    <div className={'w-[15.5vw] h-[21vw] left-[77vw] top-[18.6vw] absolute justify-center  inline-flex border-white border-2 rounded-[2vw]'}>*/}
                {/*        <div className={'absolute top-[-3vw] w-[13.4vw] h-[13.4vw] justify-center justify-items-center items-center flex'}>*/}
                {/*            <div className={'absolute w-[11.9vw] h-[11.9vw] rounded-full border-[1.5vw] neon-border'}></div>*/}
                {/*            <div className={'absolute w-[10.4vw] h-[10.4vw] rounded-full'}>*/}
                {/*                <Image src={'/images/fufel3.png'} layout={'fill'}></Image>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <p className={'text-white inline-block absolute text-center top-[10vw] text-[3vw] font-gilroy font-regular'}>Name</p>*/}
                {/*        <p className={'text-white inline-block absolute text-center top-[13.7vw] text-[1.5vw] font-gilroy font-regular'}>CEO</p>*/}
                {/*        <div className={'w-[9vw] h-[4vw] absolute top-[16vw]'}>*/}
                {/*            <Image src={'/images/linkedin.svg'} layout={'fill'}></Image>*/}
                {/*        </div>*/}
                {/*    </div>*/}

                {/*    <div className={'w-[15.5vw] h-[21vw] left-[58vw] top-[43vw] absolute justify-center  inline-flex border-white border-2 rounded-[2vw]'}>*/}
                {/*        <div className={'absolute top-[-3vw] w-[13.4vw] h-[13.4vw] justify-center justify-items-center items-center flex'}>*/}
                {/*            <div className={'absolute w-[11.9vw] h-[11.9vw] rounded-full border-[1.5vw] neon-border'}></div>*/}
                {/*            <div className={'absolute w-[10.4vw] h-[10.4vw] rounded-full'}>*/}
                {/*                <Image src={'/images/fufel4.png'} layout={'fill'}></Image>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <p className={'text-white inline-block absolute text-center top-[10vw] text-[3vw] font-gilroy font-regular'}>Name</p>*/}
                {/*        <p className={'text-white inline-block absolute text-center top-[13.7vw] text-[1.5vw] font-gilroy font-regular'}>CEO</p>*/}
                {/*        <div className={'w-[9vw] h-[4vw] absolute top-[16vw]'}>*/}
                {/*            <Image src={'/images/linkedin.svg'} layout={'fill'}></Image>*/}
                {/*        </div>*/}
                {/*    </div>*/}


                {/*    <div className={'w-[15.5vw] h-[21vw] left-[77vw] top-[43vw] absolute justify-center  inline-flex border-white border-2 rounded-[2vw]'}>*/}
                {/*        <div className={'absolute top-[-3vw] w-[13.4vw] h-[13.4vw] justify-center justify-items-center items-center flex'}>*/}
                {/*            <div className={'absolute w-[11.9vw] h-[11.9vw] rounded-full border-[1.5vw] neon-border'}></div>*/}
                {/*            <div className={'absolute w-[10.4vw] h-[10.4vw] rounded-full'}>*/}
                {/*                <Image src={'/images/fufel5.png'} layout={'fill'}></Image>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <p className={'text-white inline-block absolute text-center top-[10vw] text-[3vw] font-gilroy font-regular'}>Name</p>*/}
                {/*        <p className={'text-white inline-block absolute text-center top-[13.7vw] text-[1.5vw] font-gilroy font-regular'}>CEO</p>*/}
                {/*        <div className={'w-[9vw] h-[4vw] absolute top-[16vw]'}>*/}
                {/*            <Image src={'/images/linkedin.svg'} layout={'fill'}></Image>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}


                {/*ROADMAP*/}

                <div className={'w-[100vw] relative block h-[122vw] bg-cover bg-[]'} id={'roadmap'}>

                    <div className={'absolute inline-block rotate-180 left-[6vw] top-[6.5vw]  w-[88vw] h-[120vw] rounded-[4.5vw] rotate-180'}>
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
                    <div className={'justify-between justify-items-center flex-nowrap w-[71vw] h-[95vw] absolute inline-flex left-[14.5vw] top-[24vw]'}>
                        <motion.div initial="hidden"
                                    whileInView={'visible'}
                                    viewport={{once:true}}
                                    transition={{ type:"tween",duration: 1, delay:0.6 ,}}
                                    variants={{
                                        visible: { opacity: 1, x:0 },
                                        hidden: { opacity: 0, x:-100 }
                                    }} className={'w-[30%] h-full inline-block flex roadmap-card rounded-[1vw] text-in-roadmap-card p-[3%]'}>
                            <div className={'w-[13vw] h-[4.4vw] top-[-2.5vw] rounded-[1vw] flex text-in-shape bg-purple absolute'}>
                                <p className={'leading-[89%]  text-[2vw] text-white font-gilroy text-center uppercase px-[2vw] font-bold'}>Roadmap Q2 2022</p>
                            </div>
                            <div className={'w-[2.5vw] h-[2.5vw] left-[-1vw] top-[3vw] absolute inline-block'}>
                                <Image src={'/images/roadmap_complete.svg'} layout={'fill'}></Image>
                            </div>
                            <div className={'w-[2.5vw] h-[2.5vw] left-[-1vw] top-[6.2vw] absolute inline-block'}>
                                <Image src={'/images/roadmap_complete.svg'} layout={'fill'}></Image>
                            </div>
                            <div className={'w-[2.5vw] h-[2.5vw] left-[-1vw] top-[9.9vw] absolute inline-block'}>
                                <Image src={'/images/roadmap_complete.svg'} layout={'fill'}></Image>
                            </div>
                            <div className={'w-[2.5vw] h-[2.5vw] left-[-1vw] top-[12.8vw] absolute inline-block'}>
                                <Image src={'/images/roadmap_complete.svg'} layout={'fill'}></Image>
                            </div>
                            <div className={'w-[2.5vw] h-[2.5vw] left-[-1vw] top-[15.5vw] absolute inline-block'}>
                                <Image src={'/images/roadmap_complete.svg'} layout={'fill'}></Image>
                            </div>
                            <div className={'w-[2.5vw] h-[2.5vw] left-[-1vw] top-[18.3vw] absolute inline-block'}>
                                <Image src={'/images/roadmap_complete.svg'} layout={'fill'}></Image>
                            </div>
                            <div className={'w-[2.5vw] h-[2.5vw] left-[-1vw] top-[21.1vw] absolute inline-block'}>
                                <Image src={'/images/roadmap_complete.svg'} layout={'fill'}></Image>
                            </div>
                            <div className={'w-[2.5vw] h-[2.5vw] left-[-1vw] top-[24.3vw] absolute inline-block'}>
                                <Image src={'/images/roadmap_complete.svg'} layout={'fill'}></Image>
                            </div>
                            <div className={'w-[2.5vw] h-[2.5vw] left-[-1vw] top-[28.5vw] absolute inline-block'}>
                                <Image src={'/images/roadmap_complete.svg'} layout={'fill'}></Image>
                            </div>
                            <div className={'w-[2.5vw] h-[2.5vw] left-[-1vw] top-[32.2vw] absolute inline-block'}>
                                <Image src={'/images/roadmap_complete.svg'} layout={'fill'}></Image>
                            </div>
                            <div className={'w-[2.5vw] h-[2.5vw] left-[-1vw] top-[35.0vw] absolute inline-block'}>
                                <Image src={'/images/roadmap_complete.svg'} layout={'fill'}></Image>
                            </div>
                            {/*<div className={'w-[2.5vw] h-[2.5vw] left-[-1vw] top-[7vw] absolute inline-block'}>*/}
                            {/*    <Image src={'/images/roadmap_complete.svg'} layout={'fill'}></Image>*/}
                            {/*</div>*/}
                            {/*<div className={'w-[2.5vw] h-[2.5vw] left-[-1vw] top-[9.8vw] absolute inline-block'}>*/}
                            {/*    <Image src={'/images/roadmap_complete.svg'} layout={'fill'}></Image>*/}
                            {/*</div>*/}
                            {/*<div className={'w-[2.5vw] h-[2.5vw] left-[-1vw] top-[12.8vw] absolute inline-block'}>*/}
                            {/*    <Image src={'/images/roadmap_complete.svg'} layout={'fill'}></Image>*/}
                            {/*</div>*/}
                            <p className={'leading-[89%] mt-[1.5vw] ml-[2vw] text-[1.5vw] text-white font-gilroy font-normal'}>
                                {/*<span className={'text-[#F3ACFF] font-semibold'}>Website development</span><br/>*/}
                                {/*<span className={'text-[#F3ACFF] font-semibold'}>contract deployment</span><br/><br/>*/}
                                {/*<span className={'text-[#F3ACFF] font-semibold'}>Seed round</span><br/><br/>*/}
                                {/*<span className={'text-[#F3ACFF] font-semibold'}>KOL management</span><br/><br/>*/}
                                {/*<span className={'text-[#F3ACFF] font-semibold'}>Contract audit</span><br/><br/>*/}
                                <span className={'text-[#F3ACFF] font-semibold'}>Team recruiting<br/><br/></span>
                                <span className={'text-[#F3ACFF] font-semibold'}>Smart Contract Development<br/><br/></span>
                                <span className={'text-[#F3ACFF] font-semibold'}>Website development<br/><br/></span>
                                <span className={'text-[#F3ACFF] font-semibold'}>contract deploy<br/><br/></span>
                                <span className={'text-[#F3ACFF] font-semibold'}>P2E development<br/><br/></span>
                                <span className={'text-[#F3ACFF] font-semibold'}>M2E development<br/><br/></span>
                                <span className={'text-[#F3ACFF] font-semibold'}>Contract audited by interFi<br/><br/></span>
                                <span className={'text-[#F3ACFF] font-semibold'}>KYC by Pinksale by Solidproof<br/><br/></span>
                                <span className={'text-[#F3ACFF] font-semibold'}>Setup Fairlaunch on Pinksale<br/><br/></span>
                                <span className={'text-[#F3ACFF] font-semibold'}>KOL management<br/><br/></span>
                                <span className={'text-[#F3ACFF] font-semibold'}>10 Voice AMA<br/><br/></span>
                                Articles in <a className={'text-[#F3ACFF]'} href={'https://marketwatch.com'}>https://marketwatch.com</a><br/><br/>
                                Articles in <a className={'text-[#F3ACFF]'} href={'https://finance.yahoo.com'}>https://finance.yahoo.com</a><br/><br/>
                                Articles in <a className={'text-[#F3ACFF]'} href={'https://techbullion.com/'}></a> https://techbullion.com/<br/><br/>
                                Articles in <a className={'text-[#F3ACFF]'} href={'https://thenewscrypto.com/'}></a>https://thenewscrypto.com/<br/><br/>
                                10 community competition<br/><br/>
                                NFTs sale<br/><br/>
                                P2E beta testing<br/><br/>
                                Web APP launch<br/><br/>
                                Pancakeswap listing<br/><br/>
                                Dextools marketing ads<br/><br/>
                                Coinsniper rating top 10<br/><br/>
                                Coinmarketcap list and rate<br/><br/>
                                CoinGecko list and rate<br/><br/>
                                IOS & Android APP launch<br/><br/>
                                M2E launch<br/><br/>
                                NFT marketplace<br/><br/>
                                DAO pool in 7 days after DEX listing<br/><br/>
                                DAO voting system<br/><br/>
                                Partnerships with 5 funds<br/><br/>

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
                                <p className={'leading-[89%]  text-[2vw] text-white font-gilroy text-center uppercase px-[2vw] font-bold'}>Roadmap Q3 2022</p>
                            </div>
                            <p className={'leading-[89%] mt-[1.5vw] text-[1.545vw] text-white font-gilroy font-normal'}>ASP app in appStore<br/><br/>
                                DEX launch<br/><br/>
                                CEX Listing<br/><br/>
                                First wave of DAO, M2E rewards<br/><br/>
                                Official P2E game opening<br/><br/>
                                Collaboration with guilds<br/><br/>
                                NFT artists contest<br/><br/>
                                Certik Audit<br/><br/>
                                Collaboration with space-gaming projects<br/><br/>
                                IDO governance token sale<br/><br/>
                                Collected 10 mln foundraise form Tier1-Tier2 partners<br/><br/>
                                NFT Space Avatar sale<br/><br/>
                                100 mln Market Cap<br/><br/>
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
                                <p className={'leading-[89%]  text-[2vw] text-white font-gilroy text-center uppercase px-[2vw] font-bold'}>Roadmap<br/> Q4 2022</p>
                            </div>
                            <p className={'leading-[89%] mt-[1.5vw] text-[1.545vw] text-white font-gilroy font-normal'}>DEX optimisation protocol<br/><br/>
                                1 Million DAO wallet<br/><br/>
                                Multichain launch<br/><br/>
                                Multichain NFT marketplace<br/><br/>
                                GameFi liquidity pools<br/><br/>
                                Network safety crypto protocol<br/><br/>
                                OpenSea collaboration<br/><br/>
                                Layer2 eth upgrade<br/><br/>
                                Offline grants program and competition<br/><br/>
                                500 mln Market Cap<br/><br/>
                            </p>
                        </motion.div>
                    </div>

                </div>


                {/*GAME*/}

                {/*{openGame? <div className={'w-[100vw] absolute fixed h-[600px] sm:h-[100vh] top-0 z-[99999] left-0'} id={'game'}>*/}
                {/*    <iframe className={'w-full fixed h-[100vh]'} src={'https://1milliondao.com/alien.html'}></iframe>*/}
                {/*    <div className={'w-[5vw] h-[5vw] fixed right-[1vw] z-[99999] top-[1vw] cursor-pointer'} onClick={()=>{setOpenGame(!openGame)}}>*/}
                {/*        <Image src={'/images/close_game.svg'} layout={'fill'}></Image>*/}
                {/*    </div>*/}
                {/*</div>: <div></div>}*/}



                {/*/!*PARTNERS*!/*/}

                <div className={'w-[100vw] relative block h-[58vw] bg-cover bg-[]'} id={'partners'}>
                    <div className={'w-[57vw] left-[-3vw] top-[22vw] h-[41vw] absolute inline-block'}>
                        <Image src={'/images/partners_planet.png'} layout={'fill'}></Image>
                    </div>
                    <a href={'https://www.binance.com/ru'}><div className={'w-[14.3vw] h-[8.9vw] absolute left-[14.4vw] rounded-[0.5vw] top-[9vw] partner-shape inline-flex justify-center align-center items-center'}>
                        <div className={'relative w-[8vw] h-[6vw]'}>
                            <Image src={'/images/binance.png'} layout={'fill'}></Image>
                        </div>
                    </div></a>
                    <a href={'https://pancakeswap.finance/'}><div className={'w-[24.5vw] h-[8.9vw] absolute left-[34vw] rounded-[0.5vw] top-[9vw] partner-shape inline-flex justify-center align-center items-center'}>
                        <div className={'relative w-[20vw] h-[4vw]'}>
                            <Image src={'/images/pancake.png'} layout={'fill'}></Image>
                        </div>
                    </div></a>
                    <a href={'https://www.pinksale.finance/'}><div className={'w-[24.5vw] h-[8.9vw] absolute left-[61.4vw] rounded-[0.5vw] top-[9vw] partner-shape inline-flex justify-center align-center items-center'}>
                        <div className={'relative w-[20vw] h-[8vw]'}>
                            <Image src={'/images/pinksale.png'} layout={'fill'}></Image>
                        </div>
                    </div></a>
                    <a href={'https://coinmarketcap.com/'}><div className={'w-[29vw] h-[8.2vw] absolute left-[14.4vw] rounded-[0.5vw] top-[20.6vw] partner-shape inline-flex justify-center align-center items-center'}>
                        <div className={'relative w-[26vw] h-[5vw]'}>
                            <Image src={'/images/coinmarket.png'} layout={'fill'}></Image>
                        </div>
                    </div></a>

                    <a href={'https://www.bloomberg.com/'}><div className={'w-[11vw] h-[8.2vw] absolute left-[49vw] rounded-[0.5vw] top-[20.6vw] partner-shape inline-flex justify-center align-center items-center'}>
                        <div className={'relative w-[7vw] h-[7vw]'}>
                            <Image src={'/images/bloomberg.png'} layout={'fill'}></Image>
                        </div>
                    </div></a>

                    <a href={'https://www.yahoo.com/'}><div className={'w-[11vw] h-[8.2vw] absolute left-[66vw] rounded-[0.5vw] top-[20.6vw] partner-shape inline-flex justify-center align-center items-center'}>
                        <div className={'relative w-[8vw] h-[5vw]'}>
                            <Image src={'/images/yahoo.png'} layout={'fill'}></Image>
                        </div>
                    </div></a>

                    <a href={'https://intefi.com/'}><div className={'w-[18vw] h-[8.2vw] absolute left-[14vw] rounded-[0.5vw] top-[30.6vw] partner-shape inline-flex justify-center align-center items-center'}>
                        <div className={'relative w-[16vw] h-[5vw]'}>
                            <Image src={'/images/intefi.png'} layout={'fill'}></Image>
                        </div>
                    </div></a>
                    <a href={'https://solidproof.io/'}><div className={'w-[22vw] h-[8.2vw] absolute left-[36vw] rounded-[0.5vw] top-[30.6vw] partner-shape inline-flex justify-center align-center items-center'}>
                        <div className={'relative w-[18vw] h-[5vw]'}>
                            <Image src={'/images/solidproof.png'} layout={'fill'}></Image>
                        </div>
                    </div></a>

                    <a href={''}><div className={'w-[8.2vw] h-[8.2vw] absolute left-[63vw] rounded-[0.5vw] top-[30.6vw] partner-shape inline-flex justify-center align-center items-center'}>
                        <div className={'relative w-[6.5vw] h-[6.5vw] rounded-[2vw]'}>
                            <Image src={'/images/vbm.PNG'} layout={'fill'}></Image>
                        </div>
                    </div></a>


                    <motion.h2 className={'text-white font-gilroy font-black absolute inline-block left-[14vw] top-[43vw] text-[5.7vw]'}>PARTNERS</motion.h2>


                </div>
            </main>

            <footer className={styles.footer}>
                <div className={'w-[98vw] h-[21.25vw] bg-[#000] relative block'}>
                    {/*<p className={'absolute inline-block top-[4.2vw] left-[12.6vw] text-[1.46vw] text-white font-gilroy font-semibold'}>THE WEB 3 PROJECT</p>*/}
                    {/*<p className={'absolute inline-block top-[7.5vw] left-[12.6vw] w-[22vw] text-[1.07vw] text-white font-gilroy font-light'}>Accelerating the transition to a WEB3 world.*/}
                    {/*    It is your data, and only yours.</p>*/}

                    <p className={'absolute inline-block top-[4.2vw] left-[39vw] text-[1.2vw] text-white font-gilroy font-[400]'}>MENU</p>

                    <a href={'#intro'} className={'absolute inline-block top-[7.7vw] left-[39vw] text-[1.1vw] text-white font-gilroy font-[400]'}>Home</a>
                    <a className={'absolute inline-block top-[9.9vw] left-[39vw] text-[1.1vw] text-white font-gilroy font-[400]'}>Our Ecosystem</a>
                    <a href={'#roadmap'} className={'absolute inline-block top-[12.1vw] left-[39vw] text-[1.1vw] text-white font-gilroy font-[400]'}>Roadmap</a>
                    <a target={'_blank'} rel={'noreferrer'} href={'https://bscscan.com/address/0xBeE207E5B42d0c7bFE7141bE4509B299689A6A5c'} className={'absolute inline-block top-[14.3vw] left-[39vw] text-[1.1vw] text-white font-gilroy font-[400]'}>Contract</a>
                    <a className={'absolute inline-block top-[16.5vw] left-[39vw] text-[1.1vw] text-white font-gilroy font-[400]'} href={'https://admin-176.gitbook.io/1-million-dao/about-1-million-dao/what-is-a-rebase-token'}>Whitepaper</a>


                    <p className={'absolute inline-block top-[4.2vw] left-[54vw] text-[1.2vw] text-white font-gilroy font-[400]'}>FOLLOW US</p>

                    <a href={'https://t.me/one_mln_dao'} target={'_blank'} rel={'noreferrer'} className={'absolute inline-block top-[7.7vw] left-[54vw] text-[1.1vw] text-white font-gilroy font-[400]'}>Telegram</a>
                    <a href={'https://discord.gg/3b3SbG4N'} target={'_blank'} rel={'noreferrer'} className={'absolute inline-block top-[9.9vw] left-[54vw] text-[1.1vw] text-white font-gilroy font-[400]'}>Discord</a>
                    <a href={'https://twitter.com/1MillionDAO'} target={'_blank'} rel={'noreferrer'} className={'absolute inline-block top-[12.1vw] left-[54vw] text-[1.1vw] text-white font-gilroy font-[400]'}>Twitter</a>



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
