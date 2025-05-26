import express from "express";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();
const router = express.Router();

const api_key = process.env.GEMINI_API_KEY;

router.post("/", async (req, res) => {
     if(!req.body){
        return res.status(400).send("No Request body");
     }
     console.log("req.body" , req.body);

     try{
        console.log("api_key: " , api_key);
        const api_url  = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${api_key}`;

        const postData = {
                 "contents" : [
                    {
                       role: "user",
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
        //  console.error("Axios Error:", error.response?.data || error.message || error);
        //  res.status(500).send("Failed to fetch the response");

        console.error("❌ Error calling Gemini API:");
        if (error.response) {
          console.error("🔴 Response data:", error.response.data);
          console.error("🔴 Status:", error.response.status);
          console.error("🔴 Headers:", error.response.headers);
        } else if (error.request) {
          console.error("🔴 No response received:", error.request);
        } else {
          console.error("🔴 Request error:", error.message);
        }
        res.status(500).send("Failed to fetch the response");
     }
});

export default router;
