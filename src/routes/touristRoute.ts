import { Router } from 'express';
import TouristController from '../controller/touristController';

const router = Router();
const touristController = new TouristController();

router.get('/topRated', touristController.getTopRatedSpots.bind(touristController))
router.get('/:spotId', touristController.getSpotById.bind(touristController));


export default router;
