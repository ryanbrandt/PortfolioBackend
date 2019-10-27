import Auth from "../controllers/auth";
import Projects from "../controllers/projects";
import Works from "../controllers/works";
import Contact from "../controllers/contact/contact";
import Blogs from "../controllers/blogs";

export default app => {
  /**
   * Auth routes
   */
  app.post("/auth", Auth.authorize);

  /**
   * Project routes
   */
  app.post("/projects", Projects.create);
  app.put("/projects", Projects.update);
  app.get("/projects", Projects.list);
  app.delete("/projects", Projects.delete);

  /**
   * Work routes
   */
  app.post("/work", Works.create);
  app.put("/work", Works.update);
  app.get("/work", Works.list);
  app.delete("/work", Works.delete);

  /**
   * Contact
   */
  app.post("/contact", Contact.sendMail);

  /**
   * Blog routes
   */
  app.post("/blogs", Blogs.create);
  app.put("/blogs", Blogs.update);
  app.get("/blogs", Blogs.list);
  app.delete("/blogs", Blogs.delete);
};
