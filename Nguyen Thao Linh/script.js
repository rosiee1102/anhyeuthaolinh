"use strict";
alert(
  "Chào vợ ạ, tớ yêu bạn lắm b xem hết cái này tớ làm cho b nhé, hong được đẹp nma hoi tớ làm cả buổi cho b đóoo"
);
const info = document.getElementById("thongtincanhan");
const fomr = document.getElementById("form");
const email = document.getElementById("email");
const buttonSubmit = document.getElementById("submit");
buttonSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  const text = email.value;
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (text.match(mailformat)) {
    info.style.display = "block";
    form.style.display = "none";
  } else {
    alert("Email sai mất rùii!!!");
  }
  return true;
});
const tamsu = document.getElementById("ketcontent");
const phom = document.getElementById("phom");
const gmail = document.getElementById("tamsu");
const buttonXacNhan = document.getElementById("xacnhan");
buttonXacNhan.addEventListener("click", function (event) {
  event.preventDefault();
  const textt = gmail.value;
  const mailformatt = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (textt.match(mailformatt)) {
    tamsu.style.display = "block";
    phom.style.display = "none";
  } else {
    alert("Email sai mất rùii!!!");
  }
  return true;
});
