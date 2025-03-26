// import { User } from "../models/user.model.js";
// import bcrypt from "bcryptjs";

// export const register = async (req,res) => {
//     try {
//         const {fullname, email, phoneNumber , password , role} = req.body; 
//         if(!fullname || !email || !phoneNumber || !role ){
//             return res.status(400).json({
//                 message:"Something is missing",
//                 success:false
//             });
//         };
//         const user = await User.findOne({email});
//         if(user){
//             return res.status(400).json({
//                 message:'User already exist with this email',
//                 success:false,
//             })
//         }
//         const hashedPassword = await bcrypt.hash(password, 10);
//         await User.create({
//             fullname,
//             email,
//             phoneNumber,
//             password:hashedPassword,
//             role,
//         })
//     } catch (error) {
        
//     }
// }
// export const login = async (req,res) =>{
//     try {
//         const {email, password, role} = req.body;
//         if(!email || !password || !role ){
//             return res.status(400).json({
//                 message:"Something is missing",
//                 success:false
//             });
//         };
//         const user = 
//     } catch (error) {
        
//     }
// }export const login = async (req, res) => {
    try {
        const { email, password, role } = req.body;
        if (!email || !password || !role) {
            return res.status(400).json({
                message: "Something is missing",
                success: false
            });
        }

        // Add login logic here (e.g., checking credentials in DB)

    } catch (error) {
        return res.status(500).json({
            message: "Server error",
            success: false
        });
    }
;
