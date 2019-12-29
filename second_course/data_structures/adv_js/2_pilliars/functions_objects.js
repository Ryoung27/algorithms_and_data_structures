const obj = {
    two(){
        return 2
    }
}
obj.two();

function three(){
    return 3;
}
three.call();

const four = new Function('return 4');
four();

const five = new Function('num', 'return num');
five(5);

function woohoo(){
    console.log('woohoo');
}
woohoo.yell = 'ahhhh';

function a(){

}
for (let i = 0; i < 5; i++){
    a();
}

function param(){
    console.log("I do nothing.")
}
function b(){
    return param
}
b();

function letAdamLogin(){
    let array = [];
    for (let i = 0; i < 100000; i++){
        array.push(i);
    }
    return 'Access Granted.'
}
letAdamLogin();

function letAvaLogin(){
    let array = [];
    for (let i = 0; i < 100000; i++){
        array.push(i);
    }
    return 'Access Granted.'
}
letAvaLogin();

const giveAccessTo = (name) => 'Access Granted to ' + name;

function letUserLogin(user){
    let array = [];
    for (let i = 0; i < 100000; i++){
        array.push(i);
    }
    return 'Access Granted to' + user;
}

letUserLogin('Eva');