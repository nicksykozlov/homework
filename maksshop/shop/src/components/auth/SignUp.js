import '../../styles/auth.css';
import {useState} from "react";
import api from '../../api/products'
import {useDispatch} from "react-redux";
import {signIn} from "../../store/userSlice";

export default function SignUpForm({setToken}) {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState([]);
    const dispatch = useDispatch();
    function formSubmit(e) {
        e.preventDefault();
        api.register({name, email, password})
            .then(res => {
                setToken( res.data.access_token);
                dispatch(()=>signIn(res.data.user))
                setErrors([])
            })
            .catch(res => {
                console.log();
                setErrors(...Object.values(res.response.data.errors))
            })

    }

    return (<form onSubmit={formSubmit}>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Имя</label>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="form-control"
                id="name"
                name='name'
                placeholder="Имя"/>
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control"
                id="email"
                name='email'
                placeholder="Email"/>
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Пароль</label>
            <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                className="form-control"
                id="password"
                name='password'
                placeholder="Пароль"/>
        </div>
        <div className="mb-3">
            <input type="submit" className="btn btn-info" value='Зарегистрироваться'/>
        </div>
        {errors.length > 0 &&
            <ul>
                {errors.map(error => <li>{error}</li>)}
            </ul>
        }
    </form>)
}