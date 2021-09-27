var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var ComercioSchema = new Schema({
    nombre: String,
    direccion: String
})

ComercioSchema.statics.Constructor = function(nombre, direccion) {
    return new this({
        nombre: nombre,
        direccion: direccion
    })
}


module.exports = mongoose.model('Comercio', ComercioSchema)