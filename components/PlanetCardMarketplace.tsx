import React, {useEffect, useState} from 'react';
import Image from "next/image";
import NeonButton from "./NeonButton";
import {motion} from "framer-motion";
import PlanetBuyButton from "./PlanetBuyButton";
//@ts-ignore
import {balanceOfAddress, totalSupplyOfCategory} from "./contract-controller";

interface propsTestComponent {
    planetName:string;
    image:string;
    apyIncrease:number;
    quantity:number;
    cost:number;
    category:string;
}


const PlanetCardMarketplace = ({planetName, image, apyIncrease,cost, quantity, category}: propsTestComponent) => {
    const [supply,setSupply]=useState(0)
    const loadSupply = ()=> totalSupplyOfCategory&&totalSupplyOfCategory(category)?.then(d=>setSupply(d));
    useEffect(()=>{
        loadSupply();
       const int = setInterval(loadSupply,10000)
        return ()=>clearInterval(int)
    },[])
    return (
        <div className={'bg-cover inline-flex justify-center justify-items-center w-full h-full bg-[url(../public/images/planets/bg.png)] rounded-[1vw]'}>
            <p className={'top-[2%] text-[2.4vh] sm:text-[2.4vw] absolute inline-block font-bold text-white uppercase font-gilroy'}>{planetName}</p>
            <motion.div animate={{ y: [0, -10, 0] }}
                        transition={{ type:"spring",duration: 2, repeat:Infinity, repeatType:'reverse', repeatDelay:2, bounce:0.8 ,}}
                        className={' absolute inline-block top-[28%] sm:top-[17%] w-[7vh] sm:w-[7.7vw] h-[7vh] sm:h-[7.7vw]'}>
                <Image src={image} layout={'fill'}></Image>
            </motion.div>
            <div className={'top-[10vh] text-[1vh] h-[3vh] sm:top-[10vw] w-[90%] absolute text-center leading-[120%] sm:text-[0.8vw] inline-block sm:h-[3vw] rounded-full '}>
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
                    <div className={'w-full top-[3vh] h-[4vh] sm:top-[1vw] sm:h-[4vw] absolute'}>
                        <Image src={'/images/'+category+'.svg'} layout={'fill'}></Image>
                    </div>
                    <p className={'w-full top-[7vh] text-[1.7vh] sm:top-[5vw] absolute text-center text-white font-gilroy font-bold sm:text-[1.7vw]'}>{quantity-supply}/{quantity} NFT</p>
                    <div className={' justify-items-center items-center justify-align-center w-full h-[2.5vh] top-[9vh] sm:h-[2.5vw] sm:top-[7vw] rounded-full absolute inline-flex offer-gradient'}>
                        <h2 className={'animate-pulse w-full text-center text-white font-gilroy font-regular text-[1vh] sm:text-[1vw]'}>{apyIncrease}% of total income</h2>
                    </div>
                </div>
                <h2 className={'text-[2vh] mt-[10vh] animate-pulse sm:mt-[7.5vw] font-bold w-full text-center text-white font-gilroy font-regular sm:text-[2vw]'}>{cost} BNB</h2>
            </div>


        </div>
    );
};

export default PlanetCardMarketplace;