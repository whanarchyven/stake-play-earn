import React from 'react';
import Calculator from "./Calculator";
import PlanetCardMarketplace from "./PlanetCardMarketplace";
import Dashboard from "./Dashboard";
import Account from "./Account";
import Swaper from "./Swaper";
import {MintButton} from "./MintButton";
import NeonButton from "./NeonButton";
import {motion} from "framer-motion";
import Image from "next/image";

interface AccountContentItems{
    currentTab:string;
}

const AccountContent = ({currentTab}:AccountContentItems) => {
    if(currentTab=='calculator'){
        return (
            <div className={'w-full relative z-[999] h-full'}>
                <Calculator></Calculator>
            </div>
        );
    }
    else if(currentTab=='marketplace'){
        return (
            <div className={'w-full relative z-[999] h-[63vw]'}>
                <h2 className={'absolute top-[1vw] left-[24vw] inline-block text-white font-gilroy font-bold text-[5.1vw]'}>NFT MARKETPLACE</h2>
                <p className={'absolute top-[9vw] left-[24vw] inline-block text-white font-gilroy font-medium uppercase text-[2vw]'}>NFT Boosters for <strong>$BNB</strong> Rewards pool</p>
                <div className={'left-[24vw] top-[15vw] w-[65vw] h-[36vw] absolute inline-block] neon-border rounded-[2vw] border-4 '}></div>
                <div className={'left-[24vw] top-[15vw] w-[65vw] h-[30vw] absolute inline-block] '}>
                    <div className={'justify-around top-[3vw] flex absolute bottom-0 w-full h-[80%]'}>
                        <div className={'w-[23%] h-[95%] relative'}>
                            <PlanetCardMarketplace category={'bronze'} quantity={200} cost={0.4} planetName={'Jupiter'} image={'/images/planets/1.png'} apyIncrease={0.01} ></PlanetCardMarketplace>
                            <MintButton category={'bronze'} />
                        </div>
                        <div className={'w-[23%] h-[95%] relative'}>
                            <PlanetCardMarketplace category={'silver'} quantity={100} cost={0.8} planetName={'Neptun'} image={'/images/planets/2.png'} apyIncrease={0.04}></PlanetCardMarketplace>
                            <MintButton category={'silver'} />
                        </div>
                        <div className={'w-[23%] h-[95%] relative'}>
                            <PlanetCardMarketplace category={'gold'} quantity={50} cost={2.4} planetName={'Mars'} image={'/images/planets/3.png'} apyIncrease={0.12}></PlanetCardMarketplace>
                            <MintButton category={'gold'} />
                        </div>
                        <div className={'w-[23%] h-[95%] relative'}>
                            <PlanetCardMarketplace category={'platinum'} quantity={20} cost={10} planetName={'Pluto'} image={'/images/planets/4.png'} apyIncrease={0.4}></PlanetCardMarketplace>
                            <MintButton category={'platinum'} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else if(currentTab =='dashboard'){
        return(
          <div className={'w-[75%] ml-[25%] z-[999] h-[76vw]'}>
              <Dashboard></Dashboard>
          </div>
        );
    }
    else if(currentTab =='account'){
        return(
            <div className={'w-[75%] ml-[25%] z-[999] h-[100vw]'}>
                <Account></Account>
            </div>
        );
    }
    else if(currentTab=='swap'){
        return (
          <div className={'w-[100vw] h-[100vw] z-[999] bg-[]'}>
              <div className={'w-[75%] ml-[25%] z-[9999] h-[20vw]'}>
                  <h2 className={'absolute top-[2vw] left-[28vw] inline-block text-white font-gilroy font-bold text-[5.1vw]'}>SWAP</h2>
                  <div className={'absolute w-[41vw] top-[10vw] left-[28vw] h-[47.3vw]'}>
                      <Swaper></Swaper>
                  </div>
              </div>

          </div>
        );
    }
    else if(currentTab=='play'){
        return (
            <div className={'w-[100vw] h-[100vh] z-[999]'}>
                <h2 className={'absolute top-[6vw] left-[45vw] inline-block text-white font-gilroy font-bold text-[5.1vw]'}>PLAY-2-EARN</h2>
                <div className={'w-[75%] ml-[25%] relative z-[9999] h-[20vw]'}>
                    <div className={'absolute w-[22.5vw] top-[13vw] bg-[#000] h-[26.5vw] rounded-[1vw] border-[#D43FEC] border-[5px] left-[9.3vw]'}>
                        <video
                            id="background-video"
                            loop
                            autoPlay
                            muted
                            style={{
                                position: "relative",
                                width: "inherit",
                                height: "100%",
                                left: 0,
                                top: 0,
                                backgroundSize:"cover",
                                borderRadius:'1vw',
                            }} className={'relative hidden sm:inline-block w-[100vw] h-[58vw]'}
                        >
                            <source src={'/images/metaverse/metaverse1.mp4'} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <a href={'https://1milliondao.com/game.html'}><motion.div initial="hidden" whileInView={'visible'} viewport={{once:true}} transition={{ type:"spring",duration: 1.5, delay:0.3, bounce:0.6 ,}} variants={{visible: { opacity: 1, y:0 }, hidden: { opacity: 0, y:100 }}} className={'cursor-pointer swiper-background w-[17.1vw] h-[4.5vw] left-[12.0vw] top-[38.0vw] rounded-full text-in-shape absolute inline-flex'}>
                        <p className={'text-white font-gilroy font-semibold text-[1.7vw]'}>PLAY GAME</p>
                    </motion.div></a>



                    className={'w-[75%] ml-[25%] relative z-[9999] h-[20vw]'}
                    <div className={'absolute w-[22.5vw] top-[13vw] bg-[#000] h-[26.5vw] rounded-[1vw] border-[#D43FEC] border-[5px] left-[38.0vw]'}>
                        <video
                            id="background-video"
                            loop
                            autoPlay
                            muted
                            style={{
                                position: "relative",
                                width: "inherit",
                                height: "100%",
                                left: 0,
                                top: 0,
                                backgroundSize:"cover",
                                borderRadius:'1vw',
                            }} className={'relative hidden sm:inline-block w-[100vw] h-[58vw]'}
                        >
                            <source src={'/images/metaverse/minigame.MP4'} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <a href={'https://1milliondao.com/alien.html'}><motion.div initial="hidden" whileInView={'visible'} viewport={{once:true}} transition={{ type:"spring",duration: 1.5, delay:0.3, bounce:0.6 ,}} variants={{visible: { opacity: 1, y:0 }, hidden: { opacity: 0, y:100 }}} className={'cursor-pointer swiper-background w-[17.1vw] h-[4.5vw] left-[41.0vw] top-[38.0vw] rounded-full text-in-shape absolute inline-flex'}>
                        <p className={'text-white font-gilroy font-semibold text-[1.7vw]'}>PLAY MINIGAME</p>
                    </motion.div></a>



                </div>







            </div>
        );
    }

    else if(currentTab=='move'){
        return (
            <div className={'w-[100vw] h-[100vh] z-[999]'}>
                <div className={'absolute right-[5vw] w-[50vw] h-[50vw]'}>
                    <Image src={'/images/account/move_phones.png'} layout={'fill'}></Image>
                </div>
                <div className={'w-[32vw] top-[6.5vw] h-[8vw] absolute left-[34vw]'}>
                    <Image src={'/images/account/move_vector.svg'} layout={'fill'}></Image>
                </div>
                <p className={'absolute left-[34vw] top-[20vw] text-white text-[2.55vw] leading-[100%] font-josefin'}>
                    Available <strong>only<br/>on mobile!</strong>
                </p>
                <h2 className={'absolute top-[6vw] left-[35vw] inline-block text-white font-gilroy font-bold text-[4vw]'}>MOVE-2-EARN</h2>
                <div className={'w-[75%] ml-[25%] z-[9999] h-[20vw]'}>
                </div>

            </div>
        );
    }


    return (
        <div className={'w-full h-full'}>

        </div>
    );
};

export default AccountContent;