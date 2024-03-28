//01 - Create a Switch function

const switchTheme = () => {
    const cssRootEl = document.documentElement
    let dataTheme = cssRootEl.getAttribute(`data-theme`), //From css file

    newTheme = (dataTheme === `light`) ? `dark` : `light`;

    cssRootEl.setAttribute(`data-theme`, newTheme)
};

// add eventListener to the toggle button with the id toggle-button
document.getElementById(`toggle-button`).addEventListener(`click`, switchTheme);

localStorage.setItem(`theme`, switchTheme);