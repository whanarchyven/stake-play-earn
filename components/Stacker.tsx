import React, {useState} from 'react';
import NeonButton from "./NeonButton";
import Image from "next/image";
import {ConnectMM} from "./ConnectMM";
const Stacker = () => {
    const x0 ={
        title:'x0',
        planetName:'None',
        revaAPR:0,
        specify:'without',
        image:'/images/planets/0.png',
    }
    const x1 ={
        title:'x1',
        planetName:'X-3121',
        revaAPR:0.01,
        specify:'based',
        image:'/images/planets/1.png',
    }
    const x2 ={
        title:'x2',
        planetName:'Y-8265',
        revaAPR:0.04,
        specify:'premium',
        image:'/images/planets/2.png',
    }
    const x3 ={
        title:'x3',
        planetName:'ZYX - 3512',
        revaAPR:0.12,
        specify:'perfect',
        image:'/images/planets/3.png',
    }
    const x4 ={
        title:'x4',
        planetName:'UMY-1010',
        revaAPR:0.4,
        specify:'awesome',
        image:'/images/planets/4.png',
    }



    const[stakeTab,setStakeTab]=useState('stake');
    const [currentToken,setCurrenToken]=useState(x1)
    const [currentTokenQuantity,setCurrentTokenQualiry]=useState(1);

    const checkTokenAmount=()=>{
        if(currentToken.title=='x1' && currentTokenQuantity>=200){
            setCurrentTokenQualiry(200);
            console.log('x1')
        }
        else if (currentToken.title=='x2' && currentTokenQuantity>=100){
            setCurrentTokenQualiry(100);
            console.log('x2')
        }
        else if (currentToken.title=='x3' && currentTokenQuantity>=50){
            setCurrentTokenQualiry(50);
            console.log('x3')
        }
        else if (currentToken.title=='x4' && currentTokenQuantity>=20){
            setCurrentTokenQualiry(20);
            console.log('x4')
        }
    }

        return (
            <div className={'w-full h-full'}>
                <div className={'align-middle w-[90%] mx-[5%] h-[2vw] relative border-b-2 border-[#808080]'}>
                    {stakeTab=='stake'?
                        <div className={'cursor-pointer absolute w-[30%] inline-block ml-[15%] mr-[5%] text-in-shape'} onClick={()=>{setStakeTab('stake')}}>
                            <div className={'w-full h-[2vw]  border-b-2 neon-border   '}></div>
                            <p className={'w-full top-0 inline-block absolute text-white text-center leading-[5%] text-[1.6vw] font-gilroy'}>Stake</p>
                        </div>
                        :
                        <div className={'cursor-pointer absolute w-[30%] inline-block border-b-2 ml-[15%] mr-[5%] text-in-shape'} onClick={()=>{setStakeTab('stake')}}>
                            <p className={' text-white text-center leading-[5%] text-[1.6vw] font-gilroy'}>Stake</p>
                        </div>
                    }
                    {stakeTab=='unstake'?
                        <div className={'cursor-pointer right-0 absolute w-[30%] inline-block mr-[15%] ml-[5%] text-in-shape'}>
                            <div className={'w-full h-[2vw]  border-b-2 neon-border   '}></div>
                            <p className={'w-full top-0 inline-block absolute text-white text-center leading-[5%] text-[1.6vw] font-gilroy'}>Unstake</p>
                        </div>
                        :
                        <div className={'cursor-pointer right-0 absolute w-[30%] inline-block border-b-2 mr-[15%] ml-[5%] text-in-shape'}>
                            <p className={' text-white text-center leading-[5%] text-[1.6vw] font-gilroy'}>Unstake</p>
                        </div>
                    }
                </div>
                {stakeTab=='stake'?
                    <div className={'w-[90%]  mx-[5%]'}>
                        <div className={'w-full my-[1vw] text-in-shape'}>
                            <p className={'text-white text-center block font-semibold text-[1vw] uppercase font-gilroy'}> Select your boost power</p>
                            {/*<p className={'text-white text-center block font-light text-[0.9vw] font-gilroy'}>Each poolavailble when buying different NFTs</p>*/}
                        </div>
                        <div className={'rounded-l-[1vw] rounded-b-[0vw] rounded-r-[1vw] w-full relative stacker-unactive-token h-[8.5vw]'}>
                            {/*<div className={'cursor-pointer align-top rounded-l-[1vw] rounded-b-[0vw] w-[20%] inline-block h-[3vw]'} onClick={()=>{setCurrenToken(x0)}}>*/}
                            {/*    {currentToken.title=='x0'?*/}
                            {/*        <div className={'w-full rounded-l-[1vw] rounded-b-[0vw] h-full flex stacker-active-token text-in-shape'}>*/}
                            {/*            <p className={'text-white font-gilroy font-medium text-[0.8vw] inline-block'}>{x0.planetName}</p>*/}
                            {/*        </div>*/}
                            {/*        :*/}
                            {/*        <div className={'w-full rounded-l-[1vw] rounded-b-[0vw] h-full flex stacker-unactive-token text-in-shape'}>*/}
                            {/*            <p className={'text-white font-gilroy font-medium text-[0.8vw] inline-block'}>{x0.planetName}</p>*/}
                            {/*</div>*/}
                            <div className={'cursor-pointer align-top rounded-l-[1vw] rounded-b-[0vw] w-[25%] inline-block h-[3vw]'} onClick={()=>{setCurrenToken(x1);checkTokenAmount()}}>
                                {currentToken.title=='x1'?
                                    <div className={'w-full rounded-l-[1vw] rounded-b-[0vw]  h-full flex stacker-active-token text-in-shape'}>
                                        <p className={'text-white font-gilroy font-medium text-[0.8vw] inline-block'}>{x1.planetName}</p>
                                    </div>
                                    :
                                    <div className={'w-full rounded-l-[1vw] rounded-b-[0vw]  h-full flex stacker-unactive-token text-in-shape'}>
                                        <p className={'text-white font-gilroy font-medium text-[0.8vw] inline-block'}>{x1.planetName}</p>
                                    </div>}
                            </div>
                            <div className={'cursor-pointer align-top w-[25%] inline-block h-[3vw]'} onClick={()=>{setCurrenToken(x2);checkTokenAmount()}}>
                                {currentToken.title=='x2'?
                                    <div className={'w-full h-full flex stacker-active-token text-in-shape'}>
                                        <p className={'text-white font-gilroy font-medium text-[0.8vw] inline-block'}>{x2.planetName}</p>
                                    </div>
                                    :
                                    <div className={'w-full h-full flex stacker-unactive-token text-in-shape'}>
                                        <p className={'text-white font-gilroy font-medium text-[0.8vw] inline-block'}>{x2.planetName}</p>
                                    </div>}
                            </div>
                            <div className={'cursor-pointer align-top w-[25%] inline-block h-[3vw]'} onClick={()=>{setCurrenToken(x3);checkTokenAmount()}}>
                                {currentToken.title=='x3'?
                                    <div className={'w-full h-full flex stacker-active-token text-in-shape'}>
                                        <p className={'text-white font-gilroy font-medium text-[0.8vw] inline-block'}>{x3.planetName}</p>
                                    </div>
                                    :
                                    <div className={'w-full h-full flex stacker-unactive-token text-in-shape'}>
                                        <p className={'text-white font-gilroy font-medium text-[0.8vw] inline-block'}>{x3.planetName}</p>
                                    </div>}
                            </div>
                            <div className={'cursor-pointer align-top w-[25%] rounded-b-[0vw] rounded-r-[1vw] inline-block h-[3vw]'} onClick={()=>{setCurrenToken(x4);checkTokenAmount()}}>
                                {currentToken.title=='x4'?
                                    <div className={'w-full h-full stacker-tabs-round flex stacker-active-token text-in-shape'}>
                                        <p className={'text-white font-gilroy font-medium text-[0.8vw] inline-block'}>{x4.planetName}</p>
                                    </div>
                                    :
                                    <div className={'w-full h-full stacker-tabs-round flex stacker-unactive-token text-in-shape'}>
                                        <p className={'text-white font-gilroy font-medium text-[0.8vw] inline-block'}>{x4.planetName}</p>
                                    </div>}
                            </div>
                            <div className={'w-full absolute top-[3vw] h-[5vw]'}>
                                <div className={'w-[50%] inline-block align-top my-[3%] h-full'}>
                                    <p className={'text-white  font-semibold font-gilroy text-[1.5vw] text-center'}>{parseFloat(currentToken.revaAPR*currentTokenQuantity).toFixed(2)} %</p>
                                    <p className={'text-white font-light text-[1vw] font-gilroy text-center'}>OF ALL INCOME</p>
                                </div>
                                <div className={'w-[50%] inline-block align-top my-[3%] h-full'}>
                                    <div className={'w-[90%] mx-[5%] mt-[7%] h-[3vw] relative flex items-center justify-items-center justify-center rounded-[1vw]'}>
                                        <div className={'z-[4] w-[99%] absolute flex h-[99%] rounded-[inherit] border-white border-solid border-[1px] m-[1%]'}></div>
                                        <p className={'z-[999] align-middle  my-auto absolute flex text-[1.8vw] filter-none text-white font-gilroy font-bold'}><a className={'select-none align-middle pr-[3vw] text-[2vw] cursor-pointer'} onClick={()=>{if(currentTokenQuantity>1) {
                                            setCurrentTokenQualiry(currentTokenQuantity - 1);checkTokenAmount();
                                        }}}> - </a> {currentTokenQuantity} <a className={'select-none align-middle pl-[3vw] text-[2vw] cursor-pointer'} onClick={()=>{
                                            setCurrentTokenQualiry(currentTokenQuantity +1);checkTokenAmount();
                                        }}>+ </a></p>

                                        <div className={'relative inline-block flex justify-center justify-items-center blur-[1px] rounded-[inherit] h-full w-full'}>
                                            <div className={'opacity-[0.4] z-[2] absolute w-full h-full rounded-[inherit] '}></div>
                                            <div className={'z-[1] absolute w-full h-full border-[3px] rounded-[inherit] neon-border'}></div>
                                        </div>
                                    </div>
                                </div>
                                {/*<div className={'w-[25%] inline-block align-top my-[3%] h-full'}>*/}
                                {/*    <p className={'uppercase text-white mt-[7%] font-semibold font-gilroy text-[1.2vw] text-center'}>{currentToken.specify}</p>*/}
                                {/*    <p className={'text-white text-[0.7vw] font-light font-gilroy text-center'}>POWER SHARE</p>*/}
                                {/*</div>*/}
                                {/*<div className={'w-[25%] inline-block align-top my-[3%] h-full'}>*/}
                                {/*    <p className={'uppercase text-white mt-[7%] font-semibold font-gilroy text-[1.2vw] text-center'}>0</p>*/}
                                {/*    <p className={'text-white text-[0.7vw] font-light font-gilroy text-center'}>TOTAL REVA STAKE</p>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                        {/*<div className={'w-full  mt-[7%] relative'}>*/}
                        {/*    <p className={'absolute w-[60%] inline-block left-0 uppercase text-white font-semibold font-gilroy text-[1vw]'}>Choose amount to stake</p>*/}
                        {/*    <div className={'absolute inline-block w-[40%] right-0'}>*/}
                        {/*        <div className={'w-[0.8vw] absolute left-0 top-[0.12vw] h-[0.8vw] inline-block'}>*/}
                        {/*            <Image src={'/images/infoapr.svg'} layout={'fill'}></Image>*/}
                        {/*        </div>*/}
                        {/*        <p className={'text-white font-gilroy left-[1.5vw] inline-block font-light top-0 absolute text-[0.7vw]'}>AUTO COMP</p>*/}
                        {/*        <div className={'w-[4vw] rounded-full stacker-radio h-[1vw] left-[6.2vw] absolute inline-block'}>*/}
                        {/*            <div className={'w-[50%] inline-block align-top h-full stacker-radio rounded-full'}>*/}
                        {/*                <p className={'w-full text-center text-white mt-[4%] text-[0.5vw]'}>APR</p>*/}
                        {/*            </div>*/}
                        {/*            <div className={'w-[50%] inline-block align-top h-full rounded-full'}>*/}
                        {/*                <p className={'w-full text-center text-white mt-[4%] text-[0.5vw]'}>APY</p>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className={'mt-[13%] w-full h-[7vw] rounded-[1vw] stacker-unactive-token relative'}>*/}
                        {/*    /!*<div className={'h-full inline-block align-top w-[35%] p-[0.8vw]'}>*!/*/}
                        {/*    /!*    <p className={'text-white font-gilroy font-light text-[0.8vw]'}>Stake Token</p>*!/*/}
                        {/*    /!*    <div className={'w-[3.5vw] absolute mt-[2%] h-[3.5vw]'}>*!/*/}
                        {/*    /!*        <Image src={currentToken.image} layout={'fill'}></Image>*!/*/}
                        {/*    /!*    </div>*!/*/}
                        {/*    /!*    <p className={'text-white font-gilroy font-semibold absolute left-[5vw] text-[1vw] top-[2.3vw] uppercase'}>{currentToken.planetName}</p>*!/*/}
                        {/*    /!*    <p className={'text-white font-gilroy font-light absolute left-[5vw] text-[0.8vw] top-[3.8vw]'}>$OMD</p>*!/*/}
                        {/*    /!*</div>*!/*/}
                        {/*    /!*<div className={' w-[65%] h-full p-[0.8vw] rounded-r-[1vw] relative inline-block align-top stacker-unactive-token'}>*!/*/}
                        {/*    /!*    <p className={'absolute font-gilroy text-white left-[0.8vw] text-[0.8vw] font-light'}>Get token</p>*!/*/}
                        {/*    /!*    <p className={'absolute font-gilroy text-white right-[0.8vw] text-[0.6vw] font-light'}>Balance: 0.000</p>*!/*/}
                        {/*    /!*    <p className={'absolute font-gilroy text-white right-[0.8vw] mt-[8%] text-[1.3vw] font-light'}>0.000</p>*!/*/}
                        {/*    /!*    <p className={'absolute font-gilroy text-white right-[0.8vw] mt-[17%] text-[0.8vw] font-light'}>$0.000</p>*!/*/}
                        {/*    /!*</div>*!/*/}
                        {/*    /!*<div className={'w-full h-[3.5vw] mt-[7%] text-[1.4vw] rounded-[1vw] flex text-in-shape bg-[#606ac6]'}>*!/*/}
                        {/*    /!*    <ConnectMM></ConnectMM>*!/*/}
                        {/*    /!*</div>*!/*/}
                        {/*</div>*/}
                        <div className={'w-full h-[3.5vw] mt-[7%] text-[1.4vw] rounded-[1vw] flex text-in-shape bg-[#606ac6]'}>
                            <ConnectMM></ConnectMM>
                        </div>

                    </div>

                    :
                    <div className={'w-[90%] mx-[5%]'}>
                        <div className={'w-full my-[1vw] text-in-shape'}>
                            <p className={'text-white text-center block font-semibold text-[1vw] uppercase font-gilroy'}> Select your boost power</p>
                            <p className={'text-white text-center block font-light text-[0.9vw] font-gilroy'}>Each poolavailble when buying different NFTs</p>
                        </div>
                        <div className={'w-full relative stacker-unactive-token h-[10vw]'}>
                            <div className={'align-top w-[25%] inline-block h-[3vw]'} onClick={()=>{setCurrenToken(x1)}}>
                                {currentToken.title=='x1'?
                                    <div className={'w-full h-full flex stacker-active-token text-in-shape'}>
                                        <p className={'text-white font-gilroy font-medium text-[0.8vw] inline-block'}>x1</p>
                                    </div>
                                    :
                                    <div className={'w-full h-full flex stacker-unactive-token text-in-shape'}>
                                        <p className={'text-white font-gilroy font-medium text-[0.8vw] inline-block'}>x1</p>
                                    </div>}
                            </div>
                            <div className={'align-top w-[25%] inline-block h-[3vw]'} onClick={()=>{setCurrenToken(x2)}}>
                                {currentToken.title=='x2'?
                                    <div className={'w-full h-full flex stacker-active-token text-in-shape'}>
                                        <p className={'text-white font-gilroy font-medium text-[0.8vw] inline-block'}>x2</p>
                                    </div>
                                    :
                                    <div className={'w-full h-full flex stacker-unactive-token text-in-shape'}>
                                        <p className={'text-white font-gilroy font-medium text-[0.8vw] inline-block'}>x2</p>
                                    </div>}
                            </div>
                            <div className={'align-top w-[25%] inline-block h-[3vw]'} onClick={()=>{setCurrenToken(x3)}}>
                                {currentToken.title=='x3'?
                                    <div className={'w-full h-full flex stacker-active-token text-in-shape'}>
                                        <p className={'text-white font-gilroy font-medium text-[0.8vw] inline-block'}>x3</p>
                                    </div>
                                    :
                                    <div className={'w-full h-full flex stacker-unactive-token text-in-shape'}>
                                        <p className={'text-white font-gilroy font-medium text-[0.8vw] inline-block'}>x3</p>
                                    </div>}
                            </div>
                            <div className={'align-top w-[25%] inline-block h-[3vw]'} onClick={()=>{setCurrenToken(x4)}}>
                                {currentToken.title=='x4'?
                                    <div className={'w-full h-full flex stacker-active-token text-in-shape'}>
                                        <p className={'text-white font-gilroy font-medium text-[0.8vw] inline-block'}>x4</p>
                                    </div>
                                    :
                                    <div className={'w-full h-full flex stacker-unactive-token text-in-shape'}>
                                        <p className={'text-white font-gilroy font-medium text-[0.8vw] inline-block'}>x4</p>
                                    </div>}
                            </div>
                        </div>
                    </div>
                }


            </div>
        );


};

export default Stacker;