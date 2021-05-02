`use-strict`
{
  const todos = [];


  const listReset = () => {
    const lists = document.querySelectorAll(`tr`)
    lists.forEach(function (list, i) {
      if (i > 0) {
        list.remove();
      }
    });
  };


  const addList = () => {
    listReset();
    for (let i = 0; i < todos.length; i++) {
      if (document.group.task[1].checked && todos[i].statusValue % 2 === 0) {
        continue;
      } else if (document.group.task[2].checked && todos[i].statusValue % 2 !== 0) {
        continue;
      } else {
        const tr = document.createElement(`tr`);
        document.querySelector(`table`).appendChild(tr);

        const id = document.createElement(`td`);
        id.textContent = i;
        tr.appendChild(id);

        const coment = document.createElement(`td`);
        coment.textContent = todos[i].task;
        tr.appendChild(coment);

        const workBtntd = document.createElement(`td`)
        const workBtn = document.createElement(`input`)
        if (todos[i].statusValue % 2 === 0) {
          workBtn.value = `完了`;
        } else {
          workBtn.value = `作業中`;
        };

        workBtn.type = `button`;
        workBtn.classList.toggle(`btn`);
        workBtn.classList.toggle(`sta`);
        tr.appendChild(workBtntd);
        workBtntd.appendChild(workBtn);
        workBtn.addEventListener(`click`, () => {
          todos[i].statusValue++;
          addList();
        });

        const delBtntd = document.createElement(`td`);
        const delBtn = document.createElement(`input`);
        delBtn.value = `削除`;
        delBtn.type = `button`;
        delBtn.classList.toggle(`btn`);
        delBtn.classList.toggle(`del`);
        tr.appendChild(delBtntd);
        delBtntd.appendChild(delBtn);
        delBtn.addEventListener(`click`, () => {
          todos.splice(i, 1);
          addList();
        });
      }
    }
  }


  function func() {
    addList();
  };


  document.getElementById(`add`).addEventListener(`click`, () => {
    const todo = {
      task: document.getElementById(`add-text`).value,
      statusValue: 1,
    };
    todos.push(todo);
    addList();
    document.getElementById(`add-text`).value = ``
  });

}



