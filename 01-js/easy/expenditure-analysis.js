/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/
// {
//   id: 2,
//   timestamp: 1656259600000,
//   price: 20,
//   category: 'Food',
//   itemName: 'Burger',
// },

function calculateTotalSpentByCategory(transactions) {
  let values = {};
  for (let transaction of transactions) {
      let category = transaction['category'];
      let price = transaction['price'];
      if (category in values) {        
          values[category] += price;
      } else {
          values[category] = price;
      }
  }
  let result = [];
  for (let category in values) {
      result.push({category: category, totalSpent: values[category]});
  }
  return result;
}


  
// console.log(calculateTotalSpentByCategory(transactions))
module.exports = calculateTotalSpentByCategory;
