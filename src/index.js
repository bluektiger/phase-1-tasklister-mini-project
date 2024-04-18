document.addEventListener("DOMContentLoaded", () => {
  // your code here
   // set a variable reference to the html object
   const form = document.querySelector("form");
// attach the submit eventlistener to new task form
   form.addEventListener('submit', (e) => {e.preventDefault();
    // creates a variable that holds the value of the targeted input
  const newToDo = e.target.querySelector('#new-task-description').value
// pass in the new to do variable as an arguement to buildToDo
buildToDo(newToDo);
form.reset();
});

});
function buildToDo(newToDo) {
  const taskLi = document.createElement('li' ) ;
  const deleteBtn = document.createElement('button');

  // so we need a text in the delete button on our case it will be an 'x'
  deleteBtn.textContent = ' x ';
// we have to append the taskLi to the li element
  taskLi.textContent = ' newToDo ';

  taskLi.appendChild(deleteBtn);
  document.querySelector('#tasks').appendChild(taskLi) ;

  // finnaly we add event on click
  deleteBtn.addEventListener('click', handleDelete) ;
}
function handleDelete(e) {
  e.target.parentNode.remove() ;
}