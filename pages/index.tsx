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
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

          {/*INTRO*/}

          <div className={'w-[100vw] relative block h-[61vw] bg-cover bg-[url("../public/images/main.png")]'}>

              <div className={'z-50 justify-between justify-items-center items-center w-[38.4vw] h-[2vw] absolute inline-flex left-[29.7vw] top-[11.1vw]'}>
                  <a className={'cursor-pointer text-white text-center uppercase text-[1.2vw] font-gilroy font-regular'}>nft marketplace</a>
                  <a className={'cursor-pointer text-white text-center uppercase text-[1.2vw] font-gilroy font-regular'}>metaverse</a>
                  <a className={'cursor-pointer text-white text-center uppercase text-[1.2vw] font-gilroy font-regular'}>swap</a>
                  <a className={'cursor-pointer text-white text-center uppercase text-[1.2vw] font-gilroy font-regular'}>TEASER</a>
                  <a className={'cursor-pointer text-white text-center uppercase text-[1.2vw] font-gilroy font-regular'}>DAO</a>
              </div>
              <div className={'z-50 justify-between justify-items-center items-center w-[28vw] h-[2vw] absolute inline-flex left-[33.6vw] top-[13.1vw]'}>
                  <a className={'cursor-pointer text-white text-center uppercase text-[1.2vw] font-gilroy font-regular'}>Stake</a>
                  <a className={'cursor-pointer text-white text-center uppercase text-[1.2vw] font-gilroy font-regular'}>TEAM</a>
                  <a className={'cursor-pointer text-white text-center uppercase text-[1.2vw] font-gilroy font-regular'}>ROADMAP</a>
                  <a className={'cursor-pointer text-white text-center uppercase text-[1.2vw] font-gilroy font-regular'}>PARTNERS</a>
              </div>
              <div className={'justify-items-center justify-center items-center absolute inline-flex left-[71.2vw] top-[11.2vw] w-[12.5vw] h-[3.4vw] rounded-full bg-purple'}>
                  <h2 className={'text-white text-center uppercase text-[1.1vw] font-gilroy font-bold'}>Connect wallet</h2>
              </div>


              <div className={'justify-items-center items-center justify-align-center w-[22vw] h-[5.5vw] left-[28.3vw] top-[21.3vw] rounded-full absolute inline-flex offer-gradient'}>
                  <h2 className={'w-full text-center text-white font-gilroy font-extrabold text-[2.2vw]'}>122 450% APY</h2>
              </div>
              <div className={'w-[57vw] h-[53vw] absolute inline-block bottom-0 left-0'}>
                  <Image src={'/images/phone.png'} layout={'fill'}></Image>
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
              <h1 className={'tracking-[0.015em] absolute left-[21.6vw] text-[4.5vw] top-[14vw] text-right text-white font-gilroy font-bold'}>383,025.80%</h1>
              <h2 className={'absolute left-[25vw] text-[2.2vw] top-[20.5vw] text-right text-white font-gilroy font-regular'}>Fixed Staking APY</h2>



              <div className={'cursor-pointer w-[9.1vw] h-[3.7vw] left-[21.7vw] top-[25.6vw] rounded-full text-in-shape absolute inline-flex offer-purple'}>
                  <p className={'text-white font-gilroy font-semibold text-[1.7vw]'}>AUDIT</p>
              </div>


              <div className={'cursor-pointer offer-gradient w-[15.5vw] h-[3.7vw] left-[31.5vw] top-[25.6vw] rounded-full text-in-shape absolute inline-flex'}>
                  <p className={'text-white font-gilroy font-semibold text-[1.7vw]'}>WHITEPAPER</p>
              </div>

              <div className={'cursor-pointer bg-purple w-[16.7vw] h-[4.5vw] left-[32vw] top-[40.9vw] rounded-full text-in-shape absolute inline-flex'}>
                  <p className={'text-white font-gilroy font-semibold text-[1.7vw]'}>BUY $TOKEN</p>
              </div>

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



      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
