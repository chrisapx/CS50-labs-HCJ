

   document.addEventListener('DOMContentLoaded', function(){
        document.querySelector('.form-1').addEventListener('submit', function(event){
            let name = document.querySelector('#name').value;
            alert('You are dead, '+name);
            event.preventDefault();
            });  
    });

    documemt.addEventListener('DOMContentLoaded', function(){
        let input = document.querySelector('#textbox1');
        input.document.addEventListener('keyup', function(event){
            let name = document.querySelector('.desc');

            if(input.value){
                name.innerHTML = `${input.value}`
            }
            else{
                name.innerHTML = 'Doomed code'
            }
        });
        event.preventDefault();
    });
    