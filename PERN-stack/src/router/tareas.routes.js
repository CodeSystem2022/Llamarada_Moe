import { Router } from "express-promise-router";
// import { crearTarea, listarTarea } from "../controllers/tareas.controller"; 
// import { listarTareas } from "../controllers/tareas.controller";
// import { actualizarTarea } from "../controllers/tareas.controller";
// import { eliminarTarea } from "../controllers/tareas.controller";
import { crearTarea, actualizarTarea, listarTarea, listarTareas, eliminarTarea } from "../controllers/tareas.controller";
import {isAuth} from "../middlewares/auth.middlewares.js"

const router = Router();

router.get('/tareas', isAuth, listarTarea );

router.get('/tareas/:id', isAuth, listarTareas);

router.post('/tareas', isAuth, crearTarea);

router.put('/tareas/:id', isAuth, actualizarTarea);

router.delete('/tareas/:id', isAuth, eliminarTarea ); 

export default router;