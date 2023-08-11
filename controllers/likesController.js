const db =require('../db')
const NodeCache = require('node-cache');


const cache = new NodeCache({stdTTL:60})

const getlikes =async(req,res)=>{

    const cachekey =`like:${req.body.content_id}`;
    try{

    const cachedData =cache.get(cachekey); 
    if (cachedData) {
        return res.json({success:true,likes:cachedData})
    }

    const [checkContentresult] = await connection.query(checkUserQuery,[req.body.content_id])
        
    if(checkContentresult==0) {
        return res.status(404).json({error:"Content not found"});
    }


    const connection=await db.getConnection();
    const query=`SELECT COUNT(*) AS like_count
                 FROM likes
                 WHERE content_id=?`;
    const [result] = await connection.query(query,[req.body.content_id]);

    connection.release();

    const likeCount=result[0].like_count;
    cache.set(cachekey,likeCount)

    res.json({success:true, likes:likeCount});

    }
    catch(error)
    {
        res.status(500).json({success:false,error:error.message});
    }
};


const checklikes =async(req,res)=>{
    try{
        const connection = await db.getConnection();
        
        const checkUserQuery = `SELECT id FROM users WHERE id = ?`;

        const [checkuserresult] = await connection.query(checkUserQuery,[req.body.user_id])
        
        if(checkuserresult==0) {
            return res.status(404).json({error:"User not found"});
        }
        
        const checkContentQuery = `SELECT id FROM content WHERE content_id = ?`;

        const [checkContentresult] = await connection.query(checkUserQuery,[req.body.content_id])
        
        if(checkContentresult==0) {
            return res.status(404).json({error:"Content not found"});
        }
        const query = `
            SELECT COUNT(*) AS like_check
            FROM likes
            WHERE user_id = ? AND content_id = ?
        `;
        const [results] = await connection.query(query, [req.body.user_id, req.body.content_id]);

        connection.release();

        const likeCount = results[0].like_check;
        const hasLiked = likeCount > 0;

        res.json({ success: true, hasLiked });
    }
    catch(error){
        res.status(500).json({ success: false, error: error.message });
    }
};




const updateLikes =async (req,res)=>{
    
    // const { user_id, content_id } = req.body;

    try{
        // console.log(req.body)
        const connection = await db.getConnection();
          
        // console.log('Database connection successful');
        
    //    console.log(req.body)

        const [result] = await connection.query(
            'INSERT INTO likes (user_id, content_id) VALUES (?, ?)',
            [req.body.user_id, req.body.content_id]
          )

        // console.log("hii")

      
          connection.release();
          res.json({ success: true, message: 'Like updated successfully' });
    }
    catch(error)
    {
        res.status(500).json({ success: false, error: error.message });
    }
};

module.exports={
    updateLikes,
    checklikes,
    getlikes
}