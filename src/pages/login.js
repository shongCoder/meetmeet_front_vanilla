import { Footer } from "../Footer.js";
import { HeaderBlackF } from "../HeaderBlackF.js";
import "../input.css";
import "../style.css";

const base = "/meetmeet_front_vanilla/";

document.querySelector("#contents").innerHTML = `
${HeaderBlackF()}
<div class="w-full lg:px-[6.25rem] md:px-8 px-5 flex lg:justify-between lg:flex-row md:flex-col lg:pt-[13.375rem] md:pt-[13.375rem] pt-[7.5rem] pb-[8.75rem]">
      <!-- 로그인 필드 -->
      <div class="lg:w-[25rem] md:w-full w-full lg:px-0 md:px-[3.75rem]">
        <div class="text-[2.25rem] font-bold text-center">
          <span class="text-meet_black">Login</span>
          <span class="text-meet_pink">.</span>
        </div>
        <div class="text-meet_text text-center text-[0.875rem]">
          만나고 싶은 순간, 밋밋하세요!
        </div>
        <!-- 입력 필드 -->
        <div class="mt-10">
          <form class="">
            <label htmlFor="email" class="text-meet_text text-[0.75rem]">
              이메일
            </label>
            <input
              class="w-full border border-meet_gray rounded-[0.5rem] py-4 pl-3 mt-3 mb-4 text-[0.875rem] focus:outline-none focus:text-meet_black focus:border-meet_pink"
              type="email"
              id="email"
              name="email"
              placeholder="이메일을 입력해 주세요"
            />
            <label htmlFor="password" class="text-meet_text text-[0.75rem]">
              비밀번호
            </label>
            <div class="relative w-full">
                <input
                    class="w-full border border-meet_gray rounded-[0.5rem] py-4 pl-3 pr-10 mt-3 focus:outline-none focus:text-meet_black focus:border-meet_pink"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="비밀번호를 입력해 주세요"
                />
                <!-- 👁 비밀번호 보기 아이콘 -->
                <button
                    type="button"
                    id="togglePassword"
                    class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-6 h-6 translate-y-1 text-meet_gray"
                      id="eyeIconSvg"
                    >
                      <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                      <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
            <NavLink to="/">
              <button
                id="loginButton"
                onClick={handleLogin}
                style={{ boxShadow: "0px 5px 10px rgba(26, 26, 26, 0.1)" }}
                class="bg-meet_pink hover:bg-meet_pink_hover rounded-[0.75rem] w-full text-center py-4 text-meet_white font-bold lg:mt-[4.25rem] md:mt-[4.25rem] mt-11"
              >
                로그인
              </button>
            </NavLink>
          </form>
        </div>
        <div class="w-[12.25rem] flex gap-5 mt-6">
          <img src="./img/login/kakao.png" class="w-[3.25rem]" />
          <img src="./img/login/google.png" class="w-[3.25rem]" />
          <img src="./img/login/apple.png" class="w-[3.25rem]" />
        </div>
        <div class="text-center lg:mt-20 md:mt-20 mt-7 lg:text-4 md:text-4 text-[0.8125rem]">
          <span class="text-meet_text">계정이 없으신가요? </span>
          <span class="text-meet_black font-medium">앱에서 회원가입</span>
        </div>
      </div>

      <!-- 이미지 필드 -->
      <div class="m-0 relative md:pt-8 lg:block md:block hidden">
        <!-- 배경 이미지 -->
        <div class="relative lg:w-[45.9rem] md:w-full w-full h-full min-h-[40rem] bg-[url('/img/login/hand.png')] bg-cover bg-center">
          <div class="absolute bottom-0 w-full h-[5em] bg-gradient-to-t from-white to-transparent"></div>
          <div class="absolute lg:right-0 md:left-1/2 md:-translate-x-1/2 bottom-11 flex gap-4">
            <img src="./img/download/appstore.png" class="w-[12.625rem]" />
            <img src="./img/download/playstore.png" class="w-[12.625rem]" />
          </div>
        </div>
      </div>
    </div>
`;

document.querySelector("#contents").appendChild(Footer());

document.addEventListener("DOMContentLoaded", () => {
  const passwordInput = document.getElementById("password");
  const toggleBtn = document.getElementById("togglePassword");
  const eyeIconSvg = document.getElementById("eyeIconSvg");
  const loginBtn = document.getElementById("loginButton");

  let showPassword = false;

  toggleBtn.addEventListener("click", () => {
    showPassword = !showPassword;

    passwordInput.type = showPassword ? "text" : "password";

    // SVG 아이콘 변경
    eyeIconSvg.innerHTML = showPassword
      ? `
        <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18Z" />
        <path d="M22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z" />
        <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z" />
        <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z" />
      `
      : `
        <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clip-rule="evenodd" />
      `;
  });

  loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.setItem("isLogin", "true");
    window.location.href = "/";
  });

  
});