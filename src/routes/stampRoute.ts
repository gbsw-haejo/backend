import { Router } from 'express';
import StampController from '../controller/stampController';

const router = Router();
const touristController = new StampController();

router.post('/check', touristController.checkStamp.bind(touristController));
router.get('/user/:userId', touristController.getStampByUser.bind(touristController));
router.get('/:stampId', touristController.getInfoByStampId.bind(touristController));

export default router;
