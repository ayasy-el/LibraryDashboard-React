export const setSidebarType = () => {
    const width = window.innerWidth > 0 ? window.innerWidth : window.screen.width;
    const mainWrapper = document.getElementById('main-wrapper');

    if (width < 1199) {
        mainWrapper.setAttribute('data-sidebartype', 'mini-sidebar');
        mainWrapper.classList.add('mini-sidebar');
    } else {
        mainWrapper.setAttribute('data-sidebartype', 'full');
        mainWrapper.classList.remove('mini-sidebar');
    }
};

export const toggleSidebar = () => {
    const mainWrapper = document.getElementById('main-wrapper');
    mainWrapper.classList.toggle('mini-sidebar');

    if (mainWrapper.classList.contains('mini-sidebar')) {
        document.querySelector('.sidebartoggler').checked = true;
        mainWrapper.setAttribute('data-sidebartype', 'mini-sidebar');
    } else {
        document.querySelector('.sidebartoggler').checked = false;
        mainWrapper.setAttribute('data-sidebartype', 'full');
    }

    mainWrapper.classList.toggle('show-sidebar');
};