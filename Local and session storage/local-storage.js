const addDisplay = () => {
    const inputId = document.getElementById('input-id');
    const id = inputId.value;
    const inputValue = document.getElementById('input-value');
    const value = inputValue.value;
    console.log(value);
    //
    localStorage.setItem(id, value);
    inputId.value = '';
    inputValue.value= '';
    //array
localStorage.setItem('number',JSON.stringify([54,42,41,45,41]));
    sessionStorage.setItem(id, value);
    inputId.value = '';
    inputValue.value= '';
    //array
sessionStorage.setItem('number',JSON.stringify([54,42,41,45,41]));

}