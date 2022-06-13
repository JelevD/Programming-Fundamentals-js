let phonebook = { 'Tim': '0876566344',

'Bill': '0896543112' };

let entries = Object.entries(phonebook);

console.log(entries); // Array of arrays with two elements each

// [ ['Tim', '0876566344'],

// ['Bill', '0896543112'] ]

let firstEntry = entries[0];

console.log(firstEntry[0]); // Entry key -> 'Tim'

console.log(firstEntry[1]); // Entry value -> '0876566344'
