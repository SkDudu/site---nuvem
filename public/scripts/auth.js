//status usuario (sempre q logar ou logout)
auth.onAuthStateChanged(user => {
    //console.log(user)
    if(user){
        //console.log('user login:', user)
        setupUI(user);
    }else{
        //console.log('user logged out')
        setupUI();
    }
});

//signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //pegar info usuario
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    //signup usuario
    auth.createUserWithEmailAndPassword(email, password).then(cred =>{
        //console.log(cred.user);
        //close modal e o formulario
        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signupForm.reset();
    });


});

//logout usuario
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
});

//logar usuario
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //pegar info usuario
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred =>{
        //console.log(cred.user);
        //close modal e o formulario
        const modal = document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close();
        loginForm.reset();
    })
})
