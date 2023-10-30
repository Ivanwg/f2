(() => {
  document.addEventListener('DOMContentLoaded', e => {
    document.querySelector("#show_hide_password button").addEventListener('click', function (event) {
      event.preventDefault();
      console.log(88)
      if (document.querySelector('#show_hide_password input').getAttribute("type") == "text") {
        document.querySelector('#show_hide_password input').setAttribute('type', 'password');
        document.querySelector('#show_hide_password button').classList.add("eye-slash");
        document.querySelector('#show_hide_password button').classList.remove("eye");
      } else if (document.querySelector('#show_hide_password input').getAttribute("type") == "password") {
        document.querySelector('#show_hide_password input').setAttribute('type', 'text');
        document.querySelector('#show_hide_password button').classList.remove("eye-slash");
        document.querySelector('#show_hide_password button').classList.add("eye");
      }
    });
  });

})();