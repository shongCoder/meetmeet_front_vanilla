import { Footer } from "../Footer.js";
import { HeaderBlackF } from "../HeaderBlackF.js";
import "../input.css";
import { ModalComponent } from "../modal.js"; // 모달 컴포넌트
import "../style.css";

const base = "/meetmeet_front_vanilla/";

ModalComponent();

const header = HeaderBlackF();
document.body.prepend(header);

document.querySelector("#contents").innerHTML = `
<div class="w-full md:px-8 px-5 lg:mt-[10.625rem] lg:bg-[url('/img/influencer/bg_img.png')] md:bg-[url('/img/influencer/bg_img_tab.png')] bg-[url('/img/influencer/bg_img_mob.png')] bg-no-repeat lg:h-[180rem] md:h-[180rem] h-[170rem] pt-20 bg-[length:100%_auto]">
          <img
            src="${base}/img/influencer/target.png"
            class="lg:w-[7.5rem] md:w-[7.5rem] w-[6.25rem]"
          />
          <div class="text-meet_text lg:text-[1.5rem] md:text-[1.5rem] text-[1rem] text-center mt-2">
            저희 밋밋을 더 빛나게 해줄
          </div>
          <img
            src="${base}/img/influencer/title.png"
            class="w-[56.25rem] mt-8 lg:block md:block hidden"
          />
          <img
            src="${base}/img/influencer/title_mob.png"
            class="w-[18.375rem] mt-5 lg:hidden md:hidden block"
          />
          <div class="flex justify-center lg:mt-[3.75rem] md:mt-[3.75rem] mt-8 relative z-10">
            <button class="bg-meet_pink hover:bg-meet_pink_hover lg:px-8 md:px-8 px-6 lg:py-5 md:py-5 py-3 shadow-[inset_4px_4px_14px_0_rgba(255,255,255,0.2)] text-meet_white font-bold rounded-full">
              인플루언서 지원하기
            </button>
          </div>
          <div class="lg:mt-[9rem] md:mt-[9rem] mt-7">
            <img src="${base}/img/influencer/girls.png" class="w-[50rem]" />
          </div>
  
          <!-- 박스 모음 -->
          <div class="mt-[-1rem] relative z-10">
            <div
              style=" box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.04)"
              class="lg:w-[50rem] md:w-full w-full lg:h-[17.5rem] md:h-[17.5rem] lg:px-[3.75rem] md:px-[3.75rem] px-10 lg:py-5 md:py-5 py-8
               bg-meet_white rounded-[2.5rem] flex lg:flex-row md:flex-row flex-col lg:items-center md:items-center items-center
               lg:justify-between md:justify-between justify-center gap-6 border border-meet_gray"
            >
              <div class="p-0 m-0 lg:text-left md:text-left text-center">
                <div class="text-[0.75rem] text-meet_white font-bold px-3 py-1 bg-meet_pink rounded-full w-auto inline-block">
                  맛스타 1기 모집
                </div>
                <p class="text-meet_black font-extrabold lg:text-[1.5rem] md:text-[1.5rem] text-[1.2rem] leading-8 mt-3">
                  <span class="block">밋밋에서 여성회원님을</span>
                  <span class="block">공주님 여왕님으로 모시겠습니다!</span>
                </p>
                <p class="text-meet_text text-[0.8125rem] mt-2">
                  25년 4월 1일에서 30일 한달 선착순 300명
                </p>
              </div>
              <div class="p-0 m-0 flex justify-center">
                <img
                  src="${base}/img/influencer/box-img-1.png"
                  class="lg:w-auto md:w-auto w-[80%]"
                />
              </div>
            </div>
  
            <div
              style=" box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.04)"
              class="lg:w-[50rem] md:w-full w-full lg:h-[17.5rem] md:h-auto h-auto lg:px-[3.75rem] md:px-[3.75rem] px-10 lg:py-5 md:py-5 py-8
               bg-meet_white rounded-[2.5rem] flex lg:flex-row md:flex-row flex-col lg:items-center md:items-center items-center
               lg:gap-[3.75rem] md:gap-[3.75rem] gap-6 mt-10 border border-meet_gray"
            >
              <div class="p-0 m-0 flex justify-center lg:block md:block hidden">
                <img
                  src="${base}/img/influencer/box-img-2.png"
                  class="lg:w-auto md:w-auto w-[80%]"
                />
              </div>
  
              <div class="p-0 m-0 lg:text-left md:text-left text-center">
                <div class="text-[0.75rem] text-meet_white font-bold px-3 py-1 bg-meet_pink rounded-full w-auto inline-block">
                  밋밋 뇌물
                </div>
  
                <p class="text-meet_black font-extrabold lg:text-[1.5rem] md:text-[1.5rem] text-[1.2rem] leading-8 mt-3">
                  <span class="block">시급 54,000원</span>
                  <span class="block">밋밋 1기님께 드리는 뇌물</span>
                </p>
  
                <p class="text-meet_text text-[0.8125rem] mt-2">
                  영통 활동시 누적 2시간만 되어도 십만원 익일 지급
                </p>
              </div>
  
              <div class="p-0 m-0 flex justify-center lg:hiddem md:hidden block">
                <img
                  src="${base}/img/influencer/box-img-2.png"
                  class="lg:w-auto md:w-auto w-[80%]"
                />
              </div>
            </div>
  
            <div
              style=" box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.04)"
              class="lg:w-[50rem] md:w-full w-full lg:h-[17.5rem] md:h-auto h-auto lg:px-[3.75rem] md:px-[3.75rem] px-10 lg:py-5 md:py-5 py-8
               bg-meet_white rounded-[2.5rem] flex lg:flex-row md:flex-row flex-col lg:items-center md:items-center items-center
               lg:justify-between md:justify-between justify-center lg:gap-0 md:gap-0 gap-6 mt-10 border border-meet_gray"
            >
              <div class="p-0 m-0 lg:text-left md:text-left text-center">
                <div class="text-[0.75rem] text-meet_white font-bold px-3 py-1 bg-meet_pink rounded-full w-auto inline-block">
                  우대 모집
                </div>
  
                <p class="text-meet_black font-extrabold lg:text-[1.5rem] md:text-[1.5rem] text-[1.2rem] leading-8 mt-3">
                  <span class="block">밋밋에서 이런</span>
                  <span class="block">여성분을 우대합니다</span>
                </p>
  
                <p class="text-meet_text text-[0.875rem] font-semibold mt-2">
                  #출근 없이 돈벌고 싶은분
                  <br />
                  #투잡하고 싶은분
                </p>
  
                <p class="text-meet_text text-[0.8125rem] tracking-tight mt-2">
                  #사교적이고 쾌활한 성격 #공감력과 배려심많은분
                  <br />
                  #우울한분 #심심한분 #능력있는 남성을 친구로
                  <br />
                  #외국에 사는 한국남성과 친구하기 #나이트 안가고 남친만들기
                </p>
              </div>
  
              <div class="p-0 m-0 flex justify-center">
                <img
                  src="${base}/img/influencer/box-img-3.png"
                  class="lg:w-auto md:w-auto w-[80%]"
                />
              </div>
            </div>
  
            <div
              style=" box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.04)"
              class="bg-meet_white rounded-[2.5rem] lg:w-[50rem] md:w-full lg:px-0 md:px-0 px-10 py-10 flex flex-col justify-center mt-10 border border-meet_gray"
            >
              <div class="text-[0.75rem] text-meet_white font-bold px-3 py-1 bg-meet_pink rounded-full w-auto inline-block">
                meetmeet
              </div>
              <p class="text-meet_black font-extrabold text-[1.5rem] leading-8 mt-5 text-center">
                밋밋은 건강한 글로벌
                <br />
                성인커뮤니티 플랫폼 입니다.
              </p>
              <p class="text-meet_text text-[0.8125rem] mt-2 text-center">
                지금 바로 밋밋을 시작하세요
              </p>
              <img src="${base}/img/influencer/chat.png" class="w-[22rem] mt-10" />
              <button class="bg-meet_pink hover:bg-meet_pink_hover text-meet_white font-bold text-[0.8125rem] rounded-[0.5rem] lg:w-[22rem] md:w-[22rem] w-full py-3 text-center mx-auto">
                신청하기
              </button>
            </div>
          </div>
        </div>
      </div>
`;

document.querySelector("#contents").appendChild(Footer());
