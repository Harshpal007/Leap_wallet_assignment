const db  = require('../db')
const cron = require('node-cron');



cron.schedule('0 * * * *', async () => {        // code for scheduling like check every hour
  const allContentIds = await getAllDistinctContentIds();
  
  for (const contentId of allContentIds) {
    await checkAndSendPushNotification(contentId);
  }
});

const getAllDistinctContentIds = () => {
  return new Promise((resolve, reject) => {
    try{

    const query = 'SELECT DISTINCT content_id FROM likes';
    
    connection.query(query, (err, results) => {
      
      const contentIds = results.map(row => row.content_id);
      console.log(contentIds);
      resolve(contentIds);
      
    });
}
catch(error)
{
    
}
  });
};

const checkAndSendPushNotification = async contentId => {
    // placeholder code
};
