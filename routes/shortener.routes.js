import { Router } from 'express';
import { getShortenerPage, postURlShortener, redirectToShortLink } from '../controllers/postshortner.controller.js';

const router = Router();


// router.get("/report",(req,res)=>{
//     const students = [
//         {name: "Danish",grade: "A",favoriteSubject : "Electrical"},
//         {name: "Shami",grade: "A",favoriteSubject : "Computer"},
//         {name: "Sahib",grade: "B",favoriteSubject : "Bio"},
//         {name: "Junaid",grade: "C",favoriteSubject : "Civil"},
//         {name: "Hasan",grade: "B",favoriteSubject : "Buisness"}
//     ]
//     res.render("report",{ students});
// });

router.get("/", getShortenerPage);

router.post("/",postURlShortener);

router.get("/:shortCode",redirectToShortLink);


export const shortenedRoutes = router;