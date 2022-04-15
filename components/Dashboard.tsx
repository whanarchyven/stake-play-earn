import React, {useState} from 'react';

const Dashboard = () => {
    const [marketCap,setMarketCap]=useState(15_359_427);
    const [web3Price,setWeb3Price]=useState(133.959);
    const [nextRebase,setNextRebase]=useState(3);
    const [circulationSupply,setCirculationSupply]=useState(100_297.748);
    const [backedLiquidity,setBackedLiquidity]=useState(33);
    const [burnedSupply,setBurnedSupply]=useState(14_359.725);
    const [blackHole,setBlackHole]=useState(6_256_838);
    const [treasury,setTreasury]=useState(175_815.186);
    const [bnbLiquid,setBnbLiquid]=useState(1_635_840);
    const [trustFund,setTrustFund]=useState(285_616.958);
    return (
        <div className={'w-full h-full'}>
            <div className={'justify-around flex-wrap w-[80%] h-[20vw] rounded-[1vw] p-[1vw] dashboard-shape flex'}>
                <div className={'items-center align-middle w-[30%] mt-[3%] h-[32%] flex flex-wrap justify-center'}>
                    <p className={'h-fit w-full text-center text-[1.4vw] font-light font-gilroy text-white'}>Market Cap</p>
                    {/*<p className={'h-fit w-full text-center text-[2vw] font-bold font-gilroy text-white'}>${marketCap}</p>*/}
                    <p className={'h-fit w-full text-center text-[2vw] font-bold font-gilroy text-white'}>-</p>
                </div>
                <div className={'items-center align-middle w-[30%] mt-[3%] h-[32%] flex flex-wrap justify-center'}>
                    <p className={'h-fit w-full text-center text-[1.4vw] font-light font-gilroy text-white'}>$OMD Price</p>
                    {/*<p className={'h-fit w-full text-center text-[2vw] font-bold font-gilroy text-white'}>${web3Price}</p>*/}
                    <p className={'h-fit w-full text-center text-[2vw] font-bold font-gilroy text-white'}>-</p>
                </div>
                <div className={'items-center align-middle w-[30%] mt-[3%] h-[32%] flex flex-wrap justify-center'}>
                    <p className={'h-fit w-full text-center text-[1.4vw] font-light font-gilroy text-white'}>Next Rebase</p>
                    <p className={'h-fit w-full text-center text-[2vw] font-bold font-gilroy text-white'}>Every {nextRebase} seconds</p>
                </div>
                <div className={'items-center align-middle w-[30%] h-[32%] flex flex-wrap justify-center'}>
                    <p className={'h-fit w-full text-center text-[1.4vw] font-light font-gilroy text-white'}>Circulation Supply</p>
                    {/*<p className={'h-fit w-full text-center text-[2vw] font-bold font-gilroy text-white'}>{circulationSupply}</p>*/}
                    <p className={'h-fit w-full text-center text-[2vw] font-bold font-gilroy text-white'}>-</p>
                </div>
                <div className={'items-center align-middle w-[30%] h-[32%] flex flex-wrap justify-center'}>
                    <p className={'h-fit w-full text-center text-[1.4vw] font-light font-gilroy text-white'}>Backed Liquidity</p>
                    {/*<p className={'h-fit w-full text-center text-[2vw] font-bold font-gilroy text-white'}>{backedLiquidity}%</p>*/}
                    <p className={'h-fit w-full text-center text-[2vw] font-bold font-gilroy text-white'}>-</p>
                </div>
                <div className={'items-center align-middle w-[30%] h-[32%] flex flex-wrap justify-center'}>
                    <p className={'h-fit w-full text-center text-[1.4vw] font-light font-gilroy text-white'}>Burned Supply</p>
                    {/*<p className={'h-fit w-full text-center text-[2vw] font-bold font-gilroy text-white'}>{burnedSupply}</p>*/}
                    <p className={'h-fit w-full text-center text-[2vw] font-bold font-gilroy text-white'}>-</p>
                </div>
            </div>
            <div className={'justify-between flex-wrap mt-[2vw] w-[80%] h-[20vw] flex'}>
                <div className={'items-center align-middle w-[47%] rounded-[1vw] mt-[3%] dashboard-shape p-[1vw] h-[9vw] flex flex-wrap justify-center'}>
                    <p className={'h-fit w-full text-left text-[1.4vw] font-light font-gilroy text-white'}>The Black Hole (TBH) Market Value</p>
                    {/*<p className={'h-fit w-full text-left text-[2vw] font-bold font-gilroy text-white'}>${blackHole}</p>*/}
                    <p className={'h-fit w-full text-left text-[2vw] font-bold font-gilroy text-white'}>-</p>
                </div>
                <div className={'items-center align-middle w-[47%] rounded-[1vw] mt-[3%] dashboard-shape p-[1vw] h-[9vw] flex flex-wrap justify-center'}>
                    <p className={'h-fit w-full text-left text-[1.4vw] font-light font-gilroy text-white'}>The $OMD Treasury (TOT) Market Value</p>
                    {/*<p className={'h-fit w-full text-left text-[2vw] font-bold font-gilroy text-white'}>${treasury}</p>*/}
                    <p className={'h-fit w-full text-left text-[2vw] font-bold font-gilroy text-white'}>-</p>
                </div>
                <div className={'items-center align-middle w-[47%] rounded-[1vw] mt-[3%] dashboard-shape p-[1vw] h-[9vw] flex flex-wrap justify-center'}>
                    <p className={'h-fit w-full text-left text-[1.4vw] font-light font-gilroy text-white'}>BNB Liquidity Value</p>
                    {/*<p className={'h-fit w-full text-left text-[2vw] font-bold font-gilroy text-white'}>${bnbLiquid}</p>*/}
                    <p className={'h-fit w-full text-left text-[2vw] font-bold font-gilroy text-white'}>-</p>
                </div>
                <div className={'items-center align-middle w-[47%] rounded-[1vw] mt-[3%] h-[9vw] dashboard-shape p-[1vw] flex flex-wrap justify-center'}>
                    <p className={'h-fit w-full text-left text-[1.4vw] font-light font-gilroy text-white'}>$OMD Trust Fund (OTF) Market Value</p>
                    {/*<p className={'h-fit w-full text-left text-[2vw] font-bold font-gilroy text-white'}>${trustFund}</p>*/}
                    <p className={'h-fit w-full text-left text-[2vw] font-bold font-gilroy text-white'}>-</p>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;