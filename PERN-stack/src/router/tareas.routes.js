import { Router } from "express";
import { crearTarea, listarTarea } from "../controllers/tareas.controller"; 
import { listarTareas } from "../controllers/tareas.controller";
import { actualizarTarea } from "../controllers/tareas.controller";
import { eliminarTarea } from "../controllers/tareas.controller";

const router = Router();

router.get('/tareas', listarTarea );

router.get('/tareas/:id', listarTareas);

router.post('/tareas', crearTarea);

router.put('/tareas/:id', actualizarTarea);

router.delete('/tareas/:id', eliminarTarea ); 

export default router;