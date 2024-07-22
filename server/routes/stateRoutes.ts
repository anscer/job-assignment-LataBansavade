import { Router } from 'express';
import { createState, getStates, updateState, deleteState } from '../controllers/stateController';
import { authenticateUser } from '../services/authService';


const router = Router();

router.post('/states', authenticateUser, createState);
router.get('/states', authenticateUser, getStates);
router.put('/states/:id', authenticateUser, updateState);
router.delete('/states/:id', authenticateUser, deleteState);

export default router;
