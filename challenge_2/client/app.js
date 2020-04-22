
let formEl = document.querySelector('form');

formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    // const formData = new FormData(e.target);
    console.log(e);
    // submit the data via XHR
    //   let request = new XMLHttpRequest();
    //   request.open("POST", "/formHandler");
    //   request.send(data);
});
