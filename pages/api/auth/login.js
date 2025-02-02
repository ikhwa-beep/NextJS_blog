import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const users = [
    { email: 'test@example.com', password: '$2a$10$...' } // Example hashed password
  ];
  export default async function login(req, res) {
    const { email, password } = req.body;
    // Find user by email
    const user = users.find((user) => user.email === email);
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }
    // Compare password
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    // Create a JWT token
    const token = jwt.sign({ email: user.email }, 'your_secret_key', { expiresIn: '1h' });
    return res.status(200).json({ token });
  }