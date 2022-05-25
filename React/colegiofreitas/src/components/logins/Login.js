import React from 'react'
import { Form, Button, Card, Container } from 'react-bootstrap'
import * as C from './Style'

function Login() {

    return (
        <>
            <C.Container className='Container-main'>
                <C.Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Entrar</h2>

                        <Form >
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" required />
                            </Form.Group>

                            <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" required />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Log In
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
        </>
    )
}

export default Login