import mongoose from 'mongoose';
import UploadCSV from '../models/uploadCSV.js';

export const getCsvs = async(req,res) => {
    try{
        const UploadCSVs = await UploadCSV.find();

        res.status(200).json(UploadCSVs);
    } catch (error){
        res.status(404).json({ message: error.message });
    }
}

export const createCsv = async(req,res) => {
    const csv = req.body;
    // console.log(csv);

    const newCsv = new UploadCSV(csv);

    try {
        await newCsv.save();

        res.status(201).json(newCsv);
    }catch (error){
        res.status(409).json({message: error.message});
    }
}

export const deleteCsv = async (req, res) => {
    const { id: _id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No csv with that id');

    await UploadCSV.findByIdAndRemove(_id);

    res.json({ message: 'Csv deleted successfully '});
}
