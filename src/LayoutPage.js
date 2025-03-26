import { HeaderWhite } from "./HeaderWhite.js";
import { HeaderBlack } from "./HeaderBlack.js";
import { ModalComp } from "./modalcomp.js";
import { Hamberger } from "./hamberger.js";

export function LayoutPage() {
  let isWhiteHeader = true;

  window.initLayout = function () {
    handleScroll();
    setTimeout(showModal, 3000);
  };

  window.onscroll = function () {
    handleScroll();
  };

  window.handleScroll = function () {
    const scrollY = window.scrollY;
    const headerWhite = document.getElementById("header-white");
    const headerBlack = document.getElementById("header-black");
    const topButton = document.getElementById("topButton");
  
    if (scrollY <= 50 && !isWhiteHeader) {
      isWhiteHeader = true;
      headerWhite.classList.add("show");
      headerBlack.classList.remove("show");
  
      // 0.5초 뒤에 hidden 처리
      setTimeout(() => {
        if (isWhiteHeader) { // 상태 변화가 중간에 다시 발생하지 않았는지 확인
          headerBlack.classList.add("hidden");
        }
      }, 300);
    } else if (scrollY > 50 && isWhiteHeader) {
      isWhiteHeader = false;
      headerWhite.classList.remove("show");
  
      // hidden 먼저 해제
      headerBlack.classList.remove("hidden");
  
      // 0.5초 뒤에 show 추가
      setTimeout(() => {
        if (!isWhiteHeader) {
          headerBlack.classList.add("show");
        }
      }, 300);
    }
  
    // Top 버튼 표시 여부
    topButton.classList.toggle("hidden", scrollY <= 200);
  };
  

  window.scrollToTop = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  function showModal() {
    document.getElementById("modal").classList.remove("hidden");
  }

  function closeModal() {
    document.getElementById("modal").classList.add("hidden");
  }

  const header = HeaderBlack();
  document.body.prepend(header);
  const header2 = HeaderWhite();
  document.body.prepend(header2);
  
  return `
    <button id="topButton" class="fixed bottom-6 right-6 z-[100] w-12 h-12 bg-meet_black rounded-full shadow-[0px_0px_100px_#3631BD] transition-all duration-300 transform opacity-100 translate-y-0 hidden" onclick="scrollToTop()"> 
    <img src="./img/arrow-top.png" class="w-[1.25rem]"> </button>
  `;
}
