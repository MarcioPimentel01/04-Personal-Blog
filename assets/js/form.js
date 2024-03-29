// //Move this line to the top of the code, apperantly that is the reason why, it was posting twice - it was not the case.
// document.addEventListener(`DOMContentLoaded`, () => {
//     document.getElementById(`submit-btn`).addEventListener(`click`, submitBlogPost)
// });

// create an array to save the user input
let blogPost = [];
// the idea is a h1 title, a h3 Post title, and simple p for content, maybe a data capture would be a good idea for a blog.

const submitBlogPost = (event) => {
    event.preventDefault(); // do not allow the browser to assume it's standard behave.
    console.log(event);

    const userName = document.querySelector('#userName').value; //to get the input from the form
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;

    //validate de user input (Anthony's idea)

    if (!userName || !title || !content) {
        console.log(`invalid Input`);
        alert(`Please fill all fields`);
        return false;
    }

    // transform user input into an object, in our case, userName, post title and post content.
    const newPost = {
        username: userName, title: title, content: content
    };

    // add the object into our blogPost array
    blogPost.push(newPost);
    console.log(newPost);
    //finally store the array into  the localStorage
    localStorage.setItem('blogPosts', JSON.stringify(blogPost)); // retrive JSON from this line.


    // 
    document.addEventListener(`DOMContentLoaded`, () => {
        const submitButton = document.getElementById(`submit-btn`);
        submitButton.addEventListener(`click`, submitBlogPost);
    });

    // Redirect to posts page (blog.html)
    window.location.href = 'blog.html';
};

