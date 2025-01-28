function polarity(){
    const input = prompt("sisestada arv");
    let number = parseFloat(input);
    if (isNaN (number)){
        alert(`Sisestatud väärtus(${input}) ei ole number.`);
        return;
    }
    switch(true){
        case(number < 0) : {
            alert(`${number} on negatiivne`);
            break;
    }
        default: {
            alert(`${number} on positiivne`);
            break;
        }
    }
}

function TableSize(){
    const input = prompt("Broneering");
    if(isNaN(number)){
        alert(`Sisestatud väärtus (${input}) ei ole number.`)
        return;
    }
    switch (input){
        case( number > 2 && number < 3):{
            alert(`Valige laud kahele inimesele.`);
        }
        case( number > 3 && number < 4):{
            alert(`Valige laud neljale inimesele.`);
        }
        case( number > 5 && number < 6):{
            alert(`Valige laud kuuele inimesele.`);
        }
        case( number > 6):{
            alert(`Valige suur laud.`);
        }
    }
}