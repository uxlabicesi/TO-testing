window.addEventListener('load', () => {
    const selectList = document.querySelectorAll('.select__container');
    
    document.addEventListener('click', (event) => {
        const target = event.target.closest('.select__container');
        if(!target) {
            let active = document.querySelector('.select__optionsContainer--active')
            
            if(active) {
                select = active.closest('.select__container');
                select.querySelector('.select__optionsContainer').classList.remove('select__optionsContainer--active');
                if(!select.querySelector('input').value) {
                    select.querySelector('.select__label').classList.remove('select__label--focused');
                }
            }            
        }
    });
    
    selectList.forEach((select) => {
        const options = select.querySelectorAll('.select__option');
        const searchBox = select.querySelector('.select__searchBox input');
        select.querySelector('.select__label').addEventListener('click', handleClick);
        select.querySelector('.select__selected').addEventListener('click', handleClick);

        if(searchBox) {
            searchBox.addEventListener('keyup', (event) => {
                filterList(event.target.value, options);
            });
        }
        
       
        
        options.forEach((optionsContainer) => {
            optionsContainer.addEventListener('click', selectOption);
        });
    });
    
    function handleClick(event) {
        
        const selectContainer = event.target.closest('.select__container');
        const options = selectContainer.querySelector('.select__optionsContainer');
        const value = selectContainer.querySelector('input');
        
        options.classList.toggle('select__optionsContainer--active');
        
        if(options.classList.contains('select__optionsContainer--active') || value.value) {
            selectContainer.querySelector('.select__label').classList.add('select__label--focused');
        } else {
            selectContainer.querySelector('.select__label').classList.remove('select__label--focused');
        }
    }
    
    function selectOption(event) {
        const selectContainer = event.target.closest('.select__container');
        const option = event.target.closest('.select__option');
        const selected = selectContainer.querySelector('.select__selected');
        const selectValue = selectContainer.querySelector('.select__value');
        const optionsContainer = selectContainer.querySelector('.select__optionsContainer');
        const selectLabel = selectContainer.querySelector('.select__label');
        
        selectValue.value = option.querySelector('input').value;
        selected.innerHTML = option.querySelector('label').innerHTML;
        
        optionsContainer.classList.remove('select__optionsContainer--active');
        selectLabel.classList.add('select__label--focused');
    }
    
    function filterList(value, optionsList) {
        value = value.toLowerCase();
        optionsList.forEach((option) => {
            let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();

            if(label.indexOf(value) != -1) {
                option.style.display = 'block';
            } else {
                option.style.display = 'none';
            }
        });
    }
});
