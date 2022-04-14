import React, {useRef} from 'react';
import Image from "next/image";


const Swaper = () => {
    const inp1 = React.useRef<HTMLSelectElement>(null);
    const inp2 = React.useRef<HTMLSelectElement>(null);
    return (
        <div className={'w-full h-full relative rounded-[2vw]'}>
            <div className={'w-full h-full opacity-[0.34] swiper-background rounded-[2vw] absolute top-0 left-0'}>

            </div>
            <div className={'w-[93%] h-[78%] rounded-[2vw] absolute mx-[4%] my-[3%] top-0 left-0'}>
                <div className={'w-full absolute h-full'}>
                    <Image src={'/images/account/swiper_border.svg'} layout={'fill'}></Image>
                </div>
            </div>
            <div className={'w-[93%] h-[78%] rounded-[2vw] p-[1.5vw] relative mx-[4%] my-[3%] top-0 left-0'}>
                <div className={'w-full h-[8vw] rounded-[1.5vw] mt-[2%] swiper-tab'}>
                    <div className={'align-top w-[60%] inline-block h-full'}>
                        <p className={'text-white px-[8%] mt-[4%] text-[1.4vw] font-gilroy font-light'}>
                            From
                        </p>
                        <p className={'text-white px-[8%]  text-[2.5vw] font-gilroy font-bold'}>
                            -
                        </p>
                    </div>
                    <div className={'align-top w-[40%] inline-block h-full'}>
                        <p className={'text-white px-[8%] h-[30%] mt-[4%] text-[1.4vw] font-gilroy font-light'}>
                            Balance: -
                        </p>
                        <div className={'w-full h-[60%]'}>
                            <div className={'w-[30%]  align-top h-full inline-block'}>
                                <div className={'w-[50%] relative h-[50%] m-[25%] '}>
                                    <Image src={'/images/account/swiper_question.svg'} layout={'fill'}></Image>
                                </div>

                            </div>
                            <div className={'w-[70%] align-top h-full inline-block'}>
                                {/*<select className={'swiper-select font-gilroy text-white uppercase text-[2.5vw] font-semibold w-[85%] h-full'} ref={inp1}>*/}
                                {/*    <option className={'bg-purple font-gilroy text-white font-semibold'}>NFT</option>*/}
                                {/*    <option className={'bg-purple font-gilroy text-white font-semibold'}>BTC</option>*/}
                                {/*    <option className={'bg-purple font-gilroy text-white font-semibold'}>USDC</option>*/}
                                {/*    <option className={'bg-purple font-gilroy text-white font-semibold'}>GNFT</option>*/}
                                {/*</select>*/}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'w-full mt-[3%] relative h-[2vw]'}>
                    <Image src={'/images/account/swiper_arrow.svg'} layout={'fill'}></Image>
                </div>
                <div className={'w-full h-[8vw] rounded-[1.5vw] mt-[2%] swiper-tab'}>
                    <div className={'align-top w-[60%] inline-block h-full'}>
                        <p className={'text-white px-[8%] mt-[4%] text-[1.4vw] font-gilroy font-light'}>
                            To (estimated)
                        </p>
                        <p className={'text-white px-[8%]  text-[2.5vw] font-gilroy font-bold'}>
                            -
                        </p>
                    </div>
                    <div className={'align-top w-[40%] inline-block h-full'}>
                        <p className={'text-white px-[8%] h-[30%] mt-[4%] text-[1.4vw] font-gilroy font-light'}>
                            Balance: -
                        </p>
                        <div className={'w-full h-[60%]'}>
                            <div className={'w-[30%]  align-top h-full inline-block'}>
                                <div className={'w-[50%] relative h-[50%] m-[25%] '}>
                                    <Image src={'/images/account/swiper_question.svg'} layout={'fill'}></Image>
                                </div>

                            </div>
                            <div className={'w-[70%] align-top h-full inline-block'}>
                                {/*<select className={'swiper-select font-gilroy text-white uppercase text-[2.5vw] font-semibold w-[85%] h-full'} ref={inp2}>*/}
                                {/*    <option className={'bg-purple font-gilroy text-white font-semibold'}>USDC</option>*/}
                                {/*    <option className={'bg-purple font-gilroy text-white font-semibold'}>NFT</option>*/}
                                {/*    <option className={'bg-purple font-gilroy text-white font-semibold'}>BTC</option>*/}
                                {/*    <option className={'bg-purple font-gilroy text-white font-semibold'}>GNFT</option>*/}
                                {/*</select>*/}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'w-full mt-[2%] relative swiper-price-tab rounded-[1vw] h-[3vw]'}>
                    <p className={'w-[20%] align-top text-white pl-[4%] inline-block leading-[210%] text-[1.4vw] font-gilroy font-light'}>Price:</p>
                    {/*<p className={'w-[70%] align-top text-right inline-block text-white pr-[4%] leading-[210%] text-[1.4vw] font-gilroy font-light'}>0.00778346 GNFT per USDC</p>*/}
                    <div className={'w-[5%] align-top inline-block h-full relative'}>
                        <Image src={'/images/account/swiper_exchange.svg'} layout={'fill'}></Image>
                    </div>
                </div>
                <div className={'justify-between w-full mt-[2%] flex relative rounded-[1vw] h-[5vw]'}>
                    {/*<button className={'font-gilroy text-white font-semibold rounded-[1vw] dao-gradient w-[49%] text-[1.5vw] h-full'}>Approve GNFT</button>*/}
                    {/*<button className={'font-gilroy text-white font-semibold rounded-[1vw] dao-gradient w-[49%] text-[1.5vw] h-full'}>Swap</button>*/}
                </div>
                <div className={'w-full mt-[5%] relative h-[2.3vw]'}>
                    <Image src={'/images/account/swiper_etaps.svg'} layout={'fill'}></Image>
                </div>
            </div>
            <div className={'w-[86%] mx-[7%] mt-[4%] bottom-0 relative rounded-[1vw] h-[2.5vw]'}>
                <p className={'w-[38%] align-middle text-white pl-[4%] inline-block leading-[210%] text-[1.4vw] font-gilroy font-light'}>Minimum recieved:</p>
                <div className={'w-[3%] ml-[2%] align-middle inline-block h-full relative'}>
                    <Image src={'/images/account/swiper_question.svg'} layout={'fill'}></Image>
                </div>
                <p className={'w-[57%] align-middle text-right inline-block text-white pr-[4%] leading-[210%] text-[1.4vw] font-gilroy font-light'}></p>
            </div>
            <div className={'w-[86%] mx-[7%] bottom-0 relative rounded-[1vw] h-[2.5vw]'}>
                <p className={'w-[28%] align-middle text-white pl-[4%] inline-block leading-[210%] text-[1.4vw] font-gilroy font-light'}>Price Impact</p>
                <div className={'w-[3%] ml-[2%] align-middle inline-block h-full relative'}>
                    <Image src={'/images/account/swiper_question.svg'} layout={'fill'}></Image>
                </div>
                <p className={'w-[67%] align-middle text-right inline-block text-white pr-[4%] leading-[210%] text-[1.4vw] font-gilroy font-light'}></p>
            </div>
            <div className={'w-[86%] mx-[7%] bottom-0 relative rounded-[1vw] h-[2.5vw]'}>
                <p className={'w-[43%] align-middle text-white pl-[4%] inline-block leading-[210%] text-[1.4vw] font-gilroy font-light'}>Liquidity Provider Fee</p>
                <div className={'w-[3%] ml-[2%] align-middle inline-block h-full relative'}>
                    <Image src={'/images/account/swiper_question.svg'} layout={'fill'}></Image>
                </div>
                <p className={'w-[52%] align-middle text-right inline-block text-white pr-[4%] leading-[210%] text-[1.4vw] font-gilroy font-light'}></p>
            </div>
        </div>
    );
};

export default Swaper;