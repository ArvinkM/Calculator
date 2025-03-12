//1. display number in text box
function appendTodisplay(num){
    result.value+=num
}

//2. clear text box
function clearDisplay(){
    result.value=""
}

//3.evaluate expression

function calculate(){
    result.value=eval(result.value)
}



//4.Remove last item from text box
function removeLastitem(){
result.value=result.value.slice(0,-1)
}