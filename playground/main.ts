import '#style.css'
import { sign_viem, sign_wasm } from '#utils'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>rust v typescript 🦀</h1>
    <div style="display:flex;gap:0.5rem;">
      <div>
        <button id="sign_wasm" type="button">sign wasm</button>
        <div id="res_wasm"></div>
      </div>
      <div>
        <button id="sign_viem" type="button">sign viem</button>
        <div id="res_viem"></div>
      </div>
    </div>
    <div style="position:absolute;left:1.25rem;bottom:1rem;">
      <a style="color:gray;font-size:0.8rem;text-decoration:none;" href="https://github.com/tmm/rust-ethereum-day" target="_blank">View Source</a>
    </div>
  </div>
`

document
  .querySelector<HTMLButtonElement>('#sign_wasm')!
  .addEventListener('click', () =>
    sign_wasm(document.querySelector<HTMLButtonElement>('#res_wasm')!),
  )

document
  .querySelector<HTMLButtonElement>('#sign_viem')!
  .addEventListener('click', () =>
    sign_viem(document.querySelector<HTMLButtonElement>('#res_viem')!),
  )
