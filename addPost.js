 // Function to save blog post to local storage
 function saveBlogPost(title, content, imageSrc, category) {
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    
    const blogPost = {
      title: title,
      content: content,
      imageSrc: imageSrc,
      category: category
    };
    
    blogPosts.push(blogPost);
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
  }

// Function to convert image to Base64 string
  function convertImageToBase64(image) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      
      reader.onload = () => {
        resolve(reader.result);
      };
      
      reader.onerror = reject;
      
      reader.readAsDataURL(image);
    });
  }

  
  // Handle form submission
  const form = document.getElementById('blogform');
  form.addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const image = document.getElementById('image').files[0];
    const category = document.getElementById('select1').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    
    // Perform necessary processing (e.g., upload image)
    const imageSrc = await convertImageToBase64(image);


    // Save blog post to local storage
    saveBlogPost(title,content,imageSrc,category);
    
    // Clear form fields
    form.reset();
    window.location.href = 'chatty.html';
  });





  // const form = document.getElementById("blogform");

  // document.addEventListener("DOMContentLoaded", function() {
  //   form.addEventListener("submit", function(e) {
  //     e.preventDefault(); // Prevent form submission

  //     const title = document.getElementById("title").value;
  //     const image =document.getElementById("is-thumb").files[0];
  //     const content = document.getElementById("content").value;

  //     // Create a blog post object
  //     const blogPost=  {
  //             title: title,
  //             image: image,
  //             content: content
  //         }
  //    console.log(blogPost.image)
  //         function errand(task){
  //             blogPost.push(task);
  //         }
  //     // Convert the object to JSON string
  //     const blogPostJson = JSON.stringify(blogPost);

  //     // Save the blog post in local storage
  //     localStorage.setItem("blogPost", blogPostJson);

  //     // Clear the form inputs
  //     form.reset();
  //   });
  // });

  