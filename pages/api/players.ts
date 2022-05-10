import {NextApiRequest, NextApiResponse} from "next";
import sqlite from 'sqlite';
import sqlite3 from "sqlite3";
import {open} from "sqlite";

async function openDb() {
    return open({
        filename: './database.sqlite',
        driver: sqlite3.Database,
    });
}


export default async function getAllPlayer(req:NextApiRequest,res:NextApiResponse){

    const db = await openDb();
    if (req.method=='POST'){
        db.run('INSERT INTO Player (name,score) VALUES (?,?,?)', [req.body.name,req.body.score])
    }
    const players=await db.all('select * from player')
    console.log(players);
    res.json(players)

}