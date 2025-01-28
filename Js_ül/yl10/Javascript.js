const ostukorv = {
toode: [
    { nimi:'Piim', hind:3.60, kogus:2 },
    { nimi:'Leib', hind:2.00, kogus:1 },
    { nimi:'Munad', hind:1.50, kogus:6 },
    { nimi:'Juust', hind:4.20, kogus:1 },
    { nimi:'Tomatid', hind:2.30, kogus:3 },
  ]};
ostukorv.toode.push({nimi:'Kohv', hind:5.80, kogus:2});
function toodeteList(ostukorv){
    ostukorv.toode.forEach(toode => {
    console.log(`${toode.nimi} - ${toode.hind}€ - ${toode.kogus}`);
    });
}
toodeteList(ostukorv);

function ostukorvSumma(ostukorv) {
    let summa = 0
    ostukorv.toode.forEach(toode => {
      summa += toode.hind * toode.kogus;
    });
    return summa;
  }

  console.log(`'Ostukorvi kogu summa:' ${ostukorvSumma.summa}`)