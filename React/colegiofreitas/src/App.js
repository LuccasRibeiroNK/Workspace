import './App.css';
import { Container } from 'react-bootstrap';
import Login from './components/logins/Login';
import SighIn from './components/SighIn/SighIn';

function App() {
    return (
        <Container className='container-md'>
            <Login />
            <SighIn />

            <div className="App">
            </div>
        </Container>
    );
}

export default App;
