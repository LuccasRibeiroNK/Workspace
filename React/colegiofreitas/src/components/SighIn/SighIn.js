import React from 'react'
import { useState } from 'react'
import { Form, Button, Card, Container } from 'react-bootstrap'
import * as C from './Style'
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
} from 'firebase/auth'
import { auth } from '../../FirebaseConfig'


function SighIn() {

    const [criaEmail, setCriaEmail] = useState('')
    const [criaSenha, setCriaSenha] = useState('')
    const [user, setUser] = useState({})


    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    });

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                criaEmail,
                criaSenha
            );
            console.log(user);
        } catch (error) {
            alert(error.message);
        }
    }



    return (

        <C.Container className='Container-main'>
            <C.Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Criar conta</h2>

                    <Form >
                        <Form.Group id="email">
                            <Form.Label>Digite Email</Form.Label>
                            <Form.Control type="email"
                                value={criaEmail}
                                onChange={(e) => setCriaEmail(e.target.value)}
                                required />
                        </Form.Group>

                        <Form.Group id="password">
                            <Form.Label>Digite Senha</Form.Label>
                            <Form.Control type="password"
                                value={criaSenha}
                                onChange={(e) => setCriaSenha(e.target.value)}
                                required />
                        </Form.Group>

                        <Button variant="primary"
                            onClick={register}
                            type="submit">
                            Criar conta
                        </Button>
                    </Form>
                    <div className="w-100 text-center mt-3">

                    </div>
                </Card.Body>
                <div className="w-100 text-center mt-2">
                    Criar uma conta nova?
                </div>
            </C.Card>
        </C.Container>

    )
}


export default SighIn;