import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NeonButton from "../components/NeonButton";
import React from "react";
import Calculator from "../components/Calculator";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>1 MILLION DAO</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>


          {/*MENU*/}

          <div className={'z-[9999] w-full fixed top-0 left-0 menu-bg h-[6vw]'}>
              <div className={'z-[9999] justify-between justify-items-center items-center w-[38.4vw] h-[2vw] fixed inline-flex left-[29.7vw] top-[1.1vw]'}>
                  <a className={'cursor-pointer text-white text-center uppercase text-[1.2vw] font-gilroy font-regular'}>nft marketplace</a>
                  <a className={'cursor-pointer text-white text-center uppercase text-[1.2vw] font-gilroy font-regular'}>metaverse</a>
                  <a className={'cursor-pointer text-white text-center uppercase text-[1.2vw] font-gilroy font-regular'}>swap</a>
                  <a className={'cursor-pointer text-white text-center uppercase text-[1.2vw] font-gilroy font-regular'}>TEASER</a>
                  <a className={'cursor-pointer text-white text-center uppercase text-[1.2vw] font-gilroy font-regular'}>DAO</a>
              </div>
              <div className={'z-[9999] justify-between justify-items-center items-center w-[28vw] h-[2vw] fixed inline-flex left-[33.6vw] top-[3.1vw]'}>
                  <a className={'cursor-pointer text-white text-center uppercase text-[1.2vw] font-gilroy font-regular'}>Stake</a>
                  <a className={'cursor-pointer text-white text-center uppercase text-[1.2vw] font-gilroy font-regular'}>TEAM</a>
                  <a className={'cursor-pointer text-white text-center uppercase text-[1.2vw] font-gilroy font-regular'}>ROADMAP</a>
                  <a className={'cursor-pointer text-white text-center uppercase text-[1.2vw] font-gilroy font-regular'}>PARTNERS</a>
              </div>
              <div className={'z-[9999] justify-items-center justify-center items-center fixed inline-flex left-[71.2vw] top-[1.2vw] w-[12.5vw] h-[3.4vw] rounded-full bg-purple'}>
                  <h2 className={'text-white text-center uppercase text-[1.1vw] font-gilroy font-bold'}>Connect wallet</h2>
              </div>
          </div>



          {/*INTRO*/}

          <div className={'w-[100vw] relative block h-[61vw] bg-cover bg-[url("../public/images/main.png")]'}>
              <div className={'justify-items-center items-center justify-align-center w-[22vw] h-[5.5vw] left-[28.3vw] top-[21.3vw] rounded-full absolute inline-flex offer-gradient'}>
                  <h2 className={'w-full text-center text-white font-gilroy font-extrabold text-[2.2vw]'}>122 450% APY</h2>
              </div>
              <div className={'w-[57vw] h-[53vw] absolute inline-block bottom-0 left-0'}>
                  <Image src={'/images/phone.png'} layout={'fill'}></Image>
              </div>
              <div className={'cursor-pointer z-[8000] left-[14.4vw] top-[42vw] w-[8.7vw] h-[2.3vw] absolute inline-block'}>
                  <Image src={'/images/appstore.png'} layout={'fill'}></Image>
              </div>
              <div className={'cursor-pointer z-[8000] left-[14.4vw] top-[45vw] w-[8.7vw] h-[2.3vw] absolute inline-block'}>
                  <Image src={'/images/googleplay.png'} layout={'fill'}></Image>
              </div>
              <h1 className={'tracking-[0.015em] absolute right-[11.5vw] text-[4.72vw] top-[29.8vw] text-right text-white font-gilroy font-black'}>STAKE PLAY EARN</h1>
              <h2 className={'absolute right-[11.5vw] text-[2.2vw] top-[27.2vw] text-right text-white font-gilroy font-regular'}>First DeFi & Metaverse platform</h2>
              <div className={'cursor-pointer absolute inline-block left-[48vw] top-[38.4vw] w-[14.5vw] h-[3.6vw] text-[1.7vw] rounded-[20px]'}>
                  <NeonButton title={'Stake $Token'}></NeonButton>
              </div>
              <div className={'cursor-pointer absolute inline-block left-[64vw] top-[38.4vw] w-[12.4vw] h-[3.6vw] text-[1.7vw] rounded-[20px]'}>
                  <NeonButton title={'Metaverse'}></NeonButton>
              </div>
              <div className={'cursor-pointer absolute inline-block left-[78.2vw] top-[38.4vw] w-[8.2vw] h-[3.6vw] text-[1.7vw] rounded-[20px]'}>
                  <NeonButton title={'NFT'}></NeonButton>
              </div>
              <div className={'cursor-pointer absolute inline-block left-[50.7vw] top-[43.6vw] w-[8.2vw] h-[3.6vw] text-[1.7vw] rounded-[20px]'}>
                  <NeonButton title={'DEX'}></NeonButton>
              </div>
              <div className={'cursor-pointer absolute inline-block left-[61.1vw] top-[43.6vw] w-[8vw] h-[3.6vw] text-[1.7vw] rounded-[20px]'}>
                  <NeonButton title={'DAO'}></NeonButton>
              </div>
              <div className={'cursor-pointer absolute inline-block left-[71.5vw] top-[43.6vw] w-[13.5vw] h-[3.6vw] text-[1.7vw] rounded-[20px]'}>
                  <NeonButton title={'Play-2-Earn'}></NeonButton>
              </div>
              <div className={'cursor-pointer w-[2.3vw] h-[2.3vw] bottom-[10.4vw] left-[14.45vw] absolute inline-block'}>
                  <Image src={'/images/twitter.svg'} layout={'fill'}></Image>
              </div>
              <div className={'cursor-pointer w-[2.3vw] h-[2.5vw] bottom-[10.4vw] left-[17.45vw] absolute inline-block'}>
                  <Image src={'/images/discord.svg'} layout={'fill'}></Image>
              </div>
              <div className={'cursor-pointer w-[2.3vw] h-[2.3vw] bottom-[10.4vw] left-[20.5vw] absolute inline-block'}>
                  <Image src={'/images/telegram.svg'} layout={'fill'}></Image>
              </div>
          </div>


          {/*STACKING*/}

          <div className={'w-[100vw] relative block h-[52.5vw] bg-cover bg-[url("../public/images/staking.png")]'}>
              <div className={'left-[18vw] top-[5vw] w-[64vw] h-[3.5vw] absolute inline-block'}>
                  <Image src={'/images/release.svg'} layout={'fill'}></Image>
              </div>
              <h2 className={'tracking-[0.015em] absolute left-[21.6vw] text-[4.5vw] top-[14vw] text-right text-white font-gilroy font-bold'}>383,025.80%</h2>
              <h2 className={'absolute left-[25vw] text-[2.2vw] top-[20.5vw] text-right text-white font-gilroy font-regular'}>Fixed Staking APY</h2>



              <div className={'cursor-pointer w-[9.1vw] h-[3.7vw] left-[21.7vw] top-[25.6vw] rounded-full text-in-shape absolute inline-flex offer-purple'}>
                  <p className={'text-white font-gilroy font-semibold text-[1.7vw]'}>AUDIT</p>
              </div>


              {/*<div className={'cursor-pointer offer-gradient w-[15.5vw] h-[3.7vw] left-[31.5vw] top-[25.6vw] rounded-full text-in-shape absolute inline-flex'}>*/}
              {/*    <p className={'text-white font-gilroy font-semibold text-[1.7vw]'}>WHITEPAPER</p>*/}
              {/*</div>*/}

              {/*<div className={'cursor-pointer bg-purple w-[16.7vw] h-[4.5vw] left-[32vw] top-[40.9vw] rounded-full text-in-shape absolute inline-flex'}>*/}
              {/*    <p className={'text-white font-gilroy font-semibold text-[1.7vw]'}>BUY $TOKEN</p>*/}
              {/*</div>*/}

              <div className={'cursor-pointer bg-blue w-[17.1vw] h-[4.5vw] left-[51.2vw] top-[40.9vw] rounded-full text-in-shape absolute inline-flex'}>
                  <p className={'text-white font-gilroy font-semibold text-[1.7vw]'}>CALCULATOR</p>
              </div>

              <div className={'absolute inline-block rotate-180 left-[20.2vw] top-[34.3vw]  w-[59.7vw] h-[4.3vw] rounded-full'}>
                  <div className={'w-[inherit] h-[inherit] relative flex items-center justify-items-center justify-center rounded-[inherit]'}>
                    <div className={'z-[4] w-[99.5%] absolute flex h-[99.5%] rounded-[inherit] border-white border-solid border-[1px] m-[0.5%]'}></div>
                    <div className={'relative inline-block flex justify-center justify-items-center blur-[1px] rounded-[inherit] h-full w-full'}>
                      <div className={'z-[1] absolute w-full h-full border-[3px] rounded-[inherit] neon-border'}></div>
                    </div>
                  </div>
              </div>

              <div className={'w-[32vw] h-[22vw] left-[50vw] top-[11vw] absolute inline-block'}>
                  <Image src={'/images/graphic.svg'} layout={'fill'}></Image>
              </div>

          </div>

          {/*CALCULATOR*/}

          <div className={'w-[100vw] relative block h-[57vw] bg-cover bg-[url("../public/images/calculator.png")]'}>
              <Calculator></Calculator>
          </div>

          {/*BNB*/}

          <div className={'w-[100vw] relative block h-[41.25vw] bg-[#000]'}>
              <div className={'left-[20vw] top-[7vw] w-[59.9vw] text-in-shape h-[6vw] absolute inline-flex '}>
                  <div className={'w-full h-full neon-border border-[2px] rounded-full'}></div>
                  <h2 className={'text-white inline-block absolute text-center text-[2.3vw] font-gilroy font-medium'}>$BNB distribution offer closing Pinksale presale</h2>
              </div>
              <h2 className={'text-white font-gilroy font-black absolute inline-block uppercase left-[36.4vw] top-[15.8vw] text-[3.37vw]'}>$BNB collected</h2>
              <div className={'w-[9vw] left-[27vw] top-[18vw] h-[5vw] absolute inline-block'}>
                  <Image src={'/images/corner_left.svg'} layout={'fill'}></Image>
              </div>
              <div className={'w-[1vw] left-[48.1vw] top-[20vw] h-[7vw] absolute inline-block'}>
                  <Image src={'/images/corner_bottom.svg'} layout={'fill'}></Image>
              </div>
              <div className={'w-[7.4vw] left-[64vw] top-[18vw] h-[5vw] absolute inline-block'}>
                  <Image src={'/images/corner_right.svg'} layout={'fill'}></Image>
              </div>
              <p className={'font-semibold text-semiblue top-[22vw] left-[23.8vw] inline-block absolute text-center text-[3.8vw] font-gilroy '}>60%</p>
              <p className={'font-semibold text-semiblue top-[27vw] left-[45.6vw] inline-block absolute text-center text-[3.8vw] font-gilroy '}>10%</p>
              <p className={'font-semibold text-semiblue top-[22vw] left-[68.5vw] inline-block absolute text-center text-[3.8vw] font-gilroy '}>30%</p>

              <p className={'font-medium uppercase text-white top-[26.4vw] left-[23.8vw] inline-block absolute text-center text-[2.1vw] font-gilroy '}>liquidity</p>
              <p className={'font-medium uppercase text-white top-[31.4vw] left-[45.6vw] inline-block absolute text-center text-[2.1vw] font-gilroy '}>team%</p>
              <p className={'leading-[111%] font-medium uppercase text-white top-[27.4vw] left-[60.5vw] inline-block absolute text-right w-[15vw] text-[1.8vw] font-gilroy '}>$BNB staking rewards pool</p>

          </div>

          {/*METAVERSE*/}

          <div className={'w-[100vw] relative block h-[71.6vw] bg-cover bg-[url("../public/images/metaverse.png")]'}>

              <h2 className={'tracking-[0.03em] text-white font-gilroy font-black absolute inline-block uppercase left-[22.2vw] top-[7vw] text-[5.9vw]'}>METAVERSE</h2>
              <div className={'absolute inline-block left-[58.5vw] top-[3.2vw] w-[28.6vw] h-[28.6vw]'}>
                  <Image src={'/images/1.png'} layout={'fill'}></Image>
              </div>
              <div className={'absolute inline-block left-0 top-[15.2vw] w-[33vw] h-[37vw]'}>
                  <Image src={'/images/2.png'} layout={'fill'}></Image>
              </div>
              <div className={'absolute inline-block left-[34.4vw] top-[24.5vw] w-[31vw] h-[32vw]'}>
                  <Image src={'/images/3.png'} layout={'fill'}></Image>
              </div>
              <div className={'absolute inline-block right-0 top-[32vw] w-[33.5vw] h-[37.5vw]'}>
                  <Image src={'/images/4.png'} layout={'fill'}></Image>
              </div>
              <div className={'cursor-pointer left-[16.4vw] top-[55.5vw] w-[28vw] text-in-shape h-[9vw] absolute inline-flex '}>
                  <div className={'w-full h-full neon-border border-[5px] inline-block rounded-full'}></div>
                  <div className={'offer-gradient w-[90%] rounded-full h-[75%] p-[2vw] inline-block absolute'}></div>
                  <h2 className={'text-white inline-block absolute text-center text-[3.2vw] font-gilroy font-regular'}><strong>PLAY</strong> DEMO</h2>
              </div>
          </div>


          {/*TEASER*/}

          {/*<div className={'w-[100vw] relative block h-[60.5vw] bg-[#000]]'}>*/}
          {/*    <iframe className={'inline-block absolute left-[14vw] w-[72vw] h-[37vw] top-[7vw]'} width="949" height="534" src="https://www.youtube.com/embed/0Eo1c2grmq8"*/}
          {/*            title="YouTube video player" frameBorder="0"*/}
          {/*            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
          {/*            allowFullScreen></iframe>*/}
          {/*    <div className={'justify-items-center justify-center items-center absolute inline-flex left-[39.67vw] top-[47.7vw] w-[20.8vw] h-[5.5vw] rounded-full bg-purple'}>*/}
          {/*        <h2 className={'text-white text-center uppercase text-[1.7vw] font-gilroy font-bold'}>BUY $TOKEN</h2>*/}
          {/*    </div>*/}
          {/*</div>*/}






          {/*TEAM*/}

          {/*<div className={'w-[100vw] relative block h-[71.6vw] bg-cover bg-[url("../public/images/team.png")]'}>*/}
          {/*    <h2 className={'tracking-[0.03em] text-white font-gilroy font-black absolute inline-block uppercase right-[9.2vw] top-[6vw] text-[5.9vw]'}>TEAM</h2>*/}

          {/*    <div className={'w-[15.5vw] h-[21vw] left-[38.7vw] top-[18.6vw] absolute justify-center  inline-flex border-white border-2 rounded-[2vw]'}>*/}
          {/*        <div className={'absolute top-[-3vw] w-[13.4vw] h-[13.4vw] justify-center justify-items-center items-center flex'}>*/}
          {/*            <div className={'absolute w-[11.9vw] h-[11.9vw] rounded-full border-[1.5vw] neon-border'}></div>*/}
          {/*            <div className={'absolute w-[10.4vw] h-[10.4vw] rounded-full'}>*/}
          {/*                <Image src={'/images/fufel1.png'} layout={'fill'}></Image>*/}
          {/*            </div>*/}
          {/*        </div>*/}
          {/*        <p className={'text-white inline-block absolute text-center top-[10vw] text-[3vw] font-gilroy font-regular'}>Name</p>*/}
          {/*        <div className={'w-[9vw] h-[4vw] absolute top-[15vw]'}>*/}
          {/*            <Image src={'/images/linkedin.svg'} layout={'fill'}></Image>*/}
          {/*        </div>*/}
          {/*    </div>*/}

          {/*    <div className={'w-[15.5vw] h-[21vw] left-[58vw] top-[18.6vw] absolute justify-center  inline-flex border-white border-2 rounded-[2vw]'}>*/}
          {/*        <div className={'absolute top-[-3vw] w-[13.4vw] h-[13.4vw] justify-center justify-items-center items-center flex'}>*/}
          {/*            <div className={'absolute w-[11.9vw] h-[11.9vw] rounded-full border-[1.5vw] neon-border'}></div>*/}
          {/*            <div className={'absolute w-[10.4vw] h-[10.4vw] rounded-full'}>*/}
          {/*                <Image src={'/images/fufel2.png'} layout={'fill'}></Image>*/}
          {/*            </div>*/}
          {/*        </div>*/}
          {/*        <p className={'text-white inline-block absolute text-center top-[10vw] text-[3vw] font-gilroy font-regular'}>Name</p>*/}
          {/*        <div className={'w-[9vw] h-[4vw] absolute top-[15vw]'}>*/}
          {/*            <Image src={'/images/linkedin.svg'} layout={'fill'}></Image>*/}
          {/*        </div>*/}
          {/*    </div>*/}


          {/*    <div className={'w-[15.5vw] h-[21vw] left-[77vw] top-[18.6vw] absolute justify-center  inline-flex border-white border-2 rounded-[2vw]'}>*/}
          {/*        <div className={'absolute top-[-3vw] w-[13.4vw] h-[13.4vw] justify-center justify-items-center items-center flex'}>*/}
          {/*            <div className={'absolute w-[11.9vw] h-[11.9vw] rounded-full border-[1.5vw] neon-border'}></div>*/}
          {/*            <div className={'absolute w-[10.4vw] h-[10.4vw] rounded-full'}>*/}
          {/*                <Image src={'/images/fufel3.png'} layout={'fill'}></Image>*/}
          {/*            </div>*/}
          {/*        </div>*/}
          {/*        <p className={'text-white inline-block absolute text-center top-[10vw] text-[3vw] font-gilroy font-regular'}>Name</p>*/}
          {/*        <div className={'w-[9vw] h-[4vw] absolute top-[15vw]'}>*/}
          {/*            <Image src={'/images/linkedin.svg'} layout={'fill'}></Image>*/}
          {/*        </div>*/}
          {/*    </div>*/}

          {/*    <div className={'w-[15.5vw] h-[21vw] left-[58vw] top-[43vw] absolute justify-center  inline-flex border-white border-2 rounded-[2vw]'}>*/}
          {/*        <div className={'absolute top-[-3vw] w-[13.4vw] h-[13.4vw] justify-center justify-items-center items-center flex'}>*/}
          {/*            <div className={'absolute w-[11.9vw] h-[11.9vw] rounded-full border-[1.5vw] neon-border'}></div>*/}
          {/*            <div className={'absolute w-[10.4vw] h-[10.4vw] rounded-full'}>*/}
          {/*                <Image src={'/images/fufel4.png'} layout={'fill'}></Image>*/}
          {/*            </div>*/}
          {/*        </div>*/}
          {/*        <p className={'text-white inline-block absolute text-center top-[10vw] text-[3vw] font-gilroy font-regular'}>Name</p>*/}
          {/*        <div className={'w-[9vw] h-[4vw] absolute top-[15vw]'}>*/}
          {/*            <Image src={'/images/linkedin.svg'} layout={'fill'}></Image>*/}
          {/*        </div>*/}
          {/*    </div>*/}


          {/*    <div className={'w-[15.5vw] h-[21vw] left-[77vw] top-[43vw] absolute justify-center  inline-flex border-white border-2 rounded-[2vw]'}>*/}
          {/*        <div className={'absolute top-[-3vw] w-[13.4vw] h-[13.4vw] justify-center justify-items-center items-center flex'}>*/}
          {/*            <div className={'absolute w-[11.9vw] h-[11.9vw] rounded-full border-[1.5vw] neon-border'}></div>*/}
          {/*            <div className={'absolute w-[10.4vw] h-[10.4vw] rounded-full'}>*/}
          {/*                <Image src={'/images/fufel5.png'} layout={'fill'}></Image>*/}
          {/*            </div>*/}
          {/*        </div>*/}
          {/*        <p className={'text-white inline-block absolute text-center top-[10vw] text-[3vw] font-gilroy font-regular'}>Name</p>*/}
          {/*        <div className={'w-[9vw] h-[4vw] absolute top-[15vw]'}>*/}
          {/*            <Image src={'/images/linkedin.svg'} layout={'fill'}></Image>*/}
          {/*        </div>*/}
          {/*    </div>*/}
          {/*</div>*/}


          {/*ROADMAP*/}

          <div className={'w-[100vw] relative block h-[112vw] bg-cover bg-[url("../public/images/roadmap.png")]'}>

              <div className={'absolute inline-block rotate-180 left-[6vw] top-[6.5vw]  w-[88vw] h-[95.3vw] rounded-[4.5vw] rotate-180'}>
                  <div className={'w-[inherit] h-[inherit] relative flex items-center justify-items-center justify-center rounded-[inherit]'}>
                      <div className={'z-[4] w-[99.9%] absolute flex h-[99.9%] rounded-[inherit] border-white border-solid border-[1px] m-[0.1%]'}></div>
                      <div className={'relative inline-block flex justify-center justify-items-center blur-[1px] rounded-[inherit] h-full w-full'}>
                          <div className={'z-[1] absolute w-full h-full border-[3px] rounded-[inherit] neon-border'}></div>
                      </div>
                  </div>
              </div>
              <h2 className={'text-white font-gilroy font-black absolute inline-block left-[38.1vw] top-[8.9vw] text-[4.9vw]'}>ROADMAP</h2>
              <div className={'w-[51vw] h-[20vw] absolute inline-block left-[19.5vw] top-[5.53vw]'}>
                  <Image src={'/images/roadmap_vectors.svg'} layout={'fill'}></Image>
              </div>
              <div className={'justify-between justify-items-center flex-nowrap w-[71vw] h-[75vw] absolute inline-flex left-[14.5vw] top-[24vw]'}>
                  <div className={'w-[30%] h-full inline-block flex roadmap-card rounded-[1vw] text-in-roadmap-card p-[3%]'}>
                      <div className={'w-[13vw] h-[4.4vw] top-[-2.5vw] rounded-[1vw] flex text-in-shape bg-purple absolute'}>
                          <p className={'leading-[89%]  text-[2vw] text-white font-gilroy font-bold'}>1H’2022</p>
                      </div>
                      <p className={'leading-[89%] mt-[1.5vw] text-[1.545vw] text-white font-gilroy font-normal'}>Website development
                          contract deploy<br/><br/>
                          Seed round<br/><br/>
                          KOL management<br/><br/>
                          Coinscope audit<br/><br/>
                          KYC by Pinksale<br/><br/>
                          Presale on Pinksale<br/><br/>
                          10 Voice AMA<br/><br/>
                          DEX marketing activities<br/><br/>
                          Launching the protocol<br/><br/>
                          Dex Launch<br/><br/>
                          Articles in cryptomagazines<br/><br/>
                          Results of autostaking APY rates<br/><br/>
                          Boost APR NFTs sale<br/><br/>
                          P2E game beta launch<br/><br/>
                          Dextools marketing ads<br/><br/>
                          Coinsniper rating top 5<br/><br/>
                          Coinmarketcap list and rate<br/><br/>
                          CoinGecko list and rate<br/><br/>
                          ASP app<br/><br/>
                          DAO pool opening<br/><br/>
                          DAO voting system<br/><br/>
                          Collaboration laboratory

                      </p>
                  </div>
                  <div className={'w-[30%] h-[90%] inline-block flex roadmap-card rounded-[1vw] text-in-roadmap-card p-[3%]'}>
                      <div className={'w-[13vw] h-[4.4vw] top-[-2.5vw] rounded-[1vw] flex text-in-shape bg-semiblue absolute'}>
                          <p className={'leading-[89%]  text-[2vw] text-white font-gilroy font-bold'}>2H’2022</p>
                      </div>
                      <p className={'leading-[89%] mt-[1.5vw] text-[1.545vw] text-white font-gilroy font-normal'}>ASP app in appStore<br/><br/>
                          first wave of DAO rewards<br/><br/>
                          NFT marketplace<br/><br/>
                          official P2E game opening<br/><br/>
                          Collaboration with guilds<br/><br/>
                          NFT artists contest<br/><br/>
                          Certik Audit<br/><br/>
                          ASP app modification. Chat<br/><br/>
                          ASP app modification. News<br/><br/>
                          Collaboration with space-gaming projects<br/><br/>
                          IDO governance token sale<br/><br/>
                          Collected 10 mln foundraise form Tier1-Tier2 partners<br/><br/>
                          NFT Avatar sale<br/><br/>
                          Social network opening<br/><br/>
                          Networking online contest<br/><br/>
                          Grant unicorn program<br/><br/>
                          80 mln Market Cap<br/><br/>
                      </p>
                  </div>
                  <div className={'w-[30%] h-[85%] inline-block flex roadmap-card rounded-[1vw] text-in-roadmap-card p-[3%]'}>
                      <div className={'w-[17vw] h-[4.4vw] top-[-2.5vw] rounded-[1vw] flex text-in-shape bg-blue absolute'}>
                          <p className={'leading-[89%]  text-[2vw] text-white font-gilroy uppercase font-bold'}>2023 pipeline</p>
                      </div>
                      <p className={'leading-[89%] mt-[1.5vw] text-[1.545vw] text-white font-gilroy font-normal'}>DEX optimisation protocol<br/><br/>
                          ASP desktop crypted version<br/><br/>
                          ASP wallet<br/><br/>
                          Holland auction mechanics for NFT sale of the projects<br/><br/>
                          Multichain launch<br/><br/>
                          NFT mechanics for social network ASP<br/><br/>
                          Multichain NFT marketplace<br/><br/>
                          Bloomberg article<br/><br/>
                          Charity program for African education<br/><br/>
                          GameFi liquidity pools<br/><br/>
                          Network safety crypto protocol<br/><br/>
                          OpenSea collaboration<br/><br/>
                          Layer2 eth upgrade<br/><br/>
                          Offline ASP conference<br/><br/>
                          Offline grants program and competition<br/><br/>
                          800 mln Market Cap<br/><br/>
                      </p>
                  </div>
              </div>

          </div>

      </main>

      <footer className={styles.footer}>
          <div className={'w-[98vw] h-[21.25vw] relative block'}>
              {/*<p className={'absolute inline-block top-[4.2vw] left-[12.6vw] text-[1.46vw] text-white font-gilroy font-semibold'}>THE WEB 3 PROJECT</p>*/}
              {/*<p className={'absolute inline-block top-[7.5vw] left-[12.6vw] w-[22vw] text-[1.07vw] text-white font-gilroy font-light'}>Accelerating the transition to a WEB3 world.*/}
              {/*    It is your data, and only yours.</p>*/}

              <p className={'absolute inline-block top-[4.2vw] left-[39vw] text-[1.2vw] text-white font-gilroy font-[400]'}>MENU</p>

              <a className={'absolute inline-block top-[7.7vw] left-[39vw] text-[1.1vw] text-white font-gilroy font-[400]'}>Home</a>
              <a className={'absolute inline-block top-[9.9vw] left-[39vw] text-[1.1vw] text-white font-gilroy font-[400]'}>Our Ecosystem</a>
              <a className={'absolute inline-block top-[12.1vw] left-[39vw] text-[1.1vw] text-white font-gilroy font-[400]'}>Roadmap</a>
              <a className={'absolute inline-block top-[14.3vw] left-[39vw] text-[1.1vw] text-white font-gilroy font-[400]'}>Contact</a>
              <a className={'absolute inline-block top-[16.5vw] left-[39vw] text-[1.1vw] text-white font-gilroy font-[400]'}>Whitepaper</a>


              <p className={'absolute inline-block top-[4.2vw] left-[54vw] text-[1.2vw] text-white font-gilroy font-[400]'}>FOLLOW US</p>

              <a className={'absolute inline-block top-[7.7vw] left-[54vw] text-[1.1vw] text-white font-gilroy font-[400]'}>Telegram</a>
              <a className={'absolute inline-block top-[9.9vw] left-[54vw] text-[1.1vw] text-white font-gilroy font-[400]'}>Discord</a>
              <a className={'absolute inline-block top-[12.1vw] left-[54vw] text-[1.1vw] text-white font-gilroy font-[400]'}>Twitter</a>



              <p className={'absolute inline-block top-[4.2vw] left-[69vw] text-[1.2vw] text-white font-gilroy font-[400]'}>CONTACT US</p>

              <a className={'absolute inline-block top-[7.7vw] left-[69vw] text-[1.1vw] text-white font-gilroy font-[400]'}>social@1milliondao.com</a>


              <p className={'absolute inline-block top-[18vw] left-[12.6vw] text-[1vw] text-[#464199] font-gilroy font-[400]'}>1 Million Dao © 2022 </p>
              <p className={'absolute inline-block top-[18vw] left-[69vw] text-[1vw] text-[#464199] font-gilroy font-[400]'}>Powered by Binance Smart Chain</p>



          </div>
      </footer>
    </div>
  )
};

export default Home
