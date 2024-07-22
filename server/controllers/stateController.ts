import { Request, Response } from 'express';
import State from '../models/State';

// Create a new state
export const createState = async (req: Request, res: Response) => {
    try {
        const { name, description, status, createdBy } = req.body;
        const state = new State({ name, description, status, createdBy });
        await state.save();
        res.status(201).json(state);
    } catch (err) {
        if (err instanceof Error) {
            res.status(400).json({ error: err.message });
        } else {
            res.status(400).json({ error: 'Unknown error occurred' });
        }
    }
};

// Get all states
export const getStates = async (req: Request, res: Response) => {
    try {
        const states = await State.find();
        res.status(200).json(states);
    } catch (err) {
        if (err instanceof Error) {
            res.status(400).json({ error: err.message });
        } else {
            res.status(400).json({ error: 'Unknown error occurred' });
        }
    }
};

// Update a state
export const updateState = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name, description, status } = req.body;
        const state = await State.findByIdAndUpdate(id, { name, description, status }, { new: true });
        if (!state) {
            return res.status(404).json({ error: 'State not found' });
        }
        res.status(200).json(state);
    } catch (err) {
        if (err instanceof Error) {
            res.status(400).json({ error: err.message });
        } else {
            res.status(400).json({ error: 'Unknown error occurred' });
        }
    }
};

// Delete a state
export const deleteState = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const state = await State.findByIdAndDelete(id);
        if (!state) {
            return res.status(404).json({ error: 'State not found' });
        }
        res.status(200).json({ message: 'State deleted successfully' });
    } catch (err) {
        if (err instanceof Error) {
            res.status(400).json({ error: err.message });
        } else {
            res.status(400).json({ error: 'Unknown error occurred' });
        }
    }
};
