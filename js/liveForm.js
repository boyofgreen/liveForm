//liveForm JS


var pageMeter = document.querySelector('.completeMeter');

var checkMyValidity = function(){
    var valueCollection = document.querySelectorAll('#RegisterUserForm input');
    var myTotal = 0;
    for (var i = 0; i< valueCollection.length; i++) { 
  
    //store it in local storage so it's there if they come back
    localStorage[valueCollection[i].name] = valueCollection[i].value;
  
    var isValid = valueCollection[i].checkValidity();
    
       if(isValid === true){
             myTotal += 20;
        
        }
   // console.log(myTotal);
     pageMeter.value = myTotal;
    }
    
    };
//check to see if supports it


if(document.createElement('progress').max !== undefined){console.log('working');document.querySelector('.meterComponent').style.display = 'block';}

var myInputs = document.myForm.querySelectorAll('input');
for (var i = 0; i< myInputs.length; i++) { 
    
    myInputs[i].addEventListener(myInputs[i].type!=="checkbox"?'input':'change',checkMyValidity , false);
    if(localStorage[myInputs[i].name] && localStorage[myInputs[i].name] !== 'undefined'){myInputs[i].value = localStorage[myInputs[i].name];}
}

checkMyValidity();

