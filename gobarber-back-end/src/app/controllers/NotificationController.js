import Notification from '../schemas/Notification';
import User from '../models/user';

class NotificationController {
  async index(req, res) {
    // verificando se o usuário logado é provider, pois só servidores podem acessar essa rota
    const isProvider = await User.findOne({
      where: { id: req.userId, provider: true },
    });

    if (!isProvider) {
      return res.status(401).json({
        error: 'Only providers can  load notifications',
      });
    }
    // fim da verificação

    const notifications = await Notification.find({
      user: req.userId,
    })
      .sort({ createdAt: 'desc' })
      .limit(20);

    return res.json(notifications);
  }

  async update(req, res) {

    const notification = await Notification.findByIdAndUpdate(
      req.params.id,
      { read: true },
      { new: true }
    );

    return res.json(notification);
  }
}

export default new NotificationController();
