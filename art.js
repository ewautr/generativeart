"use strict";

function init() {
  artWork1();
  artWork2();
  artWork3();
  artWork4();
  artWork5();
  artWork6();
  artWork7();
  artWork8();
  artWork9();
}

function artWork1() {
  for (let i = 100; i < 301; i = i + 20) {
    let div = document.createElement("div");
    div.className = "box";

    div.style.width = i + "px";
    div.style.height = i + "px";

    document.querySelector("#artwork1").append(div);
  }
}

function artWork2() {
  for (let i = 0; i < 91; i = i + 10) {
    let div = document.createElement("div");
    div.className = "box";

    div.style.transform = `rotate(${i}deg)`;

    document.querySelector("#artwork2").append(div);
  }
}

function artWork3() {
  for (let i = 0; i < 201; i = i + 10) {
    let div = document.createElement("div");
    div.className = "circle";

    div.style.width = i + "px";
    div.style.height = i + "px";

    document.querySelector("#artwork3").append(div);
  }
}

function artWork4() {
  for (let i = -90; i < 91; i = i + 20) {
    let div = document.createElement("div");
    div.className = "box";

    div.style.transform = `translate(${i}px, ${i}px)`;

    document.querySelector("#artwork4").append(div);
  }
}

function artWork5() {
  for (let i = 1; i < 513; i = i * 2) {
    let div = document.createElement("div");
    div.className = "circle";

    div.style.width = i + "px";
    div.style.height = i + "px";

    document.querySelector("#artwork5").append(div);
  }
}

function artWork6() {
  for (let i = -20; i < 46; i = i + 5) {
    let div = document.createElement("div");
    div.className = "circle";

    div.style.transform = `translate(-50px, 0) rotate(${i * 4}deg)`;

    document.querySelector("#artwork6").append(div);
  }
}

function artWork7() {
  for (let i = 0; i < 201; i = i + 10) {
    let div = document.createElement("div");
    div.className = "circle";

    div.style.width = i + "px";
    div.style.height = i + "px";
    div.style.transform = `translate(${i}px, ${i / 2}px)`;

    document.querySelector("#artwork7").append(div);
  }
}

function artWork8() {
  for (let i = 50; i < 201; i = i + 10) {
    let div = document.createElement("div");
    div.className = "box";

    div.style.width = i + "px";
    div.style.height = i + "px";
    div.style.transform = `translateX(${i / 2}px) rotate(${i}deg)`;

    document.querySelector("#artwork8").append(div);
  }
}

function artWork9() {
  for (let i = 50; i < 201; i = i + 30) {
    let div = document.createElement("div");
    div.className = "circle box";

    div.style.width = i + "px";
    div.style.height = i + "px";

    document.querySelector("#artwork9").append(div);
  }
}

init();
