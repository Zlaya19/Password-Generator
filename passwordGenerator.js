
const output = document.getElementById('output');
const btn10 = document.getElementById('btn10');
const btn15 = document.getElementById('btn15');
const btn20 = document.getElementById('btn20');
const deletePass = document.getElementById('delete');
const copyPass = document.getElementById('copy');

// all elements used to compile a random password

const passwordElements = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

btn10.addEventListener('click', function(){
    output.innerText = password10();
    output.classList.add('classDiv');
})
   
// a function that returns a password of ten random elements

function password10() {

    let index = '';
    
    for( let i=0; i<10; i++ ){
        const randomMath = [Math.floor(Math.random() * passwordElements.length)];
        index += passwordElements[randomMath];
    } return index;
};

btn15.addEventListener('click', function(){
    output.innerText = password15();
    output.classList.add('classDiv');
})

// a function that returns a password of 15 random elements

function password15() {

    let indux = '';
    
    for( let i=0; i<15; i++ ){
        const randomMath = [Math.floor(Math.random() * passwordElements.length)];
        indux += passwordElements[randomMath];
    } return indux;
};

btn20.addEventListener('click', function(){
    output.innerText = password20();
    output.classList.add('classDiv');
})

// a function that returns a password of 20 random elements

function password20() {

    let indax = '';
    
    for( let i=0; i<20; i++ ){
        const randomMath = [Math.floor(Math.random() * passwordElements.length)];
        indax += passwordElements[randomMath];
    } return indax;
};

deletePass.addEventListener('click', function(){
    output.innerText = '';
});

    //the 'copy' button copies the content of the output and so we have access to it via paste

    copy.addEventListener("click", function() {
        
            var inp = document.createElement('input');
            document.body.appendChild(inp)
            inp.value = output.innerText;
            inp.select();
            document.execCommand('copy',false);
            inp.remove();
            
    });

    // during a click, the output content increases, to give the impression that something is happening
    
    copy.addEventListener('mousedown', function(){
        output.style.transform = 'scale(1.1)';
    });

    // during the return of the so-called mouseup, the output content is returned to the previous size

    copy.addEventListener('mouseup', function(){
        output.style.transform = 'scale(1.0)';
    });
    
  
  
    
    