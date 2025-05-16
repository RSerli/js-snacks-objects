console.log(`
    --------------------------------
        JSnack-01
    `)

// VARIABILI
// array insieme di automobili
const automobili = [
    { marca: "Fiat", modello: "Panda", alimentazione: "Benzina" },
    { marca: "Volkswagen", modello: "Golf", alimentazione: "Diesel" },
    { marca: "Tesla", modello: "Model 3", alimentazione: "Elettrica" },
    { marca: "Toyota", modello: "Corolla", alimentazione: "GPL" },
    { marca: "Ford", modello: "Focus", alimentazione: "Benzina" },
    { marca: "BMW", modello: "X3", alimentazione: "Diesel" },
    { marca: "Renault", modello: "Clio", alimentazione: "GPL" },
    { marca: "Audi", modello: "A4", alimentazione: "Diesel" },
    { marca: "Peugeot", modello: "208", alimentazione: "Benzina" },
    { marca: "Hyundai", modello: "Ioniq", alimentazione: "Elettrica" }
];
// array auto con alimentazione a benzina
let AutoBenzina = []
// array auto con alimentazione a diesel
let AutoDiesel = []
// array auto con gli atri tipi di alimentazione
let AutoAltro = []

// PROCESSO
for (let i = 0; i < automobili.length; i++) {
    const CurrentElement = automobili[i];
    console.log(CurrentElement)
}
// OUTPUT