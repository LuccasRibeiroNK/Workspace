import React from "react";
import { auth, provider } from "../../services/firebase";
import * as C from "./styles";

const Login = () => {
    const handleSignIn = () => {
        auth.signInWithPopup(provider).catch(alert);
    };
    return (
        <C.Container>
            <C.Button onClick={handleSignIn}>Login com Google</C.Button>
        </C.Container>
    );
}

export default Login;