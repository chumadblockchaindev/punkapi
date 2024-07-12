"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mintSepolia = exports.mintMainnet = void 0;
const viem_1 = require("viem");
exports.mintMainnet = (0, viem_1.defineChain)({
    id: 185,
    name: 'Mint',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH',
    },
    rpcUrls: {
        default: {
            http: ['https://rpc.mintchain.io'],
            webSocket: ['wss://rpc.mintchain.io'],
        },
    },
    blockExplorers: {
        default: { name: 'Explorer', url: 'https://explorer.mintchain.io' },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 5022,
        },
    },
});
exports.mintSepolia = (0, viem_1.defineChain)({
    id: 1687,
    name: 'Mint Sepolia Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH',
    },
    rpcUrls: {
        default: {
            http: ['https://sepolia-testnet-rpc.mintchain.io/'],
            webSocket: ['wss://sepolia-testnet-rpc.mintchain.io'],
        },
    },
    blockExplorers: {
        default: { name: 'Explorer', url: 'https://sepolia-testnet-explorer.mintchain.io/' },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 5022,
        },
    },
});
