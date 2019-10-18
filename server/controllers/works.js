import model from "../models";

import * as request from "../helpers/constants";
import { handleErr, postFind } from "../helpers";

const { Work } = model;

class Works {
  static create(req, res) {
    const { company, description, achievments, monthYear } = req.body;

    return Work.create({
      company,
      description,
      achievments,
      month_year: monthYear,
    })
      .then(workData =>
        res.status(201).send({
          success: true,
          message: "Work successfully created",
          workData,
        })
      )
      .catch(err => handleErr(err, request.POST, res));
  }

  static list(req, res) {
    return Work.findAll()
      .then(work =>
        res.status(200).send({
          work,
        })
      )
      .catch(err => handleErr(err, request.GET, res));
  }

  static update(req, res) {
    const { id, company, description, achievments, monthYear } = req.body;

    const updateData = {
      company,
      description,
      achievments,
      month_year: monthYear,
    };

    return Work.findByPk(id).then(work =>
      postFind(work, request.PUT, res, updateData)
    );
  }

  static delete(req, res) {
    const { id } = req.body;

    return Work.findByPk(id).then(work => postFind(work, request.DELETE, res));
  }
}

export default Works;
