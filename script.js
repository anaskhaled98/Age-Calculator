const inputs = document.querySelectorAll("[type='number']");
const calculateButton = document.querySelector(".card__button");

const validationFunction = (element) =>
{
    if(element.value === '' || element.value === '0') 
    {   
        element.classList.add("warningBorder");
        element.nextElementSibling.classList.add("warningMessage");
    }
    else {
        element.classList.remove("warningBorder");
        element.nextElementSibling.classList.remove("warningMessage");
    }
}

function calculateAge(year,month,day) {
    
    const today = new Date();
    const userDate = new Date(year,month - 1,day);
    let age = today.getFullYear() - userDate.getFullYear();
    const monDiff = today.getMonth() - userDate.getMonth();
    const dayDiff = today.getDay() - userDate.getDay();
    
    if((year === '' || year === '0' || year > today.getFullYear()) || (month === '' || month === '0') || (day === '' || day === '0' || day > '31')) {
        return "--";
    }

    if(monDiff < 0 || (monDiff === 0 &&  dayDiff < 0))
    age--;

    return age;
}

const onClickhandler = () => {
    const dayElement = document.querySelector("[name='day']");
    const monElement = document.querySelector("[name='month']");
    const yearElement = document.querySelector("[name='year']");
    const resultValue = document.querySelector(".card__resultValue");
    
    // Validation
    inputs.forEach(validationFunction);
    
    // Get Date
    resultValue.textContent = calculateAge(yearElement.value,monElement.value,dayElement.value);
       
    };
    inputs.forEach((item) => {
    item.addEventListener("keydown", (event) => {
        if(event.key === "Enter") onClickhandler();
    })
})

calculateButton.addEventListener("click", onClickhandler);