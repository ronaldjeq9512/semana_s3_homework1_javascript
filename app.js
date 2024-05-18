function sum () {
    const numbera = Number(prompt('ingresa el primer número'))
    const numberb = Number(prompt('ingresa el segundo número'))
    const operator= prompt('ingresa la operación a realizar + - * / %')
    let result;
    if(operator === '+'){
        result = numbera + numberb
    }
    if(operator === '-'){
        result = numbera - numberb
    }
    if(operator === '/'){
        result = numbera / numberb
    }
    if(operator === '*'){
        result = numbera *numberb
    }
    if(operator === '%'){
        result = numbera % numberb
    }
    alert(`al realizar la operación ${numbera}${operator}${numberb}, el resultado es ${result}`)
}

sum()