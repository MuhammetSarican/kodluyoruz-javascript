let grade=prompt('Please type ur exam grade.')
let header=document.getElementById('Header')

grade=parseInt(grade)
if(!grade || grade<0 || grade>100){
    header.innerHTML=`<h1 style="color:red">Please type a valid Grade!</h1>`
}else if(grade>=90 && grade<=100){
    header.classList.add('text-primary')
    header.innerHTML=`Ur grade is<br><h1>AA<br>:)</h1>`
}else if(grade>=85 && grade<90){
    header.classList.add('text-primary')
    header.innerHTML=`Ur grade is<br><h1>BA<br>:)</h1>`
}else if(grade>=80 && grade<85){
    header.classList.add('text-primary')
    header.innerHTML=`Ur grade is<br><h1>BB<br>:)</h1>`
}else if(grade>=75 && grade<80){
    header.classList.add('text-primary')
    header.innerHTML=`Ur grade is<br><h1>CB<br>:)</h1>`
}else if(grade>=70 && grade<75){
    header.classList.add('text-primary')
    header.innerHTML=`Ur grade is<br><h1>CC<br>:)</h1>`
}else if(grade>=65 && grade<70){
    header.classList.add('text-primary')
    header.innerHTML=`Ur grade is<br><h1>DC<br>:)</h1>`
}else if(grade>=60 && grade<65){
    header.classList.add('text-primary')
    header.innerHTML=`Ur grade is<br><h1>DD<br>:)</h1>`
}else if(grade>=50 && grade<60){
    header.classList.add('text-primary')
    header.innerHTML=`Ur grade is<br><h1>FD<br>:)</h1>`
}else if(grade>=0 && grade<50){
    header.classList.add('text-danger')
    header.innerHTML=`Ur grade is<br><h1>FF<br>:/</h1>`
}
