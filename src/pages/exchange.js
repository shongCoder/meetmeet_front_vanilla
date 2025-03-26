import { HeaderBlackF } from "../HeaderBlackF.js";
import "../input.css";
import "../style.css";

const base = '/meetmeet_front_vanilla/';

document.querySelector("#contents").innerHTML = `
${HeaderBlackF()}
     <div>
      <div class="lg:mt-[10.625rem] md:mt-[10.625rem] mt-[8.75rem] text-meet_black text-center font-bold lg:text-[3.25rem] md:text-[3.25rem] text-[1.75rem]">
        포인트 환전
      </div>
      <div class="text-meet_text text-center lg:text-[1.25rem] md:text-[1.25rem] text-[0.875rem] mt-2 mb-8 w-full">
        인플루언서 활동 수익을 환전할 수 있어요
      </div>

      <div class="lg:px-0 lg:w-[50rem] md:px-8 px-5 w-full lg:flex lg:gap-5 md:flex md:gap-5 flex-none">
        <div class="w-full border-meet_gray border p-5 flex items-center justify-between rounded-[0.75rem] shadow-[0px_12px_12px_rgba(54,49,189,0.02)] lg:mb-0 md:mb-0 mb-2">
          <span class="text-left font-medium text-meet_text text-[0.875rem] flex-1">
            보유중인 환전 가능 포인트
          </span>
          <span class="text-right font-bold text-meet_pink text-[1.25rem] flex-1">
            600,000P
          </span>
        </div>
        <div class="w-full border-meet_gray border p-5 flex items-center justify-between rounded-[0.75rem] shadow-[0px_12px_12px_rgba(54,49,189,0.02)]">
          <span class="text-left font-medium text-meet_text text-[0.875rem] flex-1">
            예상 수익금
          </span>
          <div>
            <span class="text-right font-bold text-meet_sodomy text-4 mr-3">
              469,980P
            </span>
            <button id="exchange-btn"
              class="bg-meet_sodomy px-4 py-[0.375rem] rounded-[0.5rem] text-meet_white font-semibold text-[0.8125rem]"
            >
              환전신청
            </button>
          </div>
        </div>
      </div>

      <!-- 수익금 내역 -->
      <div class="lg:px-0 lg:w-[50rem] md:px-8 px-5 w-full mt-10">
        <span class="text-left text-[1.25rem] font-bold">수익금 내역</span>
        <div class="w-full bg-meet_gray h-[1px] mt-4"></div>
          <div id="no-record" class="w-full text-center mt-[3.75rem]">
            <div class="text-[1.125rem] font-bold text-meet_black">
              아직까지 환전한 내역이 없습니다.
            </div>
            <div class="text-[0.8125rem] font-light text-meet_text mt-1">
              환전 가능한 포인트가 있으시다면 지금 바로 환전해 보세요!
            </div>
            <button
              class="bg-meet_sodomy py-3 px-[2.625rem] text-meet_white font-bold rounded-[0.5rem] mt-5"
            >
              환전신청
            </button>
          </div>
          <div id="record-list" class="w-full mt-1 hidden">
            <div>
              <div class="w-fit mt-7 bg-meet_pink font-semibold text-[0.75rem] text-meet_white px-2 py-1 rounded-[0.25rem] ml-0">
                진행중
              </div>
              <div class="mt-2">
                <span class="text-meet_black mr-1 font-medium">수익금</span>
                <span class="text-meet_blue font-bold">78,330원</span>
              </div>
              <div class="text-meet_text text-[0.75rem] mt-4 font-light">
                <span>#5894440</span>
                <span class="mx-2 text-[#c1c1c1]">&#183;</span>
                <span>주문 접수일 : 25.01.19 14:04</span>
                <span class="mx-2 text-[#c1c1c1]">&#183;</span>
                <span>100,000P</span>
              </div>
              <div class="w-full bg-[#f1f1f1] h-[1px] mt-3"></div>
            </div>
            <div>
              <div class="w-fit mt-7 bg-meet_sodomy font-semibold text-[0.75rem] text-meet_white px-2 py-1 rounded-[0.25rem] ml-0">
                환전완료
              </div>
              <div class="mt-2">
                <span class="text-meet_black mr-1 font-medium">수익금</span>
                <span class="text-meet_blue font-bold">468,980원</span>
              </div>
              <div class="text-meet_text text-[0.75rem] mt-4 font-light">
                <span>#5876927</span>
                <span class="mx-2 text-meet_gray">&#183;</span>
                <span>주문 접수일 : 25.01.14 09:54</span>
                <span class="mx-2 text-meet_gray">&#183;</span>
                <span>6 00,000P</span>
              </div>
              <div class="w-full bg-[#f1f1f1] h-[1px] mt-3"></div>
            </div>
          </div>
      </div>

      <!-- 수익금 환전 안내 -->
      <div class="lg:px-0 lg:w-[50rem] md:px-8 px-5 w-full mt-20 mb-20">
        <div class="bg-meet_light_gray rounded-[0.75rem] p-5">
          <div class="font-bold text-meet_sodomy">수익금 환전 안내</div>
          <div class="text-meet_text mt-2">
            <ul class="pl-2 space-y-2 text-[0.8125rem]">
              <li class="relative flex items-start gap-2">
                <span class="text-meet_text text-sm leading-none translate-y-[4px]">
                  •
                </span>
                <p class="flex-1">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </li>
              <li class="relative flex items-start gap-2">
                <span class="text-meet_text text-sm leading-none translate-y-[4px]">
                  •
                </span>
                <p class="flex-1">
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
`

const exchangeBtn = document.querySelector("#exchange-btn");
const noRecord = document.querySelector("#no-record");
const recordList = document.querySelector("#record-list");

let isRecordVisible = false; // 현재 상태 추적용

exchangeBtn.addEventListener("click", () => {
  isRecordVisible = !isRecordVisible;

  if (isRecordVisible) {
    noRecord.classList.add("hidden");
    recordList.classList.remove("hidden");
  } else {
    noRecord.classList.remove("hidden");
    recordList.classList.add("hidden");
  }
});