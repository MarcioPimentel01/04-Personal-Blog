document.addEventListener('DOMContentLoaded', () => {
    // Add event listener to the submit button when the DOM content is loaded
    const submitButton = document.getElementById('submit-btn');
    submitButton.addEventListener('click', submitBlogPost);
  });
  
  // Initialize an empty array outside of the submitBlogPost function - People from StackFLow say that is a good practice
  let blogPost = [];
  
  // Define the submitBlogPost function
  const submitBlogPost = (event) => {
    event.preventDefault(); // Prevent default browser form submission behavior
  
    //changed back to querySelector to see if could solve the problem with doble posting
    const userName = document.querySelector('#userName').value;
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;
  
    // Validate user input - ternary operator way:

    !userName || !title || !content ? (console.log(`Invalid input`), alert(`Please fill up all fields`), false) : !true;

  
    // Transform user input into an object
    const newPost = {
      username: userName,
      title: title,
      content: content
    };
      
    // Retrieve existing posts from localStorage (or create an empty array)
    const existingPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
  
    // Add the new post to the existing posts array
    existingPosts.push(newPost);
  
    // Store the updated array into localStorage
    localStorage.setItem('blogPosts', JSON.stringify(existingPosts));
  
  
    // Redirect to the posts page (blog.html)
    window.location.href = 'blog.html';
  };
  