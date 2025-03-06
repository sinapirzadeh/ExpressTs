import createRateLimiterMiddleware from 'express-rate-limit';

const fifteenMinsInMs = 15 * 60 * 1000;
const rateLimiter = createRateLimiterMiddleware({
  windowMs: fifteenMinsInMs,
  max: 100,
});

export default rateLimiter;
