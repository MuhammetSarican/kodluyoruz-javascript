let h2=document.querySelector('h2.lesson-name')
h2.innerHTML='Ders Bitti...'

let h1=document.createElement('h1')
h1.innerHTML='Muhammet Sarıcan'

h2.append(h1)

h2.classList.add('lesson','lesoon2')
h2.classList.remove('lesson')