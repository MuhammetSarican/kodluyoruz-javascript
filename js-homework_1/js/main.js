function showTime() {
    let days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    let day=new Date().getDay()
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    document.getElementById('date').innerHTML =`${hour}:${min}:${sec} ${days[day]}`
    setTimeout(showTime, 1000); 
}


let username = prompt('Please! Type one Name.')

let nameRow = document.getElementById('name')
let infoRow = document.getElementById('info')

console.log('Here')
nameRow.innerHTML = `Hello <b>${username}!</b> Welcome!`
infoRow.innerHTML = `You are in<br><b>Kodluyoruz Frontend Web Development Patikası<br></b> at`




