const taskInput = document.getElementById("taskinput");
const addbtn = document.getElementById("addbtn");
const tasklist = document.getElementById("tasklist");
addbtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;
  const li = document.createElement("li");
  li.textContent = taskText;
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });
  li.addEventListener("dblclick", () => {
    li.remove();
  });
  tasklist.appendChild(li);
  taskInput.value = "";
});
