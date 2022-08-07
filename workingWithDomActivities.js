let greeting=document.querySelector('#Header')
// greeting.addEventListener('click',function dom(){
//     console.log('Tıklandı')
// })
let state=true
// greeting.addEventListener('click',clicked)

// function clicked(){
//     if (state==true){
//         state=false
//         console.log('Tıklandı')
//         console.log(greeting.innerHTML='Bu header artık değiştirilemez.')
//         this.style.color='red'
//     }else{
//         state=true
//         console.log('Reclicked')
//         console.log(greeting.innerHTML='Muhammet Sarıcan')
//         this.style.color='black'    }

// }

// greeting.addEventListener('click',clicked)

// function clicked(){
//     console.log('Clicked')
//     this.style.color=='black' ? this.style.color='red' : this.style.color='black'
// }

greeting.addEventListener('mouseover',clicked)
greeting.addEventListener('mouseout',reclicked)

function clicked(){
    console.log('Activity is working')
    this.style.color='red'
}
function reclicked(){
    console.log('Second Activity is working')
    this.style.color='black'
}