import { useState, useEffect } from "react";
import API from "../../api/api.js";
import callFetch from "../../api/api.js";
import { ActionAdd } from "../UI/Action.js";
import { CardContainer } from "../UI/Card.js";
import ProjectCard from "../entities/projects/ProjectCard.js";
import ProjectForm from "../entities/projects/ProjectForm.js";

export default function Projects() {
    // Initialisation --------------
    const loggedInUserID = 5;
    const endpoint = `/projects/users/${loggedInUserID}`;

    // State -------------------
    const [projects, setProjects] = useState(null);
    const [loadingMessage, setLoadingMessage] = useState("Loading records...");

    const [showNewProjectForm, setShowNewProjectForm] = useState(false);

    // Context -----------------
    // Methods -----------------
    const apiCall = async (endpoint) => {
        const response = await API.get(endpoint);
        response.isSuccess
            ? setProjects(response.result)
            : setLoadingMessage(response.message)
    };

    const handleAdd = () => setShowNewProjectForm(!showNewProjectForm);

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
                : (
                <div>
                    <ActionAdd showText onClick={handleAdd} buttonText="Create new project"/>
                    {
                        showNewProjectForm && <ProjectForm />
                    }

                    <CardContainer>                    
                        {projects.map((project) =>
                        <ProjectCard project={project} key={project.projectID} />
                        )}
                    </CardContainer>
                </div>
                )
            }
        </section>
    )
}