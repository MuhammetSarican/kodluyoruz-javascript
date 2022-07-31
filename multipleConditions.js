let username=prompt('Type ur name')
let age=prompt('Type ur age')
let header=document.getElementById('Header')

if (!username && !age){
    header.innerHTML=`<a style="color: red">You didn\'t type ur name or age!!!<br>Please type it!</a>`
}
else if (age<18){
    header.innerHTML=`Dear <a style="color: red">${username}</a>,<br> You can not take driving license because;<br> Ur age is <a style="color: red">${age}</a>`
}
else if (age>=18){
    header.innerHTML=`Congratulations!!! <a style="color: red">${username}</a>,<br> You can take driving license because;<br> Ur age is <a style="color: red">${age}</a>`
}