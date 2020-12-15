const loggedOutLinks = document.querySelector('.logged-out');
const loggedInLinks = document.querySelector('.logged-in');

//esconder links quando logado e deslogado
const setupUI = (user) => {
    if (user){
        //loggedInLinks.forEach(item => item.style.display = 'block');
        //loggedOutLinks.forEach(item => item.style.display = 'none');
    }else{
        //loggedInLinks.forEach(item => item.style.display = 'none');
        //loggedOutLinks.forEach(item => item.style.display = 'block');
    }
}

// configurando materialize
document.addEventListener('DOMContentLoaded', function() {
    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
  
}); 
