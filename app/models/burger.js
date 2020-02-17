module.exports = function(sequelize, DataTypes){

    var burgers = sequelize.define("burgers", {
        burger_name: DataTypes.STRING,
        devoured: DataTypes.BOOLEAN
    });
    
    sequelize.sync({force:true

    }).then(function(){
        burgers.create({
            burger_name:"Cheesburger",
            devoured: false
        }),
        burgers.create({
            burger_name: "Big Mac",
            devoured: false
        })
    })
    return burgers;
};