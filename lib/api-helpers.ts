import { NextResponse } from "next/server"
import type { ApiResponse } from "./types"

export function successResponse<T>(data: T, message?: string, status = 200) {
  return NextResponse.json<ApiResponse<T>>(
    {
      success: true,
      data,
      message,
    },
    { status }
  )
}

export function errorResponse(message: string, errors?: Record<string, string[]>, status = 400) {
  return NextResponse.json<ApiResponse<null>>(
    {
      success: false,
      message,
      errors,
    },
    { status }
  )
}

export function validationErrorResponse(errors: Record<string, string[]>) {
  return NextResponse.json<ApiResponse<null>>(
    {
      success: false,
      message: "Validation failed",
      errors,
    },
    { status: 400 }
  )
}
