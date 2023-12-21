var dark = true;
    var change = document.querySelector('.changeMode');
    change.addEventListener('click', function(){
        var body = document.querySelector('body');
        body.classList.toggle('dark');
    });
