import mongoose from 'mongoose';

export const connectionDB = async () =>{
    try{
        const connection = await mongoose.connect(process.env.CONNECTION_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
        console.log(`connection successful `);
    }catch(err){
        console.log('err: ',err);
    }
}

