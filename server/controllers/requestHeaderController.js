const requestHeaderController = {}

requestHeaderController.getData = (req,res) => {
	let ip = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress

     let language = req.headers['accept-language'].split(',')[0]
     let user_agent = req.headers['user-agent'].split(') ')[0].split(' (')[1]

	res.status(200).json({
		ip:ip,
		language:language,
		user_agent:user_agent
		
	})
}

module.exports = requestHeaderController