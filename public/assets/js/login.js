    // var key = require("../../../keys.js");

    // console.log("key");
    
    // Initialize Firebase
    // FIXME: Hide api keys!!!!!
    var config = {
        apiKey: "AIzaSyAby5-flRUZH79bi_fxcUy_RlIi0MCm4zY",
        authDomain: "go-feed-me-project-2.firebaseapp.com",
        databaseURL: "https://go-feed-me-project-2.firebaseio.com",
        projectId: "go-feed-me-project-2",
        storageBucket: "go-feed-me-project-2.appspot.com",
        messagingSenderId: "771848633863"
    };
    firebase.initializeApp(config);

    // Set firebase auth state presistance 

    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
        .then(function () {
            // Existing and future Auth states are now persisted in the current
            // session only. Closing the window would clear any existing state even
            // if a user forgets to sign out.
            // ...
            // New sign-in will be persisted with session persistence.
            return firebase.auth().signInWithEmailAndPassword(email, password);
        })
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
        });

    // Get elements

    const textEmail = document.getElementById("textEmail");
    const textPassword = document.getElementById("textPassword");
    const btnLogin = document.getElementById("btnLogin");
    const btnSignUp = document.getElementById("btnSignUp");
    const btnLogout = document.getElementById("btnLogout");

    // Add email vailidation

    document.getElementById("textEmail").addEventListener("focusout", emailValidate);

    function emailValidate() {
        const invalidEmail = document.getElementById("invalidEmail");

        var pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

        if (pattern.test(textEmail.value) && textEmail.value !== "") {
            console.log("email validated");
            invalidEmail.setAttribute("style", "display: none");
            return true;
        } else {
            console.log("email not valid");
            invalidEmail.removeAttribute("style", "display: none");
            invalidEmail.setAttribute("style", "color:red; font-size: 12px;");
            return false;
        }
    };

    // Add password validadtion

    document.getElementById("textPassword").addEventListener("focusout", passwordValidate);

    function passwordValidate() {
        const invalidPassword = document.getElementById("invalidPassword");

        var pattern = /^(?=.*\d).{6,14}$/;

        if (pattern.test(textPassword.value) && textPassword.value !== "") {
            console.log("password validated");
            invalidPassword.setAttribute("style", "display: none");
            return true;
        } else {
            console.log("password not valid");
            invalidPassword.removeAttribute("style", "display: none");
            invalidPassword.setAttribute("style", "color:red; font-size: 12px;");
            return false;
        }
    };

    // Add log in event
    // TODO: let user know if they have successfully logged in or need to sign up 
    btnLogin.addEventListener("click", e => {
        // Get email and pass 
        const email = textEmail.value;
        const pass = textPassword.value;
        const auth = firebase.auth();

        

        // Log in 
        if (emailValidate() && passwordValidate()) {
            const promise = auth.signInWithEmailAndPassword(email, pass);

            promise.catch(e => console.log(e.massage));

            document.getElementById("formLogin").reset();

            console.log("firebaseKey");
        }
    });

    // Add sign up event 
    // TODO: let user know they have successfully signed up  
    btnSignUp.addEventListener("click", e => {
        const email = textEmail.value;
        const pass = textPassword.value;
        const auth = firebase.auth();
        // Sign up
        if (emailValidate() && passwordValidate()) {
            const promise = auth.createUserWithEmailAndPassword(email, pass);

            promise.catch(e => console.log(e.massage));

            document.getElementById("formLogin").reset();
        }
    });

    // Add logout event 

    btnLogout.addEventListener("click", e => {
        firebase.auth().signOut();
        document.getElementById("formLogin").reset();
    })

    // Add/remove logout option

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            console.log(firebaseUser);
            btnLogout.removeAttribute("style");
            // window.location = "/home"
        } else {
            console.log("Not logged in");
            btnLogout.setAttribute("style", "display: none;");
            // window.location = "/"
        }
    });


