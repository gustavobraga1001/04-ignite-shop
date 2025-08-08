import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'string',{
  apiVersion: '2025-07-30.basil',
  appInfo: {
    name: 'Ignite Shop'
  }
})