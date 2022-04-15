import React, {useEffect, useState} from "react";
// @ts-ignore
import {enableMM,isConnected} from '/components/mm.js'

export const ConnectMM = ()=>{
    const [connected,setConnected]=useState(false)
    const [loading,setLoading]=useState(false);
    const [mmAddr,setMMAddr]=useState("")
    const [error,setError]=useState(false)
    const mmAddrFormatted = mmAddr?`WALLET 0x...${mmAddr.slice(-5)}`:""
    const connectMM = ()=>{
        console.log('connect mm');
        setLoading(true)
        enableMM(-1244812374,
            (addr:string)=>{
                setLoading(false);
                setConnected(true);
                setMMAddr(addr);
            },
            ()=>{
                setLoading(false);
                setError(true);
            })}
    useEffect(()=>{
        if (isConnected()){
            console.log('isConnected()',isConnected())
            connectMM();
        }

    },[])
    const buttonText = connected?mmAddrFormatted:loading?"Loading...":(!error?"Connect wallet":"Error");
    return <h2 className={'text-white text-center uppercase text-[inherit] font-gilroy font-bold cursor-pointer hover:opacity-70'} onClick={()=>{!mmAddr&&connectMM()}}>{buttonText}</h2>
}