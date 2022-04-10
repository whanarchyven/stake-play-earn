import React from 'react';
import Image from "next/image";
const LoadingScreen = () => {
    return (
        <div className={'w-full h-[100vh] bg-[#000]'}>
            <div className={'w-[70vw] h-[70vw] absolute inline-block top-[-10vw] left-[15vw]'}>
                <Image src={'/images/loading.png'} layout={'fill'}></Image>
            </div>
            <div className={'w-[40vw] animate-ping h-[40vw] absolute inline-block top-[5vw] left-[30vw]'}>
                <Image src={'/images/logodao.svg'} layout={'fill'}></Image>
            </div>
            <div className={'w-[40vw] animate-pulse h-[40vw] absolute inline-block top-[5vw] left-[30vw]'}>
                <Image src={'/images/logodao.svg'} layout={'fill'}></Image>
            </div>
        </div>
    );
};

export default LoadingScreen;