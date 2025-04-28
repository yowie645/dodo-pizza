import { NextRequest, NextResponse } from 'next/server';

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const body = await req.json();
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: '[CART_PATCH] Server error' },
      { status: 500 }
    );
  }
}
