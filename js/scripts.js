let encodedSubdomain = '1cetslahcim';
let encodedDomain = 'moc.liamg';

let mailSubject = 'We have a career opportunity for you';

function decodeText(text) {
    return text.split('').reverse().join('');
}

function attachMailDetail() {

    let decryptedSubdomain = decodeText(encodedSubdomain);
    let decryptedDomain = decodeText(encodedDomain);

    for (let element of document.getElementsByClassName('js-email-subdomain')) {
        element.innerHTML = decryptedSubdomain;
    }

    for (let element of document.getElementsByClassName('js-email-domain')) {
        element.innerHTML = decryptedDomain;
    }

}

function attachMailLink() {

    let decryptedSubdomain = decodeText(encodedSubdomain);
    let decryptedDomain = decodeText(encodedDomain);

    for (let element of document.getElementsByClassName('js-email-link')) {
        element.href = 'mailto:' + decryptedSubdomain + '@' + decryptedDomain + '?subject=' + mailSubject;
    }

}

function attachSkillLevels(skillBar, level) {

    for (let i = 1; i <= 4; ++i) {

        let skillLevel = document.createElement('div');
        skillLevel.classList.add('skill-level');
        if (i <= level) {
            skillLevel.classList.add('skill-level-active');
        }
        skillBar.appendChild(skillLevel);

    }

}

function attachSkillBar(skillElement, level) {

    let skillBar = document.createElement('div');
    skillBar.classList.add('skill-level-bar');
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

    for (let tooltip of document.querySelectorAll('.js-tooltip-arrows .tooltip')) {
        
        let arrow = document.createElement('div');
        arrow.classList.add('tooltip-icon');
        tooltip.appendChild(arrow);

    }

}

function positionTooltip() {

    let tooltip = this.querySelector('.tooltip-text');
    let tooltipRect = tooltip.parentNode.getBoundingClientRect();
    let containerRect = tooltip.parentNode.parentNode.getBoundingClientRect();
    tooltip.style.width = containerRect.width + 'px';
    tooltip.style.left = containerRect.x - tooltipRect.x + 'px';

}

function positionTooltips() {

    let tooltips = document.querySelectorAll('.js-tooltip-wide .tooltip');
    for (let tooltip of tooltips) {
        tooltip.addEventListener('mouseover', positionTooltip);
    }

}

attachMailDetail();
attachMailLink();
attachTooltipArrows();
attachSkillBars();
positionTooltips();