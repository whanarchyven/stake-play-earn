import {NextApiRequest, NextApiResponse} from "next";
import sqlite from 'sqlite';
import sqlite3 from "sqlite3";
import {open} from "sqlite";
import {MongoClient} from "mongodb";
import * as mongoose from "mongoose";
import {mongo} from "mongoose";
// async function openDb() {
//     return open({
//         filename: './database.sqlite',
//         driver: sqlite3.Database,
//     });
// }


export default async function getAllPlayer(req:NextApiRequest,res:NextApiResponse){

    // const db = await openDb();
    // if (req.method=='POST'){
    //     db.run('INSERT INTO Player (name,score) VALUES (?,?,?)', [req.body.name,req.body.score])
    // }
    // const players=await db.all('select * from player')
    // console.log(players);
    // res.json(players)

    var MongoClient = require('mongodb').MongoClient;
// Connect to the db
    MongoClient.connect("mongodb://1mdao:420z)mj46zz6VM5i@185.86.145.142/1mdao", function(err, db) {
        if(!err) {
            console.log("You are connected!");
        };

        db.on()

        db.close();
    });







}