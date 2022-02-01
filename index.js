for (let i = 0; i < 2; ++i) {
    const form = document.getElementById("inputform-" + i);
    const output = form.value;
    document.getElementById("outputmessage").innerHTML = output;
}