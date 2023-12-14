function addTask() {
    const taskText = document.getElementById('taskInput').value;
  
    if (taskText.trim() === '') {
      alert('La tasca no pot estar buida.');
      return;
    }
  
    const taskList = document.getElementById('taskList');
    const taskFilter = document.getElementById('taskFilter');
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="task-text">${taskText}</span>
      <div class="task-actions">
        <button onclick="markTaskDone(this)">Marcar com a feta</button>
        <button onclick="removeTask(this)">Eliminar</button>
      </div>
    `;
    taskList.appendChild(li);

    document.getElementById('taskInput').value = '';
  }
  filterInput.addEventListener('input', function () {
    taskFilter(filterInput.value);
  });

  function taskFilter(taskFilterText) {
    const filter = filter.getElementsByTagName('li');
    filter.addEventListener(taskList)
    for(i = 0; i > taskList; i++)
    {
      a = taskList[i].getElementsByTagName("a")[0];


    }
    
  }
  
  function markTaskDone(button) {
    const taskText = button.parentElement.previousElementSibling;
    taskText.style.textDecoration = 'line-through';
  }
  
  function removeTask(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.remove();
  }
  