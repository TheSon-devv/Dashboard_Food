import {useState} from "react";

const useForm = (initialValues,validate,setCurrentId) => {
    const [values,setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const handleInputChange = e => {
        const {name,value} = e.target
        const filedValue  = { [name] : value }
        setValues({
            ...values,
            ...filedValue
        })
        validate(filedValue)
    }   
    const resetForm = () => {
        setValues({
            ...initialValues
        })
        setErrors({})
        setCurrentId(0)
    }
    return{
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    };
}
export default useForm;