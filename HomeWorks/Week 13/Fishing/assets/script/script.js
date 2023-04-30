const form = document.getElementById('comment-form');
const nameInput = document.getElementById('name-input');
const avatarInput = document.getElementById('avatar-input');
const messageInput = document.getElementById('message-input');
const commentList = document.getElementById('comment-list');
const showNameCheckbox = document.getElementById('show-name-checkbox');

const defaultAvatars = [
  'https://icons.iconarchive.com/icons/iconarchive/incognito-animals/128/Giraffe-Avatar-icon.png',
  'https://icons.iconarchive.com/icons/iconarchive/incognito-animals/128/Kangaroo-Avatar-icon.png',
  'https://icons.iconarchive.com/icons/iconarchive/incognito-animals/128/Meerkat-Avatar-icon.png',
  'https://icons.iconarchive.com/icons/iconarchive/incognito-animals/128/Sloth-Avatar-icon.png',
  'https://icons.iconarchive.com/icons/iconarchive/incognito-animals/128/Reindeer-Avatar-icon.png'
];

function getRandomAvatar() {
  return defaultAvatars[Math.floor(Math.random() * defaultAvatars.length)];
  
  const name = nameInput.value.trim().replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function checkSpam(str) {
  return str.replace(/viagra|xxx/ig, '***');
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const name = nameInput.value.trim() || 'username';
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