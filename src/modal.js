// modal.js

export function ModalComponent() {
  const modal = document.createElement("div");
  modal.id = "modal";
  modal.className = "fixed inset-0 flex items-center justify-center bg-black/50 z-50 hidden";

  modal.innerHTML = `
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
  `;

  document.body.appendChild(modal);
}

// ✅ 이 부분 추가!!!
export function openModal(title, content, redirectPath = null) {
  const modal = document.getElementById("modal");
  if (!modal) return;

  modal.classList.remove("hidden");
  document.getElementById("modal-title").textContent = title;
  document.getElementById("modal-content").textContent = content;

  const close = () => {
    modal.classList.add("hidden");
    if (redirectPath) {
      window.location.href = redirectPath;
    }
  };

  document.getElementById("modal-close").onclick = close;
  document.getElementById("modal-ok").onclick = close;
}
