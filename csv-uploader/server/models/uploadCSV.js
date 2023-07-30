import mongoose from 'mongoose';

const csvDataSchema = mongoose.Schema({

    name: String,
    username: String,
    email: String,
    phone: String,
    website: String,
    
});

const csvSchema = mongoose.Schema({

    data: [csvDataSchema],
    fileName: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const UploadCSV = mongoose.model('UploadedCSV', csvSchema);

export default UploadCSV;