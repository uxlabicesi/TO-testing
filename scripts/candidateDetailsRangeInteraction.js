let buildRange = (evaluation) => {};

window.addEventListener('load', () => {


    /*buildRange = (evaluation) => {
        const rangeInputs = document.querySelectorAll('.canDetails__range');
        if (evaluation != null) {
            rangeInputs.forEach((input, index) => {
                const value = evaluation[index];
                const faceIconsClass = 'canDetails__faceIcon';
                const faceIcons = event.target.closest('.canDetails__grade').querySelectorAll('.canDetails__faceIcon');
                const firstLine = event.target.closest('.canDetails__grade').querySelector('.canDetails__rangeStep--first');
                const lastLine = event.target.closest('.canDetails__grade').querySelector('.canDetails__rangeStep--last');
                console.log(value);
                if (value < 2) {
                    faceIcons[1].classList.remove(faceIconsClass + '--yellow');
                    faceIcons[2].classList.remove(faceIconsClass + '--green');
                    faceIcons[0].classList.add(faceIconsClass + '--red');
                } else if (value < 5) {
                    faceIcons[1].classList.add(faceIconsClass + '--yellow');
                    faceIcons[2].classList.remove(faceIconsClass + '--green');
                    faceIcons[0].classList.remove(faceIconsClass + '--red');
                } else {
                    faceIcons[1].classList.remove(faceIconsClass + '--yellow');
                    faceIcons[2].classList.add(faceIconsClass + '--green');
                    faceIcons[0].classList.remove(faceIconsClass + '--red');
                }
            });
        }
    };*/


    const rangeInputs = document.querySelectorAll('.canDetails__range');
    rangeInputs.forEach((input) => {
        input.classlist
        input.addEventListener('input', (event) => {
            const value = event.target.value;
            const faceIconsClass = 'canDetails__faceIcon';
            const faceIcons = event.target.closest('.canDetails__grade').querySelectorAll('.canDetails__faceIcon');
            const firstLine = event.target.closest('.canDetails__grade').querySelector('.canDetails__rangeStep--first');
            const lastLine = event.target.closest('.canDetails__grade').querySelector('.canDetails__rangeStep--last');

            firstLine.classList.remove('canDetails__rangeStep--hide');
            lastLine.classList.remove('canDetails__rangeStep--hide');

            if (value < 2) {
                faceIcons[1].classList.remove(faceIconsClass + '--yellow');
                faceIcons[2].classList.remove(faceIconsClass + '--green');
                faceIcons[0].classList.add(faceIconsClass + '--red');
            } else if (value < 5) {
                faceIcons[1].classList.add(faceIconsClass + '--yellow');
                faceIcons[2].classList.remove(faceIconsClass + '--green');
                faceIcons[0].classList.remove(faceIconsClass + '--red');
            } else {
                faceIcons[1].classList.remove(faceIconsClass + '--yellow');
                faceIcons[2].classList.add(faceIconsClass + '--green');
                faceIcons[0].classList.remove(faceIconsClass + '--red');
            }

            if (value == 0) {
                //console.log('Añadioo');
                firstLine.classList.add('canDetails__rangeStep--hide');
            } else if (value == 6) {
                lastLine.classList.add('canDetails__rangeStep--hide');
            }
        });
    });


});