const refFormLogin = document.querySelector(".login-form");

refFormLogin.addEventListener("submit", (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value !== "" && password.value !== "") {
    const user = {
      email: email.value,
      password: password.value,
    };
    console.log(user);
    refFormLogin.reset();
    return;
  }
  alert("Усі поля повинні бути заповнені!");
});
