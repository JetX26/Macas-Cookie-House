import { NextResponse } from "next/server";
import Stripe from "stripe";

export const POST = async (req: Request) => {
  try {
    const data = await req.json();
    console.log(data);
    if (!data) {
      return NextResponse.json(
        {
          error: "Failed to receive data",
        },
        { status: 403 }
      );
    }
    const stripe = new Stripe(
      "sk_test_51Oetb4BD5NjyDBs6jGvOFOIt5Sx7PpXdbmaehf5c3RfrRMTH34BD3AW7FbZ6M6tJ9HLEJmd1y2E5onccLxsroVXj00jwg6wh8O"
    );
    const cartItems: any[] = [];
    data.items.forEach((item: any) => {
      cartItems.push({
        price: item.priceId,
        quantity: item.quantity,
      });
    });
    const session = await stripe.checkout.sessions.create({
      line_items: [...cartItems],
      mode: "payment",
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/fullselection",
    });
    if (!session) {
      return NextResponse.json(
        {
          error: "Stripe Failed",
        },
        { status: 422 }
      );
    }
    return NextResponse.json(
      {
        checkout: session.url,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error,
      },
      { status: 500 }
    );
  }
};
