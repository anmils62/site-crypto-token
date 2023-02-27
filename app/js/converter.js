document.addEventListener('DOMContentLoaded', function() {
    let course = {'ERG':'682', 'Neta':'1'};

    const inputValue = document.getElementById('value'),
          selectCurrencyOne = document.getElementById('curr_one'),
          selectCurrencyTwo = document.getElementById('curr_two'),
          inputResult = document.getElementsByClassName('result-input')[0];
    
    function summ() {
        let z = 0;
        if(selectCurrencyOne.value === selectCurrencyTwo.value) { // Если оба значения в селектах равны
            inputResult.innerText = inputValue.value;           // То просто вписываем данные из поля ввода
        } else {
            if(selectCurrencyOne.value != 'Neta' || selectCurrencyOne.value != 'ERG') { // Если не равны, то
                z = inputValue.value * course[selectCurrencyOne.value]; // Переводим сумму
                inputResult.innerHTML = Math.ceil((z/course[selectCurrencyTwo.value])*100)/100; // Делим на курс и округляем до сотых
            } else { // Если не равны
                inputResult.innerHTML = Math.ceil((inputValue.value*course[selectCurrencyTwo.value])*100)/100; // Умножаем на курс и округляем до сотых
            }
        }
    };

    inputValue.oninput = function () { // При вводе данных в поле вызываем функцию.
        summ();
    };
    selectCurrencyOne.onchange = function () { // При смене первого селекта вызываем функцию.
        summ();
    };
    selectCurrencyTwo.onchange = function () { // При смене второго селекта вызываем функцию.
        summ();
    };

});