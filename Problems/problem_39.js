/* wood requirement calculation */
// per table wood require = 3cft
// per chair wood require = 5cft
// per bed wood require = 30 cft


function woodRequire(tableQuantity, chairQuantity, bedQuantity) {
    const tableWood = 3;
    const chairWood = 5;
    const bedWood = 30;

    const totalTableWood = tableWood * tableQuantity;
    const totalChairWood = chairWood * chairQuantity;
    const totalBedWood = bedWood * bedQuantity;

    const totalWood = totalTableWood + totalChairWood + totalBedWood;
    return totalWood;
}

const myInput = woodRequire(34, 55, 10); // breakpoint প্যারামিটার ডিক্লেয়ারে দিতে হবে Debug এর জন্য। 
console.log(myInput);