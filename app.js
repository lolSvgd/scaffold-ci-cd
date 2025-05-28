import express, { json } from 'express';
import authRoutes from './routes/auth.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
app.use(json());
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

if (process.argv[1] === __filename) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

export default app;
