const navbar = document.querySelector("#navbar")

let lastScroll = 0

window.addEventListener('scroll', () => {
    let currentScroll = window.pageYOffset

    if (currentScroll > lastScroll)
        navbar.style.top = `-230px`
    else
        navbar.style.top = `0px`

    lastScroll = currentScroll
})