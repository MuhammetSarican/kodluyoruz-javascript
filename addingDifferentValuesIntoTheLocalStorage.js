let user={username:"Muhammet Sarıcan",isActive:true}
localStorage.setItem("userInfo",JSON.stringify(user))

let userInfo=localStorage.getItem(user)
userInfo=JSON.parse(userInfo)
console.log(userInfo)
