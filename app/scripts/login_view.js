export default function loginView(store) {
  let $html = $(`
    <form>
      <label for="username">Username:</label>
      <input type="text"  placeholder="Username">
      <label for="email">Email:</label>
      <input type="text"  placeholder="Email">
      <label for="Password">Password:</label>
      <input type="password"  placeholder="Password">
    </form>
    `)

    return $html;
}
