import './App.css';
import { useState } from 'react';
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword
} from 'firebase/auth';
import { auth } from './firebase-config'

function App() {

    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });
    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword);
            console.log(user);
        } catch (error) {
            alert(error.message);
        }
    }
    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword);
            alert(`Usuário logado com sucesso: ${user.user.email}`);
        } catch (error) {
            alert(error.message);
        }

    }
    const logout = async () => {
        await signOut(auth);
    }
    return (
        <div className="App" >
            <div>
                <h3>Register User</h3>
                <input placeholder='Email' type="text"
                    value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)} />
                <input placeholder='Password' type="password"
                    value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} />
                <button onClick={register}>Create user</button>


            </div>
            <div>
                <h3>Login User</h3>
                <input placeholder='Email' type="text"
                    value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
                <input placeholder='Password' type="password"
                    value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
                <button onClick={login}>Login</button>
            </div>
            <div>
                <h4>User Logged In:</h4>
                {user?.email}
                <button onClick={logout}>Logout</button>

            </div>

        </div>
    );
}

export default App;
