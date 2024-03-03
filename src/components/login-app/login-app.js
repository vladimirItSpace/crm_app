import './login-app.scss';
import logo from '../../logo.png';

function LoginApp() {
    return (
        <div className='main-block'>
            <div className='main-block__logo-field'>
                <img className='' src={logo} alt='Logo' />
            </div>
            <div className='main-block__text-field'>
                <h3>Welcome Back</h3>
                <p>Sign in to continue to CRM</p>
            </div>
            <div className='main-block__form'>
                <div className="main-block__form_field">
                    <label htmlFor="">Username</label>
                    <input type="text" />
                </div>
                <div className="main-block__form_field">
                    <label htmlFor="">Password</label>
                    <input type="text" />
                </div>
                <div className="main-block__form_check">
                    <div className="checkbox">
                        <input type="checkbox" />
                        <label htmlFor="">Remember me</label>
                    </div>
                    <button>Log In</button>
                </div>


            </div>
        </div>
    );
}

export default LoginApp;
