const express = require('express');
import { Request, Response } from "express";
import { abi } from "./abi"
import { publicClient } from "./client";

const app = express();

// https://<api.punkshield.xyz>/<walletcreated>?address=<userAddress>
// get address from the api url anb  
// check if user has created wallet
// if address has created wallet return response
app.get('/', async (req:Request, res: Response) => {
    try {
        const address = req.query.address

        const result = await checkWallet(address as string)
        if(result != 0x0000000000000000000000000000000000000000){
            res.status(200).send({ "data": { "result": true } })
        }
    } catch (error) {
        // res.send({ "error": error})
        res.status(404).send({
            "error": {
                "code": 0,
                "message": `error message: ${error}`
             },
             "data": {
                 "result": false
             }
        })
    }
});

const checkWallet = async (address: string) => {
    const result = await publicClient.readContract({
        address: '0x98261183021488952b49D58A89898903d93D17c4',
        abi,
        functionName: 'addressToContract',
        args: [`${address}`]
      });
      return result;
    }

app.listen(3000)