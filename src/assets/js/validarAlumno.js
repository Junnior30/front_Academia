// const firstName = document.querySelector('#firstNameInput');
// const firstlastName = document.querySelector('#firstlastNameInput');
// const secondlastName = document.querySelector('#secondlastNameInput');
// const identify = document.querySelector('#identifyInput');
// const college = document.querySelector('#collegeInput');

// const firstNameError = document.querySelector('#firstNameError');
// const firstlastNameError = document.querySelector('#firstlastNameError');
// const secondlastNameError = document.querySelector('#secondlastNameError');
// const identifyError = document.querySelector('#identifyError');
// const collegeError = document.querySelector('#collegeError');
// const button = document.querySelector('#button');
// function valid(){
//         validateEmpty(firstName.value,firstName, firstNameError,'El nombre no puede estar vacio');
//         validateEmpty(firstlastName.value,firstlastName, firstlastNameError,'El apellido no puede estar vacio');
//         validateEmpty(secondlastName.value,secondlastName, secondlastNameError,'El apellido no puede estar vacio');
//         validateIdentify(identify.value,identify, identifyError);
//         validateEmpty(college.value,college, collegeError,'El colegio no puede estar vacio');

// }
        

// function validateIdentify(valueInput, divInput, divError){
//     let ex_regular_dni = /^\d{8}(?:[-\s]\d{4})?$/;
//     if(ex_regular_dni.test (valueInput) == true){
//          hideError(divInput,divError);
//     }else{
//        showError(divInput,divError,'Formato no válido');
//      }
// }
// function validateEmpty(valueInput, divInput, divError,nameInput){
//     if(valueInput.length == 0){
//         showError(divInput,divError,nameInput);
//     }
//     else{
//         hideError(divInput,divError);
//     }
// }
// function showError(divInput,divError,error)
// {
//     divInput.style.border = '1px solid red'
//     divError.innerHTML = `<img class="icon-error" src="images/icon-error.svg" alt="">
//     <p class="error">${error}</p>`
// }
// function hideError(divInput, divError){
//     divInput.style.border = '1px solid green'
//     divError.innerHTML=  ``;
// }