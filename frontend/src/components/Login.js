export default function Login (){
    return (
        <div>
            <div className="mb-3">
                <label for="usernameInput" className="form-label">User name</label>
                <input type="text" className="form-control" id="usernameInput"></input>
            </div>
            <div className="mb-3">
                <label for="passwordInput" className="form-label">Password</label>
                <input type="password" className="form-control" id="passwordInput"></input>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="rememberInput"></input>
                <label className="form-check-label" for="rememberInput">Check me out</label>
            </div>
            <button className="btn btn-primary">Login</button>
        </div>
    );
}