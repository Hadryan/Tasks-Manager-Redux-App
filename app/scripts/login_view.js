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
      store.dispath({
        type: 'GET_TASKS',
        user: $('.username').val()
      })

      store.dispath({
        type: 'POST_USER',
        user: $('.username').val(),
        email: $('.email').val(),
        password: $('.password').val()
      })
    })

    return $html;
}
