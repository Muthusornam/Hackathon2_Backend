const {MongoClient}=require('mongodb');


module.exports={
    selectedDb:{},
    async connect(){
        try{
           const client=await MongoClient.connect('mongodb+srv://Jayabharathy:Jai151991@cluster0.tzkph.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
         this.selectedDb=client.db("Webscraping");
         //console.log(this.selectedDb);
        }
        catch(err){
            console.log(err);
        }
    }
}