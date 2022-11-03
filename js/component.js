const component = {};
component.regesterPage = `
<div class="register-container">
        <form class="register-form" id="registerForm">
            <div>
                <input style="margin-top: 50px ;" type="text" placeholder="first name"name="firstName">
                <div class="error" id="firstName"></div>  
            </div>
            <div>
                <input type="text" placeholder="last name"name="lastName">
                <div class="error" id="lastName"></div>  
                
            </div>
                <input type="text" placeholder="email"name="email">
                <div class="error" id="email"></div>  
                
            <div>
                <input type="text" placeholder="password" name="password">
                <div class="error" id="password"></div>  
                
            </div>
        <div>
            <input type="text" placeholder="confirmPassword" name="confirmPassword">
            <div class="error" id="confirmPassword"></div>  

        </div>
        <div>
            bạn đã có tài khoản? <a > login</a>
        </div>
        <button type="submit" style="margin-top: 30px ;"> Register </button>
        </form>
    </div>`

    component.web
    dispatchEvent





// const component = {};
// component.Register = `
// <div class="container">
//     <div class="register-container">
//         <div class="title">REGISTER</div>
//         <form class="register-form" id ="registerForm">
//             <div class="ibt">
//                 <div class="inputs"><input type="text" placeholder="FirstName" name = "firstName"></div>
//                 <div class="error"  id="firsName">  </div>
//             </div>
//             <div class="ibt">
//                 <div class="inputs"><input type="text" placeholder="LastName" name = "lastName"></div>
//                 <div class="error" id="lastName">  </div>
//             </div>
//             <div class="ibt">
//                 <div class="inputs"><input id="inputs" type="text" placeholder="Email" name = "email"></div>
//                 <div class="error" id="email">  </div>
//             </div>
//             <div class="ibt">
//                 <div class="inputs"><input type="text" placeholder="Password" name = "password"></div>
//                 <div class="error" id="password"> </div>
//             </div>
//             <div class="ibt">
//                 <div class="inputs"><input type="text" placeholder="confirmPassword" name = "confirmPassword"></div>
//                 <div class="error" id="confirmPassword">  </div>
//             </div>
//             <div class="btn">
//                 <button id="registerPage" type="submit">Register</button>
//             </div>
//             <div class="wh"> Bạn đã có tài khoản? <a id="redirectLogin"> Login Now </a> </div>
//         </form>
//     </div>
// </div>
// `
// component.LoginPage = `
// <div class="container">
//     <div class="login-container">
//         <div class="title">LOGIN</div>
//         <form class="login-form" id ="loginForm">
//             <div class="ibt">
//                 <div class="inputs"><input type="text" placeholder="Email" name = "email"></div>
//                 <div class="error" id="email">  </div>
//             </div>
//             <div class="ibt">
//                 <div class="inputs"><input type="text" placeholder="Password" name = "password"></div>
//                 <div class="error" id="password"> </div>
//             </div>
//             <div class="btn">
//                 <button id="loginPage" type="submit">Login</button>
//             </div>
//             <div class="wh"> Bạn chưa có tài khoản? <a id="redirectRegister" > Register Now </a> </div>
//         </form>
//     </div>
// </div>
// `
// component.web = `
// <div class="webpage">
//         <div>
//             wellcome Page
//         </div>
//     <div><a id = "singout"> Signout </a></div>
// </div>
// `