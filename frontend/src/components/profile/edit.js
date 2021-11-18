import { useRef } from "react";

export default function EditProfile (props){
    const profile = props.profile
    const avatarInput = useRef();
    const nameInput = useRef();
    const birthdayInput = useRef();
    function getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }
    function saveChanges (){
        if ( avatarInput.current.files ){
            getBase64(avatarInput.current.files[0]).then( (data) => {
                console.log(data)
            })
        }
    }
    return (
        <div class="modal fade" id="editProfileModal" tabindex="-1" role="dialog" aria-labelledby="editProfileModalTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="editProfileModalTitle">Edit your profile</h5>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="avatarInput" class="form-label custom-file-input">Change your avatar</label>
                            <input ref={avatarInput} class="form-control" type="file" id="avatarInput"></input>
                        </div>
                        <div class="form-group">
                            <label class="form-label" for="nameInput">Name</label>
                            <input ref={nameInput} type="name" class="form-control" id="nameInput" placeholder={profile.name}></input>
                        </div>
                        <div class="form-group">
                            <label class="form-label" for="birthdayInput">Birthday</label>
                            <input ref={birthdayInput} type="date" class="form-control" id="birthdayInput" value={profile.birthday}></input>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" onClick={() => saveChanges() }>Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}