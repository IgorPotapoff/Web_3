
alert ("Привет !");


function calculator () {
    document.getElementById("calc").innerHTML = "Hello";


    let first_number = parseInt(prompt('Введите первое число!'));
    let operator = (prompt('Введите оператор действия!'));
    let second_number = parseInt(prompt('Введите второе число!'));
    
    
    switch (operator){
        case '+': alert  (` Сумма чисел ${first_number} и ${second_number} равна ${first_number + second_number} `);
        break;
        case '-': alert  (` Разность чисел ${first_number} и ${second_number} равна ${first_number - second_number} `);
        break;
        case '*': alert  (` Произведение чисел ${first_number} и ${second_number} равно ${first_number * second_number} `);
        break;
        case '/': alert  (` Результат деления чисел ${first_number} и ${second_number} равен ${first_number / second_number} `);
        break;
    
        default: alert  (`Введите корректные значения! `);
    
    
    
    
    
    }
    
    }
    
