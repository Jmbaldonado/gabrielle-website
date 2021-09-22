const btnscrolltoTop = document.querySelector('#btnscrolltoTop');

window.addEventListener('scroll', scrollFunction);

function scrollFunction(){  

    if(window.pageYOffset > 300){

        if(!btnscrolltoTop.classList.contains('btnFade-in')){
            btnscrolltoTop.classList.remove('btnFade-out');
            btnscrolltoTop.classList.add('btnFade-in');
            btnscrolltoTop.style.display = 'block';
        }
    } else {

        if(btnscrolltoTop.classList.contains('btnFade-in')){
            btnscrolltoTop.classList.remove('btnFade-in');
            btnscrolltoTop.classList.add('btnFade-out');

            setTimeout(function(){
                btnscrolltoTop.style.display = 'none';
            }, 250);
        }
    }
}

btnscrolltoTop.addEventListener('click', backtoTop);

function backtoTop() {
    window.scrollTo(0, 0);
}