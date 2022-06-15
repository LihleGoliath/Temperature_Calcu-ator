function answer1() {
    let Fahrenheit = document.querySelector('#F_to_C').value;
    let  F = Fahrenheit; 
    let D = (5/9);
    let sum = (F - 32) * D;
    document.querySelector('#answer1').innerHTML =`
    ${sum.toFixed(2)}C 
    ` ;
    if (sum < 0) {
        document.querySelector('body').style.backgroundImage=" linear-gradient(to top, #0fe2c2, #00cbe3, #00afff, #008aff, #0553fe)"
    }else if(sum > 38 ){
        document.querySelector('body').style.backgroundImage="linear-gradient(to right bottom, #e2490f, #eb6107, #f27701, #f98c00, #fea105 "
    }
};

function answer2() {
    let Celsius = document.querySelector('#C_to_F').value;
    let  C = Celsius;
    let D = (5/9)  ;
    let sum1 = (C * D) + 32;
    document.querySelector('#answer2').innerHTML =`
    ${sum1.toFixed(2)} F
    `; 
    if (sum < 0) {
        document.querySelector('body').style.backgroundImage=" linear-gradient(to top, #0fe2c2, #00cbe3, #00afff, #008aff, #0553fe)"
    }else if(sum > 38 ){
        document.querySelector('body').style.backgroundImage="linear-gradient(to right bottom, #e2490f, #eb6107, #f27701, #f98c00, #fea105 "
    }
};  

function reset() {
sum = '  '
document.querySelector('#F_to_C').value = " "
document.querySelector('#answer1').innerHTML = sum

sum1 = " "
document.querySelector('#C_to_F').value = " "
document.querySelector('#answer2').innerHTML = sum1
document.querySelector('body').style.backgroundImage=" linear-gradient(to right, #4ee20f, #42e12c, #34e03d, #24df4b, #0ade57)"
}