export default function appView(store) {
    let tasks = store.getState().tasks
    let user = store.getState().user


console.log(tasks);

  console.log("This is the appView log");
let $html =$(`
  <div class="tasks-page">
      <h1 class='app-title'>GTD: Get Tasks Done!</h1>
      <div class="user-welcome">
          <h2>Welcome ${user}<button class="logout-btn" type="button" name="logout">LOG OUT</button></h2>
      </div>
      <div class="input-form">
          <form class="tasks-form">
            <input type="text" name="" placeholder="task name">
            <input type="text" name="" placeholder="description">
            <label for="state">Due Date:</label>
            <input type="date" name="due-date" value="">
            <label for="state">Important</label>
            <input type="checkbox" name="important" value="yes">
            <button id="add-task-btn" class="input-btn" name="button">ADD TASK</button>
          </form
      </div>
      <div class="tasks-container">
        <section class="input-form">
          <table class="form-container">

          </table>
      </div>
  </div>
  `)

var formContainer = $html.find('.form-container')

tasks.forEach((task)=>{
  console.log(task);
  var taskLine = $(`
    <tr>
    <col width="1%">
    <col width="24%">
    <col width="40%">
    <col width="15%">
    <col width="20%">
      <td><input type="checkbox" name="state" value="">${task.state}</td>
      <td>${task.Name}</td>
      <td>${task.description}</td>
      <td>${task.due}</td>
      <td>${task.important}</td>
    </tr>
    `)
  $(formContainer).append(taskLine);
})


$html.find('#add-task-btn').on('click', (e)=>{
  e.preventDefault()
 console.log('add a task soon');
})

$html.find('.logout-btn').on('click', (e)=>{
  console.log('log out eventually');
})


return $html;

}
