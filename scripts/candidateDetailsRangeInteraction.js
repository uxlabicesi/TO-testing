/**
 * 
 * @param {} evaluation 
 * 
 * this function buildRange takes the evaluation array (always 3 slots), and move the range slider to required position, if you want to re-write trigger you can do it, just call this function
 * 
 * Default order for index: 0:Experience, 1:Skill, 2:Formation
 * 
 * the possible values are: int number from 0 to 6 where 0 its too bad evaluation, and 6 is very good.
 */

let buildRange = (evaluation) => {};

window.addEventListener('load', () => {
    const rangeInputs = document.querySelectorAll('.canDetails__range');
    rangeInputs.forEach((input) => {
        //input.classlist
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
                firstLine.classList.add('canDetails__rangeStep--hide');
            } else if (value == 6) {
                lastLine.classList.add('canDetails__rangeStep--hide');
            }
        });
    });
    // set the range based on evaluation value (3 slot array)
    buildRange = (evaluation) => {
        const rangeInputExperience = document.getElementById('range_experience');
        const rangeInputSkills = document.getElementById('range_skills');
        const rangeInputEducation = document.getElementById('range_education');
        if (evaluation != null) {
            rangeInputExperience.value = evaluation[0];
            rangeInputSkills.value = evaluation[1];
            rangeInputEducation.value = evaluation[2];
            updateVisualStateRange(rangeInputExperience);
            updateVisualStateRange(rangeInputEducation);
            updateVisualStateRange(rangeInputSkills);
        }
    };
    // update visual range of faces in evaluation
    updateVisualStateRange = (target) => {
            const value = target.value;
            const faceIconsClass = 'canDetails__faceIcon';
            const faceIcons = target.closest('.canDetails__grade').querySelectorAll('.canDetails__faceIcon');
            const firstLine = target.closest('.canDetails__grade').querySelector('.canDetails__rangeStep--first');
            const lastLine = target.closest('.canDetails__grade').querySelector('.canDetails__rangeStep--last');

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
                firstLine.classList.add('canDetails__rangeStep--hide');
            } else if (value == 6) {
                lastLine.classList.add('canDetails__rangeStep--hide');
            }
    }


});