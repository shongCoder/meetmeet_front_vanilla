(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function d(){const l=`
                <div class="w-full items-start text-meet_text overflow-hidden">
      <div class="lg:px-[6.25rem] md:px-8 px-5 text-left">
        <div class="lg:w-[9.125rem] w-[6.875rem] lg:mt-[3.75rem] mt-4 !ml-0">
          <img src="./meetmeet_logo_b.png" alt="MeetMeet Logo" />
        </div>
        <!-- 웹 버전 -->
        <div class="lg:block hidden">
          <div class="mt-7">
            <ul class="flex font-semibold text-[0.875rem]">
              <li class="mr-4">이용약관</li>
              <li class="mr-4 font-light text-meet_gray">|</li>
              <li class="text-meet_sodomy mr-4">개인정보처리방침</li>
              <li class="mr-4 font-light text-meet_gray">|</li>
              <li>운영정책</li>
            </ul>
          </div>
          <div class="mt-4 text-left text-[0.8125rem] flex w-full justify-between items-end">
            <div class="flex-1">
              <div>
                <div class="inline-block mr-3">
                  <span class="font-medium">상호 : </span>
                  <span>(주)케이비즈플래닛</span>
                </div>
                <div class="inline-block mr-3">
                  <span class="font-medium">대표 : </span>
                  <span>황성연</span>
                </div>
                <div class="inline-block">
                  <span class="font-medium">주소 : </span>
                  <span>경기도 광주시 문형산길 93, 202-에이8호</span>
                </div>
              </div>
              <div>
                <div class="inline-block mr-3">
                  <span class="font-medium">사업자 등록번호 : </span>
                  <span>126-86-35315</span>
                </div>
                <div class="inline-block">
                  <span class="font-medium">통신판매업 신고번호 : </span>
                  <span>2023-용인기흥-2891</span>
                </div>
              </div>
              <div>
                <div class="inline-block mr-3">
                  <span class="font-medium">이메일 : </span>
                  <span>meetmeet.help@gmail.com</span>
                </div>
                <div class="inline-block">
                  <span class="font-medium">상담전화 : </span>
                  <span>070-000-0000</span>
                </div>
              </div>
            </div>
            <a href="mailto:#">
              <div class="pl-6 pr-3 py-2 border border-meet_gray rounded-full flex items-center flex-shrink-0">
                <p class="text-[0.8125rem] mr-10">
                  궁금한 내용이 있으신가요?
                </p>
                <button class="px-7 py-3 bg-meet_black text-meet_white font-bold text-[0.875rem] rounded-full">
                  이메일 문의하기
                </button>
              </div>
            </a>
          </div>
        </div>

        <!-- 태블릿 버전 -->
        <div class="items-start lg:hidden md:block hidden">
          <!-- 버튼 & 이미지 -->
          <a href="mailto:#">
            <div class="w-full text-3 pl-3 pr-1 py-1 border border-meet_gray rounded-full flex justify-between items-center flex-shrink-0 mt-6">
              <p class="text-[0.8125rem]">궁금한 내용이 있으신가요?</p>
              <button class="px-6 py-3 bg-meet_black text-meet_white font-bold text-[0.8125rem] rounded-full">
                이메일 문의하기
              </button>
            </div>
          </a>
          <div class="lg:hidden md:block hidden">
            <div class="mt-7">
              <ul class="flex font-semibold text-[0.875rem]">
                <li class="mr-4">이용약관</li>
                <li class="mr-4 font-light text-meet_gray">|</li>
                <li class="text-meet_sodomy mr-4">개인정보처리방침</li>
                <li class="mr-4 font-light text-meet_gray">|</li>
                <li>운영정책</li>
              </ul>
            </div>
            <div class="mt-4 text-left text-[0.8125rem] flex w-full justify-between items-end">
              <div class="flex-1">
                <div>
                  <div class="inline-block mr-3">
                    <span class="font-medium">상호 : </span>
                    <span>(주)케이비즈플래닛</span>
                  </div>
                  <div class="inline-block mr-3">
                    <span class="font-medium">대표 : </span>
                    <span>황성연</span>
                  </div>
                  <div class="inline-block mr-3">
                    <span class="font-medium">주소 : </span>
                    <span>경기도 광주시 문형산길 93, 202-에이8호</span>
                  </div>
                  <div class="inline-block mr-3">
                    <span class="font-medium">사업자 등록번호 : </span>
                    <span>126-86-35315</span>
                  </div>
                </div>
                <div>
                  <div class="inline-block mr-3">
                    <span class="font-medium">통신판매업 신고번호 : </span>
                    <span>2023-용인기흥-2891</span>
                  </div>
                  <div class="inline-block mr-3">
                    <span class="font-medium">이메일 : </span>
                    <span>meetmeet.help@gmail.com</span>
                  </div>
                  <div class="inline-block">
                    <span class="font-medium">상담전화 : </span>
                    <span>070-000-0000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 모바일 버전 -->
        <div class="items-start lg:hidden md:hidden block">
          <!-- 버튼 & 이미지 -->
          <a href="mailto:#">
            <div class="w-full text-3 pl-3 pr-1 py-1 border border-meet_gray rounded-full flex justify-between items-center flex-shrink-0 mt-6">
              <p class="text-[0.8125rem]">궁금한 내용이 있으신가요?</p>
              <button class="px-6 py-3 bg-meet_black text-meet_white font-bold text-[0.8125rem] rounded-full">
                이메일 문의하기
              </button>
            </div>
          </a>
          <div id="toggleBtn"
            class="flex items-center justify-start cursor-pointer mt-6"
          >
            <span class="!m-0 pr-1 text-[0.75rem]">(주)케이비즈플래닛</span>
            <img id="toggleIcon"
              class="!m-0 transition-transform duration-300"
              src="./img/arrow-down.png"
            />
          </div>

          <!-- 펼쳐지는 내용 -->
        <div id="toggleBox" class="overflow-hidden transition-[max-height] duration-500 ease-in-out max-h-0">
            <div class="mt-4">
              <ul class="flex font-semibold text-[0.6875rem]">
                <li class="mr-2">이용약관</li>
                <li class="mr-2 font-light text-meet_gray">|</li>
                <li class="text-meet_sodomy mr-2">개인정보처리방침</li>
                <li class="mr-2 font-light text-meet_gray">|</li>
                <li>운영정책</li>
              </ul>
            </div>
            <div class="mt-4 text-left text-[0.6875rem] w-full">
              <div>
                <div>
                  <span class="inline-block font-medium">대표 : </span>
                  <span>황성연</span>
                  <span class="inline-block ml-2 font-medium">
                    사업자 등록번호 :
                  </span>
                  <span>126-86-35315</span>
                </div>
              </div>
              <div>
                <div>
                  <span class="font-medium">주소 : </span>
                  <span>경기도 광주시 문형산길 93, 202-에이8호</span>
                </div>
                <div>
                  <span class="font-medium">이메일 : </span>
                  <span>meetmeet.help@gmail.com</span>
                </div>
                <div>
                  <span class="font-medium">상담전화 : </span>
                  <span>070-000-0000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- copyright -->
      <div class="lg:mt-[3.75rem] mt-3 lg:px-[6.25rem] md:px-8 px-5 lg:text-center md:text-left text-left">
        <hr class="border-meet_gray w-full lg:opacity-100 md:opacity-0 opacity-0" />
        <div class="lg:mt-4 mb-[3.75rem] text-[#C1C1C1] lg:text-[0.875rem] text-[0.6875rem]">
          Copyright © <span class="font-bold">meetmeet.</span> All rights
          reserved.
        </div>
      </div>
    </div>
    `,n=document.createElement("div");n.innerHTML=l;const i=n.firstElementChild;return setTimeout(()=>{const a=i.querySelector("#toggleBtn"),e=i.querySelector("#toggleIcon"),t=i.querySelector("#toggleBox");let s=!1;a.addEventListener("click",()=>{s=!s,e.classList.toggle("rotate-180",s),e.classList.toggle("rotate-0",!s),t.classList.toggle("max-h-[1000px]",s),t.classList.toggle("max-h-0",!s)})},0),i}function o(){const l=document.createElement("div");l.id="modal",l.className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 hidden",l.innerHTML=`
    <div class="bg-white rounded-[0.75rem] pt-4 px-6 pb-5 shadow-lg lg:w-[28.75rem] md:w-[28.75rem] w-[18.75rem] text-center">
      <div class="lg:text-[1.25rem] md:text-[1.25rem] text-[1rem] font-semibold mb-3 flex items-center justify-between w-full">
        <span class="opacity-0">-</span>
        <p id="modal-title" class="text-center flex-1">제목</p>
        <img src="./img/icon-x-mono.png" class="ml-auto cursor-pointer" id="modal-close" />
      </div>
      <p id="modal-content" class="lg:text-[1rem] md:text-[1rem] text-[0.8125rem] text-gray-600 mt-3 mb-3 whitespace-pre-line">
        내용
      </p>
      <button id="modal-ok" class="mt-3 lg:text-[1rem] md:text-[1rem] text-[0.75rem] bg-meet_pink text-white font-bold lg:py-4 md:py-4 py-3 lg:rounded-[0.75rem] md:rounded-[0.75rem] rounded-[0.5rem] w-full">
        확인
      </button>
    </div>
  `,document.body.appendChild(l)}function m(l,n,i=null){const a=document.getElementById("modal");if(!a)return;a.classList.remove("hidden"),document.getElementById("modal-title").textContent=l,document.getElementById("modal-content").textContent=n;const e=()=>{a.classList.add("hidden"),i&&(window.location.href=i)};document.getElementById("modal-close").onclick=e,document.getElementById("modal-ok").onclick=e}export{d as F,o as M,m as o};
