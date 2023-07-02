// import { useAuthentication } from '../hooks/auth'

import { AuthRoutes, UserRoutes } from './stack'

export const Routes = () => {
    // const { user } = useAuthentication()

    // return user ? <UserRoutes /> : <AuthRoutes />;
    return <UserRoutes />
}