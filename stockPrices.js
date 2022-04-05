/*
This challenge, you’ll write a function, called best, 
that returns the maximum profit possible for buying-and-selling a stock.
The best function will be given an array of stock prices in the order they happened throughout the day.
It should return the maximum possible profit on the stock for that day.
For example, with the following prices, our best option would have been 
to buy the stock at $10 and sell it at $22. So the profit would be $12: */

/* The solution is to find the lowest number
and the highest number */



clog = thing => console.log(thing)
Best = (array) => {
    let LowestNumber = array[1]
    let HighestNumber = array[1]
    for(let i = 0;i < array.length;i++){
        if(array[i] > HighestNumber){HighestNumber = array[i]}
}
for(let i = 0;i < array.length;i++){
    if(array[i] < LowestNumber){LowestNumber = array[i]}
}
let endValue = LowestNumber - HighestNumber

clog(`Buy the stock at ${LowestNumber} and sell it at ${HighestNumber} 
so you can make a solid ${Math.abs(endValue)} dollars`)

}
Best([30,3,4,6,8,9,2,4])
Best([1,1,1,423,-1])




