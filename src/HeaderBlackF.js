export function HeaderBlackF() {
    let isOpen = false;
    let isLoggedIn = false; // 임시 로그인 상태 (실제는 세션 또는 토큰 검사)

    const navMenu = document.getElementById("nav-menu");
    const loginBtnWrapper = document.getElementById("login-btn-wrapper");
    const loginBtn = document.getElementById("login-btn");

    // 메뉴 토글 함수
    window.toggleMenu = function () {
        isOpen = !isOpen;
    };

    // 메뉴 닫기
    window.closeMenu = function () {
        isOpen = false;
        navMenu.classList.add("max-h-0", "opacity-0", "pb-0");
        navMenu.classList.remove("max-h-[300px]", "pb-16", "opacity-100");

        loginBtnWrapper.classList.add("max-h-0", "opacity-0", "mt-0");
        loginBtnWrapper.classList.remove("max-h-[100px]", "opacity-100", "mt-14");
    };

    // 로그인 상태 처리
    function updateLoginState() {
        if (isLoggedIn) {
            loginBtn.textContent = "로그아웃";
            loginBtn.href = "/";
            loginBtn.onclick = function (e) {
                e.preventDefault();
                isLoggedIn = false;
                updateLoginState();
                alert("로그아웃 되었습니다.");
            };
        } else {
            loginBtn.textContent = "로그인";
            loginBtn.href = "/login";
            loginBtn.onclick = null;
        }
    }

    // 네비게이션 링크 클릭 이벤트 추가
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            closeMenu();
        });
    });

    // 초기 로그인 상태 세팅
    // updateLoginState();

    return /* html */ `
    <div class="lg:h-20 fixed top-0 left-0 w-full z-50 h-[3.5rem] bg-white opacity-95 fade-in show" id="header-black" onload="initLayout()">
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
      `;
}
