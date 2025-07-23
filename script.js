let now=new Date()
document.querySelector(".sec").textContent=now.getSeconds()
document.querySelector(".min").innerHTML=now.getMinutes()
document.querySelector(".hour").innerHTML=now.getHours()

setInterval(() => {
    let now=new Date()
    // let s=now.getSeconds();
    // now.setSeconds(s+1)
    document.querySelector(".sec").textContent=now.getSeconds()
}, 1000);

setInterval(() => {
    let now=new Date()
    // now.setSeconds(0)
    // let m=now.getMinutes()
    // now.setMinutes(m+1)
    document.querySelector(".min").innerHTML=now.getMinutes()
}, 60000);

setInterval(() => {
    let now=new Date()
    // now.setMinutes(0)
    // let h=now.getHours()
    // now.setHours(h+1)
    document.querySelector(".hour").innerHTML=now.getHours()
}, 360000);