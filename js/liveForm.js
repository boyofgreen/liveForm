//liveForm JS



document.myForm.quantity.addEventListener('input', function(e){this.checkValidity()}, false);

document.myForm.quantity.addEventListener('invalid', function(e){
alert('Your Number needs to be between 1 and five, you choose '+this.value+'.')
}, false);