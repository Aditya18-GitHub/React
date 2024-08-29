
import { useParams } from 'react-router-dom';

function User() {
    const {id} = useParams();
    return (
        <div className='flex justify-center bg-gray-600 text-white text-3xl p-4 mx-12'>
            User : {id}
        </div>
    );
}

export default User;