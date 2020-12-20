import {useState} from "react";

const useForm = (initialValues,validate) => {
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
    return{
        values,
        setValues,
        errors,
        setErrors,
        
        handleInputChange
    };
}
export default useForm;