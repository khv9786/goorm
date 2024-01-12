const list = document.getElementById("list");
const createBtn = document.getElementById("create-btn");
console.log("아 왜안돼");
//내용 데이터
let todos = [];

createBtn.addEventListener("click", createNewTodo);
function createNewTodo() {
  //새로운 아이템 객체 생성
  const item = {
    id: new Date().getTime(),
    text: "",
    complete: false,
  };

  //배열 처음에 새로운 아이템 추가
  todos.unshift(item);

  //요소 생성하기
  const { itemEl, inputEl, editBtnEl, removeBtnEl } = createTodoElement(item);

  //리스트 앞에 추가 pre
  list.prepend(itemEl);

  //수정기능, 포커스 기능
  inputEl.removeAttribute("disabled");
  inputEl.focus();
  savedLocalStorage();
}

function createTodoElement(item) {
  const itemEl = document.createElement("div");
  itemEl.classList.add("item");

  const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    // 체크되면 complete 설정
  checkbox.checked = item.complete;

  if (item.complete) {
    itemEl.classList.add("complete");
  }

  const inputEl = document.createElement("input");
  inputEl.type = "text";
  inputEl.value = item.text;
  inputEl.setAttribute("disabled", "");

  const actionsEl = document.createElement("div");
  actionsEl.classList.add("actions");

  const editBtnEl = document.createElement("button");
  editBtnEl.classList.add("material-icons");
  editBtnEl.innerText = "edit";

  const removeBtnEl = document.createElement("button");
  removeBtnEl.classList.add("material-icons", "remove-btn");
  removeBtnEl.innerText = "remove_circle";

  actionsEl.append(editBtnEl);
  actionsEl.append(removeBtnEl);

  itemEl.append(checkbox);
  itemEl.append(inputEl);
  itemEl.append(actionsEl);

  checkbox.addEventListener("change", () => {
    item.complete = checkbox.checked;
    //체크박스 토글 기능
    if (item.complete) {
      itemEl.classList.add("complete");
    } else {
      itemEl.classList.remove("complete");
    }

    savedLocalStorage();
  });

  inputEl.addEventListener("input", () => {
    item.text = inputEl.value;
  });

  inputEl.addEventListener("blur", () => {
    inputEl.setAttribute("disabled", "");

    savedLocalStorage();
  });

  editBtnEl.addEventListener("click", () => {
    inputEl.removeAttribute("disabled");
    inputEl.focus();
  });

  removeBtnEl.addEventListener("click", () => {
    todos = todos.filter((t) => t.id != item.id);
    itemEl.remove();

    savedLocalStorage();
  });

  return { itemEl, inputEl, editBtnEl, removeBtnEl };
}

function savedLocalStorage() {
    const data = JSON.stringify(todos);
	localStorage.setItem("my_todos", data);
}

function loadFromLocalStorage() {
    const data = localStorage.getItem("my_todos");

	if (data) {
		todos = JSON.parse(data);
	}
}

function displayTodos() {
	loadFromLocalStorage();

	for (let i = 0; i < todos.length; i++) {
		const item = todos[i];

		const { itemEl } = createTodoElement(item);

		list.append(itemEl);
	}
}

displayTodos();
