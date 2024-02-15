const inputs = document.querySelectorAll("[type='number']");
const calculateButton = document.querySelector(".card__button");
const currentYear = new Date().getFullYear();

/*
// Validation by Regex

const regexForDays = /^(0?[1-9]|[1-2][0-9]|3[0-1])$/;
const regexForMonth = /^(0?[1-9]|1[0-2])$/;
const regexForYears = new RegExp(`^([1-${currentYear}])$`);


const validationFunction = (element,regex) =>
{
    if(!regex.test(element.value)) 
    {   
        element.classList.add("card__input--error");
        return false;
    }
    else {
        element.classList.remove("card__input--error");
        return true;
    }
}
*/

// Validation 
const validateDay = (day) => {
    if(day && day > 0 && day <= 31) {
    return true;
}
}

const validateMonth = (month) => {
    if(month && month > 0 && month <= 12) {
    return true;
}
}

const validateYear = (year) => {
    if(year && year > 0 && year < currentYear) {
        return true;
    }
}

const isDateValid = (dayElement,monthElement,yearElement) => {
 let isValid = [false,false,false];

 if(!validateDay(dayElement.value)) {
    dayElement.classList.add("card__input--error");
 }
 else  {
    isValid[0] = true;
    dayElement.classList.remove("card__input--error");
 }
 
 if(!validateMonth(monthElement.value)) {
    monthElement.classList.add("card__input--error");
 }
 else  {
    isValid[1] = true;
    monthElement.classList.remove("card__input--error");
 }

 if(!validateYear(yearElement.value)) {
    yearElement.classList.add("card__input--error");
 }
 else  {
    isValid[2] = true;
    yearElement.classList.remove("card__input--error");
 }


 return isValid.every ((item) => {
    if(item) return true;
 })

}




 // Get Date
function calculateAge(year,month,day) {
    
    const today = new Date();
    const userDate = new Date(year,month - 1,day);
    let age = today.getFullYear() - userDate.getFullYear();
    const monDiff = today.getMonth() - userDate.getMonth();
    const dayDiff = today.getDay() - userDate.getDay();
    
    if(monDiff < 0 || (monDiff === 0 &&  dayDiff < 0))
    age--;

    return age;
}

const onClickHandler = () => {
    const dayElement = document.querySelector("[name='day']");
    const monthElement = document.querySelector("[name='month']");
    const yearElement = document.querySelector("[name='year']");
    const resultValue = document.querySelector(".card__resultValue");
    
    /* 
    validationFunction(dayElement,regexForDays);
    validationFunction(monElement,regexForMonth);
    validationFunction(yearElement,regexForYears);


    if(validationFunction(dayElement,regexForDays) && validationFunction(monElement,regexForMonth)){  

        resultValue.textContent = calculateAge(yearElement.value,monElement.value,dayElement.value);
    }
    */

    if(!isDateValid(dayElement,monthElement,yearElement)) {
        resultValue.textContent = "--"
        return;
    }

    resultValue.textContent = calculateAge(yearElement.value,monthElement.value,dayElement.value);

    };
    inputs.forEach((item) => {
    item.addEventListener("keydown", (event) => {
        if(event.key === "Enter") onClickHandler();
    })

})

calculateButton.addEventListener("click", onClickHandler);