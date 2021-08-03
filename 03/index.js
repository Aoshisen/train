let container=document.querySelector(".container")
// let input=document.querySelector(".input")
let lanuch=document.querySelector(".lanuch")
let clear=document.querySelector(".clear")

//生成随机颜色
function getRandomColor(){
  let r = Math.floor(Math.random()*255);
  let g = Math.floor(Math.random()*255);
  let b = Math.floor(Math.random()*255);
  let color = 'rgba('+ r +','+ g +','+ b +',0.8)';
  return color
} 
function draw(ele,passTime){
  ele.style.right=passTime/4+'px'
}

//发射的逻辑
lanuch.addEventListener("click",()=>{
let span=document.createElement('span')
span.style.overflow='hidden'
span.style.position="absolute";
span.style.width="100px"
span.style.color=getRandomColor();
span.style.fontSize=Math.random()*12+12+'px'
span.style.top=Math.random()*400+'px'
span.style.right="0px"
let start=Date.now()
let timer=setInterval(()=>{
  let passTime=Date.now()-start;
  if(passTime<8000){
    draw(span,passTime)
  }
  else{
    clearInterval(timer)
  }
},10)
let input=document.querySelector(".input")
span.innerHTML=input.value;
console.log(input.value);
//添加元素到container
container.append(span)
// input.value=null
})

//清屏的逻辑
clear.addEventListener("click",()=>{
  container.innerHTML=null
})

console.log(container,lanuch,clear);