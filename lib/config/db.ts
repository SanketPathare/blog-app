import  mongoose  from "mongoose";

 export const ConnectDB =  async () => {
    await  mongoose.connect('mongodb+srv://blog-app:12345@cluster0.kpkdt.mongodb.net/blog-app?retryWrites=true&w=majority&appName=Cluster0')
    console.log("DB connection established")

}