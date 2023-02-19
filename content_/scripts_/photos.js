const link1 = document.querySelector('#link1');
const toLink1 = document.querySelector('#toLink1');

let clickLink = 0;
link1.addEventListener('click', () => {

    clickLink++;
    if(clickLink <= 1){

        toLink1.style.display = 'none';
    }else{
        clickLink = 0;
        toLink1.style.display = 'block';
    }

    console.log(clickLink)
});