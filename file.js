const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const aws = require('aws-sdk');

// Configure AWS SDK with your credentials
aws.config.update({
  accessKeyId: 'AKIA4OBHVFBJP4K3I5MX',
  secretAccessKey: 'wYrxeM9CCHQSUwQRtrYEr0wiWPk2KJ7gZI3PLP2R',
  region: 'us-east-1',
});

const s3 = new aws.S3();
