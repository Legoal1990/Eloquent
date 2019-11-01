for(let number=0; number<100; number+=1){
    if((number+1)%3==0){
        console.log("Fizz");
    }else if((number+1)%5)==0{
        console.log("Buzz");
    }
    else if((number+1)%3 && (number+1)%5){
        console.log("FizzBuzz");   
    }
}