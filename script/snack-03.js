console.log(`
    --------------------------------
        JSnack-03
    `)

// VARIABILI
const animali = [
    { nome: "Leone", famiglia: "Felidi", classe: "Mammiferi" },
    { nome: "Aquila", famiglia: "Accipitridi", classe: "Uccelli" },
    { nome: "Cane", famiglia: "Canidi", classe: "Mammiferi" },
    { nome: "Coccodrillo", famiglia: "Crocodilidi", classe: "Rettili" },
    { nome: "Gatto", famiglia: "Felidi", classe: "Mammiferi" },
    { nome: "Squalo bianco", famiglia: "Lamnidi", classe: "Pesci" },
    { nome: "Elefante", famiglia: "Elefantidi", classe: "Mammiferi" },
    { nome: "Pinguino", famiglia: "Sfeniscidi", classe: "Uccelli" },
    { nome: "Serpente", famiglia: "Colubridi", classe: "Rettili" },
    { nome: "Gufo", famiglia: "Strigidi", classe: "Uccelli" }
];
let ClasseMammiferi = []

// PROCESSO
for (let i = 0; i < animali.length; i++) {
    const CurrentElement = animali[i];
    // controllo se è un mammifero
    if (CurrentElement.classe == "Mammiferi") {
        // pusho il nome dell'elemento nell'array ClasseMammiferi
        ClasseMammiferi.push(CurrentElement.nome)
    }//se no bypasso
}
// OUTPUT
console.log(ClasseMammiferi)
