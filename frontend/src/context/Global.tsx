/* eslint-disable @typescript-eslint/no-empty-function */
import React, {
  useMemo,
  useCallback,
  useState,
  useEffect,
  createContext,
} from "react";

import PropTypes from "prop-types";

import usePersistedState from "../hooks/usePersistentState";
import {
  requestDelete,
  setHeaderBearerToken,
  removeHeaderBearerToken,
} from "../utils/Request";

interface IGlobalContext {
  user: {
    currentUser: any;
    setUser: any;
  };
  login: {
    isSignedIn: any;
    login: any;
    logout: any;
  };
  loading: {
    loading: any;
    setLoading: any;
  };
  refresh: {
    refresh: any;
    setRefresh: any;
  };
}

export const GlobalContext = createContext<IGlobalContext>({
  user: {
    currentUser: null,
    setUser: () => {},
  },
  login: {
    isSignedIn: false,
    login: () => {},
    logout: () => {},
  },
  loading: {
    loading: false,
    setLoading: () => {},
  },
  refresh: {
    refresh: false,
    setRefresh: () => {},
  },
});

interface IGlobalProvider {
  children: React.ReactNode;
}

export function GlobalProvider({ children }: IGlobalProvider) {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = usePersistedState("user", {
    name: "",
    username: "",
    email: "",
    token: "",
  });

  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const login = useCallback(
    async (data: any) => {
      await setUser(data);
      await setHeaderBearerToken(data.token);
      await setIsSignedIn(true);
    },
    [setUser, setIsSignedIn]
  );

  const logout = useCallback(async () => {
    await removeHeaderBearerToken();
    await setUser({
      name: "",
      username: "",
      email: "",
      token: "",
    });
    await setIsSignedIn(false);
  }, [setUser, setIsSignedIn]);

  const memorizedContext = useMemo(
    () =>
      ({
        user: {
          currentUser: user,
          ...user,
          setUser,
        },
        login: {
          isSignedIn,
          login,
          logout,
        },
        loading: {
          loading,
          setLoading,
        },
        refresh: {
          refresh,
          setRefresh,
        },
      } as IGlobalContext),
    [
      user,
      isSignedIn,
      loading,
      setUser,
      refresh,
      setRefresh,
      login,
      logout,
      setLoading,
    ]
  );

  useEffect(() => {
    console.log("Loop!");
  }, []);

  return (
    <GlobalContext.Provider value={memorizedContext}>
      {children}
    </GlobalContext.Provider>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalProvider;
