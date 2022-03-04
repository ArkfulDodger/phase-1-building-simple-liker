// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// Click on EMPTY HEART:
// click event on heart, display error modal on error (hide again after 3 secs)
// empty heart to full heart on success and add .activated-heart class to style

// Click on FULL HEART:
// change to empty, remove activated heart class

// Do not manipulate style properties
// only manipulate DOM on successful request

addClickEventToHearts();

function addClickEventToHearts() {
  const hearts = document.querySelectorAll('.like-glyph');

  hearts.forEach(heart => {
    heart.addEventListener('click', () => likePost(heart))
  });
}

function likePost(heart) {
  if (heart.textContent === EMPTY_HEART) {
    mimicServerCall()
    .then( () => heart.textContent = FULL_HEART)
    .catch( flagError)
  } else {
    heart.textContent = EMPTY_HEART;
  }
}

function flagError() {
  document.querySelector('#modal').classList.remove('hidden');
  setTimeout(() => document.querySelector('#modal').classList.add('hidden'), 3000)
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
