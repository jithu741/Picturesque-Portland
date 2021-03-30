const images = document.querySelectorAll('.pqr')

images.forEach((pqr) => {
     pqr.addEventListener('click',() => {
         undo()
         pqr.classList.add('active')
     })
})

function undo() {
     images.forEach((pqr) => {
         pqr.classList.remove('active')
     })
}