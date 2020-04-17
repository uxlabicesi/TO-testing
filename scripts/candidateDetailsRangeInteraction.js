window.addEventListener('load', () => {

    const rangeInputs = document.querySelectorAll('.canDetails__range');

    rangeInputs.forEach((input) => {
input.classlist
        input.addEventListener('input', (event) => {
            const value = event.target.value;
            const faceIconsClass = 'canDetails__faceIcon';
            const faceIcons = event.target.closest('.canDetails__grade').querySelectorAll('.canDetails__faceIcon');

            console.log(value);

            if(value < 2) {
                faceIcons[1].classList.remove(faceIconsClass + '--yellow');
                faceIcons[2].classList.remove(faceIconsClass + '--green');
                faceIcons[0].classList.add(faceIconsClass + '--red');
            } else if(value < 5) {
                faceIcons[1].classList.add(faceIconsClass + '--yellow');
                faceIcons[2].classList.remove(faceIconsClass + '--green');
                faceIcons[0].classList.remove(faceIconsClass + '--red');
            } else {
                faceIcons[1].classList.remove(faceIconsClass + '--yellow');
                faceIcons[2].classList.add(faceIconsClass + '--green');
                faceIcons[0].classList.remove(faceIconsClass + '--red');
            }
        });
    });
});