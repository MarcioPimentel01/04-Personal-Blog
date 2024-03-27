
// in this .js file I need to do the invese of form.js
document.addEventListener('DOMContentLoaded', () => {
    const recentPostsContainer = document.getElementById('recentPosts');
    const savedPosts = localStorage.getItem('blogPosts'); //BlogPost is the name of my array on form.js
    
    if (savedPosts) {
        const posts = JSON.parse(savedPosts); //02 - Use JSON for the stored posts back into and array
        
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `<h3>${post.title}</h3>
            <p>${post.content}</p> <p>By: ${post.username}</p>`;
            recentPostsContainer.appendChild(postElement);
        });
    } else {
        // Display a message if there are no saved blog posts
        recentPostsContainer.innerHTML = '<p>No recent posts found.</p>';
    }
});

