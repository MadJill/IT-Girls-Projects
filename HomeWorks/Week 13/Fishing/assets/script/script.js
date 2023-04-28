const form = document.getElementById('comment-form');
const nameInput = document.getElementById('name-input');
const avatarInput = document.getElementById('avatar-input');
const messageInput = document.getElementById('message-input');
const commentList = document.getElementById('comment-list');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  // Преобразование имени
  const name = nameInput.value.trim().replace(/\b\w/g, (letter) => letter.toUpperCase());

  // Замена спам-слов
  const message = checkSpam(messageInput.value.trim());

  const avatar = avatarInput.value.trim();

  const comment = document.createElement('li');
  comment.classList.add('comment');
  comment.innerHTML = `
    <img src="${avatar}" alt="Аватар" class="comment-avatar">
    <div class="comment-body">
      <h3 class="comment-author">${name}</h3>
      <p class="comment-text">${message}</p>
    </div>
  `;

  commentList.appendChild(comment);

  nameInput.value = '';
  avatarInput.value = '';
  messageInput.value = '';
});

function checkSpam(str) {
  return str.replace(/viagra|xxx/gi, '***');
}

/* Примечание:
- /\b\w/g - это регулярное выражение для выбора первой буквы в каждом слове в строке
- (letter) => letter.toUpperCase() - это функция обратного вызова, которая принимает первую букву слова и возвращает ее в верхнем регистре
- /viagra|xxx/gi - это регулярное выражение для выбора строк, содержащих 'viagra' или 'xxx', где 'g' означает глобальный поиск, 'i' означает нечувствительность к регистру. Функция `replace()` используется для замены найденных строк на '***' */