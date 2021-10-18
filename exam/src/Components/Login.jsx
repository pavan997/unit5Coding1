import React from 'react'
import styles from './Login.module.css'
import Cart from './Cart';
import Navbar from './Navbar';



function Login() {
    const initState  ={
        username : '',
        password : ''
    }
    const [data,setData] = React.useState(initState);
    const [isAuth,setIsAuth] = React.useState(false)
    const handleChange = (e) => {
        console.log(e.target.value)
        const {name,value} = e.target;


        setData({
            ...data,
            [name]:value
        })

    }
    const handleLogin = () =>{
        const {username,password} = data;
        if(username ==='admin' && password ==='admin'){
            setIsAuth(true);
        }else{
            alert('please check your details entered username or password is wrong')
            
        }
    }
    if(isAuth){
        return <Navbar/>
    }
    return (
        
        <div className = {styles.mainCont}>
            <h1>LoginPage</h1>
            <div className={styles.insideDiv}>
                <input type='text' name='username' placeholder='enter username' onChange={handleChange}/>
                <br/>
                <input type='password' name='password' placeholder='enter password' onChange={handleChange}/>
                <br/>
                <button onClick={handleLogin}>Login</button>
            </div>
            
        </div>
        
    )
}

export default Login
