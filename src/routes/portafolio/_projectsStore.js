import { writable } from "svelte/store";
import projects from "./_projects";

const proyectos = writable(projects);
const projectId = writable(null);

const customProjectStore = {
  subscribe: proyectos.subscribe,
  addProject: projectData => {
    const newProject = {
      ...projectData,
      // id: Math.random().toString()
    };
    proyectos.update(items => {
      return [newProject, ...items];
    });
  },

  updateProject: (id, projectData) => {
    proyectos.update(items => {
      const projectIndex = items.findIndex(i => i.id === id);
      const updatedProject = { ...items[projectIndex], ...projectData };
      const updatedProyectos = [...items];
      updatedProyectos[projectIndex] = updatedProject;
      return updatedProyectos;
    })
  },

  deleteProject: (id) => {
    proyectos.update(items => {
      return items.filter(i => i.id !== id);


    });
  }
};
export {projectId};
export default customProjectStore;
