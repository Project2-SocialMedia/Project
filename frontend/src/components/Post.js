import { useEffect, useState, useRef } from "react";
const axios = require ('axios');

export default function Post (props){
    const post = props.info;
    return (
        <div class="col-sm-12">
        <div class="card card-block card-stretch card-height">
           <div class="card-body">
              <div class="user-post-data">
                 <div class="d-flex justify-content-between">
                    <div class="me-3">
                       <img class="rounded-circle img-fluid" src="https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png" width="50" height="50" alt=""></img>
                    </div>
                    <div class="w-100">
                       <div class="d-flex justify-content-between">
                          <div class="">
                             <h5 class="mb-0">{post.user.name} </h5>
                             <small>{post.date}</small>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
              <div class="mt-3">
                 <p> { post.content } </p>
              </div>
           </div>
        </div>
     </div>)

}