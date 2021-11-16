const axios = require ('axios');

export default function DisplayPosts (){



    const display = () =>{

        axios.get("/post/getPost", {params:
        {
            "_id": "",
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