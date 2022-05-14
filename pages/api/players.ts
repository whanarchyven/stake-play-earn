import {NextApiRequest, NextApiResponse} from "next";
import sqlite from 'sqlite';
import sqlite3 from "sqlite3";
import {open} from "sqlite";
import {MongoClient} from "mongodb";
import * as mongoose from "mongoose";
import NextCors from "nextjs-cors";
import Cors from 'cors'
import {mongo} from "mongoose";
// async function openDb() {
//     return open({
//         filename: './database.sqlite',
//         driver: sqlite3.Database,
//     });
// }


export default async function getAllPlayer(req:NextApiRequest,res:NextApiResponse){

    await Cors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });

    const MongoClient = require('mongodb').MongoClient;
// Connect to the db

    const client= new MongoClient('mongodb://1mdao:420z)mj46zz6VM5i@185.86.145.142/1mdao');

    const getTop= async ()=>{
        try{
            await client.connect();
            console.log('Connected succesfull');
            // await client.db().createCollection('dao');
            const users=client.db().collection('dao');
            // await users.insertOne({name:'vova',score:231});

            // for(let i=0;i<10;i++){
            //     const user= await users.findOne(function() { if(this.score>=max){max=this.score;return this.score} });
            // }

            const user= await users.find().sort({score:-1}).limit(10).toArray();
            // console.log(user);
            res.json(user);
        } catch (e){
            console.log(e)
        }
    }

    const writeNew=async ()=>{
        try{
            await client.connect();
            console.log('Connected succesfull');
            // await client.db().createCollection('dao');
            const users=client.db().collection('dao');
            // console.log('AUESALUT '+req.body.name+req.body.score)
            await users.insertOne({name:req.body.name,score:req.body.score});
            res.status(200).send('ok');

        } catch (e){
            console.log(e)
        }
    }

    // const db = await openDb();
    if (req.method=='POST'){
        writeNew();
    }

    if(req.method=='GET'){
        getTop();
    }
    // const players=await db.all('select * from player')
    // console.log(players);
    // res.json(players)








}