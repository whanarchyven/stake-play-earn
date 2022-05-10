import {NextApiRequest, NextApiResponse} from "next";

export default function getPlayerById(req:NextApiRequest,res:NextApiResponse){
    res.json({bodyId:req.query.id,message:'getPlayerById'})
}