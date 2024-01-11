
function submitFixed() {
    let usVal = document.getElementById('us').value;
    let emVal = document.getElementById('em').value;
    let pasVal = document.getElementById('ps').value;
    let editText = document.getElementById('text-editing');
    let newText ="";

if(usVal.length < 5 ) {
    newText = 'Please Enter A vaild User'
    editText.innerHTML = newText;
    return false;
} 

else if (emVal.indexOf("@") == -1){
    newText = 'Please Add A Vaild Email'
    editText.innerHTML = newText;
    return false;
} 


else if(pasVal.length < 5){
    newText = 'Please Add A Vaild Password'
    editText.innerHTML = newText;
    return false;
}


else{
    return true;
}
}