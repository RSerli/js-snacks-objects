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
    "  francesca",   // tutto minuscolo, spazio all'inizio
    "EDOARDO",       // tutto maiuscolo
    "federica",      // tutto minuscolo
    "GIORGIO",       // tutto maiuscolo
    "  nIcole",      // prima minuscola, resto misto, spazio all'inizio
    "Elena",         // corretto
    "giovanni",      // tutto minuscolo
    "SIMONE"         // tutto maiuscolo
];
let ElencoNomiFormattati = []

// PROCESSO
for (let i = 0; i < ElencoNomi.length; i++) {
    const CurrentName = ElencoNomi[i];
    // console.log(CurrentName)
    // Eleminazione spazio bianco all'inizio della stringa 
    const CurrentNameNoSpace = CurrentName.trimStart()
    // set LowerCase tutta la stringa in CurrentName
    const CurrentName_LowerCase = CurrentNameNoSpace.toLowerCase()
    console.log(CurrentName_LowerCase)
    // set FirstLetter to UpperCase
    const CurrentName_FirsLetterUp = CurrentName_LowerCase[0].toUpperCase()
    console.log(CurrentName_FirsLetterUp)
    const CurrentName_RestString = CurrentName_LowerCase.slice(1)
    console.log(CurrentName_RestString)
    ElencoNomiFormattati.push(CurrentName_FirsLetterUp)
}
// OUTPUT
// console.log(ElencoNomiFormattati)
