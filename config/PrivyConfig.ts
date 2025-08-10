import type { PrivyClientConfig } from '@privy-io/react-auth'
// Use environment variables for Privy credentials
import { baseSepolia } from 'viem/chains'

export const privyConfig: PrivyClientConfig = {
  // ...existing code...
  defaultChain: baseSepolia,
  supportedChains: [baseSepolia],
  loginMethods: ['wallet'],
  appearance: {
    theme: 'light',
  },
}
