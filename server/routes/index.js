import Projects from "../controllers/projects";
import Works from "../controllers/works";

export default app => {
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
};
