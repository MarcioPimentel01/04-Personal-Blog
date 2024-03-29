const cssRootEl = document.documentElement 

const setInitialTheme = () => {
    const currentTheme = localStorage.getItem(`theme`);
    cssRootEl.setAttribute(`data-theme`, currentTheme) // Set attribute of the variable cssRoofEl to newTheme updating data-theme root element

}

//01 - Create a Switch function
// Aims the root html element
const switchTheme = () => { // This arrow function "SwitchTheme", stores the variable cssRootEl.
    let dataTheme = cssRootEl.getAttribute(`data-theme`), // data-theme from HTML root element
    
    newTheme = (dataTheme === `light`) ? `dark` : `light`; //ternary condition if newTheme equal light > if not equal "dark" . else light 
    //(refering to the HTML attribute on data-theme)
    
    cssRootEl.setAttribute(`data-theme`, newTheme) // Set attribute of the variable cssRoofEl to newTheme updating data-theme root element

    // const currentTheme = document.documentElement.getAttribute(`data-theme`); // gets the current theme from the root html element 

    localStorage.setItem('theme', newTheme); // dstores the current theme from root element into local storage
};
// add eventListener to the toggle button with the id toggle-button
document.getElementById(`toggle-button`).addEventListener(`click`, switchTheme);

setInitialTheme();

// localStorage.setItem(`theme`, switchTheme); (removed because of the creation of the const currentTheme)
