function power(base, exp){
    if (exp === 0){
        return 1;
    }
    else{
        return base * power(base, exp-1);
    }
}

function computePower(num, exponent) {
    var result = 1;
    for (i = 0; i < exponent; i++) {
    result *= num;
    }
    return result;
}