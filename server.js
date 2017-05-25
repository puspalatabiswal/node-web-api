var express = require ("express");
var app = express();

var router = express.Router();
var mongoose = require("mongoose");
var Customer = require("./models/customer");
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));




mongoose.connect("mongodb://localhost/techminds" , function(){
	console.log("successfully connected to database")
})

router.get("/",function(req,res)
{
res.send({name : "puspalata biswal"})

})

//for getting the data
router.get("/customers", function(req,res){
Customer.getCustomers(function(err,customerData){
if(err){
	throw err;
}
res.json(customerData);

})
})


//for putting the data
router.post("/customer" , function(req,res){
	var customerObj = req.body;
	Customer.createCustomer(customerObj,function(err , customerResult){

		if(err){
			throw err;
		}
		res.json(customerResult);
	})
})





app.use("/api" , router);

var PORT = process.env.PORT || 4001 ;

app.listen(PORT , function(){

	console.log("port"+PORT);
})