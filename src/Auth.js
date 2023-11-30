import './Auth.css';

function Auth(props){
    let password = document.getElementById('password');
    let passwordCheck = document.getElementById('passwordCheck');
    if(password === passwordCheck){
        alert('checked')
    }
    else{
        alert('Incorrect password')
    }


    return(
        <div className="auth-container">
            <form>
                <label id="username">Username: {props.username} </label>
                <input type="text" className="username" id="userName" name="username" for="username" placeholder={props.username}/>

                <label id="email"> Email: {props.email}</label>
                <input type="email" className="email" name="email" for="email" placeholder={props.email}/>

                <label id="password"> Password: {props.password}</label>                
                <input type="password" className="password" required name="password" id="password" for="password" placeholder={props.password}/>
                              
                <label id="passwordCheck"> Password again: {props.passwordCheck}</label>
                <input type="password" required className="passwordCheck" id="passwordCheck" name="passwordCheck" for="passwordCheck" placeholder={props.passwordCheck}/>
            </form>
        </div>
    )
}

export default Auth;