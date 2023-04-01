const apiUrl = `https://jsonplaceholder.typicode.com`,
      btnSearch = document.querySelector(`#btn_search`),
      postIdInput = document.querySelector(`#postId`),
      errorMessage = document.querySelector(`#error`),
      postWrap = document.querySelector(`#post`),
      commentWrap = document.querySelector(`#comment`);

btnSearch.addEventListener(`click`, (e)=>{
  e.preventDefault()
    let postId = postIdInput.value;
    if(postId < 1 || postId > 100){
        return errorMessage.classList.add(`show`);
    }else{
      errorMessage.classList.remove(`show`);

      fetch(`${apiUrl}/posts/${postId}`)
      .then(res => {
        return res.ok?res.json() : new Error((`ERROR! Status: ${res.statusText}`))
      })
      .then(res => {
        postWrap.innerHTML=`
        <hr>
        <h2>${res.title}</h2>
        <p>${res.body}</p>
        <button class="btn_comment" id="btn_comment" type="submit">Comment</button>`
        const btnComment = document.querySelector(`#btn_comment`);
          
        btnComment.addEventListener(`click`, ()=>{
          fetch(`${apiUrl}/posts/${postId}/comments`)
          .then(res => {
            return res.ok?res.json() : new Error((`ERROR! Status: ${res.statusText}`))
          })
          .then(res => {
            commentWrap.innerHTML="";
            res.forEach(el => {
              const div = document.createElement(`div`)
              div.innerHTML = `
              <hr>
              <h2>${el.name}</h2>
              <p>${el.email}</p>
              <p>${el.body}</p>`;
              commentWrap.appendChild(div)
            });
          }
          )
          .catch(error=>{
            console.error(error)
          })
        })
      })
      .catch(error=>{
        console.error(error),
        postWrap.innerHTML=`
        <p>${error.statusText}</p>`
      })
    }
})