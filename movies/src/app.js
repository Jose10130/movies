const importar = require('./concesionaria.js')

const toyota = importar('Toyota');
const ford = importar('Ford');
const chevrolet = importar('Chevrolet');

//console.log(toyota, ford, chevrolet)


const unifiedAutos = [...toyota, ...ford,...chevrolet];
//console.log(unifiedAutos)

const concesionaria = {
    autos: unifiedAutos,
    listAutos:function(){
        this.autos.forEach((auto, i) =>{
            console.log(`${i + 1} - ${auto.marca}${auto.modelo} ====> Precio:$${auto.precio} ====> Cantidad:${auto.stock}`)
        });
    },
    autosByBrand:function(brand){
        const autosFiltrados = this.autos.filter(({marca}) =>{
            return marca.toLowerCase()===brand.toLowerCase()
        });
        return autosFiltrados;
    },

};
concesionaria.listAutos()
//console.log(concesionaria.autosByBrand('toyota'))
