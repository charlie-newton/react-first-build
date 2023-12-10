import { useState } from "react";
import "./Form.css";
import Actions from "./Actions.js";
import { ActionAdd, ActionSubmit } from "./Actions.js";

export default function Form({children, onSubmit, onCancel}) {
    // Initialisation -----------------------------------
    // Hooks --------------------------------------------
    // State --------------------------------------------
    // Context ------------------------------------------
    // Handlers -----------------------------------------
    const handleSubmit = () => onSubmit();
    const handleCancel = () => onCancel();

    // View ---------------------------------------------
    return (
        <div className="borderedForm">
            <div className="formTray">
                {
                    children
                }
            </div>
            
            <Actions.Tray>
                <ActionSubmit onClick={handleSubmit} showText buttonText="Submit" />
            </Actions.Tray>
        </div>
    );
}

function Item({ children, label, htmlFor, advice, error }) {
    // Initialisation -----------------------------------
    // Hooks --------------------------------------------
    // State --------------------------------------------
    // Context ------------------------------------------
    // Handlers -----------------------------------------
    // View ---------------------------------------------
    return (
        <div className="FormItem">
            <label className="FormLabel" htmlFor={htmlFor}>{label}</label>
            {
                advice && <p className="FormAdvice">{advice}</p>
            }
            {
                children
            }
            {
                error && <p className="FormError">{error}</p>
            }
            <br />
        </div>
    );
}

function useForm(initialRecord, conformance, {isValid, errorMessage}, onSubmit, onCancel) {
    // Initialisation -----------------------------------
    // State --------------------------------------------
    const [record, setRecord] = useState(initialRecord);
    const [errors, setErrors] = useState(
      Object.keys(initialRecord).reduce((accum,key) => ({...accum, [key]: null}),{})
    );
    // Context ------------------------------------------
    // Handlers -----------------------------------------
    const handleChange = (event) => {
        const { name, value } = event.target;
        const newValue = conformance.includes(name) ? parseInt(value) : value;
        setRecord({ ...record, [name]: newValue });
        setErrors({ ...errors, [name]: isValid[name](newValue) ? null : errorMessage[name]});
      };

    const isValidRecord = (record) => {
        let isRecordValid = true;
        Object.keys(record).forEach((key) => {
            if(key != "projectID") {
                if(isValid[key](record[key])) {
                    errors[key] = null;
                } else {
                    errors[key] = errorMessage[key];
                    isRecordValid = false;
                }
            }
        });
        return isRecordValid;
    };
    
    const handleSubmit = () => {
        isValidRecord(record) && onSubmit(record) && onCancel();
        setErrors({...errors});
    };

    // View ---------------------------------------------
    return [record, errors, handleChange, handleSubmit];
}

// Form object ------------------------------------------
Form.Item = Item;
Form.useForm = useForm;