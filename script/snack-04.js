console.log(`
    --------------------------------
        JSnack-04
    `)

// VARIABILI
const ElencoPersone = [
    { nome: "Carla", cognome: "Ferrari", anni: 18 },
    { nome: "Federico", cognome: "Giovanardi", anni: 35 },
    { nome: "Giovanni", cognome: "Tardini", anni: 54 },
    { nome: "Francesca", cognome: "Chiari", anni: 16 },
    { nome: "Duilio", cognome: "Carboni", anni: 30 },
    { nome: "Francesco", cognome: "Del Rio", anni: 48 },
    { nome: "Eleonora", cognome: "Grandi", anni: 23 },
    { nome: "Samuele", cognome: "Gregori", anni: 15 },
    { nome: "Chiara", cognome: "Tondi", anni: 16 },
    { nome: "Agnese", cognome: "De Santis", anni: 34 },
    { nome: "Enrico", cognome: "Spaggiari", anni: 68 },
    { nome: "Caterina", cognome: "Foschi", anni: 28 }
]

let ElencoIndicazioneGuidaAbilitata = []
// PROCESSO
for (let i = 0; i < ElencoPersone.length; i++) {
    const CurrentElement = ElencoPersone[i];
    let StringaRisultatoControllo
    // controllo abilitazione alla guida autovettura in Italia
    if (CurrentElement.anni >= 18) { // SE ha compiuto il 18esimo anno, è abilito/a
        StringaRisultatoControllo = `${CurrentElement.cognome} ${CurrentElement.nome} è abilitato/a alla guida di un autoveicolo`
    } else { // ALTRIMENTI NON è abilito/a
        StringaRisultatoControllo = `${CurrentElement.cognome} ${CurrentElement.nome} NON è abilitato/a alla guida di un autoveicolo`
    }
    ElencoIndicazioneGuidaAbilitata.push(StringaRisultatoControllo)
}
// OUTPUT
console.log(ElencoIndicazioneGuidaAbilitata)