// Використовуючи API https://jsonplaceholder.typicode.com/ зробити пошук поста за ід.
// Ід має бути введений в інпут (валідація: ід від 1 до 100) Якщо знайдено пост, то вивести на сторінку блок з постом і зробити кнопку для отримання комкоментарів до посту.
// Зробити завдання використовуючи проміси, перехопити помилки.
const apiUrl = `https://jsonplaceholder.typicode.com`,
      btnSearch = document.querySelector(`#btn_search`),
      postIdInput = document.querySelector(`#postId`),
      postWrap = document.querySelector(`#post`),
      commentWrap = document.querySelector(`#comment`);

btnSearch.addEventListener(`click`, ()=>{
  let postId = postIdInput.value;
  // console.log(postId);
    fetch(`${apiUrl}/posts/${postId}`)
    .then(res => res.json())
    .then(res => {
      postWrap.innerHTML=`
      <h2>${res.id}</h2>
      <p>${res.title}</p>
      <p>${res.body}</p>
      <button class="btn comment" id="btn_comment" type="submit">Comment</button>`
      const btnComment = document.querySelector(`#btn_comment`);
        btnComment.addEventListener(`click`, ()=>{
          fetch(`${apiUrl}/posts/${postId}/comments`)
          .then(res => res.json())
          .then(res => {
            // console.log(`${apiUrl}/posts/${postId}/comments`)
            commentWrap.innerHTML="";
            res.forEach(el => {
              const div = document.createElement(`div`)
              div.innerHTML = `
              <h2>${el.id}</h2>
              <p>${el.name}</p>
              <p>${el.email}</p>
              <p>${el.body}</p>`;
              commentWrap.appendChild(div)
            });
          }
          
          )
        })
    });

    
})