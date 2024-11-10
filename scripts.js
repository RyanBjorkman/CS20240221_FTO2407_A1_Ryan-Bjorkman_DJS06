// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// Log each name and province in the console then log each name with it's matching province
names.forEach((name, index) => {
  console.log(name);
  console.log(provinces[index]);
  console.log(`${name} (${provinces[index]})`);
});

// Convert each province to uppercase and log the new array
const provincesUppercase = provinces.map(province => province.toUpperCase());
console.log(provincesUppercase);

// Create a new array with the length of each name
const nameLengths = names.map(name => name.length);
console.log(nameLengths);

// Alphabetically sort the provinces 
const sortedProvinces = [...provinces].sort();
console.log(sortedProvinces);

// Filter out provinces containing the word 'Cape' and log the count of remaining provinces
const nonCapeProvinces = provinces.filter(province => !province.includes("Cape"));
console.log(nonCapeProvinces.length);

// Create a boolean array to check if each name contains the letter 'S' that is case insensitive
const containsS = names.map(name => name.split('').some(char => char.toLowerCase() === 's'));
console.log(containsS);

// Use reduce to map names to their respective provinces
const nameProvinceMapping = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log(nameProvinceMapping);

// Log each product name in a single statement
console.log(products.map(product => product.product));

// Filter products with names longer than 5 characters
console.log(products.filter(product => product.product.length <= 5));

