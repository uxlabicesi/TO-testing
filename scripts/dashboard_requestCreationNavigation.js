let setNavigationUrl = (url) => {};

//The setNavigationUrl receives a string with the url of the request creation summary screen

window.addEventListener('load', () => {
    
    setNavigationUrl = (url) => {
        const backBtn = document.querySelector('.reqCreation__back');
        const nextBtn = document.querySelector('.reqCreation__next');
        let reqCreationState = 0;
        const progressBar = document.querySelectorAll('.reqCreation__progress');
        const content = document.querySelectorAll('.reqCreation__content');
        const inputPosition = document.querySelector('.textInput__position');
        const inputWage = document.querySelector('.textInput__wage');
        let isValid = true;

        /*
        Checks if inputs text on the request creation form have value and and they have no error, 
        when these conditions are met, adds the class "btn--active" and removes
        the class "btn--inactive" from the next button
        */
        inputPosition.addEventListener('change', checkValid);
        inputPosition.addEventListener('keyup', checkValid);// Added for NC8146
        inputWage.addEventListener('change', checkValid);
        inputWage.addEventListener('keyup', checkValid);// Added for NC8146
        
        function checkValid() {
            
            if(!(isValid && inputPosition.classList.contains('has-success') && inputWage.classList.contains('has-success'))) {
                isValid = false;
            }
            
            if(isValid) {
                nextBtn.classList.remove('btn--inactive');
                nextBtn.removeAttribute('disabled');
            } else {
                nextBtn.classList.add('btn--inactive');
            }       
            
            isValid = true;
        }
        
        if(localStorage.getItem('reqCreationState') != null) {
            reqCreationState = parseInt(localStorage.getItem('reqCreationState'));
        }
        
        setNavigation(reqCreationState);
        nextBtn.addEventListener('click', () => {
            if(reqCreationState < content.length-1) {
                content[reqCreationState].classList.remove('reqCreation__content--active');
                content[reqCreationState+1].classList.add('reqCreation__content--active');
                
                progressBar[reqCreationState].classList.remove('reqCreation__progress--current');
                progressBar[reqCreationState].classList.add('reqCreation__progress--completed');
                progressBar[reqCreationState+1].classList.remove('reqCreation__progress--incomplete');
                progressBar[reqCreationState+1].classList.add('reqCreation__progress--current');
                
                reqCreationState++;
            }else{
                localStorage.setItem('reqCreationState', 0);
                window.location.href = url;
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
    }
     
});