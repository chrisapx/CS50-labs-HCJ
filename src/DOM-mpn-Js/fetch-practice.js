function doPost(){

    const update = {
        username: 'Chris',
        passsword: 'Aplexy@1',
        };
        
        //Parse the data to JSON

        const options = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(update),
        };

        //Doing the fetch() call to the API

        fetch('http://localhost:8080/users/auth', options)
  .then(data => {
      if (!data.ok) {
        throw Error(data.status);
       }
       return data.json();
      }).then(update => {
      console.log(update);

      }).catch(e => {
      console.log(e);
      });

      alert(update.Error)
}

// Still having buggggggsssssssss