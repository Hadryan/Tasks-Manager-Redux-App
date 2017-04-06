export default function postTask(store, name, description, completed, date, important) {
  var state = store.getState();
  const token = state.userToken;

    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: 'https://api.backendless.com/v1/data/Tasks',
        headers: {
            'application-id': "85577861-2A70-62E0-FFC7-B56EDDAFC300",
            'secret-key': "71A87D8E-1294-CD5F-FFF6-C9311CC4CD00",
            'user-token': token,
            'Content-Type': 'application/json',
            'application-type': 'REST'
        },
        data: JSON.stringify({
            "name": name,
            "description": description,
            "state": false, 
            "due_date": date,
            "important": important
        })
    }).then((status) => {
        console.log(status);
        store.dispatch({
            type: 'GET_TASKS'
        })
    })
} 
