import model from "../models";

import * as request from "../helpers/constants";
import { handleErr, postFind } from "../helpers";

const { Blogs } = model;

class Blog {
  static create(req, res) {
    const { name, content, month_year, icons, tags } = req.body;

    return Blogs.create({
      name,
      content,
      icons,
      tags,
      month_year,
    })
      .then(projectData =>
        res.status(201).send({
          success: true,
          message: "Blog post successfully created",
          projectData,
        })
      )
      .catch(err => handleErr(err, request.POST, res));
  }

  static list(req, res) {
    return Blogs.findAll()
      .then(posts =>
        res.status(200).send({
          posts,
        })
      )
      .catch(err => handleErr(err, request.GET, res));
  }

  static update(req, res) {
    const { id, name, content, month_year, icons, tags } = req.body;

    const updateData = {
      name,
      content,
      month_year,
      icons,
      tags,
    };

    return Blogs.findByPk(id).then(post =>
      postFind(post, request.PUT, res, updateData)
    );
  }

  static delete(req, res) {
    const { id } = req.query;

    return Blogs.findByPk(id).then(post => postFind(post, request.DELETE, res));
  }
}

export default Blog;
