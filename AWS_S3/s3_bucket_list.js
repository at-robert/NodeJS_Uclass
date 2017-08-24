
// s3BucketMgt=require("s3-nodejs-sample");
// var config=require("./config.js");
// var bucketName="amt.robertlo.test";
// var fileToUpload = "./shadow.json";

// s3BucketMgt.uploadFile(bucketName,fileToUpload,"null",config,function(data){

//  if(data.status==false){
//   console.log("Error in Upload file:"+data.error);
//  }else{
//   console.log("File Uploaded in Bucket.");
//  }
// });


// Load the SDK for JavaScript
var AWS = require('aws-sdk');
// Load credentials and set region from JSON file
AWS.config.loadFromPath('/Users/mac/Documents/AWS_CERT/config.json');

// Create S3 service object
// s3 = new AWS.S3({apiVersion: '2006-03-01'});
s3 = new AWS.S3();
                    
// Call S3 to list current buckets
s3.listBuckets(function(err, data) {
   if (err) {
      console.log("Error", err);
   } else {
      console.log("Bucket List", data.Buckets);
   }
});