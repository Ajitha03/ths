const generateColorvalue= ()=>{
    return Math.floor(Math.random()*256)
}
const createColor= ()=>{
    const red=generateColorvalue();
    const green=generateColorvalue();
    const blue=generateColorvalue();
    return `rgb(${red},${green},${blue})`
}
const applyColorToBody = (color)=>{
    return document.body.style.backgroundColor = color
}
const addRandomColorToBig = ()=>{
    const color = createColor()
    return applyColorToBody(color)
}
addRandomColorToBig();
const onclickevent = document.getElementById("display");
onclickevent.onClick=()=>addRandomColorToBg();
// or
const newColors =document.getElementById('New-colors')
newColors.addEventListener('click',()=>console.log("hello"))
setTimeout(addRandomColorToBig,1000)
//set time out vs setinterval
const interval = setInterval(addRandomColorToBig,2000)
newColors.addEventListener("click",()=>clearInterval(interval))







