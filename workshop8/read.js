module.exports = function(dbo) {
dbo.collection("products").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
});
};