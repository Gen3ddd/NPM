const calculateBonus = (a, b) => {
    let bonus;
    const sum = a + b;
    debugger;
    //объявили переменную бонус, но не присваивали ей еще значение 
    // переменным а и b присвоили значения 10 и 60
    //переменной sum присвоили сумму значений a  и b  
    sum > 50 ? (bonus = 50) : (bonus = sum);
    debugger;
    return bonus;
    };

    console.log(calculateBonus(10,60));