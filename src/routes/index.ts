import {Router} from 'express';
import { historyRoutes } from './history.routes';
import { peopleRoutes } from './people.routes';

const router = Router();

router.use("/people", peopleRoutes);
router.use("/history", historyRoutes);

export {router}