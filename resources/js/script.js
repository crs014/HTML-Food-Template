/**
 * @description: responsive navbar
*/
const jsNavIcon = document.getElementById('js--nav-icon');
const jsMainNav = document.getElementById('js--main-nav');
const icon = document.querySelector('#js--nav-icon i');

jsNavIcon.addEventListener('click', () => {
    jsMainNav.classList.toggle('js--main-toogle-no-html');
    if(icon.className == 'ion-close-round') {
        icon.className = 'ion-navicon-round';
    }
    else {
        icon.className = 'ion-close-round';
    }
});


/**
 * @description: display tab event
*/
const tabItem = document.getElementsByClassName('tab-item');
Array.from(tabItem).forEach(function(element) {
    
    element.addEventListener('click', () => {
        let tabContents = document.getElementsByClassName('tab-content');
        let dataId = element.getAttribute('data-id');
        let selectedTabContent = document.getElementById(dataId);
        
        Array.from(tabContents).forEach(function (tabContent) {
            tabContent.style.display = 'none';
        });

        selectedTabContent.style.display = 'block';
    });
});



