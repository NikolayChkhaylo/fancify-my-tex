alert("Hello, world!");

function makeTextBigger() {
    document.getElementById("inputText").style.fontSize = "24pt";
}

function stylizeText() {
    var textArea = document.getElementById("inputText");
    if (document.getElementById("fancyShmancy").checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else if (document.getElementById("boringBetty").checked) {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "initial";
        textArea.style.textDecoration = "none";
    }
}

function mooText() {
    var text = document.getElementById("inputText").value;
    var sentences = text.split(".");
    for (var i = 0; i < sentences.length; i++) {
        if (sentences[i].trim().length > 0) {
            sentences[i] = sentences[i].trim().toUpperCase() + "-MOO";
        }
    }
    document.getElementById("inputText").value = sentences.join(". ").trim();
}
