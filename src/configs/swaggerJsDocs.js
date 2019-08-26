import swaggerJSDoc from "swagger-jsdoc";

export const spec = swaggerJSDoc({
  apis: ["src/controllers/*.js"],
  swaggerDefinition: {
    basePath: "/api/v1/",
    consumes: ["application/json"],
    info: {
      title: "Node Microservice API",
      version: "1.0.0"
    },
    produces: ["application/json"],
    securityDefinitions: {
      jwt: {
        in: "header",
        name: "Authorization",
        type: "apiKey"
      }
    }
  }
});
