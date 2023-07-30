import express from 'express';
import mongoose from 'mongoose';

import PlaceMessage from '../models/PlaceMessage.js';

const router = express.Router();

export const getPlaces = async (req, res) => {
    const { page } = req.query;
    
    try {
        const LIMIT = 8;
        const startIndex = (Number(page) - 1) * LIMIT; // get the starting index of every page
    
        const total = await PlaceMessage.countDocuments({});
        const places = await PlaceMessage.find().sort({ _id: -1 }).limit(LIMIT).skip(startIndex);

        res.json({ data: places, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT)});
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}

export const getPlacesBySearch = async (req, res) => {
    const { searchQuery, tags } = req.query;

    try {
        const title = new RegExp(searchQuery, "i");

        const places = await PlaceMessage.find({ $or: [ { title }, { tags: { $in: tags.split(',') } } ]});

        res.json({ data: places });
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}

export const getPlace = async (req, res) => { 
    const { id } = req.params;

    try {
        const place = await PlaceMessage.findById(id);
        
        res.status(200).json(place);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPlace = async (req, res) => {
    const place = req.body;

    const newPlaceMessage = new PlaceMessage({ ...place, creator: req.userId, createdAt: new Date().toISOString() })

    try {
        await newPlaceMessage.save();

        res.status(201).json(newPlaceMessage);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePlace = async (req, res) => {
    const { id } = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Place with id: ${id}`);

    const updatedPlace = { creator, title, message, tags, selectedFile, _id: id };

    await PlaceMessage.findByIdAndUpdate(id, updatedPlace, { new: true });

    res.json(updatedPlace);
}

export const deletePlace = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Place with id: ${id}`);

    await PlaceMessage.findByIdAndRemove(id);

    res.json({ message: "Place deleted successfully." });
}

export const likePlace = async (req, res) => {
    const { id } = req.params;

    if (!req.userId) {
        return res.json({ message: "Unauthenticated" });
      }

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Place with id: ${id}`);
    
    const place = await PlaceMessage.findById(id);

    const index = place.likes.findIndex((id) => id ===String(req.userId));

    if (index === -1) {
      place.likes.push(req.userId);
    } else {
      place.likes = place.likes.filter((id) => id !== String(req.userId));
    }

    const updatedPlace = await PlaceMessage.findByIdAndUpdate(id, place, { new: true });

    res.status(200).json(updatedPlace);
}

export const commentPlace = async (req, res) => {
    const { id } = req.params;
    const { value } = req.body;

    const place = await PlaceMessage.findById(id);

    place.comments.push(value);

    const updatedPlace = await PlaceMessage.findByIdAndUpdate(id, place, { new: true });

    res.json(updatedPlace);
};

export default router;