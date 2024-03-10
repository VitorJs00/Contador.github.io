let num = document.getElementById('num')

let n = localStorage.getItem('contador') || 0;

function adicionar(){
    n++
    num.innerHTML=n

    localStorage.setItem('contador', n);
}

function diminuir (){
    n--
    num.innerHTML=n
    localStorage.setItem('contador', n);
}

num.innerHTML = n