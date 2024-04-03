# Two Samurais Blog - A Simple Blog Website


## Readme.md File Main Purpose.
This document contains information related to the challenge titled "04 Web APIs: Personal Blog of the UCF fullstack Coding Bootcamp.

Note: All modifications made to this code align with the knowledge acquired during the fourth week of the program. While new tools and technologies may be available, they are not incorporated into this particular segment of the program.

# The Challenge

## Objective
Build a personal blog website with features for inputting and viewing blog posts, including a light/dark mode toggle.

## Acceptance Criteria
- Landing page with a form for entering blog post data.
- Store posts in localStorage and redirect to posts page after submission.
- Validate form fields and display posts with author, title, and content.
- Include light/dark mode toggle and back button.
- Style page dynamically based on mode.
- Footer with a link to developer's portfolio.



# Information about the project

## Mock-Up

![Personal-Blog](images/Personal-blog-challenge.gif) 

[Personal-Blog](README.md)






## Folder Structure
#### While the challenge originally called for a structure utilizing three CSS files, thanks to the assistance of one of the TAs, JK Royster, we were able to implement a more streamlined approach. By defining a default theme directly on the HTML root element, we could store the initial theme in the browser's local storage. This enabled us to create a function facilitating seamless transitions between different modes.

```
blog/
├── assets/
│   ├── css/
│   │   └── styles.css (form.css and blog.css were not used)
│   └── js/
│       ├── form.js
│       ├── logic.js
│       └── blog.js 
├── images/
        └── two-samurais.png
├── index.html
├── blog.html
└── ... (other HTML files for blog layout)
```

## Color Scheme reference
- Light mode Theme Variables

```css
:root[data-theme="light"] {
  --background-color: rgb(77, 118, 219);
  --text-color: darkblue;
  --button-background-color: darkgreen;
  --side-image-background-color: rgb(255, 255, 255);
  --text-color-alt: darkblue;
}
```
- Dark mode Theme Variables
```CSS
:root[data-theme="dark"] {
  --background-color: rgb(4, 15, 44);
  --text-color: white;
  --button-background-color: darkgreen;
  --side-image-background-color: rgb(27, 22, 76);
  --text-color-alt: white;
}
```



## Functionality

- Users can create new blog posts through a form with title, username, and content fields.
- Users can switch between light and dark themes.
- Users can not submit new Posts without real input into the required fields.

## Technology Stack

- HTML
- CSS
- JavaScript


# Author GitHub
* [@MarcioPimentel01](https://www.github.com/MarcioPimentel01)