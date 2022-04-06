import React from 'react';
import Calculator from "./Calculator";
import PlanetCardMarketplace from "./PlanetCardMarketplace";

interface AccountContentItems{
    currentTab:string;
}

const AccountContent = ({currentTab}:AccountContentItems) => {
    if(currentTab=='calculator'){
        return (
            <div className={'w-full relative h-full'}>
                <Calculator></Calculator>
            </div>
        );
    }
    else if(currentTab=='marketplace'){
        return (
            <div className={'w-full relative h-[63vw]'}>
                <h2 className={'absolute top-[1vw] left-[24vw] inline-block text-white font-gilroy font-bold text-[5.1vw]'}>NFT MARKETPLACE</h2>
                <p className={'absolute top-[9vw] left-[24vw] inline-block text-white font-gilroy font-medium uppercase text-[2vw]'}>NFT Boosters for <strong>$BNB</strong> Rewards pool</p>
                <div className={'left-[24vw] top-[15vw] w-[60vw] h-[36vw] absolute inline-block] neon-border rounded-[2vw] border-4 '}></div>
                <div className={'left-[24vw] top-[15vw] w-[60vw] h-[30vw] absolute inline-block] '}>
                    <div className={'justify-around top-[3vw] flex absolute bottom-0 w-full h-[80%]'}>
                        <div className={'w-[20%] h-full relative'}>
                            <PlanetCardMarketplace cost={0.5} planetName={'X-3121'} image={'/images/planets/1.png'} apyIncrease={80000} ></PlanetCardMarketplace>
                            <button className={' w-[75%] mx-[12.5%] mt-[2vw] h-[3.5vw] text-[1.8vw] bg-blue text-white rounded-full font-gilroy font-bold'}>BUY</button>
                        </div>
                        <div className={'w-[20%] h-full relative'}>
                            <PlanetCardMarketplace cost={1} planetName={'Y-8265'} image={'/images/planets/2.png'} apyIncrease={12000}></PlanetCardMarketplace>
                            <button className={' w-[75%] mx-[12.5%] mt-[2vw] h-[3.5vw] text-[1.8vw] bg-blue text-white rounded-full font-gilroy font-bold'}>BUY</button>
                        </div>
                        <div className={'w-[20%] h-full relative'}>
                            <PlanetCardMarketplace cost={1.5} planetName={'Zyx-3512'} image={'/images/planets/3.png'} apyIncrease={180000}></PlanetCardMarketplace>
                            <button className={' w-[75%] mx-[12.5%] mt-[2vw] h-[3.5vw] text-[1.8vw] bg-blue text-white rounded-full font-gilroy font-bold'}>BUY</button>
                        </div>
                        <div className={'w-[20%] h-full relative'}>
                            <PlanetCardMarketplace cost={2} planetName={'UMY-1010'} image={'/images/planets/4.png'} apyIncrease={250000}></PlanetCardMarketplace>
                            <button className={' w-[75%] mx-[12.5%] mt-[2vw] h-[3.5vw] text-[1.8vw] bg-blue text-white rounded-full font-gilroy font-bold'}>BUY</button>
                        </div>
                    </div>
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