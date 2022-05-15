import React, {useEffect, useState} from "react";
//@ts-ignore
import {enableMM,mintNFT,totalSupplyOfCategory,balanceOfAddress,totalSupply} from "./contract-controller";

export const MintButton = ({category}:{category:string}) => {

    const [mintState,setMintState]=useState<"loading"|"error"|"success"|"none">("none")
    // const [supply,setSupply]=useState(-1);
    const onClick = ()=>{
        if (mintState==="none"){
           enableMM((state)=>{
                if (state==="success"){
                    return mintNFT(category,setMintState)
                }
                //setMintState(state)
            })
        }
    }


    // <button
    //     onClick={onClick}
    //     className={'cursor-pointer w-[75%] mx-[12.5%] mt-[4vw] h-[3.5vw] text-[1.8vw] bg-[#C4C4C4] text-white rounded-full font-gilroy font-bold'}>
    //
    //     {mintState==="none"?`MINT`:""}
    //     {mintState==="loading"?"Minting...":""}
    //     {mintState==="success"?"MINTED!":""}
    //     {mintState==="error"?"error":""}
    // </button>

    return <button
        className={'cursor-pointer w-[100%] mt-[1vh] sm:w-[75%] text-[2vh] sm:mx-[12.5%] h-[2.5vh] sm:mt-[4vw] sm:h-[3.5vw] sm:text-[1.8vw] bg-[#C4C4C4] text-white rounded-full font-gilroy font-bold'}>
        SOON
    </button>
}