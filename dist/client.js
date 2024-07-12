"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicClient = void 0;
const viem_1 = require("viem");
const chains_1 = require("./chains");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const privateKey = process.env.WALLET_PRIVATE_KEY;
// export const account = privateKeyToAccount(privateKey as Hex);
// export const client = createWalletClient({
//     account: account,
//     chain: mintMainnet,
//     transport: http(process.env.API_URL)
// }).extend(publicActions);
exports.publicClient = (0, viem_1.createPublicClient)({
    chain: chains_1.mintMainnet,
    transport: (0, viem_1.http)()
});
