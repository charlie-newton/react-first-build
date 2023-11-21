import { useState, useEffect } from "react";
import API from "./api.js";

export default function useLoad(endpoint) {
    const [records, setRecords] = useState(null);
    const [loadingMessage, setLoadingMessage] = useState("Loading records...");

    // Methods --------------------------------
    const loadRecords = async () => {
        const response = await API.get(endpoint);
        response.isSuccess
            ? setRecords(response.result)
            : setLoadingMessage(response.message)
    };
    useEffect(() => { loadRecords(endpoint) }, []);

    // Return --------------------------------
    return [records, setRecords, loadingMessage, loadRecords];
}