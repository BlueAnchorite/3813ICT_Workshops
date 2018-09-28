module.exports = function(dbo) {
var myquery = { name: 'CPU' };
  dbo.collection("products").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    require('./read.js')(dbo);
  });
};