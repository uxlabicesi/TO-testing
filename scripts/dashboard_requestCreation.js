window.addEventListener('load', () => {
    const form = document.querySelector('form');
    const addCity = document.querySelector('.btn--blue');

    addCity.addEventListener('click', () => {
        console.log('ya está');
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
        label.classList.add('select__label', 'select__label--register', 'select__label--reqCity');
        label.innerHTML = 'CIUDAD';
        selectAdd.appendChild(label);

        const select = document.createElement('select');
        select.classList.add('select2__selector--reqCity');
        select.setAttribute('name', 'city');
        selectAdd.appendChild(select)

        for(var i = 0; i < 10; i++) {
            const option = document.createElement('option');
            if(i > 0) {
                option.setAttribute('value', i-1);
                option.innerHTML = 'Opción ' + i;
            }

            select.appendChild(option);
        }
    })
});

/**
 * <div class="reqCreation__row">
                        <div class="select__container select__container--reqCreation2col">
                            <div class="selectadd selectadd--reqCreation form-group">
                                <label class="select__label select__label--register select__label--reqCity">CIUDAD</label>
                                <select class="select2__selector--reqCity" name="city" required>
                                     <!-- empty option is requiered for placeholder -->
                                     <option></option>
                                     <option value="O0"></option>
                                     <option value="O1">Opción 1</option>
                                     <option value="O2">Opción 2</option>
                                     <option value="O3">Opción 3</option>
                                     <option value="O4">Opción 4</option>
                                     <option value="O5">Opción 5</option>
                                     <option value="O6">Opción 6</option>
                                     <option value="O7">Opción 7</option>
                                     <option value="O8">Opción 8</option>
                                </select>
                            </div>
                        </div>

                        <div class="textInput__container textInput--focused textInput__container--reqCreation2col form-group">
                            <label class="label label--active label--reqCreation">CANTIDAD</label>
                            <input type="number" value="0" class="textInput" name="" required>
                        </div>
                    </div>
 */