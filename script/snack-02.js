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
    // console.log(CurrentName_LowerCase)
    // set FirstLetter to UpperCase
    // prendo la prima lettera e la setto maiuscola
    const CurrentName_FirsLetterUp = CurrentName_LowerCase[0].toUpperCase()
    // console.log(CurrentName_FirsLetterUp)
    // taglio il resto della stringa
    const CurrentName_RestString = CurrentName_LowerCase.slice(1)
    // console.log(CurrentName_RestString)
    // Riunisco il tutto e ottengo il nome con la maiuscola
    const CurrentName_FirstUp = CurrentName_FirsLetterUp.concat("", CurrentName_RestString)
    ElencoNomiFormattati.push(CurrentName_FirstUp)
}
// OUTPUT
console.log(ElencoNomiFormattati)
