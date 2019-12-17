import model from "../models";

import * as request from "../helpers/constants";
import { handleErr, postFind } from "../helpers";

const { Project } = model;

class Projects {
  static create(req, res) {
    const { name, content, month_year, icons, tags, image, link } = req.body;

    return Project.create({
      name,
      content,
      icons,
      tags,
      month_year,
      image,
      link,
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
    const {
      id,
      name,
      content,
      month_year,
      icons,
      tags,
      link,
      image,
    } = req.body;

    const updateData = {
      name,
      content,
      month_year,
      icons,
      tags,
      link,
      image,
    };

    return Project.findByPk(id).then(project =>
      postFind(project, request.PUT, res, updateData)
    );
  }

  static delete(req, res) {
    const { id } = req.query;

    return Project.findByPk(id).then(project =>
      postFind(project, request.DELETE, res)
    );
  }
}

export default Projects;
