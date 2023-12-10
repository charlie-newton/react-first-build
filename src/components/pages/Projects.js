import { useState } from "react";
import API from "../../api/api.js";
import useLoad from "../../api/useLoad.js";

import { GenericAction, ActionAdd } from "../UI/Actions.js";
import { CardContainer } from "../UI/Card.js";
import ProjectCard from "../entities/projects/ProjectCard.js";
import ProjectForm from "../entities/projects/ProjectForm.js";
import Modal from "../UI/Modal.js";

export default function Projects() {
    // Initialisation --------------
    const loggedInUserID = 5;
    const postEndpoint = `/projects/users/${loggedInUserID}`;
    const putEndpoint = `/projects/`;

    // State -----------------
    const [projects, , loadingMessage, loadProjects] = useLoad(postEndpoint);
    const [showNewProjectForm, setShowNewProjectForm] = useState(false);
    const [showUpdateProjectForm, setShowUpdateProjectForm] = useState(false);
    const [modifiedProject, setModifiedProject] = useState(null);

    // Context -----------------
    const { handleModal } = Modal.useModal();

    // Methods -----------------
    const toggleAdd = () => {
        setShowNewProjectForm(!showNewProjectForm);
        setShowUpdateProjectForm(false);
    }
    const toggleUpdate = (project) => {
        setModifiedProject(project);
        if(project === modifiedProject || !showUpdateProjectForm) {
            setShowUpdateProjectForm(!showUpdateProjectForm);
            setShowNewProjectForm(false);
        }
    }    
    const handleDismiss = () => {
        setShowNewProjectForm(false);
        setShowUpdateProjectForm(false);
    }

    const handleModify = async (project) => {
        const response = await API.put(putEndpoint + modifiedProject.projectID, project);
        return response.isSuccess
            ? loadProjects(postEndpoint) || true
            : false;
    }
    const handleDelete = async (id) => {
        const response = await API.delete(putEndpoint + id);
        response.isSuccess && loadProjects(postEndpoint);
        handleModal(false);
    }
    const handleSubmit = async (project) => {
        const response = await API.post(postEndpoint, project);
        return response.isSuccess
            ? loadProjects(postEndpoint) || true
            : false;
    }
    const handleCancel = () => { }

    const showDeleteModal = (id) => handleModal({
        show: true,
        title: "Confirm deletion",
        content: <p>Are you sure you want to delete this project?</p>,
        actions: [
            <GenericAction buttonText={"Yes, delete"} onClick={() => handleDelete(id)} />,
            <GenericAction buttonText={"No, go back"} onClick={() => handleModal(false)} />
        ]
    });

    // View --------------------
    return (
        <section>
            <h1>My Projects</h1>
            <ActionAdd showText onClick={toggleAdd} buttonText="Create new project"/>

            { showNewProjectForm && <ProjectForm onSubmit={handleSubmit} onCancel={handleDismiss} /> }
            { showUpdateProjectForm && <ProjectForm onSubmit={handleModify} onCancel={handleDismiss} initialProject={modifiedProject} /> }

            {
                !projects
                    ? <p>{loadingMessage}</p>
                : projects.length === 0
                    ? <p>No projects found.</p>
                : (
                <div>
                    <CardContainer> 
                        {projects.map((project) =>
                            <ProjectCard project={project} toggleModify={toggleUpdate} onDelete={showDeleteModal} key={project.projectID} />
                        )}                   
                    </CardContainer>
                </div>
                )
            }
        </section>
    )
}