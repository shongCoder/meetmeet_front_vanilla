function a(){let t=!1,n=localStorage.getItem("token");return window.toggleMenu=function(){t=!t},window.closeMenu=function(){t=!1,updateMenuUI()},window.updateMenuUI=function(){const e=document.getElementById("navbar"),o=document.getElementById("logo-img"),l=document.getElementById("nav-menu"),i=document.getElementById("login-container");t?(e.classList.add("bg-meet_light_gray","opacity-95"),e.classList.remove("bg-text-meet_white")):(e.classList.add("bg-text-meet_white"),e.classList.remove("bg-meet_light_gray","opacity-95")),o.src=t?"./meetmeet_logo_b.png":"./meetmeet_logo.png",t?(l.classList.add("max-h-[300px]","pb-16","opacity-100"),l.classList.remove("max-h-0","pb-0","opacity-0"),i.classList.add("max-h-[100px]","opacity-100","mt-14"),i.classList.remove("max-h-0","opacity-0","mt-0")):(l.classList.remove("max-h-[300px]","pb-16","opacity-100"),l.classList.add("max-h-0","pb-0","opacity-0"),i.classList.remove("max-h-[100px]","opacity-100","mt-14"),i.classList.add("max-h-0","opacity-0","mt-0"))},window.handleExchangeClick=function(e){e.preventDefault(),closeMenu(),console.log("포인트 환전 이동"),window.location.href="/exchange"},window.handleLoginClick=function(e){e.preventDefault(),n?(localStorage.removeItem("token"),n=null,console.log("로그아웃 완료"),window.location.href="/"):window.location.href="/login",updateLoginUI()},window.updateLoginUI=function(){const e=document.getElementById("login-link");n?e.textContent="로그아웃":e.textContent="로그인"},`
  <div id="header-white" class="lg:h-20 fixed top-0 left-0 w-full z-50 h-[3.5rem] bg-text-meet_white fade-in show" onload="initLayout()">
    <div class="lg:px-[6.25rem] md:px-8 px-5 text-meet_white flex h-full items-center">
    <!-- 로고 -->
    <div class="lg:w-52 md:w-[9.125rem] w-28 m-0">
      <a href="/" id="logo-link" onclick="closeMenu()">
        <img id="logo-img" src="./meetmeet_logo.png" alt="MeetMeet Logo" />
      </a>
    </div>

    <!-- 모바일 메뉴 아이콘 -->
    <div id="menu-icon" class="lg:hidden md:hidden ml-auto w-5 m-0 cursor-pointer" onclick="${toggleMenu()}">
      <img src="./img/menu_ico.png" alt="Menu Icon" />
    </div>

    <!-- 네비게이션 메뉴 -->
    <div
      id="nav-menu"
      class="lg:flex md:flex lg:justify-center md:justify-center absolute md:static lg:static top-[3.5rem] left-0 w-full bg-meet_light_gray lg:bg-transparent md:bg-transparent transition-all duration-500 ease-in-out overflow-hidden max-h-0 pb-0 opacity-0 lg:max-h-none md:max-h-none lg:opacity-100 md:opacity-100 lg:pb-0 md:pb-0"
    >
      <ul class="lg:flex md:flex lg:space-x-6 md:space-x-6 py-6 lg:text-meet_white md:text-meet_white flex flex-col lg:flex-row md:flex-row items-center space-y-4 lg:space-y-0 md:space-y-0 p-0 m-0 text-meet_menu">
        <li><a href="/support" class="nav-link" onclick="closeMenu()">고객지원</a></li>
        <li><a href="/influencer" class="nav-link" onclick="closeMenu()">밋밋셀럽</a></li>
        <li><a href="/exchange" class="nav-link" onclick="handleExchangeClick(event)">포인트 환전</a></li>
        <li><a href="/download" class="nav-link" onclick="closeMenu()">앱 다운로드</a></li>
      </ul>
    </div>

    <!-- 로그인 버튼 -->
    <div
      id="login-container"
      class="lg:static md:static absolute top-[calc(12rem)] left-0 w-full lg:w-auto md:w-auto flex justify-center md:justify-end lg:justify-end transition-all duration-500 ease-in-out overflow-hidden max-h-0 opacity-0 mt-0 lg:max-h-none lg:opacity-100 lg:mt-0 md:max-h-none md:opacity-100 md:mt-0"
    >
      <button
        id="login-button"
        class="lg:w-32 md:w-32 px-5 py-[0.375rem] bg-meet_pink hover:bg-meet_pink_hover rounded-3xl font-bold flex items-center justify-center whitespace-nowrap"
      >
        <a href="#" id="login-link" onclick="handleLoginClick(event)">로그인</a>
      </button>
    </div>
  </div>
</div>

`}function c(){const t=document.getElementById("nav-menu"),n=document.getElementById("login-btn-wrapper");return document.getElementById("login-btn"),window.toggleMenu=function(){},window.closeMenu=function(){t.classList.add("max-h-0","opacity-0","pb-0"),t.classList.remove("max-h-[300px]","pb-16","opacity-100"),n.classList.add("max-h-0","opacity-0","mt-0"),n.classList.remove("max-h-[100px]","opacity-100","mt-14")},document.querySelectorAll(".nav-link").forEach(o=>{o.addEventListener("click",()=>{closeMenu()})}),`
    <div class="lg:h-20 fixed top-0 left-0 w-full z-50 h-[3.5rem] bg-white opacity-95 fade-in " id="header-black" onload="initLayout()">
      <div class="lg:px-[6.25rem] md:px-8 px-5 text-gray-700 flex h-full items-center">
      <!-- 로고 -->
      <div class="lg:w-52 md:w-[9.125rem] w-28 m-0">
        <a href="/" onclick="closeMenu()">
          <img src="./meetmeet_logo_b.png" alt="MeetMeet Logo" />
        </a>
      </div>
  
      <!-- 모바일 메뉴 아이콘 -->
      <div class="lg:hidden md:hidden ml-auto w-5 m-0 cursor-pointer" id="menu-icon" onclick="toggleMenu()">
        <img src="./img/menu_ico.png" alt="Menu Icon" />
      </div>
  
      <!-- 네비게이션 메뉴 아이콘 -->
      <div
        id="nav-menu"
        class="lg:flex md:flex lg:justify-center md:justify-center absolute md:static lg:static top-[3.5rem] left-0 w-full bg-white lg:bg-transparent md:bg-transparent transition-all duration-500 ease-in-out overflow-hidden max-h-0 opacity-0 pb-0 lg:max-h-none md:max-h-none lg:opacity-100 md:opacity-100 lg:pb-0 md:pb-0"
      >
        <ul
          class="lg:flex md:flex lg:space-x-6 md:space-x-6 py-6 flex flex-col lg:flex-row md:flex-row items-center space-y-4 lg:space-y-0 md:space-y-0 p-0 m-0 text-gray-700"
        >
          <li><a href="/support" class="nav-link">고객지원</a></li>
          <li><a href="/influencer" class="nav-link">밋밋셀럽</a></li>
          <li><a href="/exchange" class="nav-link">포인트 환전</a></li>
          <li><a href="/download" class="nav-link">앱 다운로드</a></li>
        </ul>
      </div>
  
      <!-- 로그인 버튼 -->
      <div
        id="login-btn-wrapper"
        class="lg:static md:static absolute top-[calc(12rem)] left-0 w-full lg:w-auto md:w-auto flex justify-center md:justify-end lg:justify-end transition-all duration-500 ease-in-out overflow-hidden max-h-0 opacity-0 mt-0 lg:max-h-none md:max-h-none lg:opacity-100 md:opacity-100 lg:mt-0 md:mt-0"
      >
        <button
          id="login-btn"
          class="lg:w-32 md:w-32 px-5 py-[0.375rem] text-white bg-pink-500 hover:bg-pink-600 rounded-3xl font-bold flex items-center justify-center whitespace-nowrap"
        >
          로그인
        </button>
      </div>
    </div>
  </div>
      `}function s(){let t=!0;window.initLayout=function(){handleScroll(),setTimeout(n,3e3)},window.onscroll=function(){handleScroll()},window.handleScroll=function(){const e=window.scrollY,o=document.getElementById("header-white"),l=document.getElementById("header-black"),i=document.getElementById("topButton");e<=50&&!t?(t=!0,o.classList.add("show"),l.classList.remove("show")):e>50&&t&&(t=!1,o.classList.remove("show"),l.classList.add("show")),i.classList.toggle("hidden",e<=200)},window.scrollToTop=function(){window.scrollTo({top:0,behavior:"smooth"})};function n(){document.getElementById("modal").classList.remove("hidden")}return`
    ${a()}
    ${c()}
    
    <button id="topButton" class="fixed bottom-6 right-6 z-[100] w-12 h-12 bg-meet_black rounded-full shadow-[0px_0px_100px_#3631BD] transition-all duration-300 transform opacity-100 translate-y-0 hidden" onclick="scrollToTop()"> 
    <img src="./img/arrow-top.png" class="w-[1.25rem]"> </button>
  `}export{s as L};
