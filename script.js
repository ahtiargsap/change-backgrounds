const btns = document.getElementsByClassName("btn");
for (const btn of btns){
    btn.addEventListener("click", function() {
        const buttonStyle = getComputedStyle(this);
        const buttonBackgroundColor = buttonStyle["backgroundColor"];
        document.body.style.backgroundColor = buttonBackgroundColor;
    });
}