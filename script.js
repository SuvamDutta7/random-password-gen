var keyList = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%*&^"

var tempPassword = ""
function generatePass(passLength){
tempPassword= ""
for(i=0;i<passLength;i++){
tempPassword+=keyList.charAt(Math.floor(Math.random()*keyList.length))

}
return tempPassword;

}

function populateForm(enterLength){

document.passGen.output.value = generatePass(enterLength)

}



