import { Sequelize } from "sequelize";

import * as request from "../helpers/constants";
import { handleErr } from "../helpers";

class Auth {
  static authorize(req, res) {
    const { credentials } = req.body;
    const sequelize = new Sequelize(
      process.env.PORTFOLIO_DB,
      process.env.PORTFOLIO_DB_USER,
      process.env.PORTFOLIO_DB_SECRET,
      { host: process.env.PORTFOLIO_DB_HOST, dialect: "postgres" }
    );

    sequelize
      .query("SELECT password from auth WHERE id = 1;")
      .then(result => {
        const { password } = result[0][0];

        if (password === credentials) {
          return res.status(200).send();
        }
        return res.status(403).send();
      })
      .catch(err => handleErr(err, request.POST, res));
  }
}

export default Auth;
