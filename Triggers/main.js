const trigger =require('../Triggers/trigger')

async function main()
{
    try{
        await trigger.createTrigger();
    }
    catch(error)
    {
        console.log(error)
    }
};

main();