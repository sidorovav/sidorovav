// document.addEventListener('DOMContentLoaded', 
//  ()=>{ 
//     e = document.querySelector("#text")
//     if (e) e.innerText='проверка'
// });
( async () =>{
    const mod =await import ('./mod.js')
    console.log(mod)
})()