/**
 * An API route that handles the root route requests
 */

import { NextResponse } from "next/server";

async function handler() {
    return NextResponse.json({ message: "API is online!" }, { status: 200 });
}

export const GET = handler;
export const POST = handler;
export const PUT = handler;
export const PATCH = handler;
export const DELETE = handler;
