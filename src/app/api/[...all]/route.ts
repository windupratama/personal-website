/**
 * An API route that handles non-existent routes requests
 */

import { NextResponse } from "next/server";

async function handler() {
    return NextResponse.json(
        { message: "The requested API route doesn't exist!" },
        { status: 404 },
    );
}

export const GET = handler;
export const POST = handler;
export const PUT = handler;
export const PATCH = handler;
export const DELETE = handler;
