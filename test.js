document.addEventListener('DOMContentLoaded', () => {
    const recentPostsContainer = document.getElementById(`recent-posts-container`);
    // unpacking the object from browser localStorage
    const savedPosts = localStorage.getItem('blogPosts') || [];
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
            const recentPostsContainer = document.getElementById('recent-posts-container');
            recentPostsContainer.appendChild(postElement);
        });
    }

    // Add event listener to the back-to-main-page button
    const backMainPage = document.getElementById('back-to-main-page');
    if (backMainPage) {
        backMainPage.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }
});
