import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest,NextResponse } from "next/server";
import bcrypt from "bcryptjs";

connect()

export async function POST(request:NextRequest){
    try {
        const reqBody=request.json()
        const {email,password}=reqBody;

        const user=await User.findOne({email})
        if(!user){
            return NextResponse.json({error:"User does not exist"},{status:500})
        }

        
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500})
    }
}