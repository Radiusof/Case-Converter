// Declare buttons variables
let upperCase = document.getElementById("upper-case");
let lowerCase = document.getElementById("lower-case");
let properCase = document.getElementById("proper-case");
let sentenceCase = document.getElementById("sentence-case");
let saveText = document.getElementById("save-text-file");

//UpperCase Method
upperCase.addEventListener("click", () => {
    let text = document.querySelector("textarea").value.toUpperCase().split('');
    document.querySelector('textarea').value = text.join('');
})

//Lowercase Method
lowerCase.addEventListener("click", () => {
    let text = document.querySelector("textarea").value.toLowerCase().split('');
    document.querySelector('textarea').value = text.join('');
})

//ProperCase Method
properCase.addEventListener("click", () => {

    let arr = document.querySelector("textarea").value.split(" ");

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    document.querySelector('textarea').value = arr.join(" ");
})

//SentenceCase Method
sentenceCase.addEventListener("click", () => {
    let arr = document.querySelector("textarea").value.toLowerCase().split(". ");

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    document.querySelector('textarea').value = arr.join(". ");
})



//SaveText Method
saveText.addEventListener("click", () => {
    let text = document.querySelector("textarea").value;
    download("text",text);
})

//Download function
function download(filename, text) {
    let element = document.createElement('a');

    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

// Start file download.
download("hello.txt","This is the content of my file :)");