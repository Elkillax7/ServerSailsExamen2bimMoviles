/**
 * Equipo.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
   
    nombre:{
      type:"string"
    },
    liga:{
      type:"string"
    },
    fechaCreacion:{
      type: "string"
    },
    numeroCopasInternacionales:{
      type: "number"
    },
    campeonActual:{
      type:"number"
    }

 

  },

};

