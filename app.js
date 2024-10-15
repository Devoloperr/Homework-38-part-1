let h1 = document.querySelector("h1");
let start = document.getElementById("start")
let stop = document.getElementById("stop")
let reset = document.getElementById("reset")
let num = 0;
let int;
start.addEventListener("click", () => {
    int = setInterval(() => {
        num++;
        h1.innerHTML = num
    }, 1000)
});
stop.addEventListener("click", () => {
    clearInterval(int)
})

reset.addEventListener("click", () => {
    num = 0;
    h1.innerHTML = num;
    clearInterval(int)
})