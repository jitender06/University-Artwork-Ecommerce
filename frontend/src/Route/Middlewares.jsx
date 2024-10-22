import React from 'react'
import { useNavigate } from 'react-router';
import { Navigate } from 'react-router';

const RoleMiddleware = (props, roleType) => {
    const data = JSON.parse(localStorage.getItem('data'));
    const user = data?.user
    const token = data?.refreshToken;
    if (token && user.role == roleType) {
        return (
            <React.Fragment>
                {props.children}
            </React.Fragment>
        );
    } else {
        return(
            <React.Fragment>
                <Navigate to={'/login'}  />
            </React.Fragment>
        );
    }
}
const AdminMiddleware = (props) => RoleMiddleware(props, 'admin');

export { AdminMiddleware }