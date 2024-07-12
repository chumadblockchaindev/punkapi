"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const abi_1 = require("./abi");
const client_1 = require("./client");
const app = express();
// https://<api.punkshield.xyz>/<walletcreated>?address=<userAddress>
// get address from the api url anb  
// check if user has created wallet
// if address has created wallet return response
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const address = req.query.address;
        const result = yield checkWallet(address);
        if (result != 0x0000000000000000000000000000000000000000) {
            res.status(200).send({ "data": { "result": true } });
        }
        else {
            res.status(404).send({
                "error": {
                    "code": 0,
                    "message": `error message: User not found`
                },
                "data": {
                    "result": false
                }
            });
        }
    }
    catch (error) {
        res.send({ "error": error });
    }
}));
const checkWallet = (address) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield client_1.publicClient.readContract({
        address: '0x98261183021488952b49D58A89898903d93D17c4',
        abi: abi_1.abi,
        functionName: 'addressToContract',
        args: [`${address}`]
    });
    return result;
});
app.listen(8080);
