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
            <div className={'w-full relative z-[999] h-[76vh] sm:h-[63vw]'}>
                <h2 className={'top-[-4vh] left-[10vw] text-[3.5vh] absolute sm:top-[1vw] sm:left-[24vw] inline-block text-white font-gilroy font-bold sm:text-[5.1vw]'}>NFT MARKETPLACE</h2>
                <p className={'top-[0vh] left-[10vw] text-[1.7vh] absolute sm:top-[9vw] sm:left-[24vw] inline-block text-white font-gilroy font-medium uppercase sm:text-[2vw]'}>NFT Boosters for <strong>$BNB</strong> Rewards pool</p>
                <div className={'left-[10vw] top-[5vh] w-[80vw] h-[70vh] rounded-[2vh] sm:left-[24vw] sm:top-[15vw] sm:w-[70vw] sm:h-[36vw] absolute inline-block] neon-border sm:rounded-[2vw] border-4 '}></div>
                <div className={'left-[10vw] top-[5vh] w-[80vw] h-[65vh] sm:left-[24vw] sm:top-[15vw] sm:w-[65vw] sm:h-[30vw] absolute inline-block] '}>
                    <div className={'flex-wrap justify-around top-[3vw] flex absolute bottom-0 w-full h-[80%]'}>
                        <div className={'w-[40%] h-[50%] sm:w-[23%] sm:h-[95%] relative'}>
                            <PlanetCardMarketplace category={'bronze'} quantity={200} cost={0.4} planetName={'Jupiter'} image={'/images/planets/1.png'} apyIncrease={0.01} ></PlanetCardMarketplace>
                            <MintButton category={'bronze'} />
                        </div>
                        <div className={'w-[40%] h-[50%] sm:w-[23%] sm:h-[95%] relative'}>
                            <PlanetCardMarketplace category={'silver'} quantity={100} cost={0.8} planetName={'Neptun'} image={'/images/planets/2.png'} apyIncrease={0.04}></PlanetCardMarketplace>
                            <MintButton category={'silver'} />
                        </div>
                        <div className={'w-[40%] h-[50%] mt-[6vh] sm:mt-0 sm:w-[23%] sm:h-[95%] relative'}>
                            <PlanetCardMarketplace category={'gold'} quantity={50} cost={2.4} planetName={'Mars'} image={'/images/planets/3.png'} apyIncrease={0.12}></PlanetCardMarketplace>
                            <MintButton category={'gold'} />
                        </div>
                        <div className={'w-[40%] h-[50%] mt-[6vh] sm:mt-0 sm:w-[23%] sm:h-[95%] relative'}>
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
          <div className={'w-full h-full sm:w-[75%] sm:ml-[25%] z-[999] sm:h-[76vw]'}>
              <Dashboard></Dashboard>
          </div>
        );
    }
    else if(currentTab =='account'){
        return(
            <div className={'w-full h-full sm:w-[75%] sm:ml-[25%] z-[999] sm:h-[100vw]'}>
                <Account></Account>
            </div>
        );
    }
    else if(currentTab=='swap'){
        return (
          <div className={'w-[100vw] h-[100vw] z-[999] bg-[]'}>
              <div className={'w-full h-[70vh] sm:w-[75%] sm:ml-[25%] z-[9999] sm:h-[20vw]'}>
                  <h2 className={'absolute left-[10vw] top-[2vh] text-[5vh] sm:top-[2vw] sm:left-[28vw] inline-block text-white font-gilroy font-bold sm:text-[5.1vw]'}>SWAP</h2>
                  <div className={'absolute w-[80vw] top-[10vh] left-[10vw] h-[48vh] sm:w-[41vw] sm:top-[10vw] sm:left-[28vw] sm:h-[47.3vw]'}>
                      <Swaper></Swaper>
                  </div>
              </div>

          </div>
        );
    }
    else if(currentTab=='play'){
        return (
            <div className={'w-[100vw] h-[75vh] sm:h-[100vh] z-[999]'}>
                <h2 className={'absolute top-[9vh] left-[15vw] text-[5vh] sm:top-[6vw] sm:left-[45vw] inline-block text-white font-gilroy font-bold sm:text-[5.1vw]'}>PLAY-2-EARN</h2>
                <div className={'w-full sm:w-[75%] h-[20vh] sm:ml-[25%] relative z-[9999] sm:h-[20vw]'}>
                    <div className={'absolute hidden sm:inline-block w-[50vw] h-[50vw] top-[17vh] left-[20vw] sm:w-[22.5vw] sm:top-[13vw] bg-[#000] sm:h-[26.5vw] rounded-[1vw] border-[#D43FEC] border-[5px] sm:left-[9.3vw]'}>
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


                    <div className={'absolute sm:hidden inline-block w-[50vw] h-[50vw] top-[17vh] left-[20vw] sm:w-[22.5vw] sm:top-[13vw] bg-[url("../public/images/metaverse/game_preview.jpg")] bg-cover sm:h-[26.5vw] rounded-[1vw] border-[#D43FEC] border-[5px] sm:left-[9.3vw]'}>

                    </div>



                    <a href={'https://1milliondao.com/game.html'}><motion.div initial="hidden" whileInView={'visible'} viewport={{once:true}} transition={{ type:"spring",duration: 1.5, delay:0.3, bounce:0.6 ,}} variants={{visible: { opacity: 1, y:0 }, hidden: { opacity: 0, y:100 }}} className={'cursor-pointer swiper-background w-[30vw] h-[4vh] left-[30vw] top-[38vh] sm:w-[17.1vw] sm:h-[4.5vw] sm:left-[12.0vw] sm:top-[38.0vw] rounded-full text-in-shape absolute inline-flex'}>
                        <p className={'text-white font-gilroy font-semibold text-[1.7vh] sm:text-[1.7vw]'}>PLAY GAME</p>
                    </motion.div></a>

                    <div className={'absolute hidden sm:inline-block w-[50vw] h-[50vw] top-[50vh] left-[20vw] sm:w-[22.5vw] sm:top-[13vw] bg-[#000] sm:h-[26.5vw] sm:rounded-[1vw] border-[#D43FEC] border-[5px] sm:left-[38.0vw]'}>
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


                    <div className={'absolute sm:hidden inline-block w-[50vw] h-[50vw] top-[50vh] left-[20vw] sm:w-[22.5vw] sm:top-[13vw] bg-[url("../public/images/metaverse/minigame_preview.jpg")] bg-cover sm:h-[26.5vw] sm:rounded-[1vw] border-[#D43FEC] border-[5px] sm:left-[38.0vw]'}>

                    </div>



                    <a href={'https://1milliondao.com/alien.html'}><motion.div initial="hidden" whileInView={'visible'} viewport={{once:true}} transition={{ type:"spring",duration: 1.5, delay:0.3, bounce:0.6 ,}} variants={{visible: { opacity: 1, y:0 }, hidden: { opacity: 0, y:100 }}} className={'cursor-pointer swiper-background w-[30vw] h-[4vh] left-[30vw] top-[71vh] sm:w-[17.1vw] sm:h-[4.5vw] sm:left-[41.0vw] sm:top-[38.0vw] rounded-full text-in-shape absolute inline-flex'}>
                        <p className={'text-white font-gilroy font-semibold text-[1.7vh] sm:text-[1.7vw]'}>PLAY MINIGAME</p>
                    </motion.div></a>



                </div>







            </div>
        );
    }

    else if(currentTab=='move'){
        return (
            <div className={'w-[100vw] h-[75vh] sm:h-[100vh] z-[999]'}>
                <div className={'absolute right-0 top-[15vh] w-[90vw] h-[90vw] sm:right-[5vw] sm:top-0 sm:w-[50vw] sm:h-[50vw]'}>
                    <Image src={'/images/account/move_phones.png'} layout={'fill'}></Image>
                </div>
                <div className={'w-[70vw] h-[8vh] sm:w-[32vw] sm:top-[6.5vw] sm:h-[8vw] absolute left-[10vw] sm:left-[34vw]'}>
                    <Image src={'/images/account/move_vector.svg'} layout={'fill'}></Image>
                </div>
                <p className={'absolute left-[10vw] top-[12vh] text-[2.55vh] sm:left-[34vw] sm:top-[20vw] text-white sm:text-[2.55vw] leading-[100%] font-josefin'}>
                    Available <strong>soon!</strong>
                </p>
                <h2 className={'absolute text-[4vh] left-[10vw] top-[2vh] sm:top-[6vw] sm:left-[35vw] inline-block text-white font-gilroy font-bold sm:text-[4vw]'}>MOVE-2-EARN</h2>
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