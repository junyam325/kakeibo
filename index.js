function buttonClick() {
    for (let i = 0; i < 3; ++i) {
        const form = document.getElementById("inputform-" + i);
        const output = form.value;
        document.getElementById("outputmessage-" + i).innerHTML = output;
    }
}