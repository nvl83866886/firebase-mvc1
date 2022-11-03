window.onload=()=>{
    firebase.auth().onAuthStateChanged((user)=>{
        // console.log(user);
        if(user) {
            view.setScreenActive("web");
        } else {
            view.setScreenActive("registerPage");
        }
    })
    view.setScreenActive("registerPage")
}