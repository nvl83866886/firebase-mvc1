const view = {};
view.setScreenActive = (screenName) => {
  switch (screenName) {
    case "registerPage":
      let app = document.getElementById("app");
      app.innerHTML = component.regesterPage;
      let registerForm = document.getElementById("registerForm");
      registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
       let data={
        firstName:registerForm.firstName.value,
        lastName:registerForm.lastName.value,
        email:registerForm.email.value,
        password:registerForm.password.value,
        confirmPassword:registerForm.confirmPassword.value,
       }
      controller.register(data)
      });
      view.setErrorMessage = (id, content) => {
        document.getElementById(id).innerHTML=content;
      }
      document.getElementById("redirectLogin").addEventListener("click",()=>{
        view.setScreenActive("")
      })
      break;
      case "web":
        document.getElementById("app").innerHTML = component.web
      default:
      break;
  }
};
