import { Router } from "express";

import { autheticateRoutes } from "./authenticate.routes";
import { historyRoutes } from "./history.routes";
import { peopleRoutes } from "./people.routes";
import { userRoutes } from "./users.routes";

const router = Router();

router.use("/people", peopleRoutes);
router.use("/history", historyRoutes);
router.use("/users", userRoutes);
router.use(autheticateRoutes);

export { router };
