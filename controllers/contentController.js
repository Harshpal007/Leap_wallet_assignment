const db = require('../db');

const addContent =async(req,res)=>{
    try{
        const connection = await db.getConnection();
        const user_id= req.body.user_id;

        const checkUserQuery =`SELECT id FROM users WHERE id = ?`
        
        const [result] = await connection.query(checkUserQuery,[user_id]);

        if(result==0)
        {
            return res.status(404).json({error:"User ID doesn't exists"});
        }

        const addContentQuery = 'INSERT INTO content (id, user_id) VALUES (?, ?)';
        
        const [results] = await connection.query(addContentQuery,[req.body.content_id,user_id]);

        connection.release();
        res.json({success:true,status:"content added"});
    }
    catch(error){
        res.status(500).json({success:false,error:error.message});
    }
};

module.exports={
    addContent
};