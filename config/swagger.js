const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'EduShare',
            version: '1.0.0',
            description: 'API documentation',
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
        components: {
            securitySchemes: {
                accessTokenAuth: {
                    type: 'apiKey',
                    in: 'header',
                    name: 'x-access-token',
                },
            },
        },
        security: [
            {
                accessTokenAuth: [],
            },
        ],
        tags: [
        {
            name: "Authorization",
            description: "Authorization related endpoints"
        },
        {
            name: "Comments",
            description: "Comments related endpoints"
        },
        {
            name: "Materials",
            description: "Materials related endpoints"
        },
        {
            name: "Ratings",
            description: "Ratings related endpoints"
        },
        {
            name: "Users",
            description: "Users related endpoints"
        }
    
    ]
    },
    apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

const setupSwagger = (app) => {
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};

module.exports = setupSwagger;
