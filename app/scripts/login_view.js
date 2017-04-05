export default function loginView(store) {
  let $html = $(`
    <form>
      <label for="username">Username:</label>
      <input class="username" type="text"  placeholder="Username">
      <label for="email">Email:</label>
      <input class="email" type="text"  placeholder="Email">
      <label for="Password">Password:</label>
      <input class="password" type="password"  placeholder="Password">
      <button type="button">Sign In</button>
    </form>
    `)
    $html.find('button').on('click', function(e){
      store.dispatch({
        type: 'LOGGED_IN',
        user: 'Joe',
        // $('.username').val(),
        email: 'joebumbulis@gmail.com',
        // $('.email').val(),
        password: 'password'
        // $('.password').val()
      })


    })

    return $html;
}
