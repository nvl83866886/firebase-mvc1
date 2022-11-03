// let model={}
// const firebaseApp = firebase.initializeApp({
//   apiKey: "AIzaSyCcsMeKQHI7NSYWGeq0cahA-ppY8g01DZw",
//   authDomain: "luat-d7d69.firebaseapp.com",
//   projectId: "luat-d7d69",
//   storageBucket: "luat-d7d69.appspot.com",
//   messagingSenderId: "630562699643",
//   appId: "1:630562699643:web:136d5548c318b793e9a5de",
//   measurementId: "G-P83E6BBP0G",
//   /* Firebase config */
// });
// const db = firebaseApp.firestore();
// const auth = firebaseApp.auth();
// model.register= async (data)=>{
//   console.log("mode",data);
// try {
//   let response = await auth.createUserWithEmailAndPassword(data.email,data.password);
//  view.setScreenActive("logiPage")
// } catch (error) {
//   alert(error.message)
// }

// }
// model.login = (data) => {
//   console.log("daaaaaaa",data);
// }
// model.login = async (data) => {
//   try {
//       // console.log("mode11111",data);
//       let respose = await auth.signInWithEmailAndPassword(data.email,data.password);
//       // auth.currentUser.sendEmailVerification();
//       // view.setScreenActive("web");
//       console.log("1111",auth.currentUser);
//       if (respose && auth.currentUser.emailVerified) {
//           view.setScreenActive("web");
//       } else {
//           alert("plaee emailVerified")
//       }
      
//   } catch (error) {
//       alert(error.message);
//   }
// }




const model = {};
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDzHdmzCGoxUwNplZ1p9TpWpo5srfCRoWo",
    authDomain: "lebamanhpj.firebaseapp.com",
    projectId: "lebamanhpj",
    storageBucket: "lebamanhpj.appspot.com",
    messagingSenderId: "1062903151492",
    appId: "1:1062903151492:web:49af81d981e28cf3b2fbd1"
    /* Firebase config */
});
// console.log(firebaseApp);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
// console.log(auth);
model.register = async (data) => {
    try {
        console.log("mode",data);
        let respose = await auth.createUserWithEmailAndPassword(data.email,data.password);
        // console.log("33333",auth.currentUser);
        view.setScreenActive("loginPage");
        auth.currentUser.sendEmailVerification();
    } catch (error) {
        alert(error.message);
    }
}
model.login = (data) => {
    console.log("daaaaa", data);
}

model.login = async (data) => {
    try {
        // console.log("mode11111",data);
        let respose = await auth.signInWithEmailAndPassword(data.email,data.password);
        // auth.currentUser.sendEmailVerification();
        // view.setScreenActive("web");
        console.log("1111",auth);
        if (respose && auth.currentUser.emailVerified) {
        //   let sessionTest = await  firebaseApp.auth().setPersistence(auth.Persistence.SESSION)
        //   console.log(sessionTest);
            view.setScreenActive("web");
        } else {
            alert("plaee emailVerified")
        }
        
    } catch (error) {
        alert(error.message);
    }
}