import { Router } from 'express';
import { createState, getStates, updateState, deleteState } from '../controllers/stateController';
import { isAuthenticated } from '../services/authService';

const router = Router();

router.post('/states', isAuthenticated, createState);
router.get('/states', isAuthenticated, getStates);
router.put('/states/:id', isAuthenticated, updateState);
router.delete('/states/:id', isAuthenticated, deleteState);

export default router;
