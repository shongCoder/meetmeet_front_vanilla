import { Footer } from "../Footer.js";
import { LayoutPage } from "../LayoutPage.js";
import "../input.css";
import "../style.css";

const base = '/meetmeet_front_vanilla/';

document.querySelector("#contents").innerHTML = `
${LayoutPage()}
<div class="relative w-full bg-meet_black text-meet_white lg:w-full lg:h-[56.125rem] md:h-[50.375rem] h-[50.75rem] flex flex-col items-center lg:px-[6.25rem] md:px-8 px-5">
        <!-- 텍스트 & 버튼 (그라데이션 위에 위치) -->
        <div class="relative z-20 w-full lg:pt-80 md:pt-[16.1875rem] pt-[10rem]">
          <div class="text-left">
            <div class="lg:text-[3.25rem] md:text-[3.25rem] text-[1.5rem] font-bold lg:leading-[4.25rem] md:leading-[4.25rem] leading-9">
              모두가 주인공이 되는 공간 <br /> 소통하고, 공유하고, 소유하다.
            </div>
            <div class="mt-4 lg:text-[1rem] md:text-5 text-[0.875rem] text-meet_gray">
              만나고 싶은 순간, 지금 바로 밋밋하세요!
            </div>
            <NavLink to="/download">
              <button class="lg:mt-10 md:mt-10 mt-5 lg:px-8 lg:py-5 md:px-8 md:py-5 px-6 py-3 bg-meet_pink hover:bg-meet_pink_hover shadow-[inset_4px_4px_14px_0_rgba(255,255,255,0.2)] font-bold text-white rounded-full">
                앱 다운로드
              </button>
            </NavLink>
          </div>
        </div>

        <!-- 이미지 (웹/모바일 분기) -->
        <img
          src="${base}/img/support/support_visual.png"
          class="absolute lg:right-0 lg:top-[-16rem] md:top-[-20rem] md:right-0 overflow-hidden
               lg:w-[37.25rem] md:w-[37.25rem] w-full hidden md:block"
        />
        <div class="md:hidden mt-10 absolute bottom-0 px-5">
          <img
            src="${base}/img/support/support_visual_mobile.png"
            class="h-auto object-cover"
          />
        </div>

        <!-- 배경 그라데이션 (웹 & 태블릿: 기본 그라데이션, 모바일: 하단에서 시작) -->
        <div class="absolute inset-0 lg:bg-gradient-to-b md:bg-gradient-to-b w-full from-black/100 to-transparent bg-gradient-to-t z-10"></div>
      </div>

<div class="lg:px-[6.25rem] md:px-8 px-5 lg:mt-[18.75rem] md:mt-[18.75rem] pt-[5rem] lg:mb-[6.25rem] md:mb-[6.25rem]">
  <div class="bg-meet_pink text-meet_white lg:text-[0.8125rem] md:text-[0.8125rem] text-[0.625rem] font-semibold w-fit px-4 py-[0.375rem] rounded-2xl">
    Usage Information
  </div>
  <div class="text-meet_black text-center font-bold lg:text-[3.25rem] md:text-[3.25rem] text-[1.75rem] mb-2">
    이용 안내
  </div>
  <div class="lg:px-[13.75rem] w-full">
    <div class="accordion-item">
      <div class="flex items-center justify-between mt-10 cursor-pointer accordion-header">
        <span class="text-left lg:text-[1.5rem] md:text-[1.5rem] text-[1.125rem] font-semibold flex-1">
          서비스 소개
        </span>
        <img src="./img/support/add.png" class="accordion-icon lg:w-6 md:w-6 w-4 transition-transform duration-300 rotate-0" />
      </div>
      <div class="accordion-content overflow-hidden transition-[max-height] duration-500 ease-in-out max-h-0">
        <p class="text-meet_text lg:text-[1.25rem] md:text-[1.25rem] text-[0.875rem] mt-5 leading-8">
          밋밋 MeetMeet 서비스는 단순한 플랫폼을 넘어, 사람과 사람을 연결하고 당신의 일상에 특별함을 더하는 공간힙니다. 다양한 기능을 통해 새로운 경험을 제안합니다.
        </p>
      </div>
      <div class="w-full bg-meet_gray h-[1px] mt-6"></div>
    </div>

    <div class="accordion-item">
      <div class="flex items-center justify-between mt-10 cursor-pointer accordion-header">
        <span class="text-left lg:text-[1.5rem] md:text-[1.5rem] text-[1.125rem] font-semibold flex-1">
          기능 소개
        </span>
        <img src="./img/support/add.png" class="accordion-icon lg:w-6 md:w-6 w-4 transition-transform duration-300 rotate-0" />
      </div>
      <div class="accordion-content overflow-hidden transition-[max-height] duration-500 ease-in-out max-h-0">
        <p class="text-meet_text lg:text-[1.25rem] md:text-[1.25rem] text-[0.875rem] mt-5 leading-8">
          밋밋 MeetMeet 서비스는 단순한 플랫폼을 넘어, 사람과 사람을 연결하고 당신의 일상에 특별함을 더하는 공간힙니다. 다양한 기능을 통해 새로운 경험을 제안합니다.
        </p>
      </div>
      <div class="w-full bg-meet_gray h-[1px] mt-6"></div>
    </div>

    <div class="accordion-item">
      <div class="flex items-center justify-between mt-10 cursor-pointer accordion-header">
        <span class="text-left lg:text-[1.5rem] md:text-[1.5rem] text-[1.125rem] font-semibold flex-1">
          회원가입 및 로그인
        </span>
        <img src="./img/support/add.png" class="accordion-icon lg:w-6 md:w-6 w-4 transition-transform duration-300 rotate-0" />
      </div>
      <div class="accordion-content overflow-hidden transition-[max-height] duration-500 ease-in-out max-h-0">
        <p class="text-meet_text lg:text-[1.25rem] md:text-[1.25rem] text-[0.875rem] mt-5 leading-8">
          밋밋 MeetMeet 서비스는 단순한 플랫폼을 넘어, 사람과 사람을 연결하고 당신의 일상에 특별함을 더하는 공간힙니다. 다양한 기능을 통해 새로운 경험을 제안합니다.
        </p>
      </div>
      <div class="w-full bg-meet_gray h-[1px] mt-6"></div>
    </div>
  </div>
</div>

      
      <div class="bg-meet_light_gray lg:pt-[12.5rem] md:pt-[12.5rem] pt-[3.75rem] lg:px-[6.25rem] md:px-8 px-5 w-full lg:mt-[6.25rem] md:mt-[6.25rem] mt-[3.75rem] lg:pb-[12.5rem] md:pb-[12.5rem] pb-[3.75rem]">
        <div class="bg-meet_pink text-meet_white lg:text-[0.8125rem] md:text-[0.8125rem] text-[0.625rem] font-semibold w-fit px-4 py-[0.375rem] rounded-2xl">
          News
        </div>
        <div class="text-meet_black text-center font-bold lg:text-[3.25rem] md:text-[3.25rem] text-[1.75rem] mb-2">
          공지사항
        </div>
        <div class="text-meet_text text-center lg:text-[1.25rem] md:text-[1.25rem] text-[0.875rem] mt-2 mb-8 w-full">
          밋밋의 새로운 소식을 알려드릴게요
        </div>
        <!-- 게시물 박스 -->
        <div class="mt-20 flex lg:items-center lg:justify-between gap-6 md:flex-col flex-col lg:flex-row">
          <div class="bg-meet_white p-6 w-full rounded-[1.25rem] border border-meet_gray hover:border-meet_pink group">
            <div class="w-full h-[13.8rem] bg-[url('/img/support/blog-1.png')] bg-cover bg-center rounded-[0.75rem]"></div>
            <div class="w-full">
              <div class="lg:text-[1.5rem] md:text-[1.5rem] text-[1.25rem] text-ellipsis line-clamp-1 font-bold mt-5 group-hover:text-meet_pink">
                사회적 기업의 가치와 사회적 영향력
              </div>
              <p class="text-meet_text mt-3 lg:text-[1rem] md:text-[1rem] text-[0.8125rem] w-full text-ellipsis lg:line-clamp-2 md:line-clamp-2 line-clamp-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised
                in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <div class="font-normal text-meet_pink pt-3">자세히 보기</div>
            </div>
          </div>
          <div class="w-full flex flex-col gap-5 h-full">
            <div class="w-full p-6 bg-meet_white flex lg:items-center md:items-center lg:flex-row md:flex-row flex-col gap-[1.875rem] rounded-[1.25rem] border border-meet_gray hover:border-meet_pink group">
              <div class="lg:w-60 md:w-60 w-full lg:h-[8.8125rem] md:h-[8.8125rem] h-[13.8rem] bg-[url('/img/support/blog-2.png')] bg-cover bg-center rounded-[0.75rem] m-0"></div>
              <div class="flex-1 min-w-0">
                <div class="lg:text-[1.5rem] md:text-[1.5rem] text-[1.25rem] w-full text-ellipsis line-clamp-1 font-bold group-hover:text-meet_pink">
                  자기 계발의 시작:5가지 효과적인 방법
                </div>
                <p class="text-meet_text mt-3 w-full text-ellipsis lg:line-clamp-2 md:line-clamp-2 line-clamp-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                  It has survived
                </p>
                <div class="font-normal text-meet_pink pt-8">
                  자세히 보기
                </div>
              </div>
            </div>
            <div class="w-full p-6 bg-meet_white flex lg:items-center md:items-center lg:flex-row md:flex-row flex-col gap-[1.875rem] rounded-[1.25rem] border border-meet_gray hover:border-meet_pink group">
              <div class="lg:w-60 md:w-60 w-full lg:h-[8.8125rem] md:h-[8.8125rem] h-[13.8rem] bg-[url('/img/support/blog-3.png')] bg-cover bg-center rounded-[0.75rem] m-0"></div>
              <div class="flex-1 min-w-0">
                <div class="lg:text-[1.5rem] md:text-[1.5rem] text-[1.25rem] w-full text-ellipsis line-clamp-1 font-bold group-hover:text-meet_pink">
                  창의력을 끌어올리는 방법:아이들에게 좋은 놀이
                </div>
                <p class="text-meet_text mt-3 w-full text-ellipsis lg:line-clamp-2 md:line-clamp-2 line-clamp-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                  It has survived
                </p>
                <div class="font-normal text-meet_pink pt-8">
                  자세히 보기
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="lg:pt-[12.5rem] md:pt-[12.5rem] pt-[3.75rem] lg:px-[6.25rem] md:px-8 px-5 w-full ">
  <div>
    <img src="./img/support/AO.png" class="lg:w-[6.25rem] md:w-[6.25rem] w-20" />
  </div>
  <div class="text-meet_black text-center font-bold lg:text-[3.25rem] md:text-[3.25rem] text-[1.75rem] mb-2">
    자주 묻는 질문
  </div>
  <div class="text-meet_text text-center lg:text-[1.25rem] md:text-[1.25rem] text-[0.875rem] mt-2 mb-8 w-full">
    Frequently Asked Questions
  </div>
  <div class="lg:px-[13.75rem] w-full">
    <div class="accordion-item">
      <div class="flex items-center justify-between mt-10 cursor-pointer accordion-header">
        <span class="text-left lg:text-[1.5rem] md:text-[1.5rem] text-[1.125rem] font-semibold flex-1">
          가입은 어디서 하나요?
        </span>
        <img src="./img/support/add.png" class="accordion-icon lg:w-6 md:w-6 w-4 transition-transform duration-300 rotate-0" />
      </div>
      <div class="accordion-content overflow-hidden transition-[max-height] duration-500 ease-in-out max-h-0">
        <p class="text-meet_text lg:text-[1.25rem] md:text-[1.25rem] text-[0.875rem] mt-5 leading-8">
          밋밋 MeetMeet 서비스는 단순한 플랫폼을 넘어, 사람과 사람을 연결하고 당신의 일상에 특별함을 더하는 공간힙니다. 다양한 기능을 통해 새로운 경험을 제안합니다.
        </p>
      </div>
      <div class="w-full bg-meet_gray h-[1px] mt-6"></div>
    </div>

    <div class="accordion-item">
      <div class="flex items-center justify-between mt-10 cursor-pointer accordion-header">
        <span class="text-left lg:text-[1.5rem] md:text-[1.5rem] text-[1.125rem] font-semibold flex-1">
          미성년자도 이용이 가능한가요?
        </span>
        <img src="./img/support/add.png" class="accordion-icon lg:w-6 md:w-6 w-4 transition-transform duration-300 rotate-0" />
      </div>
      <div class="accordion-content overflow-hidden transition-[max-height] duration-500 ease-in-out max-h-0">
        <p class="text-meet_text lg:text-[1.25rem] md:text-[1.25rem] text-[0.875rem] mt-5 leading-8">
          밋밋 MeetMeet 서비스는 단순한 플랫폼을 넘어, 사람과 사람을 연결하고 당신의 일상에 특별함을 더하는 공간힙니다. 다양한 기능을 통해 새로운 경험을 제안합니다.
        </p>
      </div>
      <div class="w-full bg-meet_gray h-[1px] mt-6"></div>
    </div>

    <div class="accordion-item">
      <div class="flex items-center justify-between mt-10 cursor-pointer accordion-header">
        <span class="text-left lg:text-[1.5rem] md:text-[1.5rem] text-[1.125rem] font-semibold flex-1">
          탈퇴 어떻게 하나요?
        </span>
        <img src="./img/support/add.png" class="accordion-icon lg:w-6 md:w-6 w-4 transition-transform duration-300 rotate-0" />
      </div>
      <div class="accordion-content overflow-hidden transition-[max-height] duration-500 ease-in-out max-h-0">
        <p class="text-meet_text lg:text-[1.25rem] md:text-[1.25rem] text-[0.875rem] mt-5 leading-8">
          앱 > 설정 > 탈퇴하기 메뉴를 통해서 탈퇴하실 수 있습니다.
        </p>
      </div>
      <div class="w-full bg-meet_gray h-[1px] mt-6"></div>
    </div>
  </div>
</div>
      
        <div class="text-meet_text text-center mt-9 lg:mb-[6.25rem] md:mb-[6.25rem] mb-[3.75rem]">
          <span>더 궁금하신 내용이 있나요? </span>
          <span class="font-medium text-meet_sodomy">
            <a href="-">문의하기</a>
          </span>
        </div>
      </div>
`
document.querySelector("#contents").appendChild(Footer());

document.querySelectorAll(".accordion-header").forEach((header, index) => {
    header.addEventListener("click", () => {
      const current = document.querySelectorAll(".accordion-content")[index];
      const currentIcon = document.querySelectorAll(".accordion-icon")[index];
  
      const isOpen = current.classList.contains("max-h-[1000px]");
  
      // 모든 아코디언 닫기
      document.querySelectorAll(".accordion-content").forEach((el) => {
        el.classList.remove("max-h-[1000px]");
        el.classList.add("max-h-0");
      });
  
      document.querySelectorAll(".accordion-icon").forEach((icon) => {
        icon.classList.remove("rotate-45");
        icon.classList.add("rotate-0");
      });
  
      // 클릭한 항목만 열기 (이미 열려있으면 그대로 닫힘)
      if (!isOpen) {
        current.classList.remove("max-h-0");
        current.classList.add("max-h-[1000px]");
        currentIcon.classList.remove("rotate-0");
        currentIcon.classList.add("rotate-45");
      }
    });
  });