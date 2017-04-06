export default function postTask(store, name, description, state, date, important) {
  var state = store.getState();
  const token = state.userToken;

    $.ajax({
        type: 'POST',
        contentType: 'application/json',
        url: 'https://api.backendless.com/v1/data/tasks',
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
            "state": state,
            "date": date,
            "important": important
        })
    }).then((data) => {
        console.log(data);
        store.dispatch({
            type: 'GET_TASKS',
        })
    })
} 
