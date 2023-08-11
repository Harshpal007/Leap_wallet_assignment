const db =require('../db');

async function createTrigger() {
try{

const connection = await db.getConnection();
const createTriggerQuery = `

CREATE TRIGGER check_likes_threshold
AFTER INSERT ON likes
FOR EACH ROW
BEGIN
  DECLARE like_count INT;
  SET like_count = (SELECT COUNT(*) FROM likes WHERE content_id = NEW.content_id);
  IF like_count > 100 THEN
    -- Place holder code here
  END IF;
END;

`;
await connection.query(createTriggerQuery);

connection.end();
}
catch(error){
    console.log(error);
}
}
module.exports ={
    createTrigger
}