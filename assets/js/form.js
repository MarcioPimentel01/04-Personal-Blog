
// create an array to save the user input
let blogPost = [];
// the idea is a h1 title, a h3 Post title, and simple p for content, maybe a data capture would be a good idea for a blog.

const submitBlogPost = (event) => {
    event.preventDefault(); // do not allow the browser to assume it's standard behave.
    console.log(event);

    const username = document.querySelector('#userName').value; //to get the input from the form
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;

    // transform user input into an object, in our case, username, post title and post content.
    const newPost = {
        username: username, title: title, content: content
    };

    // add the object into our blogPost array
    blogPost.push(newPost);
    console.log(newPost);
    //finally store the array into  the localStorage
    localStorage.setItem('blogPosts', JSON.stringify(blogPost)); // retrive JSON from this line.

    // Redirect to posts page (blog.html)
    window.location.href = 'blog.html';
};

document.addEventListener(`DOMContentLoaded`, () => {
    document.getElementById(`submit-btn`).addEventListener(`click`, submitBlogPost)
});

