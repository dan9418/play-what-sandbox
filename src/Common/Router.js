import React, { useState, useEffect, createContext, useContext } from 'react';

const DEFAULT_ROUTE = ['splash'];
const NOP = () => null;
const DEFAULT_ROUTE_CONTEXT = {
    route: DEFAULT_ROUTE,
    setRoute: NOP
};

const RouteContext = createContext();
RouteContext.displayName = 'RouteContext';

export const RouteContextProvider = ({ children }) => {
    const [route, setRoute] = useState(DEFAULT_ROUTE);

    const routeContextValue = {
        route: route,
        setRoute: setRoute
    }

    return (
        <RouteContext.Provider value={routeContextValue}>{children}</RouteContext.Provider>
    );
};

const useRouteContext = () => useContext(RouteContext);

export default useRouteContext;

