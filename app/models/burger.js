module.exports = function(sequelize, DataTypes){

    var burgers = sequelize.define("burgers", {
        burger_name: DataTypes.STRING,
        devoured: DataTypes.BOOLEAN,
        noteaten: DataTypes.BOOLEAN
    });
    
    sequelize.sync({force:true

    }).then(function(){
        burgers.create({
            burger_name:"Cheesburger",
            devoured: false,
            noteaten: true
        }),
        burgers.create({
            burger_name: "Big Mac",
            devoured: false,
            noteaten: true
        }),
        burgers.create({
            burger_name: "Chicken burger",
            devoured: false,
            noteaten: true
        })
    });

    // burgers.sync();
    return burgers;
};