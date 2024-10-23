const { Sequelize } = require("sequelize");
const db = require("../config/db");

const Rating = db.define("Rating", {
    user_id:{
        type:Sequelize.INTEGER,
        allowNull: false,
        validate:{
            isInt: true,
            msg:"Enter only number!"
        }
    },
    material_id:{
        type:Sequelize.INTEGER,
        allowNull: false,
        validate:{
            isInt: true,
            msg:"Enter only number!"
        }
    },
    rating:{
        type:Sequelize.FLOAT(5),
        allowNull: false,
        validate:{
            isFloat: true,
            msg:"Enter only float number!",
            min: 1,
            max: 5
        }
    }
},{
    hooks:{
        beforeValidate: async (rating) => {
            const existingRating = await Rating.findOne({
                where: {
                    user_id: rating.user_id,
                    material_id: rating.material_id
                }
            });
            if (existingRating) {
                throw new Error("You has already rated this material!");
            }
        }
    }
})

module.exports = Rating
