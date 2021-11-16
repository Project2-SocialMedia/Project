const axios = require ('axios');

let ID = 2;

export default function DisplayProfile (){


    const display = () =>{

        axios.get("/profile/getProfile", {params:
        {
            "id":ID,
        }}).then((response) => {
            console.log(response.data);
          });
    }

    display();
     return(
         <div>

         </div>
     )
}