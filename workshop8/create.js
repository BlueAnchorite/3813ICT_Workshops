module.exports = function(dbo) {
    dbo.listCollections({name: "products"}).hasNext(function(err, collinfo) {
        if (err) throw err;
        if (collinfo) {
            dbo.createCollection("products", function(err, res) {
                if (err) throw err;
                console.log("Collection created!");
            });
        }
    });
    
      
};
