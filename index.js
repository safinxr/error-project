document.getElementById('btn-1').addEventListener('click', function(){
    const btn = document.getElementById('btn-1');
    btn.classList='hidden'
})

function play2 (){
    const audio = new Audio("./Meme-error.mp3");
    audio.play();
}
function add() {
    
    const top = Math.floor(Math.random() * 400)
    const left = Math.floor(Math.random() * 1000)
    const parentDiv = document.getElementById('main');
    const newDiv = document.createElement('div');

    newDiv.innerHTML = `<div class="shadow-lg w-80 bg-[#0260AC] rounded">
    <div class="flex justify-between items-center px-2">
        <h1 class="text-white my-2">Error</h1>
        <svg class="swap-on fill-current bg-red-500 text-white" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>

    </div>
    <div class="bg-white pt-12 px-5 flex flex-col justify-center items-center">
        <h1 class="text-3xl">Unknown Error</h1>
        <div>
            <button class=' px-4 py-1 rounded bg-red-400 text-white mt-8 mb-4'>cancel</button>
        </div>
    </div>
    </div>`;
    newDiv.classList=`absolute top-[${top}px] left-[${left}px]`
    parentDiv.appendChild(newDiv);
}
let a = 0;
document.getElementById('btn').addEventListener('click', function alu() {
    if (a < 30) {
        play2()
        add();
        setTimeout(alu, 200);
        a++
    }
    else {
        while(0<1){
            add();
        }
    }





})