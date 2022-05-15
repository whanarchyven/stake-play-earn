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
            <div className={' w-full sm:w-[80%] relative h-[16vh] sm:h-[16vw] rounded-[1vw]'}>
                <div className={'absolute w-full h-full neon-border rounded-[1vw] border-4'}></div>
                <div className={'absolute w-full h-full border-[#fff] rounded-[1vw] border-2'}></div>
                <div className={'absolute w-full h-full account-shape rounded-[1vw] py-[2vw] px-[3vw]'}>
                    <p className={'text-left text-[3vh] sm:text-[2vw] font-normal font-gilroy text-white'}>Total Earned</p>
                    <div className={'text-left w-[35vw] text-[4vw] font-bold font-gilroy text-white'}><ConnectMM></ConnectMM></div>

                    {/*<p className={'text-left text-[2vw] font-normal font-gilroy text-white'}>{totalEarned} $TOKEN</p>*/}
                    <p className={'text-left text-[3vh] sm:text-[2vw] font-normal font-gilroy text-white'}>- $OMD</p>
                </div>
            </div>


            <div className={'justify-around flex-wrap w-full sm:w-[80%] mt-[2vw] h-[14vh] sm:h-[14vw] rounded-[1vw] p-[0.5vw] dashboard-shape flex'}>
                <div className={'items-center align-middle w-[45%] mt-[3%] h-[32%] flex flex-wrap justify-center'}>
                    <p className={'h-fit w-full text-left text-[3vh] sm:text-[2vw] font-light font-gilroy text-white'}>APY</p>
                    <p className={'h-fit w-full text-left text-[3vh] sm:text-[3vw] font-bold font-gilroy text-white'}>{apy}%</p>
                    <p className={'h-fit w-full text-left text-[2vh] sm:text-[1.4vw] font-light font-gilroy text-white'}>Daily ROI -</p>
                </div>
                <div className={'items-center align-middle w-[45%] mt-[3%] h-[32%] flex flex-wrap justify-center'}>
                    <p className={'h-fit w-full text-left text-[2.5vh] sm:text-[2vw] font-light font-gilroy text-white'}>Your Balance</p>
                    {/*<p className={'h-fit w-full text-left text-[3vw] font-bold font-gilroy text-white'}>${balance*currency}</p>*/}
                    <p className={'h-fit w-full text-left text-[3vh] sm:text-[3vw] font-bold font-gilroy text-white'}>-</p>
                    <p className={'h-fit w-full text-left  text-[2vh] sm:text-[1.4vw] font-light font-gilroy text-white'}>- $OMD</p>
                </div>
            </div>

            <div className={'justify-around flex-wrap w-full sm:w-[80%] mt-[2vw] h-[15vh] sm:h-[14vw] rounded-[1vw] p-[0.5vw] dashboard-shape flex'}>
                <div className={'items-center align-middle w-[45%] mt-[3%] h-[32%] flex flex-wrap justify-center'}>
                    <p className={'h-fit w-full text-left text-[2.5vh] sm:text-[2vw] font-light font-gilroy text-white'}>Next Rebase:</p>
                    <p className={'h-fit w-full text-left text-[2.3vh] sm:text-[3vw] font-bold font-gilroy text-white'}>Every {nextRebase} seconds</p>
                    <p className={'h-fit w-full text-left text-[1.4vh] sm:text-[1.4vw] font-light font-gilroy text-white'}>Interest Coming in your wallet</p>
                </div>
                <div className={'items-center align-middle w-[45%] mt-[3%] h-[32%] flex flex-wrap justify-center'}>
                    <p className={'h-fit w-full text-left text-[2vh] sm:text-[2vw] font-light font-gilroy text-white'}>Your earnings/Daily</p>
                    {/*<p className={'h-fit w-full text-left text-[3vw] font-bold font-gilroy text-white'}>${balance*currency*dailyEarnings}</p>*/}
                    <p className={'h-fit w-full text-left text-[3vh] sm:text-[3vw] font-bold font-gilroy text-white'}>-</p>
                    <p className={'h-fit w-full text-left text-[1.7vh] sm:text-[1.4vw] font-light font-gilroy text-white'}>- $OMD</p>
                </div>
            </div>
            <div className={'stacker-unactive-token justify-between flex-wrap w-full sm:w-[80%] mt-[4vw] h-[28vh] sm:h-[28vw] rounded-[1vw] px-[2vw] flex'}>
                <div className={'items-center align-middle w-[75%] mt-[3%] h-[32%] flex flex-wrap justify-center'}>
                    <p className={'h-fit w-full text-left mt-[1.7vw] text-[1.8 vh] sm:text-[1.3vw] font-light font-gilroy text-white'}>Current $TOKEN Price</p>
                    <p className={'h-fit w-full text-left mt-[1.7vw] text-[1.8 vh] sm:text-[1.3vw] font-light font-gilroy text-white'}>Next 1 hour Reward Amount</p>
                    <p className={'h-fit w-full text-left mt-[1.7vw] text-[1.8 vh] sm:text-[1.3vw] font-light font-gilroy text-white'}>Next 1 hour Reward Amount USD</p>
                    <p className={'h-fit w-full text-left mt-[1.7vw] text-[1.8 vh] sm:text-[1.3vw] font-light font-gilroy text-white'}>Next 1 hour Reward Yield</p>
                    <p className={'h-fit w-full text-left mt-[1.7vw] text-[1.8 vh] sm:text-[1.3vw] font-light font-gilroy text-white'}>ROI (30-Day-Rate)</p>
                    <p className={'h-fit w-full text-left mt-[1.7vw] text-[1.8 vh] sm:text-[1.3vw] font-light font-gilroy text-white'}>ROI (30-Day-Rate) USD</p>
                </div>
                <div className={'items-center align-middle w-[20%] mt-[3%] h-[32%] flex flex-wrap justify-center'}>
                    <p className={'h-fit w-full text-right mt-[1.7vw] text-[1.8vh] sm:text-[1.3vw] font-medium font-gilroy text-white'}>-</p>
                    <p className={'h-fit w-full text-right mt-[1.7vw] text-[1.8vh] sm:text-[1.3vw] font-medium font-gilroy text-white'}>- $OMD</p>
                    <p className={'h-fit w-full text-right mt-[1.7vw] text-[1.8vh] sm:text-[1.3vw] font-medium font-gilroy text-white'}>-</p>
                    <p className={'h-fit w-full text-right mt-[1.7vw] text-[1.8vh] sm:text-[1.3vw] font-medium font-gilroy text-white'}>-</p>
                    <p className={'h-fit w-full text-right mt-[1.7vw] text-[1.8vh] sm:text-[1.3vw] font-medium font-gilroy text-white'}>- $OMD</p>
                    <p className={'h-fit w-full text-right mt-[1.7vw] text-[1.8vh] sm:text-[1.3vw] font-medium font-gilroy text-white'}>-</p>
                </div>
            </div>

        </div>
    );
};

export default Account;