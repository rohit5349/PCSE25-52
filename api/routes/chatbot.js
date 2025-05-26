import express from "express";
import dotenv from "dotenv";


dotenv.config();
const router = express.Router();

router.post("/", async (req, res) => {
     if(!req.body){
        return res.status(400).send("No Request body");
     }
     console.log("req.body" , req.body);

     try{
        const api_key = process.env.GEMINI_API_KEY;
        const api_url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${api_key}`;

        const postData = {
                 "contents" : [
                    {
                       "parts":[
                           {
                               "text" : req.body?.text
                           }
                       ]
                    }
                 ]
             
        };

        const response = await axios.post(api_url , postData , {
              headers : {
                 'Content-Type' : 'application/json'
              }
        });

        const reply = response.data?.candidates?.[0]?.contents?.[0]?.parts?.[0]?.text || "No responce";
        console.log("reply : " , reply);
        res.json({reply});
       
     } catch(error) {
         res.status(500).send("Failed to fetch the response");
     }
});

export default router;
