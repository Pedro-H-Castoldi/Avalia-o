let check = document.getElementById('show')
let add = document.querySelector('.sumbit')
add.id = 'sub'
add2 = document.getElementById('sub')
let n
var nn =[]

let mostrar = function(){
    n = document.getElementById('number')
    n = n.children

    for(let i=0; i<n.length; i++){
        nn.push(n[i])
        n[i].type=''
    }
}
let submeter = function(nn){
    ver = document.getElementById('number')
    ver = ver.children
    let cont = 0

    for(let i=0; i<ver.length; i++){

        for(let j=0; j<i; j++){}
        if(ver[i].value > 0){
            cont++
        }
    }
    if(cont == 4){
        divv = document.getElementsByClassName('item')
        alert('Cartão cadastrado')
        div = document.createElement('p')
        nome = document.createTextNode(n[0].value)

    }
    else{
        alert('Insira números em todos os campos.')
    }
}

check.addEventListener('click', mostrar)
add2.addEventListener('click', function(){submeter(nn)})