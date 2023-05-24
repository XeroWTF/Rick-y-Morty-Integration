import { useState } from 'react';
import styles from './Form.module.css';
import validation from './validation';


const Form = ({login}) => {

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({

    })

    const handleChange = (event)=>{
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value}
            ));

        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData)
    };

    return (

        <div className={styles.contenedor}>
            <form action="">
                <div>
                    <h2>Rick y Morty</h2>
                </div>
                <label htmlFor="Email">Email</label>
                <input onChange={handleChange} value={userData.email}type="text" name="email" />
                {errors.email && <p>{errors.email}</p>}
                <hr /> 
                <label htmlFor="Password">Password</label>
                <input onChange={handleChange} value={userData.password} type="password" name="password" />
                {errors.password && <p>{errors.password}</p>}
                <hr />
                <button onClick={handleSubmit} type="submit" >SUBMIT</button>
            </form>
        </div>
    )

};

export default Form;
