const firstname = document.getElementById("firstname")
const secondname = document.getElementById("secondname")
const email = document.getElementById("email")
const form = document.getElementById("form")
const errorElement = document.getElementById("error")
const customer = document.getElementById("customer")

form.addEventListener("submit", (e) => {
    checkInputs();
})

function checkInputs(){
    const firstnameV = firstname.value.trim();
    const secondnameV = secondname.value.trim();
    const emailV = email.value.trim();
    const customerV = customer.value.trim();
    form.classList.add('was-validated');
}

// (function() {
//     'use strict';
//     window.addEventListener('load', function() {
//       // Fetch all the forms we want to apply custom Bootstrap validation styles to
//       var forms = document.getElementsByClassName('needs-validation');
//       // Loop over them and prevent submission
//       var validation = Array.prototype.filter.call(forms, function(form) {
//         form.addEventListener('submit', function(event) {
//           if (form.checkValidity() === false) {
//             event.preventDefault();
//             event.stopPropagation();
//           }
//           form.classList.add('was-validated');
//         }, false);
//       });
//     }, false);
//   })();