import { HeaderBlack } from "./HeaderBlack.js";
import { HeaderWhite } from "./HeaderWhite.js";

let currentHeader = null;
let isWhite = true;

export function LayoutPage() {
  // ✅ Top 버튼 함수 먼저 정의
  window.scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  renderHeader(window.scrollY);
  createTopButton(); // ✅ Top 버튼은 여기서 단 한 번만 생성

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const shouldBeWhite = scrollY <= 50;

    if (shouldBeWhite !== isWhite) {
      isWhite = shouldBeWhite;
      renderHeader(scrollY);
    }

    const topBtn = document.getElementById("topButton");
    if (topBtn) topBtn.classList.toggle("hidden", scrollY <= 200);
  });

  window.initLayout = () => {
    const modal = document.getElementById("modal");
    if (modal) {
      setTimeout(() => modal.classList.remove("hidden"), 3000);
    }
  };
}

function renderHeader(scrollY) {
  const newHeader = isWhite ? HeaderWhite() : HeaderBlack();
  newHeader.id = isWhite ? "header-white" : "header-black";
  newHeader.style.opacity = "0";
  newHeader.style.transform = "translateY(-10px)";
  newHeader.style.transition = "all 0.3s ease";

  const oldWhite = document.getElementById("header-white");
  const oldBlack = document.getElementById("header-black");
  if (oldWhite) oldWhite.remove();
  if (oldBlack) oldBlack.remove();

  document.body.prepend(newHeader);
  currentHeader = newHeader;

  setTimeout(() => {
    newHeader.style.opacity = "1";
    newHeader.style.transform = "translateY(0)";
  }, 10);
}

function createTopButton() {
  if (document.getElementById("topButton")) return;
  const btn = document.createElement("button");
  btn.id = "topButton";
  btn.className =
    "fixed bottom-6 right-6 z-[100] w-12 h-12 bg-meet_black rounded-full shadow-[0px_0px_100px_#3631BD] transition-all duration-300 transform opacity-100 translate-y-0 hidden";
  btn.innerHTML = `<img src="./img/arrow-top.png" class="w-[1.25rem]">`;
  btn.addEventListener("click", window.scrollToTop); // ✅ 이제 정상 작동함
  document.body.appendChild(btn);
}
