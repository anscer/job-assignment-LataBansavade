import { Request, Response } from 'express';
import State from '../models/State';

export const createState = async (req: Request, res: Response) => {
  try {
    const { name, description, status, createdBy } = req.body;
    const state = new State({ name, description, status, createdBy });
    await state.save();
    res.status(201).json(state);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getStates = async (req: Request, res: Response) => {
  try {
    const states = await State.find();
    res.status(200).json(states);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updateState = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedState = await State.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedState);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteState = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await State.findByIdAndDelete(id);
    res.status(200).json({ message: 'State deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
