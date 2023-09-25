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
  saveBlogPost(title, content, imageSrc, category);

  // Clear form fields
  form.reset();
  window.location.href = 'newPost.html';
});
