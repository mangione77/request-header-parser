const requestHeaderController = {}

requestHeaderController.getData = (req,res) => {
	console.log(req.headers)
}

module.exports = requestHeaderController