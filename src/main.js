// ✅ 필요한 컴포넌트 import
import { Footer } from "./Footer.js";
import { HeaderWhite } from "./HeaderWhite.js";
import { LayoutPage } from "./LayoutPage.js";
import "./input.css";
import "./style.css";

// ✅ #app 초기 구조 설정 (본문 컨테이너 따로 만들기)
document.querySelector("#app").innerHTML = `<div id="page-body"></div>`;

// ✅ 헤더 추가 (body에 직접 붙이기)
const header = HeaderWhite();
document.body.prepend(header);

// ✅ 본문 내용 추가 (page-body 안에)
document.querySelector("#page-body").innerHTML = `
  <div class="relative z-[-1] bg-meet_black text-meet_white lg:w-full lg:h-[60rem] md:h-[64rem] h-[50.75rem] flex justify-start bg-[url('/img/main/main_visual.png')] bg-cover bg-center">
    <div class="w-full lg:pt-80 md:pt-[23rem] pt-[17.25rem] bg-gradient-to-b from-gray-950/100 to-transparent">
      <div class="lg:px-[6.25rem] md:px-8 px-5 text-left">
        <div class="lg:text-[3.25rem] md:text-[3.25rem] text-[1.5rem] font-bold lg:leading-[4.25rem] md:leading-[4.25rem] leading-9">
          모두가 주인공이 되는 공간 <br /> 소통하고, 공유하고, 소유하다.
        </div>
        <div class="mt-4 lg:text-[1rem] md:text-5 text-[0.875rem] text-meet_gray">
          만나고 싶은 순간, 지금 바로 밋밋하세요!
        </div>
        <a href="./download.html">
          <button class="lg:mt-10 md:mt-10 mt-5 lg:px-8 lg:py-5 md:px-8 md:py-5 px-6 py-3 bg-meet_pink hover:bg-meet_pink_hover shadow-[inset_4px_4px_14px_0_rgba(255,255,255,0.2)] font-bold text-white rounded-full">
            앱 다운로드
          </button>
        </a>
      </div>
    </div>
  </div>

  <!-- 실시간 영상통화 -->
  <div class="pt-32 md:px-8">
    <div class="lg:w-36 md:w-[8.75rem] w-20">
      <img src="./img/main/AO.png" />
    </div>
    <div class="text-meet_black text-center font-bold lg:text-[3.25rem] md:text-[3.25rem] text-[1.75rem]">
      실시간 영상통화
    </div>
    <div class="text-center text-meet_text lg:text-[1.25rem] md:text-[1.25rem] text-[0.875rem] mt-4 mb-8 pl-3 lg:w-[26rem] md:w-[24rem] w-[12.875rem]">
      지금 바로 연결하세요, 실시간으로 이루어지는 생생한 영상통화로 진짜
      소통을 경험해보세요.
    </div>
    <div>
      <img src="./img/main/Picture.png" class="hidden lg:block" />
      <img src="./img/main/Picture-1-m.png" class="block lg:hidden md:w-full w-[20.875rem]" />
    </div>
  </div>

  <!-- 일상 공유 -->
  <div class="pt-32 md:px-8 bg-meet_black">
    <div class="w-36">
      <img src="./img/main/mugs.png" />
    </div>
    <div class="text-meet_white text-center font-bold lg:text-[3.25rem] md:text-[3.25rem] text-[1.75rem]">
      일상 공유
    </div>
    <div class="text-meet_white text-center font-light lg:text-[1.25rem] md:text-[1.25rem] text-[0.875rem] mt-4 mb-8 pl-3 lg:w-[26rem] md:w-[24rem] w-[12.875rem]">
      당신의 특별한 순간들을 나눠보세요. 소소한 일상이 모두와 함께하는
      이야기가 됩니다.
    </div>
    <div>
      <img src="./img/main/Picture-2.png" class="hidden lg:block" />
      <img src="./img/main/Picture-2-m.png" class="block lg:hidden md:w-full w-[20.875rem]" />
    </div>
  </div>

  <!-- 채팅 -->
  <div class="pt-32 md:px-8">
    <div class="w-36">
      <img src="./img/main/notifications.png" />
    </div>
    <div class="text-meet_black text-center font-bold lg:text-[3.25rem] md:text-[3.25rem] text-[1.75rem]">
      채팅
    </div>
    <div class="text-meet_text text-center lg:text-[1.25rem] md:text-[1.25rem] text-[0.875rem] mt-4 mb-8 pl-3 lg:w-[26rem] md:w-[24rem] w-[12.875rem]">
      지금 바로 연결하세요, 실시간으로 이루어지는 생생한 영상통화로 진짜
      소통을 경험해보세요.
    </div>
    <div>
      <img src="./img/main/Picture-3.png" class="hidden lg:block" />
      <img src="./img/main/Picture-3-m.png" class="block lg:hidden md:w-full w-[20.875rem]" />
    </div>
  </div>

  <!-- 나만의 멤버십 -->
  <div class="pt-32 md:px-8 bg-meet_light_gray">
    <div class="w-36">
      <img src="./img/main/Unlock.png" />
    </div>
    <div class="text-meet_black text-center font-bold lg:text-[3.25rem] md:text-[3.25rem] text-[1.75rem]">
      나만의 멤버십 서비스
    </div>
    <div class="text-meet_text text-center lg:text-[1.25rem] md:text-[1.25rem] text-[0.875rem] mt-4 mb-8 pl-3 lg:w-[26rem] md:w-[30rem] w-[12.875rem]">
      당신만의 특별한 상품과 경험을 만들어보세요. 원하는 것을 구독형
      멤버십으로 제공하며, 당신의 가치를 공유하세요.
    </div>
    <div>
      <img src="./img/main/Picture-4.png" class="hidden lg:block" />
      <img src="./img/main/Picture-4-m.png" class="block lg:hidden md:w-full w-[20.875rem]" />
    </div>
  </div>
`;

// ✅ 푸터 추가 (마지막에)
document.querySelector("#app").appendChild(Footer());

// ✅ 스크롤 및 모달 기능 초기화
LayoutPage();
window.initLayout();
