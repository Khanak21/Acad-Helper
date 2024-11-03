import Challenge from "@/models/challengeModel";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const {Id} = await request.json();
        const chal = await Challenge.findById(Id);
        if(!chal){
            return NextResponse.json({
                success: false,
                message: "Challenge not found",
            }, { status: 404 });
        }
        return NextResponse.json({
            success: true,
            data: chal,
        });
    } catch (error: any) {
        console.error("Error fetching challenges:", error);
        return NextResponse.json({
            success: false,
            message: "Failed to fetch challenges.",
            error: error.message,
        }, { status: 500 });
    }
}