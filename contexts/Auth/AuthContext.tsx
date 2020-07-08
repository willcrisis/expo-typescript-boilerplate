import React, {
    createContext,
    useReducer,
    useEffect,
    useCallback,
    useContext,
    FunctionComponent,
    PropsWithChildren,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const ACTIONS = {
    RESTORE_TOKEN: 'RESTORE_TOKEN',
    SIGN_IN: 'SIGN_IN',
    SIGN_OUT: 'SIGN_OUT',
};

const DEFAULT_VALUE = {
    isLoading: true,
    isSignout: false,
    userToken: null,
    signIn: () => null,
    signOut: () => null,
};

type AuthContextType = {
    isLoading: boolean;
    isSignout: boolean;
    userToken?: string | null;
    signIn: () => void;
    signOut: () => void;
};

type ActionType = {
    type: string;
    token?: string | null;
};

const AuthContext = createContext<AuthContextType>(DEFAULT_VALUE);

const AuthContextProvider: FunctionComponent<PropsWithChildren<{}>> = ({
    children,
}) => {
    const [state, dispatch] = useReducer<
        (prevState: AuthContextType, action: ActionType) => AuthContextType
    >((prevState, action) => {
        switch (action.type) {
            case ACTIONS.RESTORE_TOKEN:
                return {
                    ...prevState,
                    userToken: action.token,
                    isLoading: false,
                };
            case ACTIONS.SIGN_IN:
                return {
                    ...prevState,
                    isSignout: false,
                    userToken: action.token,
                };
            case ACTIONS.SIGN_OUT:
                return {
                    ...prevState,
                    isSignout: true,
                    userToken: null,
                };
            default:
                return prevState;
        }
    }, DEFAULT_VALUE);

    useEffect(() => {
        const bootstrapAsync = async () => {
            let userToken = null;

            try {
                userToken = await AsyncStorage.getItem('userToken');
            } catch (e) {
                // properly log error
            }
            dispatch({ type: ACTIONS.RESTORE_TOKEN, token: userToken });
        };

        bootstrapAsync();
    }, []);

    const signIn = useCallback(
        () => dispatch({ type: ACTIONS.SIGN_IN, token: 'dummy-auth-token' }),
        []
    );

    const signOut = useCallback(() => dispatch({ type: ACTIONS.SIGN_OUT }), []);

    return (
        <AuthContext.Provider
            value={{
                ...state,
                signIn,
                signOut,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth: () => AuthContextType = () => useContext(AuthContext);

export default AuthContextProvider;
