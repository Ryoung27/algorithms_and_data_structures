let counter = 0;

function inception(){
    if (counter > 3){
        return 'done!';
    }
    counter++
    inception();
}

inception()

function findFactorialRecursive(number){
    if(number == 0) {
        return 1
    } else {
        answer = number * findFactorialRecursive(number - 1);
    }
    return answer;
}

function findFactorialIterative(number){
    if(number == 0) {
        return 1
    } else {
        product = 1;
        for(i = 1; i <= number; i++) {
            product *= i;
        }
        return product;
    }
}

// Fib Iterative
function itFib(n){
    if (n<2){
        return n
    }
    while (n > 0) {
        answer = answer + n
        n--;
      }
    return answer
}

// Fib Recursive
function fib(n){
    if (n<2){
        return n
    }
    return fib(n - 1) + fib(n - 2);
}