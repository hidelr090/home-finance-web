import { useReducer } from 'react';

type FormState<T> = {
  values: T;
};

type FormAction<T> =
  | { type: 'SET_FIELD'; field: keyof T; value: T[keyof T] }
  | { type: 'RESET'; payload: T };

function formReducer<T>(state: FormState<T>, action: FormAction<T>): FormState<T> {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, values: { ...state.values, [action.field]: action.value } };
    case 'RESET':
      return { values: action.payload };
    default:
      return state;
  }
}

export function useForm<T>(initialValues: T) {
  const [state, dispatch] = useReducer(formReducer<T>, { values: initialValues });

  const setField = (field: keyof T, value: T[keyof T]) => {
    dispatch({ type: 'SET_FIELD', field, value });
  };

  const resetForm = () => {
    dispatch({ type: 'RESET', payload: initialValues });
  };

  return {
    values: state.values,
    setField,
    resetForm,
  };
}
