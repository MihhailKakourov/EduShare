const { Sequelize } = require("sequelize");
const db = require("../config/db");

const User = db.define("User", {
    username:{
        type:Sequelize.STRING(50),
        allowNull: false,
        unique: true
    },
    firstname: {
        type: Sequelize.STRING(50),
        validate: {
            len: {
                args: [0, 50],
                msg: "First name can be up to 50 characters."
            }
        }
    },
    lastname: {
        type: Sequelize.STRING(50),
        validate: {
            len: {
                args: [0, 50],
                msg: "Last name can be up to 50 characters."
            }
        }
    },
    email:{
        type:Sequelize.STRING(50),
        allowNull: false,
        unique: true,
        validate:{
            isEmail:{
                msg:"Enter an email!"
            }
        }
    },
    password: {
        type: Sequelize.STRING(255),
        allowNull: false,
        validate: {
            len: {
                args: [6, 255],
                msg: "Password must be at least 6 characters long."
            }
        }
    },
    isAdmin:{
        type:Sequelize.BOOLEAN,
        default: false
    }
},{
    timestamps: false
})

module.exports = User
