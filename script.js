function sendMessage(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        "Thank you, " + name +
        "!\n\nYour message has been received."
    );

    document.querySelector("form").reset();
}
