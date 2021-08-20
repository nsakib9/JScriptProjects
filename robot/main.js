
const checkbox = document.getElementById("checkbox");
const submitBtn = document.querySelector("button[type=submit]");

// disable checkbox 
checkbox.disabled = true;
submitBtn.disabled = true;


const elements = document.querySelectorAll(".element");
const selectColor = document.getElementById('SelectColor');
// selectColor = document.getElementById('SelectColor');

console.log(selectColor)


// Assign color to elements 
elements.forEach(function(element){
    const color = getRanCol();

    element.style.backgroundColor = color;
    element.innerHTML = color;
    selectColor.innerHTML = color;
})

// Generate random color function
function getRanCol(){
    const letter = "0123456789ABCDEF";
    let color = "#"
    for(let i = 0; i<6; i++){
        color += letter[Math.floor(Math.random()* 16)];
    }
    return color;
}
console.log(getRanCol());

// check if right color 
elements.forEach(function(element){
    element.addEventListener('click', function(){
        if(element.innerHTML === selectColor.innerHTML){
            checkbox.checked = true;
            alert('You are correct human');
            submitBtn.disabled = false;
            submitBtn.classList.remove('btn-light');
            submitBtn.classList.add('btn-success')
        }else{
alert("please verify that you are a human");
location.reload(true);
        }
    })
})