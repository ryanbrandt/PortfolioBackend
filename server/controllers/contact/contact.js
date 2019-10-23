import Email from "email-templates";

import * as request from "../../helpers/constants";
import { handleErr } from "../../helpers";

class Contact {
  static sendMail(req, res) {
    const { name, email, content } = req.body;

    const emailInstance = new Email({
      message: {
        from: "ryan.brandt1996@gmail.com",
      },
      transport: {
        jsonTransport: true,
      },
    });

    emailInstance
      .send({
        template: "generic",
        message: {
          to: "ryan.brandt1996@gmail.com",
        },
        locals: {
          name,
          email,
          content,
        },
      })
      .then(res.status(200).send())
      .catch(err => handleErr(err, request.POST, res));
  }
}

export default Contact;
