
import { useSelector } from 'react-redux';

export default function User() {
    const user = useSelector((state) => state.user);
    return (
        <div>
            <h1>{user.username} , {user.balance}</h1>
        </div>
    )
}