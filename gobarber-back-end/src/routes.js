import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentController from './app/controllers/AppointmentController';
import ScheduleController from './app/controllers/ScheduleController';
import NotificationController from './app/controllers/NotificationController';
import AvailableController from './app/controllers/AvailableController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

// cadastro de usuário
routes.post('/users', UserController.store);
// rota para logar na aplicação
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

// roa para update
routes.put('/users', UserController.update);

//upload de imagem de perfil do usuário
routes.post(
  '/files',
  upload.single('file'),
  FileController.store
);

// listagem de prestadores de serviço
routes.get('/providers', ProviderController.index);
// listagem de horários disponíveis para agendamento
routes.get('/providers/:providerId/available', AvailableController.index);

// para realizar um agendamento
routes.post('/appointments', AppointmentController.store);
// para listar agendamentos
routes.get('/appointments', AppointmentController.index);
// deletando um agendamento
routes.delete('/appointments/:id', AppointmentController.delete);

// para listar agendamentos do prestador de serviço
routes.get('/schedule', ScheduleController.index);

// para listar as notificações
routes.get('/notifications', NotificationController.index);
// marcando um notificação como lida
routes.put('/notifications/:id', NotificationController.update);

export default routes;
