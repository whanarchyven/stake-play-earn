import React from 'react';
import Calculator from "./Calculator";
import PlanetCardMarketplace from "./PlanetCardMarketplace";
import Dashboard from "./Dashboard";
import Account from "./Account";
import Swaper from "./Swaper";

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
                            <button className={'cursor-auto w-[75%] mx-[12.5%] mt-[4vw] h-[3.5vw] text-[1.8vw] bg-[#C4C4C4] text-white rounded-full font-gilroy font-bold'}>SOON</button>
                        </div>
                        <div className={'w-[23%] h-[95%] relative'}>
                            <PlanetCardMarketplace category={'silver'} quantity={100} cost={0.8} planetName={'Neptun'} image={'/images/planets/2.png'} apyIncrease={0.04}></PlanetCardMarketplace>
                            <button className={'cursor-auto w-[75%] mx-[12.5%] mt-[4vw] h-[3.5vw] text-[1.8vw] bg-[#C4C4C4] text-white rounded-full font-gilroy font-bold'}>SOON</button>
                        </div>
                        <div className={'w-[23%] h-[95%] relative'}>
                            <PlanetCardMarketplace category={'gold'} quantity={50} cost={2.4} planetName={'Mars'} image={'/images/planets/3.png'} apyIncrease={0.12}></PlanetCardMarketplace>
                            <button className={'cursor-auto w-[75%] mx-[12.5%] mt-[4vw] h-[3.5vw] text-[1.8vw] bg-[#C4C4C4] text-white rounded-full font-gilroy font-bold'}>SOON</button>
                        </div>
                        <div className={'w-[23%] h-[95%] relative'}>
                            <PlanetCardMarketplace category={'platinum'} quantity={20} cost={10} planetName={'Pluto'} image={'/images/planets/4.png'} apyIncrease={0.4}></PlanetCardMarketplace>
                            <button className={'cursor-auto w-[75%] mx-[12.5%] mt-[4vw] h-[3.5vw] text-[1.8vw] bg-[#C4C4C4] text-white rounded-full font-gilroy font-bold'}>SOON</button>
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
    return (
        <div className={'w-full h-full'}>

        </div>
    );
};

export default AccountContent;