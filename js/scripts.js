let encodedSubdomain = '1cetslahcim';
let encodedDomain = 'moc.liamg';

let mailSubject = 'We have a career opportunity for you';

function decodeText(text) {
    return text.split('').reverse().join('');
}

function attachMailDetail() {

    let decryptedSubdomain = decodeText(encodedSubdomain);
    let decryptedDomain = decodeText(encodedDomain);

    for (let element of document.getElementsByClassName('emailSubdomain')) {
        element.innerHTML = decryptedSubdomain;
    }

    for (let element of document.getElementsByClassName('emailDomain')) {
        element.innerHTML = decryptedDomain;
    }

}

function attachMailLink() {

    let decryptedSubdomain = decodeText(encodedSubdomain);
    let decryptedDomain = decodeText(encodedDomain);

    for (let element of document.getElementsByClassName('emailLink')) {
        element.href = 'mailto:' + decryptedSubdomain + '@' + decryptedDomain + '?subject=' + mailSubject;
    }

}

attachMailDetail();
attachMailLink();