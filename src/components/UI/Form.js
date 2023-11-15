import "./Form.css";

export default function FormItem({ children, label, htmlFor, advice, error }) {
    return (
        <div className="FormItem">
            <label className="FormLabel" htmlFor={htmlFor}>{label}</label><br />
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