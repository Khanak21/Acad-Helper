import Challenge from "@/models/challengeModel";
import { NextRequest, NextResponse } from "next/server";

export async function addChallenge(request: NextRequest) {
    try {
        const newChallenge = await request.json()
        const savedChallenge = await newChallenge.save();
        return {
            success: true,
            message: "Challenge created successfully",
            data: savedChallenge,
        };
    } catch (error: any) {
        console.error("Error creating challenge:", error);
        return {
            success: false,
            message: "Failed to create challenge",
            error: error.message,
        };
    }
}
