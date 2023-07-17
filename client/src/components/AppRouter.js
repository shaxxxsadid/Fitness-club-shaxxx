import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Context } from '..';

import { authRoutes, publicRoutes } from './routes/routes';

const AppRouter = observer(() => {
    const {user} = useContext(Context)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component, exact}) =>
                <Route key={path} path={path} element={Component} exact={exact} />
            )}
            {publicRoutes.map(({path, Component, exact}) =>
                <Route key={path} path={path} element={Component} exact={exact} />
            )}
        </Routes>
    );
});

export default AppRouter;