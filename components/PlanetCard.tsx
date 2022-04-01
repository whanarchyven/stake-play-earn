import React from 'react';
import Image from "next/image";
import NeonButton from "./NeonButton";


function PlanetCard(props) {
    return (
        <div className={'inline-flex justify-center justify-items-center w-full h-full bg-[rgba(125,26,186,0.35)] rounded-[1vw]'}>
            <p className={'top-[-7%] text-[1.5vw] absolute inline-block font-bold text-white font-gilroy'}>{props.name}</p>
            <div className={'animate-bounce absolute inline-block top-[17%] w-[5.3vw] h-[5.3vw]'}>
                <Image src={props.image} layout={'fill'}></Image>
            </div>
            <div className={'top-[8.5vw] w-[9vw] absolute text-center leading-[120%] text-[0.8vw] inline-block h-[3vw] rounded-full '}>
                <div className={'w-[inherit] h-[inherit] relative flex items-center justify-items-center justify-center rounded-[inherit]'}>
                    <div className={'z-[4] w-[99%] absolute flex h-[99%] rounded-[inherit] neon-white-border border-solid border-[1px] m-[1%]'}></div>
                    <h2 className={'z-[3] my-auto absolute flex text-[inherit] filter-none text-white font-gilroy font-medium'}>$TOKEN <br/> REWARDS POOL</h2>
                    <div className={'relative inline-block flex justify-center justify-items-center blur-[1px] rounded-[inherit] h-full w-full'}>
                        <div className={'opacity-[0.25] z-[2] absolute w-full h-full rounded-[inherit] neon-border-button'}></div>
                        <div className={'z-[1] absolute w-full h-full border-[3px] rounded-[inherit] neon-border'}></div>
                    </div>
                    <div className={' justify-items-center items-center justify-align-center w-[9vw] h-[2vw] top-[3.5vw] rounded-full absolute inline-flex offer-gradient'}>
                        <h2 className={'animate-pulse w-full text-center text-white font-gilroy font-regular text-[1vw]'}>APY +<strong>{props.apyIncrease}%</strong></h2>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default PlanetCard;