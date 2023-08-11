const db =require('../db');

const addUser = async(req,res)=>{
    try{
        const connection = await db.getConnection();
        const query = `INSERT INTO users (id, username) VALUES (?, ?)`
        
        const [result] = await connection.query(query,[req.body.id,req.body.name]);
        
        connection.release();
        res.json({success:true, status:"user added"});

    }
    catch(error)
    {
        res.status(500).json({success:false,error:error.message});
    }
};

module.exports={
    addUser
}