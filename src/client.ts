import { http, createPublicClient } from 'viem'
import { mintMainnet } from './chains'

export const publicClient = createPublicClient({ 
  chain: mintMainnet,
  transport: http()
})