import * as request from "./constants";
import {
  MethodNotSupportedError,
  InstanceNotFoundError,
} from "../types/errors";

/**
 * Generic error handler
 * @param err Error object
 * @param requestType HTTP request type referenced from constants.js
 * @param res Response object
 */
export function handleErr(err, requestType, res) {
  // TODO
  res.status(500).send({
    message: "fuck you client i guess",
    err,
  });
}

/**
 * Generic update
 * @param instance Sequelize model instance
 * @param data JSON data to update with
 * @param type Sequelize model type
 * @param res Response object
 */
function doUpdate(instance, data, type, res) {
  return instance
    .update(data)
    .then(updatedData => {
      res.status(200).send({
        success: true,
        message: `${type} instance successfully updated`,
        updatedData,
      });
    })
    .catch(err => handleErr(err, request.PUT, res));
}

/**
 * Generic delete
 * @param instance Sequelize model instance
 * @param type Sequelize model type
 * @param res Response object
 */
function doDelete(instance, type, res) {
  return instance
    .destroy()
    .then(
      res.status(204).send({
        success: true,
        message: `${type} instance successfully deleted`,
      })
    )
    .catch(err => handleErr(err, request.DELETE, res));
}

/**
 * @param instance Sequelize model instance
 * @param requestType HTTP method reference from constants.js
 * @param res Response bject
 * @param data JSON to work with if applicable
 */
export function postFind(instance, requestType, res, data = {}) {
  if (instance) {
    const { constructor } = instance;
    const { name } = constructor;

    switch (requestType) {
      case "PUT": {
        return doUpdate(instance, data, name, res);
      }

      case "DELETE": {
        return doDelete(instance, name, res);
      }

      default: {
        return handleErr(new MethodNotSupportedError(), requestType, res);
      }
    }
  }
  return handleErr(new InstanceNotFoundError(), requestType, res);
}
