/*!
* https://cocreate.app
* https://github.com/CoCreate-app/Fullscreen_Toggle
* Released under the MIT license
* https://github.com/CoCreate-app/Fullscreen_Toggle/blob/master/LICENSE
*/
import observer from '@cocreate/observer';
import './index.css';

function init() {
    let elements = document.querySelectorAll('[fullscreen]');
    initElements(elements)
}

function initElements(elements) {
    for (let element of elements) {
        element.addEventListener("click", function (event) {
            let isFullscreen = element.getAttribute('fullscreen')
            if (!isFullscreen || isFullscreen === 'false') {
                const fullscreenTarget = element.getAttribute('fullscreen-selector');
                const fullscreenClosest = element.getAttribute('fullscreen-closest');
                const fullscreenParent = element.getAttribute('fullscreen-parent');
                const fullscreenNext = element.getAttribute('fullscreen-next');
                const fullscreenPrevious = element.getAttribute('fullscreen-previous');

                let target = document.body;
                if (fullscreenTarget)
                    target = document.querySelector(fullscreenTarget)
                else if (fullscreenClosest)
                    target = element.closest(fullscreenClosest)
                else if (fullscreenParent)
                    target = element.parentElement.querySelector(fullscreenParent)
                else if (fullscreenNext)
                    target = element.nextElementSibling.querySelector(fullscreenNext)
                else if (fullscreenPrevious)
                    target = element.previousElementSibling.querySelector(fullscreenPrevious)
                if (target) {
                    element.setAttribute('fullscreen', true)
                    requestFullscreen(target);
                }
            } else {
                element.setAttribute('fullscreen', false)
                exitFullscreen();
            }
        });
    }
}

document.addEventListener('fullscreenchange', (event) => {
    if (document.fullscreenElement == null) {
        let elements = document.querySelectorAll('[fullscreen="true"]');
        elements.forEach(elem => {
            elem.setAttribute('fullscreen', false)
        });
    }

});

function requestFullscreen(element) {
    if (!document.fullscreenElement) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        } else {
            console.log('Fullscreen API is not supported.');
        }
    }
};

function exitFullscreen() {
    if (document.fullscreenElement) {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        } else {
            console.log('Fullscreen API is not supported.');
        }
    }
};


observer.init({
    name: 'CoCreateFullscreen',
    observe: ['addedNodes'],
    target: '[fullscreen]',
    callback: mutation =>
        initElements([mutation.target])
});

observer.init({
    name: 'CoCreateFullscreen',
    observe: ['attributes'],
    attributeName: ['fullscreen'],
    target: '[fullscreen]',
    callback: mutation => {
        if (mutation.oldValue === null)
            initElements([mutation.target])
    }
});


init()

export default { requestFullscreen, exitFullscreen }