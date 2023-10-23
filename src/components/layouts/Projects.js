import { useState, useEffect } from "react";
import API from "../../api/api.js";
import callFetch from "../../api/api.js";

export default function Projects() {
    // Initialisation --------------
    const loggedInUserID = 10;
    const endpoint = `/projects/users/${loggedInUserID}`;

    // State -------------------
    const [projects, setProjects] = useState(null);
    const [loadingMessage, setLoadingMessage] = useState("Loading records...");

    // Context -----------------
    // Methods -----------------
    const apiCall = async (endpoint) => {
        const response = await API.get(endpoint);
        response.isSuccess
            ? setProjects(response.result)
            : setLoadingMessage(response.message)
    };

    useEffect(() => { apiCall(endpoint) }, [endpoint]);

    // View --------------------
    return (
        <section>
            <h1>My Projects</h1>
            {
                !projects
                    ? <p>{loadingMessage}</p>
                : projects.length === 0
                    ? <p>No projects found.</p>
                : projects.map((project) =>
                    <p key={project.projectID}>({project.projectID}) {project.projectName}: {project.projectDescription}</p>
                )
            }
        </section>
    )
}