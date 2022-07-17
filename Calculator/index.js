 /*let string = '';
let buttons = document.querySelectorAll('.btn');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        } else if(e.target.innerHTML == 'C') {
            string = '';
            document.querySelector('input').value = string;
        } else {
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
}) 
*/
let input = document.querySelector('input');
let buttons = Array.from(document.querySelectorAll('.btn'));
//console.log(buttons);
buttons.map(button =>{
    button.addEventListener('click', (e) =>{
        switch(e.target.innerText) {
            case 'C':
                input.value = '';
                break;

            case '=':
                try {
                    input.value = eval(input.value);
                } catch {
                    input.value = 'Error';
                }
                break;

            default: {
            input.value = input.value + e.target.innerText; 
             //   console.log(e.target.innerText)
            }
        }
    } );
});