var mongoose = require('mongoose');


var Comercio = require('../../controllers/comercioController')

describe('Test modelo Comercio', function() {

    beforeEach(function(done) {
        var mongoDB = 'mongodb://localhost/emprendeapp';
        mongoose.connect(mongoDB, { useNewUrlParser: true });
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection_error'));
        db.once('open', function() {
            console.log('Conectado!!');
            done();
        });
    });

    describe('Comprobar si coleccion inicia vacía', () => {
        it('comienza vacía', (done) => {
            Comercio.todos(function(err, cb) {
                expect(cb.length).toBe(5);
                done()
            })
        })
    })


    describe('Comprobar si hay comercios nombre cualquiera', () => {
        it('comienza vacía', (done) => {
            Comercio.buscarNombre('', function(err, cb) {
                expect(cb.length).toBe(5);
                done()
            })
        })
    })

    describe('Comprobar save', () => {
        it('loading', (done) => {
            const comerciosave = Comercio.Constructor('Comercio 9', 'Guazapa')
            Comercio.registrar(comerciosave, function(err, cb) {
                expect(err).toBe(null);
                done()
            })
        })
    });

    describe('Comprobar actualizacion', () => {
        it('loading', (done) => {
            const comerciosave = { nombre: 'Comercio 03 actualizado', direccion: 'Chalatenango', _id: '61424ebcedc4a6bda3bbeb72' }
            Comercio.update(comerciosave, '61424ebcedc4a6bda3bbeb72', function(err, cb) {
                expect(err).toBe(null);
                done()
            })
        })
    })

    describe('Comprobar eliminar', () => {
        it('loading', (done) => {
            Comercio.eliminar('61425175bef8cf76c1d2d307', function(err, cb) {
                expect(err).toBe(null);
                done()
            })
        })
    })
})