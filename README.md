# send-email-nodejs

This repository contains a [nodejs][] project that uses a [Lambda][] fucntion to send email.

## Usage

If the repo was cloned to the home directory, run:
`cd ~/send-email-nodejs`
`npm install --prefix=~/send-email-nodejs mailgun-js`

zip directory and upload to a newly created nodejs Lambda function (upload directly or via s3)
`cd ~/send-email-nodejs`
`zip -r ~/send-email-nodejs.zip index.js node_modules`

Add environment variables for the mailgun api (free to sign up) and test using events variables.

Copyright (c) 2018 Tyler McAdams <tyler.mcadams@gmail.com>. MIT Licensed.

[nodejs]: https://nodejs.org
[Lambda]: https://aws.amazon.com/lambda/
