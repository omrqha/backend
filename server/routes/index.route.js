import express from 'express';
import userRoutes from './user.route';
import domainRoutes from './domain.route';
import serviceProviderRoutes from './service-provider.route';
import authRoutes from './auth.route';

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

// mount user routes at /users
router.use('/users', userRoutes);

// mount domain routes at /domains
router.use('/domains', domainRoutes);

// mount domain routes at /serviceProviders
router.use('/serviceProviders', serviceProviderRoutes);

// mount auth routes at /auth
router.use('/auth', authRoutes);

export default router;
