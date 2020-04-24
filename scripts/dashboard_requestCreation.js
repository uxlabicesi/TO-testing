window.addEventListener('load', () => {
    const form = document.querySelector('form');
    const addCity = document.querySelector('.btn--blue');
    let cityCount = 0;

    addCity.addEventListener('click', () => {
        const currentCityCount = cityCount;
        cityCount++;

        const row = document.createElement('div');
        row.classList.add('reqCreation__row');
        form.insertBefore(row, addCity);

        const selectContainer = document.createElement('div');
        selectContainer.classList.add('select__container', 'select__container--reqCreation2col');
        row.appendChild(selectContainer);

        const selectAdd = document.createElement('div');
        selectAdd.classList.add('selectadd', 'selectadd--reqCreation', 'form-group');
        selectContainer.appendChild(selectAdd);

        const label = document.createElement('label');
        label.classList.add('select__label', 'select__label--register', 'select__label--reqCity'+currentCityCount);
        label.innerHTML = 'CIUDAD';
        selectAdd.appendChild(label);

        const select = document.createElement('select');
        select.classList.add('select2__selector--reqCity'+currentCityCount);
        select.setAttribute('name', 'city');
        selectAdd.appendChild(select);

        $('.select2__selector--reqCity'+currentCityCount).select2({
            tags: true,
            placeholder: "CIUDAD",
            theme: "talentos",
            width: '100%', // need to override the changed default
            containerCss: {
                "height": "55px"
            },
            //debug: true,  // used for verbose console
        });

        $('.select2__selector--reqCity'+currentCityCount).on('select2:open', function (e) {
            document.querySelector('.select__label--reqCity'+currentCityCount).classList.remove(
                'select__label--register');
            document.querySelector('.select__label--reqCity'+currentCityCount).classList.add('select__label--focused');
        });
    
        $('.select2__selector--reqCity'+currentCityCount).on('select2:close', function (e) {
            let value = $('.select2__selector--reqCity'+currentCityCount).select2('data')[0].id;
            if(value === ''){
                document.querySelector('.select__label--reqCity'+currentCityCount).classList.add('select__label--register');
            document.querySelector('.select__label--reqCity'+currentCityCount).classList.remove(
                'select__label--focused');
            }
        });

        for(var i = 0; i < 10; i++) {
            const option = document.createElement('option');
            if(i > 0) {
                option.setAttribute('value', i-1);
                option.innerHTML = 'Opción ' + i;
            }

            select.appendChild(option);
        }

        const amountContainer = document.createElement('div');
        amountContainer.classList.add('textInput__container', 'textInput--focused', 'textInput__container--reqCreation2col', 'form-group', 'textInput__container--reqCreation2col--new');
        row.appendChild(amountContainer);

        const amountLabel = document.createElement('label');
        amountLabel.classList.add('label', 'label--active', 'label--reqCreation');
        amountLabel.innerHTML = 'CANTIDAD';
        amountContainer.appendChild(amountLabel);

        const textInputNumberContainer = document.createElement('div');
        textInputNumberContainer.classList.add('textInput--number');
        amountContainer.appendChild(textInputNumberContainer);

        const minusBtn = document.createElement('button');
        minusBtn.classList.add('textInput__changeBtn', 'textInput__changeBtn--minus');
        minusBtn.innerHTML = '-';
        minusBtn.addEventListener('click', changeValue);
        textInputNumberContainer.appendChild(minusBtn);

        const textInputNumber = document.createElement('input');
        textInputNumber.classList.add('textInput');
        textInputNumber.setAttribute('type', 'number');
        textInputNumber.value = '0';
        textInputNumberContainer.appendChild(textInputNumber);

        const plusBtn = document.createElement('button');
        plusBtn.classList.add('textInput__changeBtn', 'textInput__changeBtn--plus');
        plusBtn.innerHTML = '+';
        plusBtn.addEventListener('click', changeValue);
        textInputNumberContainer.appendChild(plusBtn);

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('reqCreation__btnDelete');
        row.appendChild(deleteBtn);

        deleteBtn.addEventListener('click', () => {
            row.remove();
        });

    });

    const changeValueBtns = document.querySelectorAll('.textInput__changeBtn');


    changeValueBtns.forEach((e) => {
        e.addEventListener('click', changeValue);
    });

    function changeValue(event) {
        const plusBtn = event.target;
        const numberInput = plusBtn.closest('.textInput--number').querySelector('.textInput');

        if(plusBtn.classList.contains('textInput__changeBtn--minus')) {
            if(numberInput.value > 1) numberInput.value--;
        } else {
            numberInput.value++;
        }
    }
});