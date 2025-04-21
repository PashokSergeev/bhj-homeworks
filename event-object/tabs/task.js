const tabs = [...document.getElementsByClassName('tab')];
const tabsContent = document.getElementsByClassName('tab__content');

let tabActive = document.getElementsByClassName('tab_active')[0];
let tabContentActive = document.getElementsByClassName('tab__content_active')[0];

for (const tab in tabs) {
    tabs[tab].addEventListener('click', (e) => {
        tabActive.classList.toggle('tab_active');
        tabActive = tabs[tab];
        tabActive.classList.toggle('tab_active');

        tabContentActive.classList.toggle('tab__content_active');
        tabContentActive = tabsContent[tabs.indexOf(tabActive)];
        tabContentActive.classList.toggle('tab__content_active');
    });
}


