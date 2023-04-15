

   document.addEventListener('DOMContentLoaded', function(){
        document.querySelector('.form-1').addEventListener('submit', function(event){
            let name = document.querySelector('#name').value;
            alert('You are dead, '+name);
            event.preventDefault();
            });  
    });