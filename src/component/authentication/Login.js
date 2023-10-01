import React from 'react';
import '../../css/Login.css';
import { useNavigate } from 'react-router-dom'

function Login() {

    const navigate = useNavigate();

    const homepage = (event) => {
        navigate("/");
    }
  
    return (
        <div className='Login'>
            <div className='LoginForm'>
                <div className='LoginInner'>
                    <div>
                        {/* {error && <div className='LoginErrorMessage'>{error} !!</div>} */}

                        <div className='user-input-wrp '>
                            <br></br>
                            <input id='InputEmailId' onChange={(e) => { }} type="text" className="inputText" required />
                            <span className="floating-label">Email</span>
                        </div>

                        <div className='user-input-wrp '>
                            <br></br>
                            <input id='InputPasswordId' onChange={(e) => { }} type="password" className="inputText" required />
                            <span className="floating-label">Password</span>
                        </div>

                        <div className='LoginCancelBtns'>
                            <button className='btn btn-danger' onClick={(event) => { }} ><b>Submit</b></button>

                            <button className='btn btn-secondary' onClick={(event) => { homepage() }} ><b>Cancel</b></button>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Login