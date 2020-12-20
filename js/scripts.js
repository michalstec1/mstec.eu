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

function attachSkillLevels(skillBar, level) {

    for (let i = 1; i <= 4; ++i) {

        let skillLevel = document.createElement('div');
        skillLevel.classList.add('skillLevel');
        if (i <= level) {
            skillLevel.classList.add('activeSkillLevel');
        }
        skillBar.appendChild(skillLevel);

    }

}

function attachSkillBar(skillElement, level) {

    let skillBar = document.createElement('div');
    skillBar.classList.add('skillBar');
    attachSkillLevels(skillBar, level);
    skillElement.appendChild(skillBar);

}

function attachSkillBars() {

    for (let level = 1; level <= 4; ++level) {
        let skills = document.querySelectorAll('.skill-' + level);
        for (let element of skills) {
            attachSkillBar(element, level);
        }
    }

}

function attachTooltipArrows() {

    for (let tooltip of document.querySelectorAll('.tooltip')) {
        
        let arrow = document.createElement('div');
        arrow.classList.add('tooltipIcon');
        tooltip.appendChild(arrow);

    }

}

function positionTooltip() {

    let tooltip = this.querySelector('.tooltipText');
    let tooltipRect = tooltip.parentNode.getBoundingClientRect();
    let containerRect = tooltip.parentNode.parentNode.getBoundingClientRect();
    tooltip.style.width = containerRect.width + 'px';
    tooltip.style.left = containerRect.x - tooltipRect.x + 'px';

}

function positionTooltips() {

    let tooltips = document.querySelectorAll('.tooltip');
    for (let tooltip of tooltips) {
        tooltip.addEventListener("mouseover", positionTooltip);
    }

}

attachMailDetail();
attachMailLink();
attachTooltipArrows();
attachSkillBars();
positionTooltips();