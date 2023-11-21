import "./Form.css";
import { ActionTray, ActionAdd } from "./Actions.js";

export default function Form({children, onSubmit, onCancel}) {
    // Initialisation -----------------------------------
    // Hooks --------------------------------------------
    // State --------------------------------------------
    // Context ------------------------------------------
    // Handlers -----------------------------------------
    const handleSubmit = () => onSubmit;
    const handleCancel = () => onCancel;

    // View ---------------------------------------------
    return (
        <form className="borderedForm">
            <div className="formTray">
                {
                    children
                }
            </div>
            
            <ActionTray>
                <ActionAdd showText onClick={handleSubmit} buttonText="Add" />
            </ActionTray>
        </form>
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
            <br /><br />
        </div>
    )
}

// Form object ------------------------------------------
Form.Item = Item;