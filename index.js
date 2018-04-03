var fs = require('fs');
var colors = require('colors');

fs.readdir('tekst', 'utf-8', function(err, files) {   //utf-8 jest tutaj domyślne ! !  1 zadanie  ! !
    console.log(files);
    fs.readFile('tekst/tekst.txt', 'utf-8', function(err , data){
        console.log(data);
        fs.writeFile('tekst/fresh.txt', 'Nadpisujemy istniejący tekst o refaktoryzacjiw nowym pliku', function(err) {
            if (err) throw err; 
            console.log('Wszystko powinno grać Szefie!');
        });
    }); 
});