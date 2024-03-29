//DOMContentLoaded to read html before javascript
document.addEventListener('DOMContentLoaded', () => {
    let recentPostsContainer = document.getElementById('recentPosts');

    // trying to create a container for new posts, if it does not exist, create one.
    if (!recentPostsContainer) {
        // If recentPostsContainer doesn't exist, create it
        const containerDiv = document.querySelector('.container'); // targeting the html container class
        const h2Element = document.createElement('h2');
        h2Element.textContent = 'Recent Posts';

        recentPostsContainer = document.createElement('div');
        recentPostsContainer.id = 'recentPosts';
        recentPostsContainer.textContent = 'This is where blog posts will be displayed';

        // Append the h2Element and recentPostsContainer to the containerDiv
        containerDiv.appendChild(h2Element);
        containerDiv.appendChild(recentPostsContainer);
    }

    // unpacking the object from browser localStorage
    const savedPosts = localStorage.getItem('blogPosts');
    // to parse the JSON and interate over the post
    if (savedPosts) {
        const posts = JSON.parse(savedPosts);

        posts.forEach(post => { //.forEach method to iterate over each post input, creates a new <div> element with the class 'post'.
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.content}</p>
                <p><b>By:</b> ${post.username}</p>
                <p>${new Date().toLocaleString()}</p>`;
            recentPostsContainer.appendChild(postElement); //appends each post element to the recentPostsContainer.
        });
    }});

// Add event listener to the back-to-main-page button
const backMainPage = document.getElementById('back-to-main-page');
if (backMainPage) {
    backMainPage.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
}



// // in this .js file I need to do the invese of form.js
// document.addEventListener('DOMContentLoaded', () => {
//     const recentPostsContainer = document.getElementById('recentPosts');
//     const savedPosts = localStorage.getItem('blogPosts'); //BlogPost is the name of my array on form.js
    
//     if (savedPosts) {
//         const posts = JSON.parse(savedPosts); //02 - Use JSON for the stored posts back into and array
        
//         posts.forEach(post => { //.forEach method to iterate over each post input
//             const postElement = document.createElement('div');
//             postElement.classList.add('post'); // adds the CSS class to the div element
//             postElement.innerHTML = `<h3>${post.title}</h3>
//             <p>${post.content}</p> <p><b>By:</b> ${post.username}</p>
//             ${new Date().toLocaleString()}</p>`; // Add timestamp here`;
//             recentPostsContainer.appendChild(postElement);
//         });
//     } 
// });

// const backMainPage = document.getElementById(`back-to-main-page`);
// backMainPage.addEventListener(`click`, () => {
//     window.location.href = 'index.html';

// });





