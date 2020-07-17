//ex.1
let a = 12
if(a % 2 == 0){
    alert("number is odd")
}else{
    alert("number is even")
}

//ex.2
let i = 100
let b = 1
for(let n = 0; n <= i; n++)
{

    if(n % 2 == 0)
    {
        b += n
    }
}
alert(b)

//ex.3
let a = 100
let b = 500
let c = 489
if(c < b && c > a)
{
    alert("in bounds")
}
else
{
    alert('out of bounds')
}

// ex.4
let a = 15
let b = 10
let c = 20
if(a + b > c && a + c > b && c + b > a )
{
    alert('Yes')
}
else{
    alert('No')
}