function a(){
    let grandpa = 'grandpa';
    return function b(){
        let father = 'father';
        return function c(){
            let son = 'son';
            return `${grandpa} > ${father} > ${son}`
        }
    }
}

a()()

const one = a();

const makeNuclearButton = () => {
    let timeWithoutDestruction = 0;
    const passTime = () => timeWithoutDestruction++;
    const totalPeaceTime = () => timeWithoutDestruction;
    const launch = () =>{
        timeWithoutDestruction = -1;
        return '@';
    }
    setInterval(passTime, 1000);
    return {
        launch: launch,
        totalPeaceTime: timeWithoutDestruction
    }
}

const ohno = makeNuclearButton();