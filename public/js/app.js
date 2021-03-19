console.log("JHiiiiiiii")




  const  form = document.querySelector('form');
  const search = document.querySelector('input');

  const title = document.getElementById("title");
  const body = document.getElementById('body');
  const image = document.getElementById('img');

  form.addEventListener('submit',(e) => {
      e.preventDefault();
      const location = search.value;

      fetch('https://jsonplaceholder.typicode.com/photos/'+location)
  .then(response => response.json())
  .then(json => {
    console.log(json)
    title.textContent = json.title;
    body.textContent = json.url;

    image.src =json.thumbnailUrl; 
  
  })
      console.log("Testing",location);
  });