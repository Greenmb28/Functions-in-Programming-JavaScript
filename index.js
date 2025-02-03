
    
function addPaintAndSupplies(totalCost, callback) 
{

        let cost = prompt("Enter the cost for the paint and supplies :");

        cost = parseFloat(cost);

        if (cost > 100)

        cost *= 1.1;
        let paintArea = document.querySelector(".paint");


        paintArea.innerHTML = `Paint $ ${cost.toFixed(2)}`;

        callback(totalCost + cost);

        return (totalCost + cost);
}     
 function addFloor(totalCost, callback)
{
        let cost = prompt("Enter the amount of Floor Coverings :");
        cost = parseFloat(cost);
        if(cost < 500)

        cost -= 1.15*cost;
        let floorArea = document.querySelector(".floor");

        floorArea.innerHTML = `Flooring $ ${cost.toFixed(2)}`;

        callback(totalCost + cost);

        return (totalCost + cost);
}        
 function addFurniture(totalCost, callback)
{
        let cost = prompt("Enter the amount of furniture :");
        cost = parseFloat(cost);
        if(cost < 500)
        cost -= 1.1*cost;
    
        let furnitureArea = document.querySelector(".furniture");

        furnitureArea.innerHTML = `Furniture $ ${cost.toFixed(2)}`;

        callback(totalCost + cost);

        return (totalCost + cost);
}


const updateTotals = (cost) => 
{



        let totalsArea = document.querySelector(".totalCost");

        totalsArea.innerHTML = `Total $ ${cost.toFixed(2)}`;
}


let totalCost = 0;

totalCost = addPaintAndSupplies(totalCost, updateTotals);
totalCost = addFloor(totalCost, updateTotals);
totalCost = addFurniture(totalCost, updateTotals);

