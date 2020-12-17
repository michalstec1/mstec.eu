function attachMail () {
    var encodedSubdomain = '1cetslahcim';
    var encodedDomain = 'moc.liamg';

    var decryptedSubdomain = encodedSubdomain.split("").reverse().join("");
    var decryptedDomain = encodedDomain.split("").reverse().join("");

    for (let element of document.getElementsByClassName('emailSubdomain')) {
        element.innerHTML = decryptedSubdomain;
    }

    for (let element of document.getElementsByClassName('emailDomain')) {
        element.innerHTML = decryptedDomain;
    }
}

attachMail();