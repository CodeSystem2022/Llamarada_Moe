import { Router } from "express-promise-router";
// import { crearTarea, listarTarea } from "../controllers/tareas.controller"; 
// import { listarTareas } from "../controllers/tareas.controller";
// import { actualizarTarea } from "../controllers/tareas.controller";
// import { eliminarTarea } from "../controllers/tareas.controller";
import { crearTarea, actualizarTarea, listarTarea, listarTareas, eliminarTarea } from "../controllers/tareas.controller";
import {isAuth} from "../middlewares/auth.middlewares.js"

const router = Router();

router.get('/tareas', isAuth, listarTarea );

router.get('/tareas/:id', listarTareas);

router.post('/tareas', crearTarea);

router.put('/tareas/:id', actualizarTarea);

router.delete('/tareas/:id', eliminarTarea ); 

export default router;