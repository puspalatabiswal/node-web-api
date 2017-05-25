var mongoose = require ("mongoose") ;
var customerSchema = mongoose.Schema({
	name : {
		type: String,
		required : true
	},

	email :{
		type : String,
		required : true
	},

	mob :{
		type : String ,
		required : true
	}
})

var Customer = module.exports = mongoose.model("customer" , customerSchema , "customer")

module.exports.getCustomers = function(callback){
return Customer.find(callback)
 //to get the data from db
}

module.exports.createCustomer = function(customerObj , callback){
	return Customer.create(customerObj , callback) ; //to put the data to db
 }
