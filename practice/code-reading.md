# Code reading

## Question 1

Take a look at the following code:

```
1    let x = 1;
2    function f1()
3    {
4        let x = 2;
5        console.log(x);
6    }
7    console.log(x);
```

Explain why line 4 and line 6 output different numbers.
x is considered as two different variable.because it declared separately inside the function block

## Question 2

Take a look at the following code:

```
let x = 10

function f1()
{
    console.log(x)
    let y = 20
}

console.log(f1())
console.log(y)
```

What will be the output of this code. Explain your answer in 50 words or less.
console.log(y)=> y is not defined. because it declared inside the function block.
console.log(f1())=> it return nothing(undefined), it just print the value of x;

## Question 3

Take a look at the following code:

```
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
console.log(x);

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);
console.log(y);
```

What will be the output of this code. Explain your answer in 50 words or less.
x is declared globally as "const", so x value is not changed inside the function. so the value of x is 9
console.log(x);=>output=9

y is declared globally "const", when the f2(x) called y's property value is manipulated inside the function. so the value of x is 10 
console.log(y);=>output={x:10}