# Leap_wallet_assignment

This repository consists of all the required functionalities.
Tech Stack used for the project is :
Node.js
Express.js
Mysql(Database)

Some of the libraries which are used in the developement are:
Node-cache
Firebase-admin(for pop-up messages)
node-cron(for running a check file to count the likes of a given conetent)
body-parser
mysql


Below is the given functionalities which are being asked and how they were tackled here:
1) Store Like event:
   -> an API named updatelikes is using query execution to input the data.
   -> Asynchronous function is being used to handle multiple requests at a time 
2)Check if user has liked a particular content:
  ->an API named checklikes is developed here.
  -> cache was implemented for faster progress
3)Total likes for a content:
  ->similar approch as previous API

4) Push Notification:
   ->This functionality was deployed using
 
