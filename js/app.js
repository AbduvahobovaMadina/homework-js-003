const navbar = document.querySelector(".navbar__collection")

function toggleShow (){
    navbar.classList.toggle("show")
}



// {
//     // masala 1
//     let x = +prompt("x ga qiymat kirting")
//     if(x > 0){
//         x++
//         console.log(x);
//     }else{
//         console.log(x);
//     }
//     alert (` ${x}`)
// }



// {
//     // masala 2
//     let x = +prompt("x ga qiymat kirting")
//     if(x > 0){
//         x++
//         console.log(x);
//     }else if(x < 0){
//         x = x - 1
//         console.log(x);
//     }
//     alert (`${x}`)
// }


// {
//     // masala 3
//     let x = +prompt("x ga qiymat kirting")
//     if(x > 0){
//         x++
//         console.log(x);
//     }else if(x < 0){
//         x = x - 2
//     }else if(x === 0){
//         x = 10
//     }
//     alert (`${x}`)
// }



// {
//     // masala 4
//     let x1 = +prompt("x1 ga qiymat kirting")
//     let x2 = +prompt("x1 ga qiymat kirting")
//     let x3 = +prompt("x1 ga qiymat kirting")
//     let musbat = 0
//     if(x1 > 0){
//         musbat++
//     }
//     if(x2 > 0){
//         musbat++
//     }
//     if(x3 > 0){
//         musbat++
//     }
//     alert (`${musbat}`)
// }



// {
//     // masala 5
//     let x1 = +prompt("x1 ga qiymat kirting")
//     let x2 = +prompt("x2 ga qiymat kirting")
//     let x3 = +prompt("x3 ga qiymat kirting")
//     let musbat = 0
//     let manfiy = 0
//     if(x1 > 0){
//         musbat++
//     }else if(x1 < 0){
//         manfiy++
//     }
//     if(x2 > 0){
//         musbat++
//     }else if(x2 < 0){
//         manfiy++
//     }
//     if(x3 > 0){
//         musbat++
//     }else if(x3 < 0){
//         manfiy++
//     }
//     alert(`Musbat sonlari: ${musbat} Manfiy sonlari: ${manfiy}`)
// }



// {
//     // masala 6
//     let a = +prompt("a ga qiymat kirting")
//     let b = +prompt("b ga qiymat kiritng")
//     if(a > b){
//         alert(`a soni katta: ${b}`)
//     }else if(a < b){
//         alert(` b soni katta: ${b}`)
//     }
// }


// {
//     // masala 7
//     let x1 = +prompt("x1 ga qiymat kirting")
//     let x2 = +prompt("x2 ga qiymat kirting")
//     if(x1 > x2){
//         alert(`x2 kichik`)
//     }else if(x1 < x2){
//         alert(`x1 kichik`)
//     }
// }


// {
//     // masala 8
//     let x1 = +prompt("x1 ga qiymat kirting")
//     let x2 = +prompt("x2 ga qiymat kirting")
//     if(x1 > x2){
//         alert (`kattasi:${x1} kichigi: ${x2}`)
//     }else {
//         alert (`kattasi: ${x2} kichigi: ${x1}`)
//     }
// }


// {
//     // masala 9
//     let A = +prompt("A ga qiymat kirting")
//     let B = +prompt("B ga qiymat kirting")
//     if(A < B){
//         alert (`${A} shu son ${B} dan kichik`)
//     }
// }


{
    // masala 10
    let a = +prompt("a sonini kirting")
    let b = +prompt("b sonini kirting")
    let sum = 0
    if(a!=b){
        sum = a + b
        alert(`${sum}`)
    }else{
        a = 0
        b = 0
        alert(`${a} ${b}`)
    }
    
}