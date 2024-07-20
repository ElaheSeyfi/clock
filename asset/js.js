
const span=document.querySelectorAll('.clock>span')
const btn=document.querySelector('.row>button')
const clock=document.querySelector('.clock')
console.log(btn)
const body=document.querySelector('body')
let flag=1
console.log(span)
const box=()=>{
    let time=new Date()
    let secound=time.getSeconds();
    let minutes=time.getMinutes();
    let hour=time.getHours();
    span[0].style.transform="rotate("+(secound*6)+"deg)"
    span[1].style.transform="rotate("+((minutes*60)*.1)+"deg)"
    span[2].style.transform= 'rotate(' + (((hour * 3600) + (minutes* 60) + secound) * .008) + 'deg)'
}
box()
setInterval(box,1000)
      btn.addEventListener('click',()=>{
    let temp=btn.getAttribute('data-status')
    if(temp=='off'){
        body.classList.add('bg-white')
        btn.setAttribute('data-status','on')
        btn.innerHTML="light"
        btn.style.color=" #1e1f26"
        clock.classList.add('border-clock-white')
        btn.classList.add('btn-light')
    }
    else{
        body.classList.add('bg-dark')
        body.classList.remove('bg-white')
        btn.setAttribute('data-status','off')
        btn.innerHTML="dark"
        btn.style.color="white"
        clock.classList.remove('border-clock-white')
        btn.classList.remove('btn-light')
        btn.classList.add('btn-dark')   
    }
    
})