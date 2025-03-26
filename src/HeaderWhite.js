export function HeaderWhite() {
  let isOpen = false;
  let isLogin = localStorage.getItem("isLogin") === "true";

  const html = `
    <div id="header-white" class="lg:h-20 fixed top-0 left-0 w-full z-50 h-[3.5rem] bg-text-meet_white fade-in show">
      <div class="lg:px-[6.25rem] md:px-8 px-5 text-meet_white flex h-full items-center">
        <!-- 로고 -->
        <div class="lg:w-52 md:w-[9.125rem] w-28 m-0">
          <a href="/" id="logo-link">
            <img id="logo-img" src="./meetmeet_logo.png" alt="MeetMeet Logo" />
          </a>
        </div>

        <!-- 모바일 메뉴 아이콘 -->
        <div id="menu-icon" class="z-[9999] lg:hidden md:hidden ml-auto w-5 m-0 cursor-pointer">
          <img src="./img/menu_ico.png" alt="Menu Icon" />
        </div>

        <!-- 네비게이션 메뉴 -->
        <div
          id="nav-menu"
          class="z-50 lg:flex md:flex lg:justify-center md:justify-center absolute md:static lg:static top-[3.5rem] left-0 w-full bg-meet_light_gray lg:bg-transparent md:bg-transparent transition-all duration-500 ease-in-out overflow-hidden max-h-0 pb-0 opacity-0 lg:max-h-none md:max-h-none lg:opacity-100 md:opacity-100 lg:pb-0 md:pb-0"
        >
          <ul class="lg:flex md:flex lg:space-x-6 md:space-x-6 py-6 lg:text-meet_white md:text-meet_white flex flex-col lg:flex-row md:flex-row items-center space-y-4 lg:space-y-0 md:space-y-0 p-0 m-0 text-meet_menu">
             <li><a href="../meetmeet_front_vanilla/support" class="nav-link">고객지원</a></li>
            <li><a href="../meetmeet_front_vanilla/influencer" class="nav-link">밋밋셀럽</a></li>
            <li><a href="../meetmeet_front_vanilla/exchange" class="nav-link" id="exchange-link">포인트 환전</a></li>
            <li><a href="../meetmeet_front_vanilla/download" class="nav-link">앱 다운로드</a></li>
          </ul>
        </div>

        <!-- 로그인 버튼 -->
        <div
          id="login-container"
          class="z-50 lg:static md:static absolute top-[calc(12rem)] left-0 w-full lg:w-auto md:w-auto flex justify-center md:justify-end lg:justify-end transition-all duration-500 ease-in-out overflow-hidden max-h-0 opacity-0 mt-0 lg:max-h-none lg:opacity-100 lg:mt-0 md:max-h-none md:opacity-100 md:mt-0"
        >
          <button
            id="login-button"
            class="lg:w-32 md:w-32 px-5 py-[0.375rem] bg-meet_pink hover:bg-meet_pink_hover rounded-3xl font-bold flex items-center justify-center whitespace-nowrap"
          >
            <span id="login-link">로그인</span>
          </button>
        </div>
      </div>
    </div>
  `;

  const container = document.createElement("div");
  container.innerHTML = html;
  const headerElement = container.firstElementChild;

  (() => {
    const navbar = headerElement;
    const logoImg = headerElement.querySelector("#logo-img");
    const navMenu = headerElement.querySelector("#nav-menu");
    const loginContainer = headerElement.querySelector("#login-container");
    const loginLink = headerElement.querySelector("#login-link");
    const loginButton = headerElement.querySelector("#login-button");
    const menuIcon = headerElement.querySelector("#menu-icon");
    const logoLink = headerElement.querySelector("#logo-link");
    const exchangeLink = headerElement.querySelector("#exchange-link");
    const navLinks = headerElement.querySelectorAll(".nav-link");

    function updateMenuUI() {

      console.log("업데이트 UI 실행됨");
      console.log("navMenu:", navMenu);
      console.log("loginContainer:", loginContainer);
      if (isOpen) {
        void navMenu.offsetHeight;

        navbar.classList.add("bg-meet_light_gray", "opacity-95");
        navbar.classList.remove("bg-text-meet_white");
        logoImg.src = "./meetmeet_logo_b.png";
        navMenu.classList.add("max-h-[300px]", "pb-16", "opacity-100");
        navMenu.classList.remove("max-h-0", "pb-0", "opacity-0");
        loginContainer.classList.add("max-h-[100px]", "opacity-100", "mt-14");
        loginContainer.classList.remove("max-h-0", "opacity-0", "mt-0");
      } else {
        void navMenu.offsetHeight;

        navbar.classList.remove("bg-meet_light_gray", "opacity-95");
        navbar.classList.add("bg-text-meet_white");
        logoImg.src = "./meetmeet_logo.png";
        navMenu.classList.remove("max-h-[300px]", "pb-16", "opacity-100");
        navMenu.classList.add("max-h-0", "pb-0", "opacity-0");
        loginContainer.classList.remove("max-h-[100px]", "opacity-100", "mt-14");
        loginContainer.classList.add("max-h-0", "opacity-0", "mt-0");
      }
      console.log("햄부기")
    }

    console.log("menuIcon은?", menuIcon);

    function toggleMenu() {
      console.log("왜 안됨")
      isOpen = !isOpen;
      updateMenuUI();
    }

    function closeMenu() {
      isOpen = false;
      updateMenuUI();
    }

    function updateLoginUI() {
      loginLink.textContent = isLogin ? "로그아웃" : "로그인";
    }

    function handleLoginClick(event) {
      event.preventDefault();
      if (isLogin) {
        localStorage.removeItem("isLogin");
        console.log("로그아웃 완료");
        window.location.href = "/meetmeet_front_vanilla/";
      } else {
        window.location.href = "/meetmeet_front_vanilla/login";
      }
    }

    function handleExchangeClick(event) {
      event.preventDefault();
      closeMenu();
      window.location.href = "/meetmeet_front_vanilla/exchange";
    }

    menuIcon.addEventListener("click", toggleMenu);
    logoLink.addEventListener("click", closeMenu);
    navLinks.forEach((link) => link.addEventListener("click", closeMenu));
    exchangeLink.addEventListener("click", handleExchangeClick);
    loginButton.addEventListener("click", handleLoginClick);

    updateLoginUI();
  })();

  return headerElement;
}