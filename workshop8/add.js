module.exports = function(dbo) {
var myobj = [
    { id: "1", name: "GPU", price: "500", type: "GPU", description: ""},
    { id: "2", name: "CPU", price: "200", type: "CPU", description: ""},
    { id: "3", name: "Motherboard", price: "150", type: "Motherboard", description: ""},
  ];
  dbo.collection("products").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
});
};