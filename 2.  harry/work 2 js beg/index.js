console.log("heyaaa");

//  working on login Button
const btn = document.querySelector('login');

login.onclick = function(){

    const name ='Floyd';
const greet = 'Good Morning';
console.log(greet + ' ' + name);

let fruit1 = 'orange';
let fruit2 = 'Apple';
let myHtml = `Hello ${name}
<h1>Code with Harry </h1>  
<p> What u like ? a. ${fruit1} or b. ${fruit2}</p>
`;  

document.body.innerHTML = myHtml ;
}


// tryfor h1s

const h1s = document.querySelectorAll('h1');

for (let h1 of h1s) {
    h1.addEventListener('click', function(){

        const color = makeRandomColor()
        h1.style.backgroundColor = color;
        h1.style.color = 'white';
    })
}
    
const makeRandomColor = () =>{
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}


//  to move items to a different function key.

// const h1s = document.querySelectorAll('h1');

// for (let h1 of h1s) {
//     h1.addEventListener('click', giveColo)
// }

// function giveColor(){
//     const color = makeRandomColor()
//     h1.style.backgroundColor = color;
//     h1.style.color = 'white';
// }