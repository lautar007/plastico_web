function codificacion (accion, value){
    let cod = [];
    let dec = '';

    if(typeof value === 'string' && accion === 'dec'){
        value = JSON.parse(value)
    }

    for(let i = 0; i < value.length; i++){
        if(accion === 'cod'){
            cod.push(value.charCodeAt(i));
        }
        else{
            dec += String.fromCharCode(value[i])
        }
    }

    if(accion == 'cod'){
        return JSON.stringify(cod);
    } else return dec;
}

console.log(codificacion('cod', 'casa'))
console.log(codificacion('dec', "[99,97,115,97]"))