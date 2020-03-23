function minValue(firstValue, secondValue){
    let result = 0;

    if (firstValue === secondValue){
        result = "equals";
    }else if (firstValue < secondValue){
        result = firstValue;
    } else
    result = secondValue;

    return result;
}

console.log(minValue(10,08));