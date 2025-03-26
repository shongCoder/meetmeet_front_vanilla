export function HeaderWhite() {
  let isOpen = false;
  let token = localStorage.getItem("token"); // 임시로 토큰 관리

  // 메뉴 열고 닫기
  window.toggleMenu = function() {
    isOpen = !isOpen;
    // updateMenuUI();
    // console.log("button on")
  }

  // 메뉴 강제로 닫기 (로고 클릭, 메뉴 이동 시)
  window.closeMenu = function() {
    isOpen = false;
    updateMenuUI();
  }

  // 메뉴 상태에 따른 클래스 조정
  window.updateMenuUI = function() {
    const navbar = document.getElementById("navbar");
    const logoImg = document.getElementById("logo-img");
    const navMenu = document.getElementById("nav-menu");
    const loginContainer = document.getElementById("login-container");

    // 배경색 & 투명도
    if (isOpen) {
      navbar.classList.add("bg-meet_light_gray", "opacity-95");
      navbar.classList.remove("bg-text-meet_white");
    } else {
      navbar.classList.add("bg-text-meet_white");
      navbar.classList.remove("bg-meet_light_gray", "opacity-95");
    }

    // 로고 이미지 변경
    logoImg.src = isOpen ? "./meetmeet_logo_b.png" : "./meetmeet_logo.png";

    // 네비 메뉴 열고 닫기
    if (isOpen) {
      navMenu.classList.add("max-h-[300px]", "pb-16", "opacity-100");
      navMenu.classList.remove("max-h-0", "pb-0", "opacity-0");

      loginContainer.classList.add("max-h-[100px]", "opacity-100", "mt-14");
      loginContainer.classList.remove("max-h-0", "opacity-0", "mt-0");
    } else {
      navMenu.classList.remove("max-h-[300px]", "pb-16", "opacity-100");
      navMenu.classList.add("max-h-0", "pb-0", "opacity-0");

      loginContainer.classList.remove("max-h-[100px]", "opacity-100", "mt-14");
      loginContainer.classList.add("max-h-0", "opacity-0", "mt-0");
    }
  }

  // 포인트 환전 클릭 핸들러
  window.handleExchangeClick = function(event) {
    event.preventDefault();
    closeMenu();
    // 여기서 추가 기능 실행 가능
    console.log("포인트 환전 이동");
    window.location.href = "/exchange";
  }

  // 로그인/로그아웃 상태 처리
  window.handleLoginClick = function(event) {
    event.preventDefault();

    if (token) {
      // 로그아웃 로직
      localStorage.removeItem("token");
      token = null;
      console.log("로그아웃 완료");
      window.location.href = "/";
    } else {
      // 로그인 페이지 이동
      window.location.href = "/login";
    }

    updateLoginUI();
  }

  // 로그인 버튼 텍스트 초기화
  window.updateLoginUI = function() {
    const loginLink = document.getElementById("login-link");

    if (token) {
      loginLink.textContent = "로그아웃";
    } else {
      loginLink.textContent = "로그인";
    }
  }

  // 초기 실행
  // updateLoginUI();

  return /*html*/ `
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

`;
}
