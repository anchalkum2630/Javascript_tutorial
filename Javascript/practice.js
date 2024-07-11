let a='circle';
switch(a)
{
    case "rectangle":{
        console.log("Enter length and breadth : ");
    }
    case "square":{
        console.log("Enter length of sides : ");
    }
    case "circle":{
        console.log("Enter radius of the circle : ");
    }
}
//calculator

const calculator = (a,b,op)=>{
    switch(op){
        case '+':
            return a+b;
        case '-':
            return a-b;
        case '*':
            return a*b;
        case '%':
            return a%b;
    }
};
console.log(calculator(2,3,'-'));

//reverse the string

const IsReverse = (str)=>{
    let reverse="";
    for(let i=str.length-1;i>=0;i--){
            reverse=reverse+str[i];
    }
    return reverse;
};
let str="Anchal Kumari"
console.log(IsReverse(str).slice(0,8));//to part of the string
IsReverse(str)===str?console.log("true"):console.log("false");