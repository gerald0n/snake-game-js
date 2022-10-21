const teste = document.getElementById('player')
let lengthLeft = 0
let lengthTop = 0
const limit = 470 //tamanho da área - tamanho do pixel do player

teste.style.top = `${lengthTop}px`
teste.style.left = `${lengthLeft}px`

onkeydown = function (event) {
    switch (event.key) {
        case 'ArrowUp':
            if (lengthTop > 0) {
                lengthTop -= 10
                teste.style.top = `${lengthTop}px`
            } else {
                lengthTop = 0
                teste.style.top = lengthTop
            }
            break
        case 'ArrowDown':
            if (lengthTop < limit) {
                lengthTop += 10
                teste.style.top = `${lengthTop}px`
            } else {
                lengthTop = limit
                teste.style.top = lengthTop
            }
            break
        case 'ArrowLeft':
            if (lengthLeft > 0) {
                lengthLeft -= 10
                teste.style.left = `${lengthLeft}px`
            } else {
                lengthLeft = 0
                teste.style.left = lengthLeft
            }
            break
        case 'ArrowRight':
            if (lengthLeft < limit) {
                lengthLeft += 10
                teste.style.left = `${lengthLeft}px`
            } else {
                lengthLeft = limit
                teste.style.left = lengthLeft
            }
            break
        default:
            break
    }
}
