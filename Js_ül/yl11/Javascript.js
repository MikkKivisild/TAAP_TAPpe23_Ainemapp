const nimed = ["mari maasikas", "jaan jõesaar", "kristiina kukk", "margus mustikas", "jaak järve", "kadi kask", "Toomas Tamm", "Kadi Meri", "Leena Laas", "Madis Mets", "Hannes Hõbe", "Anu Allikas", "Kristjan Käär", "Eva Esimene", "Jüri Jõgi", "Liis Lepik", "Kalle Kask", "Tiina Teder", "Kaidi Koppel", "tiina Toom"];
function nimedKorda() {
    const korrasNimed = nimed.map(nimi => {
        return nimi.split(' ') 
            .map(_nimi => _nimi.charAt(0).toUpperCase() + _nimi.slice(1).toLowerCase()) 
            .join(' ');
    });
    return korrasNimed;
}
console.log(nimedKorda());