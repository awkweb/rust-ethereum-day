import { generatePrivateKey, privateKeyToAccount } from 'viem/accounts'
import { Account } from 'wasm-wallet'

export async function sign_wasm(element: HTMLElement) {
  element.innerHTML = ''
  console.time('wasm')
  const start = window.performance.now()

  const account = Account.generateRandom()
  const address = account.getAddress()
  console.log({ address })

  await account.signTypedData({
    domain: {
      name: 'Ether Mail',
      version: '0x1',
      chainId: 1,
      verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
    },
    types: {
      Person: [
        { name: 'name', type: 'string' },
        { name: 'wallet', type: 'address' },
      ],
      Mail: [
        { name: 'from', type: 'Person' },
        { name: 'to', type: 'Person' },
        { name: 'contents', type: 'string' },
      ],
    },
    primaryType: 'Mail',
    message: {
      from: {
        name: 'Cow',
        wallet: '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826',
      },
      to: {
        name: 'Bob',
        wallet: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
      },
      contents: 'Hello, Bob!',
    },
  })

  console.timeEnd('wasm')

  const end = window.performance.now()
  const time = end - start
  element.innerHTML = `${time}ms`
}

export async function sign_viem(element: HTMLElement) {
  element.innerHTML = ''
  console.time('viem')
  const start = window.performance.now()

  const privateKey = generatePrivateKey()
  const account = privateKeyToAccount(privateKey)

  const address = account.address
  console.log({ address })

  await account.signTypedData({
    domain: {
      name: 'Ether Mail',
      version: '0x1',
      chainId: 1,
      verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
    },
    types: {
      Person: [
        { name: 'name', type: 'string' },
        { name: 'wallet', type: 'address' },
      ],
      Mail: [
        { name: 'from', type: 'Person' },
        { name: 'to', type: 'Person' },
        { name: 'contents', type: 'string' },
      ],
    },
    primaryType: 'Mail',
    message: {
      from: {
        name: 'Cow',
        wallet: '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826',
      },
      to: {
        name: 'Bob',
        wallet: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
      },
      contents: 'Hello, Bob!',
    },
  })

  console.timeEnd('viem')

  const end = window.performance.now()
  const time = end - start
  element.innerHTML = `${time}ms`
}
