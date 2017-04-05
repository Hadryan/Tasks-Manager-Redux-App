export default function getTasks(store){
var state = store.getState();
var token = state.userToken;
console.log(token);

  $.ajax({
    type: 'GET',
    dataType: 'json',
    url: 'https://api.backendless.com/v1/data/tasks',
    headers: {
      'application-id':  "85577861-2A70-62E0-FFC7-B56EDDAFC300",
      'secret-key':  "71A87D8E-1294-CD5F-FFF6-C9311CC4CD00",
      'user-token': token
    },

  }).then((data, status)=> {
    console.log(data);
    // var tasks = state.data.map((task)=> {
    var tasks = data.map((task)=> {
        return state.task.objects
    })
    console.log(tasks);
    store.dispatch({
      type: 'TASKS_LOADED',
      tasks: tasks
    })
  })
}
