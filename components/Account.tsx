import React, {useState} from 'react';
import {ConnectMM} from "./ConnectMM";

const Account = () => {
    const [totalEarned,setTotalEarned]=useState(0.00000);
    const [currency,setCurrency]=useState(150);
    const [apy,setApy]=useState(0.00000);
    const [balance,setBalance]=useState(1);
    const [nextRebase,setNextRebase]=useState(3);
    const [dailyEarnings,setDailyEarnings]=useState(0.2);

    return (
        <div className={'w-full h-full'}>
            <div className={' w-[80%] relative h-[16vw] rounded-[1vw]'}>
                <div className={'absolute w-full h-full neon-border rounded-[1vw] border-4'}></div>
                <div className={'absolute w-full h-full border-[#fff] rounded-[1vw] border-2'}></div>
                <div className={'absolute w-full h-full account-shape rounded-[1vw] py-[2vw] px-[3vw]'}>
                    <p className={'text-left text-[2vw] font-normal font-gilroy text-white'}>Total Earned</p>
                    <p className={'text-left text-[4vw] font-bold font-gilroy text-white'}>CONNECT WALLET</p>
                    <p className={'text-left text-[2vw] font-normal font-gilroy text-white'}>{totalEarned} $TOKEN</p>
                </div>
            </div>


            <div className={'justify-around flex-wrap w-[80%] mt-[2vw] h-[14vw] rounded-[1vw] p-[0.5vw] dashboard-shape flex'}>
                <div className={'items-center align-middle w-[45%] mt-[3%] h-[32%] flex flex-wrap justify-center'}>
                    <p className={'h-fit w-full text-left text-[2vw] font-light font-gilroy text-white'}>APY</p>
                    <p className={'h-fit w-full text-left text-[3vw] font-bold font-gilroy text-white'}>{apy}%</p>
                    <p className={'h-fit w-full text-left text-[1.4vw] font-light font-gilroy text-white'}>Daily ROI 2.301279%</p>
                </div>
                <div className={'items-center align-middle w-[45%] mt-[3%] h-[32%] flex flex-wrap justify-center'}>
                    <p className={'h-fit w-full text-left text-[2vw] font-light font-gilroy text-white'}>Your Balance</p>
                    <p className={'h-fit w-full text-left text-[3vw] font-bold font-gilroy text-white'}>${balance*currency}</p>
                    <p className={'h-fit w-full text-left text-[1.4vw] font-light font-gilroy text-white'}>{balance} $TOKEN</p>
                </div>
            </div>

            <div className={'justify-around flex-wrap w-[80%] mt-[2vw] h-[14vw] rounded-[1vw] p-[0.5vw] dashboard-shape flex'}>
                <div className={'items-center align-middle w-[45%] mt-[3%] h-[32%] flex flex-wrap justify-center'}>
                    <p className={'h-fit w-full text-left text-[2vw] font-light font-gilroy text-white'}>Next Rebase:</p>
                    <p className={'h-fit w-full text-left text-[3vw] font-bold font-gilroy text-white'}>Every {nextRebase} seconds</p>
                    <p className={'h-fit w-full text-left text-[1.4vw] font-light font-gilroy text-white'}>Interest Coming in your wallet</p>
                </div>
                <div className={'items-center align-middle w-[45%] mt-[3%] h-[32%] flex flex-wrap justify-center'}>
                    <p className={'h-fit w-full text-left text-[2vw] font-light font-gilroy text-white'}>Your earnings/Daily</p>
                    <p className={'h-fit w-full text-left text-[3vw] font-bold font-gilroy text-white'}>${balance*currency*dailyEarnings}</p>
                    <p className={'h-fit w-full text-left text-[1.4vw] font-light font-gilroy text-white'}>{balance*dailyEarnings} $TOKEN</p>
                </div>
            </div>
            <div className={'stacker-unactive-token justify-between flex-wrap w-[80%] mt-[4vw] h-[28vw] rounded-[1vw] px-[2vw] flex'}>
                <div className={'items-center align-middle w-[45%] mt-[3%] h-[32%] flex flex-wrap justify-center'}>
                    <p className={'h-fit w-full text-left mt-[1.7vw] text-[1.3vw] font-light font-gilroy text-white'}>Current $TOKEN Price</p>
                    <p className={'h-fit w-full text-left mt-[1.7vw] text-[1.3vw] font-light font-gilroy text-white'}>Next 1 hour Reward Amount</p>
                    <p className={'h-fit w-full text-left mt-[1.7vw] text-[1.3vw] font-light font-gilroy text-white'}>Next 1 hour Reward Amount USD</p>
                    <p className={'h-fit w-full text-left mt-[1.7vw] text-[1.3vw] font-light font-gilroy text-white'}>Next 1 hour Reward Yield</p>
                    <p className={'h-fit w-full text-left mt-[1.7vw] text-[1.3vw] font-light font-gilroy text-white'}>ROI (30-Day-Rate)</p>
                    <p className={'h-fit w-full text-left mt-[1.7vw] text-[1.3vw] font-light font-gilroy text-white'}>ROI (30-Day-Rate) USD</p>
                </div>
                <div className={'items-center align-middle w-[45%] mt-[3%] h-[32%] flex flex-wrap justify-center'}>
                    <p className={'h-fit w-full text-right mt-[1.7vw] text-[1.3vw] font-medium font-gilroy text-white'}>${currency}</p>
                    <p className={'h-fit w-full text-right mt-[1.7vw] text-[1.3vw] font-medium font-gilroy text-white'}>{balance*dailyEarnings/24} $TOKEN</p>
                    <p className={'h-fit w-full text-right mt-[1.7vw] text-[1.3vw] font-medium font-gilroy text-white'}>${balance*dailyEarnings*currency/24}</p>
                    <p className={'h-fit w-full text-right mt-[1.7vw] text-[1.3vw] font-medium font-gilroy text-white'}>${balance*dailyEarnings/24}</p>
                    <p className={'h-fit w-full text-right mt-[1.7vw] text-[1.3vw] font-medium font-gilroy text-white'}>{balance*dailyEarnings*30} $TOKEN</p>
                    <p className={'h-fit w-full text-right mt-[1.7vw] text-[1.3vw] font-medium font-gilroy text-white'}>{balance*dailyEarnings*30*currency}</p>
                </div>
            </div>

        </div>
    );
};

export default Account;