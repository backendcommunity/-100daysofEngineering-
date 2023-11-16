# -100daysofEngineering-
Repo for Mastering Backend BootCamp  and  #100daysOfEngineering 

Assignment :create an elaborate examples about map reduce filter and share it on github
1. map() function is a function that transforms through the elements of an array and performs a given calculation/function on eahc of the elements and then creates a new array containing the results of the calculation on each element.
Example:
Asumme we have an array of prices and we want to increase each element by mutliple of 2 and save the new prices in another array
    let prices = [1.5,2,5,6.5,10];
    let newPrices = prices.map((price)=>price*2);
    newPrices now contains the value of the elements of the first array doubled.
2. filter() function is used to get the element of an array that meets a condition. We can use it like a custom search function in an array, retuning all the elements that matches what we are searching for.
Example:
Using the prices array we declared earlier, we can search for all the prices that are not more than 5 using filter()
    let notMoreThan5 = prices.filter((price)=>price<5);
3. reduce() function, unlike the first two methods, returns a single value which is the result of reducing the elements of the array using a function we specified. The value returned is the reducer
Example:
Let say we want to find the total price of commodities from the prices array. Instead of looping through the array manually, adding each of the elements, we can use reducer
    let totalPrice = price.reduce((total,currentPriceToAdd)=>total + currentPriceToAdd, 0);

The difference between these functions are glaring:
Only map and filter returns new array from the calculation/check we specified. Redurce on the other hand only accummulates the result of calculation on each of the elements of the array, and returns a single value.
