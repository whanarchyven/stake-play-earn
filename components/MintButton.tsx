import React, {useEffect, useState} from "react";
//@ts-ignore
import {enableMM,mintNFT} from "./contract-controller";

export const MintButton = ({category}:{category:string}) => {

    const [mintState,setMintState]=useState<"loading"|"error"|"success"|"none">("none")
    const [supply,setSupply]=useState();
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

    return <button
        onClick={onClick}
        className={'cursor-pointer w-[75%] mx-[12.5%] mt-[4vw] h-[3.5vw] text-[1.8vw] bg-[#C4C4C4] text-white rounded-full font-gilroy font-bold'}>

        {mintState==="none"?`MINT`:""}
        {mintState==="loading"?"Minting...":""}
        {mintState==="success"?"MINTED!":""}
        {mintState==="error"?"error":""}
    </button>
}