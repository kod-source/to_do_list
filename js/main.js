"use strict";

const message = document.getElementById("message");
const list = document.getElementById("list");
const result = document.getElementById("result");

function fun() {
  const li = document.createElement("li");
  const btn1 = document.createElement("button");
  const btn2 = document.createElement("button");
  
  if (message.value === "") {
    alert("何も入力されていません。");
  } else {
    li.textContent = message.value;
    btn1.textContent = "削除";
    btn2.textContent = "完了";
    
    list.appendChild(li);
    li.appendChild(btn1);
    li.appendChild(btn2);
    
    message.value = ""; 
  
    // 削除をクリックしたときの処理
    btn1.addEventListener("click", () => {
      li.remove();
    });

    // 完了ボタンを押したとき
    btn2.addEventListener("click", () => {
      if (li.style.textDecoration === "line-through"){
        li.style.textDecoration = "none";
      } else {
        li.style.textDecoration = "line-through";
      }
    })
  }
 }
 

