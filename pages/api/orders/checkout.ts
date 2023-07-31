// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { product } from "../../../lib/types/product.type";
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY
const stripe = require("stripe")(STRIPE_SECRET_KEY);

type Data = {
  url: string | null,
   error: string | null,
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if(req.method == "POST") {
    try {
      const body = req.body;

      const line_items = body?.items?.map((item: product) => {
        return {
          price_data: {
            currency: "kes",
            product_data: {
              name: item.product,
              images: [item.image],
              metadata: { productId: item.product },
              
            },
            unit_amount: item.price * 100,        
          },
          quantity: 1,
        };
      });

      const shippingInfo = body?.shippingInfo;

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        success_url: `${process.env.API_URL}/orders?order_success=true`,
        cancel_url: `${process.env.API_URL}`,
        // customer_email: req?.user?.email,
        // client_reference_id: req?.user?._id,
        mode: "payment",
        metadata: { shippingInfo },
        shipping_options: [
          {
            shipping_rate: "shr_1NZqwxKJAHRxUtWOqyUv6RrB",
          },
        ],
        line_items,
      });

      res.status(200).json({
        url: session.url,
        error: null
      });
    } catch (error:any) {
      res.status(500).json(
        {
          url: null,
          error: error.message
        }
      );
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}