import { openModal } from "./modal.js";

export function HeaderBlack() {
  let isOpen = false;
  let isLogin = localStorage.getItem("isLogin") === "true";

  const base = "/meetmeet_front_vanilla/";

  const container = document.createElement("div");
  container.id = "header-black";
  container.className =
    "lg:h-20 fixed top-0 left-0 w-full z-50 h-[3.5rem] bg-meet_white opacity-95 transition-all duration-500 ease-in-out";

  container.innerHTML = `
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
          <li><a href="${base}support" class="nav-link">고객지원</a></li>
          <li><a href="${base}influencer" class="nav-link">밋밋셀럽</a></li>
          <li><a href="${base}exchange" class="nav-link" id="exchange-link">포인트 환전</a></li>
          <li><a href="${base}download" class="nav-link">앱 다운로드</a></li>
        </ul>
      </div>

      <div id="login-container" class="absolute top-[calc(12rem)] left-0 w-full lg:w-auto md:w-auto flex justify-center md:justify-end lg:justify-end transition-all duration-500 ease-in-out overflow-hidden max-h-0 opacity-0 mt-0 lg:static md:static lg:max-h-none lg:opacity-100 lg:mt-0 md:max-h-none md:opacity-100 md:mt-0">
        <button id="login-button" class="lg:w-32 md:w-32 px-5 py-[0.375rem] text-meet_white bg-meet_pink hover:bg-meet_pink_hover rounded-3xl font-bold flex items-center justify-center whitespace-nowrap">
          <span id="login-link">${isLogin ? "로그아웃" : "로그인"}</span>
        </button>
      </div>
    </div>
  `;

  const topBtn = document.createElement("button");
  topBtn.id = "topButton";
  topBtn.className =
    "fixed bottom-6 right-6 z-[100] w-12 h-12 bg-meet_black rounded-full shadow-[0px_0px_100px_#3631BD] transition-all duration-300 transform opacity-100 translate-y-0 hidden";
  topBtn.innerHTML = `<img src="./img/arrow-top.png" class="w-[1.25rem]">`;
  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  document.body.appendChild(topBtn);

  window.addEventListener("scroll", () => {
    topBtn.classList.toggle("hidden", window.scrollY <= 200);
  });

  setTimeout(() => {
    const menuIcon = container.querySelector("#menu-icon");
    const navMenu = container.querySelector("#nav-menu");
    const loginContainer = container.querySelector("#login-container");
    const loginLink = container.querySelector("#login-link");
    const navLinks = container.querySelectorAll(".nav-link");
    const exchangeLink = container.querySelector("#exchange-link");

    function updateMenuUI() {
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

    menuIcon.addEventListener("click", () => {
      isOpen = !isOpen;
      updateMenuUI();
    });

    navLinks.forEach((link) =>
      link.addEventListener("click", () => {
        isOpen = false;
        updateMenuUI();
      })
    );

    loginLink.addEventListener("click", (e) => {
      e.preventDefault();
      isLogin = localStorage.getItem("isLogin") === "true";
      if (isLogin) {
        localStorage.removeItem("isLogin");
        window.location.href = "/";
      } else {
        window.location.href = `${base}login`;
      }
    });

    // ✅ 포인트 환전 클릭 시 로그인 확인
    exchangeLink.addEventListener("click", (e) => {
      isLogin = localStorage.getItem("isLogin") === "true";
      if (!isLogin) {
        e.preventDefault();
        openModal("로그인", "접근이 불가능 합니다.\n로그인 후 이용해 주세요", `${base}login`);
      }
    });
  }, 0);

  return container;
}
