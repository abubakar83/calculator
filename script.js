const calculator = () => {
    let screen = document.querySelector(".screen");
    let buttons = documents.querySelectorAll(".btn");
    let clear = docoments.querySelector('.clear');
    let equal = documents.querySelector('.equal');

    buttons.forEach((botton) => {
        buttons.addEventListener("click", (e)=>{
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });
}