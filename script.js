const inputs = document.querySelectorAll("[type='number']");
const calculateButton = document.querySelector(".card__button");
const dayElement = document.querySelector("[name='day']");
const monElement = document.querySelector("[name='month']");
const yearElement = document.querySelector("[name='year']");
const resultValue = document.querySelector(".card__resultValue");
const currentYear = new Date().getFullYear();
const regexForDays = /^(0?[1-9]|[1-2][0-9]|3[0-1])$/;
const regexForMonth = /^(0?[1-9]|1[0-2])$/;
const regexForYears = new RegExp(`^([1-${currentYear}])$`);

// Validation

const validationFunction = (element,regex) =>
{
    if(!regex.test(element.value)) 
    {   
        element.classList.add("warningBorder");
        element.nextElementSibling.classList.add("warningMessage");
        return false;
    }
    else {
        element.classList.remove("warningBorder");
        element.nextElementSibling.classList.remove("warningMessage");
        return true;
    }
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
    validationFunction(dayElement,regexForDays);
    validationFunction(monElement,regexForMonth);
    validationFunction(yearElement,regexForYears);


    if(validationFunction(dayElement,regexForDays) && validationFunction(monElement,regexForMonth)){  
    resultValue.textContent = calculateAge(yearElement.value,monElement.value,dayElement.value);
    }

    };
    inputs.forEach((item) => {
    item.addEventListener("keydown", (event) => {
        if(event.key === "Enter") onClickHandler();
    })
})

calculateButton.addEventListener("click", onClickHandler);