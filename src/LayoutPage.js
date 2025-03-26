import { HeaderWhite } from "./HeaderWhite.js";
import { HeaderBlack } from "./HeaderBlack.js";
import { ModalComp } from "./modalcomp.js";

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
        } else if (scrollY > 50 && isWhiteHeader) {
            isWhiteHeader = false;
            headerWhite.classList.remove("show");
            headerBlack.classList.add("show");
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
    return `
    ${HeaderWhite()}
    ${HeaderBlack()}
    
    <button id="topButton" class="fixed bottom-6 right-6 z-[100] w-12 h-12 bg-meet_black rounded-full shadow-[0px_0px_100px_#3631BD] transition-all duration-300 transform opacity-100 translate-y-0 hidden" onclick="scrollToTop()"> 
    <img src="./img/arrow-top.png" class="w-[1.25rem]"> </button>
  `;
}
