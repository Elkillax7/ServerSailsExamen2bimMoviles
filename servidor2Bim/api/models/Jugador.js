/**
 * Jugador.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    numeroCamiseta:{
      type:"number"
    },
    nombreCamiseta:{
      type:"string"
    },
    nombreCompletoJugador:{
      type:"string"
    },
    poderEspecialDos:{
      type:"string"
    },
    fechaIngresoEquipo:{
      type:"string"
    },
    goles:{
      type:"number"
    },

    equipoFutbolId:{
     type:"number"
    }

 
  },

};

