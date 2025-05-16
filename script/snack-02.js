console.log(`
    --------------------------------
        JSnack-02
    `)

// VARIABILI
const ElencoNomi = [
    "mario",         // tutto minuscolo
    "LUCA",          // tutto maiuscolo
    "giulia",        // tutto minuscolo
    "ANNA",          // tutto maiuscolo
    "Marco",         // corretto
    "aLessandra",    // prima minuscola, resto misto
    "PAOLO",         // tutto maiuscolo
    "francesca",     // tutto minuscolo
    "EDOARDO",       // tutto maiuscolo
    "federica",      // tutto minuscolo
    "GIORGIO",       // tutto maiuscolo
    "nIcole",        // prima minuscola, resto misto
    "Elena",         // corretto
    "giovanni",      // tutto minuscolo
    "SIMONE"         // tutto maiuscolo
];
let ElencoNomiFormattati = []

// PROCESSO
for (let i = 0; i < ElencoNomi.length; i++) {
    const CurrentName = ElencoNomi[i];
    // console.log(CurrentName)
    // set LowerCase tutta la stringa in CurrentName
    const CurrentName_LowerCase = CurrentName.toLowerCase()
    ElencoNomiFormattati.push(CurrentName_LowerCase)
}
// OUTPUT
console.log(ElencoNomiFormattati)
