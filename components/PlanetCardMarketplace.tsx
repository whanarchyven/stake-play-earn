import React, {useState} from 'react';
import Image from "next/image";
import NeonButton from "./NeonButton";
import {motion} from "framer-motion";
import PlanetBuyButton from "./PlanetBuyButton";

interface propsTestComponent {
    planetName:string;
    image:string;
    apyIncrease:number;
    quantity:number;
    cost:number;
    category:string;
}


const PlanetCardMarketplace = ({planetName, image, apyIncrease,cost, quantity, category}: propsTestComponent) => {
    return (
        <div className={'inline-flex justify-center justify-items-center w-full h-full bg-[rgba(125,26,186,0.35)] rounded-[1vw]'}>
            <p className={'top-[-7%] text-[2.4vw] absolute inline-block font-bold text-white font-gilroy'}>{planetName}</p>
            <motion.div animate={{ y: [0, -10, 0] }}
                        transition={{ type:"spring",duration: 2, repeat:Infinity, repeatType:'reverse', repeatDelay:2, bounce:0.8 ,}}
                        className={' absolute inline-block top-[17%] w-[7.7vw] h-[7.7vw]'}>
                <Image src={image} layout={'fill'}></Image>
            </motion.div>
            <div className={'top-[10vw] w-[90%] absolute text-center leading-[120%] text-[0.8vw] inline-block h-[3vw] rounded-full '}>
                <div className={'w-full h-full relative flex items-center justify-items-center justify-center rounded-full'}>
                    <div className={'z-[4] w-[99%] absolute flex h-[99%] rounded-[inherit] neon-white-border border-solid border-[1px] m-[1%]'}></div>
                    {/*<div className={'w-[inherit] top-[2.7vw] cursor-pointer h-[inherit] relative rounded-[inherit]'}>*/}
                    {/*    <div className={'w-[inherit] h-[inherit] relative flex items-center justify-items-center justify-center rounded-[inherit]'}>*/}
                    {/*        <div className={'z-[4] w-[99%] absolute flex h-[99%] rounded-[inherit] border-white border-solid border-[1px] m-[1%]'}></div>*/}
                    {/*        <h2 className={'z-[3] my-auto absolute flex text-[inherit] filter-none text-[1.1vw] text-white font-gilroy font-medium'}>$TOKEN <br/> REWARDS POOL</h2>*/}
                    {/*        <div className={'relative inline-block flex justify-center justify-items-center blur-[1px] rounded-[inherit] h-full w-full'}>*/}
                    {/*            <div className={'opacity-[0.4] z-[2] absolute w-full h-full rounded-[inherit] neon-border-button'}></div>*/}
                    {/*            <div className={'z-[1] absolute w-full h-full border-[3px] rounded-[inherit] neon-border'}></div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className={'w-full top-[1vw] h-[4vw] absolute'}>
                        <Image src={'/images/'+category+'.png'} layout={'fill'}></Image>
                    </div>
                    <p className={'w-full top-[5vw] absolute text-center text-white font-gilroy font-bold text-[1.7vw]'}>{quantity}/{quantity} NFT</p>
                    <div className={' justify-items-center items-center justify-align-center w-full h-[2.5vw] top-[7vw] rounded-full absolute inline-flex offer-gradient'}>
                        <h2 className={'animate-pulse w-full text-center text-white font-gilroy font-regular text-[1vw]'}>{apyIncrease}% of total income</h2>
                    </div>
                </div>
                <h2 className={'animate-pulse mt-[10vw] font-bold w-full text-center text-white font-gilroy font-regular text-[2vw]'}>{cost} BNB</h2>
            </div>


        </div>
    );
};

export default PlanetCardMarketplace;