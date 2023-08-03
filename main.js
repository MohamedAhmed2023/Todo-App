const btn = document.querySelector(".add-task");
let txt = document.querySelector(".new-task");
const Divstasks = document.querySelector(".todo-list");

btn.addEventListener("click", add);

function add() {
  const newtxt = document.querySelector(".new-task").value;
  const lists = document.createElement("li");
  const BtnDel = document.createElement("button");
  const txtBtn = document.createTextNode("delete");
  lists.innerText = newtxt;
  // style
  BtnDel.style.cssText =
    "padding:6px 14px; border-radius: 10px;color:white; background-color: #311b92;border:none;cursor: pointer;";
  lists.style.cssText =
    "background-color: azure;list-style: none;padding:10px;background-color:#051937 ;color: white;font-size: 17px; margin: 10px 0;  display: flex;justify-content: space-between; border-radius: 10px;";
  // appendchiled
  document.querySelector(".todo-list").appendChild(lists);
  lists.appendChild(BtnDel);
  BtnDel.appendChild(txtBtn);

  // function
  BtnDel.addEventListener("click", function () {
    localStorage.removeItem("input-value");
    lists.remove();
  });

  if (newtxt === "") {
    lists.remove();
  }

  // localStorage
  window.localStorage.setItem("input-value", newtxt);
}
// function

window.onload = function () {
  txt.focus();
};
