document.addEventListener('DOMContentLoaded', () => {
    let counter = document.getElementById('counter');
    let count = 0;
    let isPaused = false;
    const likesList = document.querySelector('.likes');
    const commentForm = document.getElementById('comment-form');
    const commentsList = document.querySelector('.comments');
  
    // Function to update the counter
    function updateCounter() {
      if (!isPaused) {
        count++;
        counter.innerText = count;
      }
    }
  
    // Start the timer
    let timerInterval = setInterval(updateCounter, 1000);
  
    // Increment and Decrement buttons
    const minusButton = document.getElementById('minus');
    const plusButton = document.getElementById('plus');
  
    minusButton.addEventListener('click', () => {
      count--;
      counter.innerText = count;
    });
  
    plusButton.addEventListener('click', () => {
      count++;
      counter.innerText = count;
    });
  
    // Like button
    const likeButton = document.getElementById('heart');
  
    likeButton.addEventListener('click', () => {
      const existingLike = document.querySelector(`[data-num="${count}"]`);
      if (existingLike) {
        const likeCountSpan = existingLike.querySelector('span');
        likeCountSpan.innerText = parseInt(likeCountSpan.innerText) + 1;
      } else {
        const newLike = document.createElement('li');
        newLike.setAttribute('data-num', count);
        newLike.innerHTML = `${count} has been liked <span>1</span> time`;
        likesList.appendChild(newLike);
      }
    });
  
    // Pause and Resume button
    const pauseButton = document.getElementById('pause');
  
    pauseButton.addEventListener('click', () => {
      if (isPaused) {
        isPaused = false;
        timerInterval = setInterval(updateCounter, 1000);
        pauseButton.innerText = 'pause';
        minusButton.disabled = false;
        plusButton.disabled = false;
        likeButton.disabled = false;
      } else {
        isPaused = true;
        clearInterval(timerInterval);
        pauseButton.innerText = 'resume';
        minusButton.disabled = true;
        plusButton.disabled = true;
        likeButton.disabled = true;
      }
    });
  
    // Comment form submission
    commentForm.addEventListener('submit', event => {
      event.preventDefault();
      const commentInput = document.getElementById('comment-input');
      const commentText = commentInput.value;
      commentInput.value = '';
      const commentElement = document.createElement('p');
      commentElement.innerText = commentText;
      commentsList.appendChild(commentElement);
    });
  });
  
