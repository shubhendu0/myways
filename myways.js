const output = (num) => {
    const digitSum = totalSum(num);
    console.log(digitSum)
    var result = "";
    for(let i=1; i<digitSum-1; i++){
        if(i%4==0 && i%5==0){
            result += "FizzBuzz ";
        }
        else if(i%4==0){
            result += "Fizz ";
        }
        else if(i%5==0){
            result += "Buzz ";
        }
        else{
            result += i+" ";
        }
    }
    console.log(result);
}

const totalSum = (num) => {
    let n = num;
    let sum = 0;
    while(n>0){
        let remainder = n % 10;
        sum = sum + remainder;
        n = Math.floor(n/10);
    }
    return sum;
}

output(9793331842);
