function modal_add(name, i) {
    var modal = document.getElementById(name + "Modal");
    var btn = document.getElementById(name + "_button");
    var span = document.getElementsByClassName("close")[i];
    btn.onclick = function() {
        modal.style.display = "block";
    }
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function EnableDisable(txt) {
    var btn = document.getElementById("modal_add");
    if (txt.value != '') {
        btn.disabled = false;
        btn.style.backgroundColor = "#14AFF1";
    } else {
        btn.disabled = true;
        btn.style.backgroundColor = " #97a1a9";
    }
}

function check() {
    let allAreFilled = true;
    document.getElementById("modal_body_add").querySelectorAll("[required]").forEach(function(i) {
        if (!allAreFilled) return;
        if (!i.value) allAreFilled = false;
    })
    if (!allAreFilled) {
        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function() { x.className = x.className.replace("show", ""); }, 3000);
    }
}

const clearAll = () => {
    var inputs = document.getElementsByClassName("add_input");
    for (const element of inputs) {
        element.value = "";
    }
}

function checkRequired() {
    let allAreFilled = true;
    document.getElementById("add-modal-form").querySelectorAll("[required]").forEach(
        function(i) {
            if (!i.value) {
                allAreFilled = false;
                return;
            }
        }
    )
    if (allAreFilled) {
        console.log("All fields filled");
        clearAll();
    } else showSnackbar();

}

function showSnackbar() {
    // Get the snackbar DIV
    var x = document.getElementById("add-modal-snack-bar");

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function() { x.className = x.className.replace("show", ""); }, 3000);
}