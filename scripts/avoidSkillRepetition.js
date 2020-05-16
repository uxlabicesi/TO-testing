let avoidSkillRepetition = () => {console.log('Esto es antes de actualizartse')};

//This script makes sure that when an option is selected on the skills selects, all other skill selects disable that option
window.addEventListener('load', () => {

    avoidSkillRepetition = () => {
        console.log('Valida');
        const allSkillSelects = document.querySelectorAll('.select2__selector--skill');
        let selectedOptions = [];

        allSkillSelects.forEach((select) => {
            if(select.value) selectedOptions.push(select.value);

            select.querySelectorAll('option').forEach((option) => {
                option.removeAttribute('disabled');
            });
        });

        allSkillSelects.forEach((select) => {
            select.querySelectorAll('option').forEach((option) => {
                if(select.value !== option.value && selectedOptions.includes(option.value)) {
                    option.setAttribute('disabled', true);
                    
                }
            });
        });
    };
});