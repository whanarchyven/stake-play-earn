import React, {useState} from 'react';
import styles from '../styles/Home.module.css'
import Image from "next/image";
import {motion} from "framer-motion";
import PlanetCard from "./PlanetCard";

const Calculator = () => {
    const [tokenAmount,setTokenAmount]=useState(1);
    const [tokenBalance,setTokenBalance]=useState(0);
    const [days,setDays]=useState(365);

    const planet0={
        planetName:'-',
        image:'-',
        apyIncrease:0,
        cost:0.5,
    };

    const planet1={
        planetName:'X-3121',
        image:'/images/planets/1.png',
        apyIncrease:3,
        cost:0.5,
    };
    const planet2={
        planetName:'Y-8265',
        image:'/images/planets/2.png',
        apyIncrease:6,
        cost:1,
    };
    const planet3={
        planetName:'ZYX - 3512',
        image:'/images/planets/3.png',
        apyIncrease:9,
        cost:1.5,
    };
    const planet4={
        planetName:'UMY-1010',
        image:'/images/planets/4.png',
        apyIncrease:12,
        cost:2,
    }

    const [currentPlanet,setCurrentPlanet]=useState(planet0);

    const [apy,setApy]=useState(1041035);

    function changePlanet(planet:{ planetName:string, image:string, apyIncrease:number, cost:number }){
        setCurrentPlanet(planet);
        setApy(1041035+planet.apyIncrease*10000);
        // console.log('planet changed on'+currentPlanet.planetName+' with value '+currentPlanet.apyIncrease);
        // console.log(apy);
        // console.log('current planet is'+currentPlanet.planetName+' with value '+currentPlanet.apyIncrease);
    }



    return (
        <div className={'w-[inherit] h-[75vh] sm:h-[50vw]'}>
            <h2 className={'left-[10vw] sm:left-[23.7vw] top-[1.5vh] sm:top-[1.4vw] uppercase text-[4vh] sm:text-[3.49vw] absolute inline-block font-black text-white font-gilroy'}>Calculator</h2>
            <p className={'left-[10vw] sm:left-[24vw] top-[6vh] sm:top-[5vw] text-[2vh] sm:text-[2.06vw] absolute inline-block font-regular text-white font-gilroy'}>Estimate your returns</p>
            <p className={'left-[10vw] sm:left-[32.6vw] top-[9vh] sm:top-[9.9vw] text-[2vh] sm:text-[1.75vw] absolute inline-block font-regular text-white font-gilroy'}>Current APY</p>
            <p className={'left-[10vw] sm:left-[48.2vw] top-[12vh] sm:top-[9.9vw] text-[2vh] sm:text-[1.75vw] absolute inline-block font-regular text-white font-gilroy'}>Your Token Balance</p>
            <p className={'left-[56vw] sm:left-[32.3vw] top-[9vh] sm:top-[11.7vw]  sm:text-[2.23vw] absolute inline-block font-bold text-white font-gilroy'}>{apy}%</p>
            <p className={'left-[56vw] sm:left-[51.7vw] top-[12vh] sm:top-[11.7vw]  sm:text-[2.23vw] absolute inline-block font-regular text-white font-gilroy'}><strong>{tokenBalance}</strong> $OMD</p>

            <p className={'left-[10vw] sm:left-[24vw] top-[17vh] sm:top-[16.7vw] text-[1.7vh] sm:text-[1.1vw] absolute inline-block font-regular text-white font-gilroy'} >Token amount</p>
            <div className={'absolute inline-block left-[10vw] sm:left-[24vw] top-[20vh] sm:top-[18.5vw] w-[25vh] h-[4vh] sm:w-[25vw] sm:h-[3.2vw] rounded-full'}>
                <div className={'w-[inherit] h-[inherit] relative flex items-center justify-items-center justify-center rounded-[inherit]'}>
                    <div className={'z-[4] w-[99.5%] absolute flex h-[99.5%] rounded-[inherit] border-white border-solid border-[1px] m-[0.5%]'}>
                        <input type={"number"} id={'tokenAmount'} min={1} className={'text-white text-[2vh] sm:text-[1.5vw] px-[8%] bg-[transparent] outline-0 w-full h-full rounded-full'} value={tokenAmount} onChange={event =>{if(event.target.value!=''){setTokenAmount(parseFloat(event.target.value))}}}></input>
                    </div>
                    <div className={'relative inline-block flex justify-center justify-items-center blur-[1px] rounded-[inherit] h-full w-full'}>
                        <div className={'z-[1] absolute w-full h-full border-[3px] rounded-[inherit] neon-border'}></div>
                    </div>
                </div>
            </div>

            <p className={'left-[10vw] sm:left-[51.7vw] top-[26vh] sm:top-[16.7vw] text-[1.5vh] sm:text-[1.1vw] absolute inline-block font-regular text-white font-gilroy'} >APY (%)</p>
            <div className={'absolute inline-block left-[10vw] sm:left-[50.3vw] top-[30vh] sm:top-[18.5vw] w-[25vh] sm:w-[25vw] h-[4vh] sm:h-[3.2vw] rounded-full'}>
                <div className={'w-[inherit] h-[inherit] relative flex items-center justify-items-center justify-center rounded-[inherit]'}>
                    <div className={'z-[4] w-[99.5%] absolute flex h-[99.5%] rounded-[inherit] border-white border-solid border-[1px] m-[0.5%]'}>
                        <input disabled={true} type={"number"} id={'tokenAmount'} min={1} className={'text-white text-[2vh] sm:text-[1.5vw] px-[8%] bg-[transparent] outline-0 w-full h-full rounded-full'} value={apy} onChange={event =>{if(event.target.value!=''){setApy(parseFloat(event.target.value))}}}></input>
                    </div>
                    <div className={'relative inline-block flex justify-center justify-items-center blur-[1px] rounded-[inherit] h-full w-full'}>
                        <div className={'z-[1] absolute w-full h-full border-[3px] rounded-[inherit] neon-border'}></div>
                    </div>
                </div>
            </div>
            <p className={'left-[10vw] top-[36vh] sm:left-[24vw] sm:top-[22.8vw] text-[2vh] sm:text-[1.5vw] absolute inline-block font-regular text-white font-gilroy'} >{days} days</p>
            <div className={'left-[10vw] top-[38vh] w-[58vw] sm:left-[24vw] z-50 sm:top-[25vw] sm:w-[52vw] absolute inline-block'}>
                <input type={"range"} min={10} max={365} value={days} onChange={event =>{if(event.target.value!=''){setDays(parseFloat(event.target.value))}}} ></input>
            </div>
            {/*<div className={'left-[21vw] top-[25vw] w-[57vw] h-[22vw] absolute inline-block] '}>*/}
            {/*    <div className={'justify-around flex absolute bottom-0 w-full h-[80%]'}>*/}
            {/*        <div className={'w-[20%] h-full relative'}>*/}
            {/*            <PlanetCard planet={planet1} selectedPlanet={currentPlanet} changePlanet={changePlanet} ></PlanetCard>*/}
            {/*        </div>*/}
            {/*        <div className={'w-[20%] h-full relative'}>*/}
            {/*            <PlanetCard planet={planet2} selectedPlanet={currentPlanet} changePlanet={changePlanet}></PlanetCard>*/}
            {/*        </div>*/}
            {/*        <div className={'w-[20%] h-full relative'}>*/}
            {/*            <PlanetCard planet={planet3} selectedPlanet={currentPlanet} changePlanet={changePlanet}></PlanetCard>*/}
            {/*        </div>*/}
            {/*        <div className={'w-[20%] h-full relative'}>*/}
            {/*            <PlanetCard planet={planet4} selectedPlanet={currentPlanet} changePlanet={changePlanet}></PlanetCard>*/}
            {/*        </div>*/}
            {/*    </div>*/}



            {/*</div>*/}
            <div className={'left-[10vw] w-[62vw] h-[14vh] top-[43vh] rounded-[1vh] absolute calculator-result sm:rounded-[1vw] inline-block sm:w-[51vw] sm:h-[8vw] sm:top-[30vw] sm:left-[24vw]'}>
                <p className={'left-[3%] top-[10%] text-[1.5vh] sm:text-[1vw] absolute inline-block font-regular text-white font-gilroy'}>Your initial investment</p>
                {/*<p className={'left-[3%] top-[28%] text-[1.5vh] sm:text-[1vw] absolute inline-block font-regular text-white font-gilroy'}>Current wealth</p>*/}
                <p className={'left-[3%] top-[48%] text-[1.5vh] sm:text-[1vw] absolute inline-block font-regular text-white font-gilroy'}>Token rewards estimation</p>
                {/*<p className={'left-[3%] top-[68%] text-[1.5vh] sm:text-[1vw] absolute inline-block font-regular text-white font-gilroy'}>Potential return</p>*/}

                <p className={'right-[3%] text-right top-[10%] text-[1.5vh] sm:text-[1vw] absolute inline-block font-regular text-white font-gilroy'}>{tokenAmount} $OMD</p>
                {/*<p className={'right-[3%] text-right top-[28%] text-[1.5vh] sm:text-[1vw] absolute inline-block font-regular text-white font-gilroy'}>${tokenAmount*147.06}</p>*/}
                <p className={'right-[3%] text-right top-[65%] text-[1.5vh] sm:text-[1vw] absolute inline-block font-regular text-white font-gilroy'}>{tokenAmount*(((1+0.00000088)**(days*28800)))*(apy/1041035)} $OMD</p>

                {/*<p className={'right-[3%] text-right top-[68%] text-[1.5vh] sm:text-[1vw] absolute inline-block font-regular text-white font-gilroy'}>${tokenAmount * ((1 + 0.00000079)** (days * 28800)) * 147.06}</p>*/}
            </div>




        </div>
    );
};

export default Calculator;