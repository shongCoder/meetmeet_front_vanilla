import{o as h}from"./style-GL8eZkAd.js";function f(){let i=localStorage.getItem("isLogin")==="true",t=!1;const n="/meetmeet_front_vanilla/",e=document.createElement("div");return e.id="header-white",e.className="lg:h-20 fixed top-0 left-0 w-full z-50 h-[3.5rem] bg-text-meet_white transition-all duration-500 ease-in-out",e.innerHTML=`
    <div class="lg:px-[6.25rem] md:px-8 px-5 text-meet_white flex h-full items-center">
      <div class="lg:w-52 md:w-[9.125rem] w-28 m-0">
        <a href="/" id="logo-link">
          <img id="logo-img" src="./meetmeet_logo.png" alt="MeetMeet Logo" />
        </a>
      </div>

      <div id="menu-icon" class="lg:hidden md:hidden ml-auto w-5 m-0 cursor-pointer">
        <img src="./img/menu_ico.png" alt="Menu Icon" />
      </div>

      <div id="nav-menu" class="absolute md:static lg:static top-[3.5rem] left-0 w-full bg-meet_light_gray lg:bg-transparent md:bg-transparent transition-all duration-500 ease-in-out overflow-hidden max-h-0 pb-0 opacity-0 lg:flex md:flex lg:justify-center md:justify-center lg:max-h-none md:max-h-none lg:opacity-100 md:opacity-100 lg:pb-0 md:pb-0">
        <ul class="lg:flex md:flex lg:space-x-6 md:space-x-6 py-6 lg:text-meet_white md:text-meet_white flex flex-col lg:flex-row md:flex-row items-center space-y-4 lg:space-y-0 md:space-y-0 p-0 m-0 text-meet_menu">
          <li><a href="${n}support" class="nav-link">고객지원</a></li>
          <li><a href="${n}influencer" class="nav-link">밋밋셀럽</a></li>
          <li><a href="${n}exchange" class="nav-link" id="exchange-link">포인트 환전</a></li>
          <li><a href="${n}download" class="nav-link">앱 다운로드</a></li>
        </ul>
      </div>

      <div id="login-container" class="absolute top-[calc(12rem)] left-0 w-full lg:w-auto md:w-auto flex justify-center md:justify-end lg:justify-end transition-all duration-500 ease-in-out overflow-hidden max-h-0 opacity-0 mt-0 lg:static md:static lg:max-h-none lg:opacity-100 lg:mt-0 md:max-h-none md:opacity-100 md:mt-0">
        <button id="login-button" class="lg:w-32 md:w-32 px-5 py-[0.375rem] bg-meet_pink hover:bg-meet_pink_hover rounded-3xl font-bold flex items-center justify-center whitespace-nowrap">
          <span id="login-link">${i?"로그아웃":"로그인"}</span>
        </button>
      </div>
    </div>
  `,setTimeout(()=>{const a=e.querySelector("#menu-icon"),s=e.querySelector("#nav-menu"),o=e.querySelector("#login-container"),c=e.querySelector("#login-link"),d=e.querySelector("#logo-img"),g=e.querySelectorAll(".nav-link"),p=e.querySelector("#exchange-link");function r(){t?(s.classList.add("max-h-[300px]","pb-16","opacity-100"),s.classList.remove("max-h-0","pb-0","opacity-0"),o.classList.add("max-h-[100px]","opacity-100","mt-14"),o.classList.remove("max-h-0","opacity-0","mt-0"),e.classList.add("bg-meet_light_gray","opacity-95"),e.classList.remove("bg-text-meet_white"),d.src="./meetmeet_logo_b.png"):(s.classList.remove("max-h-[300px]","pb-16","opacity-100"),s.classList.add("max-h-0","pb-0","opacity-0"),o.classList.remove("max-h-[100px]","opacity-100","mt-14"),o.classList.add("max-h-0","opacity-0","mt-0"),e.classList.remove("bg-meet_light_gray","opacity-95"),e.classList.add("bg-text-meet_white"),d.src="./meetmeet_logo.png")}a.addEventListener("click",()=>{t=!t,r()}),g.forEach(l=>l.addEventListener("click",()=>{t=!1,r()})),c.addEventListener("click",l=>{l.preventDefault(),i?(localStorage.removeItem("isLogin"),window.location.href="/"):window.location.href=`${n}login`}),p.addEventListener("click",l=>{i||(l.preventDefault(),h("로그인",`접근이 불가능 합니다.
로그인 후 이용해 주세요`,`${n}login`))})},0),e}function x(){let i=!1,t=localStorage.getItem("isLogin")==="true";const n="/meetmeet_front_vanilla/",e=document.createElement("div");e.id="header-black",e.className="lg:h-20 fixed top-0 left-0 w-full z-50 h-[3.5rem] bg-meet_white opacity-95 transition-all duration-500 ease-in-out",e.innerHTML=`
    <div class="lg:px-[6.25rem] md:px-8 px-5 text-meet_menu flex h-full items-center">
      <div class="lg:w-52 md:w-[9.125rem] w-28 m-0">
        <a href="/" id="logo-link">
          <img id="logo-img" src="./meetmeet_logo_b.png" alt="MeetMeet Logo" />
        </a>
      </div>

      <div id="menu-icon" class="lg:hidden md:hidden ml-auto w-5 m-0 cursor-pointer">
        <img src="./img/menu_ico.png" alt="Menu Icon" />
      </div>

      <div id="nav-menu" class="absolute md:static lg:static top-[3.5rem] left-0 w-full bg-meet_white lg:bg-transparent md:bg-transparent transition-all duration-500 ease-in-out overflow-hidden max-h-0 pb-0 opacity-0 lg:flex md:flex lg:justify-center md:justify-center lg:max-h-none md:max-h-none lg:opacity-100 md:opacity-100 lg:pb-0 md:pb-0">
        <ul class="lg:flex md:flex lg:space-x-6 md:space-x-6 py-6 flex flex-col lg:flex-row md:flex-row items-center space-y-4 lg:space-y-0 md:space-y-0 p-0 m-0 text-meet_menu">
          <li><a href="${n}support" class="nav-link">고객지원</a></li>
          <li><a href="${n}influencer" class="nav-link">밋밋셀럽</a></li>
          <li><a href="${n}exchange" class="nav-link" id="exchange-link">포인트 환전</a></li>
          <li><a href="${n}download" class="nav-link">앱 다운로드</a></li>
        </ul>
      </div>

      <div id="login-container" class="absolute top-[calc(12rem)] left-0 w-full lg:w-auto md:w-auto flex justify-center md:justify-end lg:justify-end transition-all duration-500 ease-in-out overflow-hidden max-h-0 opacity-0 mt-0 lg:static md:static lg:max-h-none lg:opacity-100 lg:mt-0 md:max-h-none md:opacity-100 md:mt-0">
        <button id="login-button" class="lg:w-32 md:w-32 px-5 py-[0.375rem] text-meet_white bg-meet_pink hover:bg-meet_pink_hover rounded-3xl font-bold flex items-center justify-center whitespace-nowrap">
          <span id="login-link">${t?"로그아웃":"로그인"}</span>
        </button>
      </div>
    </div>
  `;const a=document.createElement("button");return a.id="topButton",a.className="fixed bottom-6 right-6 z-[100] w-12 h-12 bg-meet_black rounded-full shadow-[0px_0px_100px_#3631BD] transition-all duration-300 transform opacity-100 translate-y-0 hidden",a.innerHTML='<img src="./img/arrow-top.png" class="w-[1.25rem]">',a.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),document.body.appendChild(a),window.addEventListener("scroll",()=>{a.classList.toggle("hidden",window.scrollY<=200)}),setTimeout(()=>{const s=e.querySelector("#menu-icon"),o=e.querySelector("#nav-menu"),c=e.querySelector("#login-container"),d=e.querySelector("#login-link"),g=e.querySelectorAll(".nav-link"),p=e.querySelector("#exchange-link");function r(){i?(o.classList.add("max-h-[300px]","pb-16","opacity-100"),o.classList.remove("max-h-0","pb-0","opacity-0"),c.classList.add("max-h-[100px]","opacity-100","mt-14"),c.classList.remove("max-h-0","opacity-0","mt-0")):(o.classList.remove("max-h-[300px]","pb-16","opacity-100"),o.classList.add("max-h-0","pb-0","opacity-0"),c.classList.remove("max-h-[100px]","opacity-100","mt-14"),c.classList.add("max-h-0","opacity-0","mt-0"))}s.addEventListener("click",()=>{i=!i,r()}),g.forEach(l=>l.addEventListener("click",()=>{i=!1,r()})),d.addEventListener("click",l=>{l.preventDefault(),t=localStorage.getItem("isLogin")==="true",t?(localStorage.removeItem("isLogin"),window.location.href="/"):window.location.href=`${n}login`}),p.addEventListener("click",l=>{t=localStorage.getItem("isLogin")==="true",t||(l.preventDefault(),h("로그인",`접근이 불가능 합니다.
로그인 후 이용해 주세요`,`${n}login`))})},0),e}let m=!0;function w(){window.scrollToTop=()=>{window.scrollTo({top:0,behavior:"smooth"})},u(),y(),window.addEventListener("scroll",()=>{const i=window.scrollY,t=i<=50;t!==m&&(m=t,u());const n=document.getElementById("topButton");n&&n.classList.toggle("hidden",i<=200)})}function u(i){const t=m?f():x();t.id=m?"header-white":"header-black",t.style.opacity="0",t.style.transform="translateY(-10px)",t.style.transition="all 0.3s ease";const n=document.getElementById("header-white"),e=document.getElementById("header-black");n&&n.remove(),e&&e.remove(),document.body.prepend(t),setTimeout(()=>{t.style.opacity="1",t.style.transform="translateY(0)"},10)}function y(){if(document.getElementById("topButton"))return;const i=document.createElement("button");i.id="topButton",i.className="fixed bottom-6 right-6 z-[100] w-12 h-12 bg-meet_black rounded-full shadow-[0px_0px_100px_#3631BD] transition-all duration-300 transform opacity-100 translate-y-0 hidden",i.innerHTML='<img src="./img/arrow-top.png" class="w-[1.25rem]">',i.addEventListener("click",window.scrollToTop),document.body.appendChild(i)}export{f as H,w as L};
