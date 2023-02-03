function palindrome() {
    var original = document.getElementById('val').value;
    var store = original.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()@ ]/g, "")
        .replace(/\s/g, " ").toLowerCase();
    var reverse = store.split('').reverse().join('');
    console.log(store);
    if (store == reverse) {
        document.getElementById('getVal').innerHTML = "Is a Palindrome";
    } else {
        document.getElementById('getVal').innerHTML = "Not a Palindrome";
    }
}






