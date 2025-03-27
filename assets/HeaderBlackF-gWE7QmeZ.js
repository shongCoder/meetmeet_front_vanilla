import{o as h}from"./style-GL8eZkAd.js";function v(){let n=!1,c=localStorage.getItem("isLogin")==="true";const t="/meetmeet_front_vanilla/",d=`
    <div id="header-black" class="lg:h-20 fixed top-0 left-0 w-full z-50 h-[3.5rem] bg-white opacity-95 fade-in show">
      <div class="lg:px-[6.25rem] md:px-8 px-5 text-gray-700 flex h-full items-center">
        <div class="lg:w-52 md:w-[9.125rem] w-28 m-0">
          <a href="/" id="logo-link">
            <img id="logo-img" src="./meetmeet_logo_b.png" alt="MeetMeet Logo" />
          </a>
        </div>

        <div id="menu-icon" class="lg:hidden md:hidden ml-auto w-5 m-0 cursor-pointer">
          <img src="./img/menu_ico.png" alt="Menu Icon" />
        </div>

        <div id="nav-menu" class="lg:flex md:flex lg:justify-center md:justify-center absolute md:static lg:static top-[3.5rem] left-0 w-full bg-white lg:bg-transparent md:bg-transparent transition-all duration-500 ease-in-out overflow-hidden max-h-0 pb-0 opacity-0 lg:max-h-none md:max-h-none lg:opacity-100 md:opacity-100 lg:pb-0 md:pb-0">
          <ul class="lg:flex md:flex lg:space-x-6 md:space-x-6 py-6 flex flex-col lg:flex-row md:flex-row items-center space-y-4 lg:space-y-0 md:space-y-0 p-0 m-0 text-gray-700">
            <li><a href="${t}support" class="nav-link">고객지원</a></li>
            <li><a href="${t}influencer" class="nav-link">밋밋셀럽</a></li>
            <li><a href="${t}exchange" class="nav-link" id="exchange-link">포인트 환전</a></li>
            <li><a href="${t}download" class="nav-link">앱 다운로드</a></li>
          </ul>
        </div>

        <div id="login-container" class="absolute top-[calc(12rem)] left-0 w-full lg:w-auto md:w-auto flex justify-center md:justify-end lg:justify-end transition-all duration-500 ease-in-out overflow-hidden max-h-0 opacity-0 mt-0 lg:static md:static lg:max-h-none lg:opacity-100 lg:mt-0 md:max-h-none md:opacity-100 md:mt-0">
          <button id="login-button" class="lg:w-32 md:w-32 px-5 py-[0.375rem] text-white bg-pink-500 hover:bg-pink-600 rounded-3xl font-bold flex items-center justify-center whitespace-nowrap">
            <a href="#" id="login-link">${c?"로그아웃":"로그인"}</a>
          </button>
        </div>
      </div>
    </div>
  `,r=document.createElement("div");r.innerHTML=d;const e=r.firstElementChild,i=document.createElement("button");return i.id="topButton",i.className="fixed bottom-6 right-6 z-[100] w-12 h-12 bg-meet_black rounded-full shadow-[0px_0px_100px_#3631BD] transition-all duration-300 transform opacity-100 translate-y-0 hidden",i.innerHTML='<img src="./img/arrow-top.png" class="w-[1.25rem]">',i.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),document.body.appendChild(i),window.addEventListener("scroll",()=>{i.classList.toggle("hidden",window.scrollY<=200)}),setTimeout(()=>{const a=e.querySelector("#nav-menu"),o=e.querySelector("#login-container"),m=e.querySelector("#login-link"),p=e.querySelector("#menu-icon"),g=e.querySelector("#logo-link"),u=e.querySelector("#exchange-link"),f=e.querySelectorAll(".nav-link");function s(){n?(a.classList.add("max-h-[300px]","pb-16","opacity-100"),a.classList.remove("max-h-0","pb-0","opacity-0"),o.classList.add("max-h-[100px]","opacity-100","mt-14"),o.classList.remove("max-h-0","opacity-0","mt-0")):(a.classList.remove("max-h-[300px]","pb-16","opacity-100"),a.classList.add("max-h-0","pb-0","opacity-0"),o.classList.remove("max-h-[100px]","opacity-100","mt-14"),o.classList.add("max-h-0","opacity-0","mt-0"))}p.addEventListener("click",()=>{n=!n,s()}),g.addEventListener("click",()=>{n=!1,s()}),f.forEach(l=>{l.addEventListener("click",()=>{n=!1,s()})}),u.addEventListener("click",l=>{if(!c){l.preventDefault(),h("로그인",`접근이 불가능 합니다.
로그인 후 이용해 주세요`,`${t}login`);return}n=!1,s(),window.location.href=`${t}exchange`}),m.addEventListener("click",l=>{l.preventDefault(),c?(localStorage.removeItem("isLogin"),window.location.href="/"):window.location.href=`${t}login`})},0),e}export{v as H};
