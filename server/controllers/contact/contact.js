import Email from "email-templates";

import transporter from "./transporter";
import * as request from "../../helpers/constants";
import { handleErr } from "../../helpers";

class Contact {
  static sendMail(req, res) {
    const { name, email, content } = req.body;

    const emailInstance = new Email({
      views: { root: "server/controllers/contact/emails" },
      message: {
        from: process.env.EMAIL,
      },
      send: true,
      transport: transporter,
    });

    emailInstance
      .send({
        template: "generic",
        message: {
          to: process.env.EMAIL,
        },
        locals: {
          name,
          email,
          content,
        },
      })
      .then(() => res.send(200))
      .catch(err => handleErr(err, request.POST, res));
  }
}

export default Contact;
