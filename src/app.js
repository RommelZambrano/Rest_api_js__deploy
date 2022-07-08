import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import productsRoutes from './routes/products.routes';
import clientsRoutes from './routes/clients.routes';
import invoicesRoutes from './routes/invoices.routes';
import usersRoutes from './routes/users.routes';
const app = express();

//settings
app.set('port', process.env.PORT || 8080);

//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to my API' })
});
app.use('/api/products', productsRoutes);
app.use('/api/clients', clientsRoutes);
app.use('/api/invoices', invoicesRoutes);
app.use('/api/users', usersRoutes)

export default app;