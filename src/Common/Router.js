import React, { useState, useEffect, createContext, useContext } from 'react';

const DEFAULT_ROUTE = ['splash'];
const NOP = () => null;

const RouteContext = createContext();
RouteContext.displayName = 'RouteContext';

export const RouteContextProvider = ({ children }) => {
    const [route, setRoute] = useState(DEFAULT_ROUTE);

    const routeContextValue = {
        route: route,
        setRoute: setRoute,
        setRouteIndex: i => setRoute(route.slice(0, i + 1)),
        push: r => setRoute([...route, r]),
        pop: () => setRoute(route.slice(0, route.length - 1)),
        popPush: r => setRoute([...route.slice(0, route.length - 1), r])
    }

    return (
        <RouteContext.Provider value={routeContextValue}>{children}</RouteContext.Provider>
    );
};

const useRouteContext = () => useContext(RouteContext);

export default useRouteContext;

