const form = document.getElementById('comment-form');
const nameInput = document.getElementById('name-input');
const avatarInput = document.getElementById('avatar-input');
const messageInput = document.getElementById('message-input');
const commentList = document.getElementById('comment-list');
const showNameCheckbox = document.getElementById('show-name-checkbox');

const defaultAvatars = [
  'https://via.placeholder.com/50x50?text=A',
  'https://via.placeholder.com/50x50?text=B',
  'https://via.placeholder.com/50x50?text=C',
  'https://via.placeholder.com/50x50?text=D',
  'https://via.placeholder.com/50x50?text=E'
];

function getRandomAvatar() {
  return defaultAvatars[Math.floor(Math.random() * defaultAvatars.length)];
}

function checkSpam(str) {
  return str.replace(/viagra|xxx/ig, '***');
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  let name = nameInput.value.trim() || 'username';
  name = capitalizeFirstLetter(name);

  const avatar = avatarInput.value.trim() || getRandomAvatar();
  const message = checkSpam(messageInput.value.trim());

  const comment = document.createElement('li');
  comment.classList.add('comment');
  comment.innerHTML = `
    <img src="${avatar}" alt="Аватар" class="comment-avatar">
    <div class="comment-body">
      <h3 class="comment-author">${showNameCheckbox.checked ? name : 'Аноним'}</h3>
      <p class="comment-text">${message}</p>
      <p class="comment-date">${new Date().toLocaleString()}</p>
    </div>
  `;

  commentList.appendChild(comment);

  nameInput.value = '';
  avatarInput.value = '';
  messageInput.value = '';
  showNameCheckbox.checked = false;
});