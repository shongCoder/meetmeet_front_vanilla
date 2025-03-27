import { HeaderBlack } from "./HeaderBlack.js";
import { HeaderWhite } from "./HeaderWhite.js";

let currentHeader = null;
let isWhite = true;

export function LayoutPage() {
  // 초기에 렌더링
  renderHeader(window.scrollY);

  // 스크롤 감지
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

  // 탑 버튼 함수
  window.scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 모달 표시
  window.initLayout = () => {
    const modal = document.getElementById("modal");
    if (modal) {
      setTimeout(() => modal.classList.remove("hidden"), 3000);
    }
  };
}

function renderHeader(scrollY) {
  const newHeader = isWhite ? HeaderWhite() : HeaderBlack();
  newHeader.id = isWhite ? "header-white" : "header-black"; // 혹시 없을 경우 대비
  newHeader.style.opacity = "0";
  newHeader.style.transform = "translateY(-10px)";
  newHeader.style.transition = "all 0.3s ease";

  // ✅ 기존 헤더 제거 (white든 black이든)
  const oldWhite = document.getElementById("header-white");
  const oldBlack = document.getElementById("header-black");
  if (oldWhite) oldWhite.remove();
  if (oldBlack) oldBlack.remove();

  // ✅ 새로운 헤더 삽입
  document.body.prepend(newHeader);
  currentHeader = newHeader;

  // ✅ 애니메이션 트리거
  setTimeout(() => {
    newHeader.style.opacity = "1";
    newHeader.style.transform = "translateY(0)";
  }, 10);
}
