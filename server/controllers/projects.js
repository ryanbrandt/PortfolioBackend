import model from "../models";

import * as request from "../helpers/constants";
import { handleErr, postFind } from "../helpers";

const { Project } = model;

class Projects {
  static create(req, res) {
    const { name, description, link, monthYear } = req.body;

    return Project.create({
      name,
      description,
      link,
      month_year: monthYear,
    })
      .then(projectData =>
        res.status(201).send({
          success: true,
          message: "Project successfully created",
          projectData,
        })
      )
      .catch(err => handleErr(err, request.POST, res));
  }

  static list(req, res) {
    return Project.findAll()
      .then(projects =>
        res.status(200).send({
          projects,
        })
      )
      .catch(err => handleErr(err, request.GET, res));
  }

  static update(req, res) {
    const { id, name, description, link, monthYear } = req.body;

    const updateData = {
      name,
      description,
      link,
      month_year: monthYear,
    };

    return Project.findByPk(id).then(project =>
      postFind(project, request.PUT, res, updateData)
    );
  }

  static delete(req, res) {
    const { id } = req.body;

    return Project.findByPk(id).then(project =>
      postFind(project, request.DELETE, res)
    );
  }
}

export default Projects;
