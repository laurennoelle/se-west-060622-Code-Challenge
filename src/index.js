
// See the image received from the server, including its title, likes and comments when the page loads. You will need to make a GET request to the following endpoint to retrieve the image data, along with its associated comments:

//grab image card and assign it a variable
//fetch request GET 
//image, title, likes, comment append to image-card

const cardImage = document.querySelector('.image-container');

fetch('http://localhost:3000/images/1')
    .then((res) => res.json())
    .then(data => renderImage(data));

function renderImage(images) {
    updateImageDetails(images);
    appendImage(picture);
}

function appendImage(picture) {
    const img = document.createElement('img');
    img.src = picture.image;
    img.details = picture;
    cardImage.append(img);
}

function updateImageDetails(picture) {
    const images = document.querySelector('#card-image')
    images.innertext = picture.images;
    const comments = document.querySelector('#comments-list')
    comments.innertext = picture.comments;

}
// Click on the heart icon to increase image likes on the page. No persistence is needed.
//create event listener 'click' and increase +1

const button = document.querySelector('#like-button')
button.addEventListener('click', likeButton)

let likes = document.querySelector("#likes")
num = parseInt(likes.innerText)
num += 1
likes.innerText = num

fetch ('http://localhost:3000/comments', {
  method: "POST",
  headers: {
    "Accept": 'application/json',
    "Content-Type": 'application/json'
  },
  body: JSON.stringify ({
    image_id: id
  })
})



// Add a new comment to the page when the comment form is submitted. No persistence is needed.
//add event listener for 'submit'
//connect to <button>


const init = () => {
    const inputForm = document.querySelector('#comment-form');
}

inputForm.addEventListener("submit", (event) => {
    event.preventDefault());
    const input = document.querySelector('input.comment-input')
    console.log(input.value);
}