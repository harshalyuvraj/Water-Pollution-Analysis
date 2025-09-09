const mongoose = require("mongoose");

const InformationSchema = new mongoose.Schema({
    physical: String,
    chemical: String,
    biological: String,
    air: String,
    other: String
});

module.exports = mongoose.model("Information", InformationSchema);

