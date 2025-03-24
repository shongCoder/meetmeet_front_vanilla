import { setupCounter } from './counter.js';
import './input.css';
import './style.css';

document.querySelector('#app').innerHTML = `
  <div class="bg-meet_pink text-meet_white font-bold p-4 rounded-3xl text-center">
    🎉 Tailwind 적용 완료!
  </div>
`

setupCounter(document.querySelector('#counter'))
