import '#style.css'
import { sign_viem, sign_wasm } from '#utils'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>rust v typescript</h1>
    <div>
      <button id="sign_wasm" type="button">sign wasm</button>
      <button id="sign_viem" type="button">sign viem</button>
    </div>
  </div>
`

document
  .querySelector<HTMLButtonElement>('#sign_wasm')!
  .addEventListener('click', () => sign_wasm())

document
  .querySelector<HTMLButtonElement>('#sign_viem')!
  .addEventListener('click', () => sign_viem())
