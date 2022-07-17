window.addEventListener("load", function () {


  const list = document.querySelector(".list");
  const btn = document.querySelector(".btn");


  function createNotes(text) {
    const li = document.createElement("li");
    li.classList.add("item");
    li.innerText = text;
    list.append(li);
    li.addEventListener("click", notesDelete);
  }


  function notesDelete () {
    this.removeEventListener("click", notesDelete);
    this.remove();

  }


  function handleClick () {
    const input = this.previousElementSibling.value.trim();

    if (input) {
      createNotes(input);
      this.previousElementSibling.value = "";
    }else {
      btn.style.backgroundColor = "red";
    }
  }

  btn.addEventListener("click", handleClick);
})