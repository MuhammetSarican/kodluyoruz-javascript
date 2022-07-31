let username=prompt('Type ur name please')

let header=document.getElementById('Header')

header.innerHTML=`${username ? username : 'Please type ur name.'}`