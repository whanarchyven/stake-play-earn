import React from 'react';
import Calculator from "./Calculator";
import PlanetCardMarketplace from "./PlanetCardMarketplace";
import Dashboard from "./Dashboard";
import Account from "./Account";
import Swiper from "./Swiper";

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
                <div className={'left-[24vw] top-[15vw] w-[60vw] h-[36vw] absolute inline-block] neon-border rounded-[2vw] border-4 '}></div>
                <div className={'left-[24vw] top-[15vw] w-[60vw] h-[30vw] absolute inline-block] '}>
                    <div className={'justify-around top-[3vw] flex absolute bottom-0 w-full h-[80%]'}>
                        <div className={'w-[20%] h-full relative'}>
                            <PlanetCardMarketplace category={'gold'} quantity={50} cost={0.5} planetName={'X-3121'} image={'/images/planets/1.png'} apyIncrease={80000} ></PlanetCardMarketplace>
                            <button className={' w-[75%] mx-[12.5%] mt-[4vw] h-[3.5vw] text-[1.8vw] bg-blue text-white rounded-full font-gilroy font-bold'}>BUY</button>
                        </div>
                        <div className={'w-[20%] h-full relative'}>
                            <PlanetCardMarketplace category={'gold'} quantity={50} cost={1} planetName={'Y-8265'} image={'/images/planets/2.png'} apyIncrease={12000}></PlanetCardMarketplace>
                            <button className={' w-[75%] mx-[12.5%] mt-[4vw] h-[3.5vw] text-[1.8vw] bg-blue text-white rounded-full font-gilroy font-bold'}>BUY</button>
                        </div>
                        <div className={'w-[20%] h-full relative'}>
                            <PlanetCardMarketplace category={'gold'} quantity={50} cost={1.5} planetName={'Zyx-3512'} image={'/images/planets/3.png'} apyIncrease={180000}></PlanetCardMarketplace>
                            <button className={' w-[75%] mx-[12.5%] mt-[4vw] h-[3.5vw] text-[1.8vw] bg-blue text-white rounded-full font-gilroy font-bold'}>BUY</button>
                        </div>
                        <div className={'w-[20%] h-full relative'}>
                            <PlanetCardMarketplace category={'gold'} quantity={50} cost={2} planetName={'UMY-1010'} image={'/images/planets/4.png'} apyIncrease={250000}></PlanetCardMarketplace>
                            <button className={' w-[75%] mx-[12.5%] mt-[4vw] h-[3.5vw] text-[1.8vw] bg-blue text-white rounded-full font-gilroy font-bold'}>BUY</button>
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
                      <Swiper></Swiper>
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