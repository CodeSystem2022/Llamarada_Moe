import express from 'express';
import morgan from 'morgan';
import tareasRoutes from "./router/tareas.routes.js"
import authRoutes from "./router/auth.routes.js"

const app = express();

// Middleware: convierte datos que llegan al backend en obj de js
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get("/", (req, res) => res.json({message: "Bienvenidos a mi proyecto"}));

// Manejando errores
app.use('/api',tareasRoutes);

// agrego auth sign-in, sign-out
app.use('/api',authRoutes);

app.use((err, req, res, next) => {
    res.status(500).json({
        status: "error",
        message: err.message
    });
});

export default app;