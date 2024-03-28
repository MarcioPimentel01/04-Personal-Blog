
// in this .js file I need to do the invese of form.js
document.addEventListener('DOMContentLoaded', () => {
    const recentPostsContainer = document.getElementById('recentPosts');
    const savedPosts = localStorage.getItem('blogPosts'); //BlogPost is the name of my array on form.js
    
    if (savedPosts) {
        const posts = JSON.parse(savedPosts); //02 - Use JSON for the stored posts back into and array
        
        posts.forEach(post => { //.forEach method to iterate over each post input
            const postElement = document.createElement('div');
            postElement.classList.add('post'); // adds the CSS class to the div element
            postElement.innerHTML = `<h3>${post.title}</h3>
            <p>${post.content}</p> <p>By: ${post.username}</p>`;
            recentPostsContainer.appendChild(postElement);
        });
    } 
});


const backMainPage = document.getElementById(`back-to-main-page`);
backMainPage.addEventListener(`click`, () => {
    window.location.href = 'index.html';

});





