import React, {useState} from 'react';
import Image from "next/image";
import NeonButton from "./NeonButton";
import {motion} from "framer-motion";
import PlanetBuyButtonOld from "./PlanetBuyButtonOld";

interface propsTestComponent {
    planetName:string;
    image:string;
    apyIncrease:number;
    increaseApy:(apyIncrease:number)=>any;
    decrementApy:(apyIncrease:number)=>any;
}


const PlanetCardOld = ({planetName, image, apyIncrease, increaseApy, decrementApy }: propsTestComponent) => {
    return (
        <div className={'inline-flex justify-center justify-items-center w-full h-full bg-[rgba(125,26,186,0.35)] rounded-[1vw]'}>
            <p className={'top-[-7%] text-[1.5vw] absolute inline-block font-bold text-white font-gilroy'}>{planetName}</p>
            <motion.div animate={{ y: [0, -10, 0] }}
                        transition={{ type:"spring",duration: 2, repeat:Infinity, repeatType:'reverse', repeatDelay:2, bounce:0.8 ,}}
                        className={' absolute inline-block top-[17%] w-[5.3vw] h-[5.3vw]'}>
                <Image src={image} layout={'fill'}></Image>
            </motion.div>
            <div className={'top-[8.5vw] w-[9vw] absolute text-center leading-[120%] text-[0.8vw] inline-block h-[3vw] rounded-full '}>
                <div className={'w-[inherit] h-[inherit] relative flex items-center justify-items-center justify-center rounded-[inherit]'}>
                    <div className={'z-[4] w-[99%] absolute flex h-[99%] rounded-[inherit] neon-white-border border-solid border-[1px] m-[1%]'}></div>
                    <PlanetBuyButtonOld apyIncrease={apyIncrease} increaseApy={increaseApy} decrementApy={decrementApy} title={'$BNB\n' +
                        ' REWARDS POOL'}></PlanetBuyButtonOld>
                    <div className={' justify-items-center items-center justify-align-center w-[9vw] h-[2vw] top-[3.5vw] rounded-full absolute inline-flex offer-gradient'}>
                        <h2 className={'animate-pulse w-full text-center text-white font-gilroy font-regular text-[1vw]'}>APY +<strong>{apyIncrease}%</strong></h2>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PlanetCardOld;