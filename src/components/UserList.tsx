import React from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector';

const UserList: React.FC = () => {
    const {error, users, loading} = useTypedSelector(state => state.user)
    console.log(error);
    return (
        <div>
            
        </div>
    )
}

export default UserList
