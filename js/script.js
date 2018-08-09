'use strict';

/* 
Twoim zadaniem jest wygenerowanie i wyświetlenie na stronie po jednym boksie dla każdego z obiektów, stosując poniższe zasady:

Wartość id ma być atrybutem id boksa.
Wartość title ma być zawartością headera.
Wartość content ma zostać wstawiona po headerze.
Każda z wartości w tablicy categories ma zostać dodana jako klasa boksa.
Cały boks najlepiej wygenerować jako jeden ciąg tekstowy i dopiero wtedy dodać go do body lub innego elementu.

Klasy dodane na boksie:

highlighted — zmienia kolor tła całego boksa,
special-header — zmienia kolor headera,
important — jeśli nie ma tej klasy, boks ma mieć opacity: 0.7;, a jeśli ta klasa jest nadana, ma mieć opacity: 1;.
Pamiętaj, aby realizować zadanie krok po kroku. 
Pierwszym krokiem może być choćby wygenerowanie zwykłego diva z tytułem dla każdego obiektu.

Powodzenia!  */ 

var data = [
	{
		id: 'box1',
		title: 'First box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['highlighted', 'special-header', 'important']
	},
	{
		id: 'box2',
		title: 'Second box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['special-header', 'important']
	},
	{
		id: 'box3',
		title: 'Third box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['highlighted', 'important']
	},
	{
		id: 'box4',
		title: 'Fourth box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['highlighted']
	},
	{
		id: 'box5',
		title: 'Fifth box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: []
	},
];


// Create all boxes from data. Add id, header, content, classes:

for (var objects in data) {
    var obiektyTablicy = data[objects];     
    var categories = obiektyTablicy['categories'];     
    //var catDelComm = categories.replace(/,/g,"");  
    var newElement = document.createElement('div'); 
        //newElement.classList.add(obiektyTablicy['categories'].join(' '));      
        newElement.classList.add(categories[0], categories[1], categories[2]);       
        newElement.innerHTML += '<header>' + obiektyTablicy['title'] +'</header>';
        newElement.innerHTML += obiektyTablicy['content'];
        newElement.id = obiektyTablicy['id'];  
        document.body.appendChild(newElement);  
} 
        

 
//test separacja klas
/*
var categories;

for (var obiektyTablicy in data) {
    var obiektyTablicyy = data[obiektyTablicy];  
    //document.write(obiektyTablicyyy['categories'] + '<br>')
    var categories = obiektyTablicyy['categories'];    
    //document.write(categories);
    var cat1 = categories[0];
    var cat2 = categories[1];
    var cat3 = categories[2];    
    //document.write( cat1 +'<br>')
    //document.write( categories +'<br>');  
    //document.write( cat1 +'<br>'); 
} 
document.write( cat1 +'<br>'); 

*/



