window.addEventListener('load', () => {

    const backBtn = document.querySelector('.reqCreation__back');
    const nextBtn = document.querySelector('.reqCreation__next');
    let reqCreationState = 0;
    const progressBar = document.querySelectorAll('.reqCreation__progress');
    const content = document.querySelectorAll('.reqCreation__content');
    var inputContainer = document.querySelector('.textInput__container--reqCreation2col');
    var prueba = document.getElementById("prueba");

    console.log(inputContainer.classList.contains('small'));

  

    function validator () {
        const helpblock = document.querySelector('.has-error');
        if(prueba.classList.contains('.has-error')){
            console.log('holis')
        } else {
            console.log('holisxx')
        }
    }

    if(localStorage.getItem('reqCreationState') != null) {
        reqCreationState = localStorage.getItem('reqCreationState');
    }

    setNavigation(reqCreationState);
    
    nextBtn.addEventListener('click', () => {

        validator();

        if(reqCreationState < content.length-1) {
            content[reqCreationState].classList.remove('reqCreation__content--active');
            content[reqCreationState+1].classList.add('reqCreation__content--active');

            progressBar[reqCreationState].classList.remove('reqCreation__progress--current');
            progressBar[reqCreationState].classList.add('reqCreation__progress--completed');
            progressBar[reqCreationState+1].classList.remove('reqCreation__progress--incomplete');
            progressBar[reqCreationState+1].classList.add('reqCreation__progress--current');

            reqCreationState++;
        }else{
            window.location.href = "./dashboard_requestCreationSum.html";
        }
    }); 

    backBtn.addEventListener('click', () => {
        if(reqCreationState > 0) {
            content[reqCreationState].classList.remove('reqCreation__content--active');
            content[reqCreationState-1].classList.add('reqCreation__content--active');

            progressBar[reqCreationState].classList.remove('reqCreation__progress--current');
            progressBar[reqCreationState].classList.add('reqCreation__progress--incomplete');
            progressBar[reqCreationState-1].classList.remove('reqCreation__progress--completed');
            progressBar[reqCreationState-1].classList.add('reqCreation__progress--current');

            reqCreationState--;
        }
    });

    function setNavigation(index) {
        content[index].classList.add('reqCreation__content--active');

        progressBar.forEach((e, i) => {
            if(i < index) {
                e.classList.add('reqCreation__progress--completed');
            } else if (i == index) {
                e.classList.add('reqCreation__progress--current');
            } else {
                e.classList.add('reqCreation__progress--incomplete');
            }
        });
    } 
});