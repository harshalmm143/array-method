const inventory = [
    { name: "Tomato", type: "vegetables" },
    { name: "banana", type: "fruit" },
    { name: "apple", type: "fruit" },

]

const result = Object.groupBy(inventory, ({ type }) => type);

console.log("output", result)