'use strict';
var mg = require('mailgun-js')({
		apiKey: process.env.MAILGUN_API_KEY,
		domain: process.env.MAILGUN_DOMAIN
	});

exports.sendEmail = function(event, context, callback){
	mg.messages().send({
		from: event.from_email,
		to: event.to_email,
		subject: event.email_subject,
		text: event.email_text
	}, function(err, body){
		callback(err, body)
	})	
}
