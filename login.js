function fixedfun() {
    let emVal = document.getElementById('em').value;
    let passVal = document.getElementById('ps').value;


    if(emVal.indexOf("@") == -1){
        return false;
    }
    else if(passVal.length < 5){
        return false;
    }
    else {
        return true;
    }
}