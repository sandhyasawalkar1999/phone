let search = document.querySelector('#search');
let btn = document.querySelector('.btn');

let url = fetch('');
console.log(url);   

async function phoneData() {
    
    let data = await fetch('https://openapi.programming-hero.com/api/phones?search=oppo');

    let result = await data.json();
    console.log(result);
    return result;
}

async function phoneNameData(){
    for(let i = 1; i < data.length; i++){
        let 
}}
phoneData();