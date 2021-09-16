import { Router } from 'express';
import appointmentRoutes from './appointments.routes';
import usersRoutes from './users.routes';
import sessionRoutes from './session.route'

const routes = Router();

routes.use('/appointments', appointmentRoutes);
routes.use('/users', usersRoutes);
routes.use('/sessions', sessionRoutes);
routes.use('/users/avatar', usersRoutes);

export default routes;
