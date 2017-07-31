import express from 'express';
import validate from 'express-validation';
import paramValidation from '../../config/param-validation';
import serviceProviderCtrl from '../controllers/service-provider.controller';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** GET /api/serviceProviders - Get list of serviceProviders */
  .get(serviceProviderCtrl.list)

  /** POST /api/serviceProviders - Create new serviceProvider */
  .post(validate(paramValidation.createServiceProvider), serviceProviderCtrl.create);

router.route('/:serviceProviderId')
  /** GET /api/serviceProviders/:serviceProviderId - Get serviceProvider */
  .get(serviceProviderCtrl.get)

  /** PUT /api/serviceProviders/:serviceProviderId - Update serviceProvider */
  .put(validate(paramValidation.updateServiceProvider), serviceProviderCtrl.update)

  /** DELETE /api/serviceProviders/:serviceProviderId - Delete serviceProvider */
  .delete(serviceProviderCtrl.remove);

/** Load serviceProvider when API with serviceProviderId route parameter is hit */
router.param('serviceProviderId', serviceProviderCtrl.load);

export default router;