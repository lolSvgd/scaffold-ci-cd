import { Router } from 'express';
const router = Router();
import { validateUsername, validatePassword } from '../validators/authValidator.js';

router.post('/validate-username', (req, res) => {
  const { username } = req.body;
  const isValid = validateUsername(username);
  res.status(200).json({ isValid });
});

router.post('/validate-password', (req, res) => {
  const { password } = req.body;
  const isValid = validatePassword(password);
  res.status(200).json({ isValid });
});

export default router;
