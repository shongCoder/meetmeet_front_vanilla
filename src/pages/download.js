import { Footer } from "../Footer.js";
import { HeaderWhite } from "../HeaderWhite.js";
import { LayoutPage } from "../LayoutPage.js";
import "../input.css";
import { ModalComponent } from "../modal.js";
import "../style.css";

const base = '/meetmeet_front_vanilla/';

ModalComponent();

document.querySelector("#contents").innerHTML = `<div id="page-body"></div>`;

// ✅ 헤더 추가 (body에 직접 붙이기)
const header = HeaderWhite();
document.body.prepend(header);

// ✅ 본문 내용 추가 (page-body 안에)
document.querySelector("#page-body").innerHTML = `
      <div>
        <!-- 웹 버전 -->
        <div class="h-[60rem] bg-[url('/img/download/download_visual.png')] bg-cover lg:bg-center md:bg-right md:bg-[-20rem] lg:px-[6.25rem] flex lg:flex md:flex hidden">
          <div class="lg:w-[50%] md:w-full h-[60rem] flex lg:justify-start items-center lg:bg-meet_black/0 md:to-transparent md:bg-meet_black/80">
            <div>
              <img src="${base}/img/download/app_icon.png" class="w-[16.375rem]" />
              <p class="text-5 text-meet_gray mt-6 text-center">
                만나고 싶은 순간, 지금 바로 밋밋하세요!
              </p>
              <div class="mt-10 flex gap-4">
                <img
                    src="${base}/img/download/appstore.png"
                    class="lg:w-[12.8125rem] md:w-[12.625rem]"
                />
                <img
                    src="${base}/img/download/playstore.png"
                    class="lg:w-[12.8125rem] md:w-[12.625rem]"
                />
              </div>
            </div>
          </div>
          <div class="w-[50%] h-[60rem] lg:block md:hidden"></div>
        </div>

        <!-- 모바일 버전 -->
        <div
            class="w-full h-[50.75rem] bg-[url('/img/main/main_visual.png')] bg-cover lg:bg-center flex lg:hidden md:hidden block">
          <div class="w-full h-[50.75em] px-5 flex items-center bg-gradient-to-b from-meet_black/100 via-[#5c001b]/95 to-meet_pink/95">
            <div>
              <img src="${base}/img/download/app_icon.png" class="w-[13rem]" />
              <p class="text-5 text-meet_gray mt-6 text-center">
                만나고 싶은 순간, 지금 바로 밋밋하세요!
              </p>
              <div class="mt-10 flex gap-4">
                <img
                    src="${base}/img/download/appstore.png"
                    class="w-[10rem]"
                />
                <img
                    src="${base}/img/download/playstore.png"
                    class="w-[10rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
`
document.querySelector("#contents").appendChild(Footer());

LayoutPage();
window.initLayout();