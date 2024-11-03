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
            schemas: {
                User: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'integer',
                            description: 'User ID',
                        },
                        username: {
                            type: 'string',
                            description: 'User\'s username',
                        },
                        email: {
                            type: 'string',
                            format: 'email',
                            description: 'User\'s email address',
                        },
                        isAdmin: {
                            type: 'boolean',
                            description: 'Indicates if the user is an admin',
                        },
                    },
                },
                Material: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'integer',
                            description: 'Material ID',
                        },
                        name: {
                            type: 'string',
                            description: 'Name of the material',
                        },
                        content: {
                            type: 'string',
                            description: 'Content of the material',
                        },
                        description: {
                            type: 'string',
                            description: 'Description of the material',
                        },
                        user_id: {
                            type: 'integer',
                            description: 'ID of the user who created the material',
                        },
                        category_id: {
                            type: 'integer',
                            description: 'ID of the category the material belongs to',
                        },
                        createdAt: {
                            type: 'string',
                            format: 'date-time',
                            description: 'Date when the material was created',
                        },
                        updatedAt: {
                            type: 'string',
                            format: 'date-time',
                            description: 'Date when the material was last updated',
                        },
                    },
                },
                Category: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'integer',
                            description: 'Category ID',
                        },
                        name: {
                            type: 'string',
                            description: 'Name of the category',
                        },
                        createdAt: {
                            type: 'string',
                            format: 'date-time',
                            description: 'Date when the category was created',
                        },
                        updatedAt: {
                            type: 'string',
                            format: 'date-time',
                            description: 'Date when the category was last updated',
                        },
                    },
                },
                Comment: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'integer',
                            description: 'Comment ID',
                        },
                        content: {
                            type: 'string',
                            description: 'Content of the comment',
                        },
                        material_id: {
                            type: 'integer',
                            description: 'ID of the material the comment is associated with',
                        },
                        user_id: {
                            type: 'integer',
                            description: 'ID of the user who made the comment',
                        },
                        createdAt: {
                            type: 'string',
                            format: 'date-time',
                            description: 'Date when the comment was created',
                        },
                        updatedAt: {
                            type: 'string',
                            format: 'date-time',
                            description: 'Date when the comment was last updated',
                        },
                    },
                },
                Type: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'integer',
                            description: 'Type ID',
                        },
                        name: {
                            type: 'string',
                            description: 'Name of the type',
                        },
                        createdAt: {
                            type: 'string',
                            format: 'date-time',
                            description: 'Date when the type was created',
                        },
                        updatedAt: {
                            type: 'string',
                            format: 'date-time',
                            description: 'Date when the type was last updated',
                        },
                    },
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
            },
        ]
    },
    apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

const setupSwagger = (app) => {
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};

module.exports = setupSwagger;
