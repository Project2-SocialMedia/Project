export default function ProfileAbout (props){
    let profile = props.profile;
    return (
        
        <div class="card">
            <div className="card-header">
                About {profile.name}
            </div>
            <div class="card-body">
                { profile.birthday && profile.birthday != "" ? 
                <div><span class="badge badge-pill bg-primary font-weight-normal ms-auto me-1"><i class="bi bi-calendar-event"></i></span>{profile.birthday}</div>

                :`${profile.name} Not sharing his brithday`
                }
            </div>
        </div>
                        
                        
                        
    )
}