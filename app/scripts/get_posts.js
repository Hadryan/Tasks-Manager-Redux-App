export default function getPosts(store){

  $.ajax({
    type: 'Get',
    dataType: 'json',
    url: 'https://api.backendless.com/v1/users/login',
    headers: {
      'application-id':  "85577861-2A70-62E0-FFC7-B56EDDAFC300",
      'secret-key':  "71A87D8E-1294-CD5F-FFF6-C9311CC4CD00",
      'Content-Type': 'application/json',
      'application-type': 'REST'
    },
    // data: JSON.stringify({
    //   login: login,
    //   password: password
    // })
  }).then((data, status)=> {
    console.log(status);
    // store.dispatch({
    //   type: 'AUTHENTICATED',
    //   userToken: data['user-token']
    // })
  })
}
