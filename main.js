const scissor = document.querySelector(".scissor");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const strtBtn = document.querySelector(".strt-btn");
const resetBtn = document.querySelector(".reset-btn");
const container_signs = document.querySelector(".iconss"); //div that will hold our selected sign and after clicking on any sign will generate an icon which we selected
const all_icons = document.querySelectorAll(".a"); // accessing all elements of 'choose your sign' container
const result = document.querySelector(".result"); // choose your sign container with class given on top 'result'
let save_selected;

strtBtn.disabled = true;

all_icons.forEach((ele) => {
  const createDiv = (cls, sign) => {
    const selected_sign_div = document.createElement("div");
    const selected_sign = document.createElement("i");
    selected_sign.classList.add(cls);
    selected_sign.classList.add("fa-solid");
    selected_sign.classList.add("resize-icons");
    selected_sign.classList.add(sign);
    selected_sign_div.appendChild(selected_sign);
    container_signs.insertAdjacentElement("beforeend", selected_sign_div);
    save_selected = ele;
  };
  ele.addEventListener("click", () => {
    if (ele == scissor) {
      createDiv("fa-hand-scissors", "scissor");
    } else if (ele == rock) {
      createDiv("fa-hand-fist", "rock");
    } else {
      createDiv("fa-hand", "paper");
    }
    result.innerHTML = "Result:";
    strtBtn.disabled = false;
  });
});

strtBtn.addEventListener("click", () => {
  const gen_randno = Math.floor(Math.random() * 3);

  if (gen_randno == 0) {
    const selected_sign_div = document.createElement("div");
    const selected_sign = document.createElement("i");
    selected_sign.classList.add("fa-hand-scissors");
    selected_sign.classList.add("scissor");
    selected_sign.classList.add("fa-solid");
    selected_sign.classList.add("resize-icons");
    selected_sign_div.appendChild(selected_sign);
    container_signs.insertAdjacentElement("afterbegin", selected_sign_div);

    if (save_selected == rock) {
      result.innerHTML = "Rock won";
    } else if (save_selected == scissor) {
      result.innerHTML = "Draw Game";
    } else if (save_selected == paper) {
      result.innerHTML = "Scissor won";
    }
  } else if (gen_randno == 1) {
    const selected_sign_div = document.createElement("div");
    const selected_sign = document.createElement("i");
    selected_sign.classList.add("fa-hand-fist");
    selected_sign.classList.add("fa-solid");
    selected_sign.classList.add("rock");
    selected_sign.classList.add("resize-icons");
    selected_sign_div.appendChild(selected_sign);
    container_signs.insertAdjacentElement("afterbegin", selected_sign_div);

    if (save_selected == paper) {
      result.innerHTML = "Paper won";
    } else if (save_selected == scissor) {
      result.innerHTML = "Rock won";
    } else if (save_selected == rock) {
      result.innerHTML = "Draw Game";
    }
  } else {
    const selected_sign_div = document.createElement("div");
    const selected_sign = document.createElement("i");
    selected_sign.classList.add("fa-hand");
    selected_sign.classList.add("fa-solid");
    selected_sign.classList.add("paper");
    selected_sign.classList.add("resize-icons");
    selected_sign_div.appendChild(selected_sign);
    container_signs.insertAdjacentElement("afterbegin", selected_sign_div);

    if (save_selected == rock) {
      result.innerHTML = "Paper won";
    } else if (save_selected == scissor) {
      result.innerHTML = "Scissor won";
    } else if (save_selected == paper) {
      result.innerHTML = "Draw Game";
    }
  }

  strtBtn.disabled = true;
});
resetBtn.addEventListener("click", () => {
  window.location.reload();
});
