var btn = document.querySelector("#but");

btn.addEventListener('click', listener1)
btn.addEventListener('click', listener2)

function listener1() {
    console.log("Listener 1")
}
function listener2() {
    console.log("Listener 2")
}

