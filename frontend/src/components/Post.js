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
                <div class="card text-center">
                    <div class="card-header">
                        Post
                    </div>
                    <div class="card-body">
                        <p class="card-text">content</p>
                    </div>
                    <div class="card-footer text-muted">
                        2 days ago
                    </div>
               </div>
         </div>
     )
}