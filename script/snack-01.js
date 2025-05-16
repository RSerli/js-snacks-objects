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
    // controllo tipo di alimentazione
    if (CurrentElement.alimentazione == "Benzina") { //SE è con alimentazione a benzina
        AutoBenzina.push(CurrentElement)
    } else if (CurrentElement.alimentazione == "Diesel") { //SE è con alimentazione a diesel
        AutoDiesel.push(CurrentElement)
    } else { //SE ha atri tipi di alimentazione
        AutoAltro.push(CurrentElement)
    }
}
// OUTPUT
console.log("array auto a benzina")
console.log(AutoBenzina)
console.log("array auto a diesel")
console.log(AutoDiesel)
console.log("array auto con atri tipi di alimentazione")
console.log(AutoAltro)