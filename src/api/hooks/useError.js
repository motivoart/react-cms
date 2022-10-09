import { useContext, useEffect } from 'react';

import { ErrorContext } from '../errorContext';

const useError = (error = 404) => {
    const { state, dispatch } = useContext(ErrorContext);

    useEffect(() => {
        const newState = { type: error };

        dispatch(newState);
    }, [error]);
}

export default useError;