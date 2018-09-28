module.exports = function(dbo) {
var myquery = { name: 'GPU' };
var newvalues = { $set: {name: "Super GPU" }};

dbo.collection("products").updateOne(myquery, newvalues, function(err, res) {
        if (err) throw err;
        console.log("1 document updated");
    });
};