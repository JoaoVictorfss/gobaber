export default {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  // configuração padrão para todos os emails
  default: {
    from: 'Equipe GoBarber <noreply@gobaber.com',
  },
};
