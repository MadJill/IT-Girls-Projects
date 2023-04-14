document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Получаем значения из полей ввода
    const nameInput = document.getElementById('name-input');
    const avatarInput = document.getElementById('avatar-input');
    const messageInput = document.getElementById('message-input');
    let name = nameInput.value.trim();
    let avatar = avatarInput.value.trim();
    let message = messageInput.value.trim();
  
    // Преобразуем имя: первая буква заглавная, остальные строчные
    name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  
    // Заменяем 'viagra' и 'XXX' на '***'
    const spamWords = ['viagra', 'xxx'];
    for (const word of spamWords) {
      const regex = new RegExp(word, 'gi');
      message = message.replace(regex, '***');
    }
  
    // Создаем новый комментарий
    const comment = document.createElement('li');
    comment.innerHTML = `
      <div class="avatar">
        <img src="${avatar}" alt="Аватар">
      </div>
      <div class="comment-content">
        <div class="comment-header">
          <span class="comment-author">${name}</span>
          <span class="comment-date">${new Date().toLocaleString()}</span>
        </div>
        <div class="comment-message">${message}</div>
      </div>
    `;
  
    // Добавляем комментарий в список
    document.getElementById('comment-list').appendChild(comment);
  
    // Очищаем поля ввода
    nameInput.value = '';
    avatarInput.value = '';
    messageInput.value = '';
  });
  
  