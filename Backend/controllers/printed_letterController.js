// controllers/printedLetterController.js

const PrintedLetter = require('../models/printed_letter');

const createPrintedLetter = async (req, res) => {
    try {
        const { templateName, userName, organizationName, shehiaName, dataTime } = req.body;
        const printedLetter = await PrintedLetter.create({
            templateName,
            userName,
            organizationName,
            shehiaName,
            dataTime
        });
        res.status(201).json(printedLetter);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllPrintedLetters = async (req, res) => {
    try {
        const printedLetters = await PrintedLetter.findAll();
        res.status(200).json(printedLetters);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getPrintedLetterById = async (req, res) => {
    try {
        const { id } = req.params;
        const printedLetter = await PrintedLetter.findByPk(id);
        if (printedLetter) {
            res.status(200).json(printedLetter);
        } else {
            res.status(404).json({ message: 'Printed letter not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updatePrintedLetter = async (req, res) => {
    try {
        const { id } = req.params;
        const { templateName, userName, organizationName, shehiaName, dataTime } = req.body;
        const [updated] = await PrintedLetter.update({
            templateName,
            userName,
            organizationName,
            shehiaName,
            dataTime
        }, {
            where: { id }
        });
        if (updated) {
            const updatedLetter = await PrintedLetter.findByPk(id);
            res.status(200).json(updatedLetter);
        } else {
            res.status(404).json({ message: 'Printed letter not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deletePrintedLetter = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await PrintedLetter.destroy({
            where: { id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Printed letter not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createPrintedLetter,
    getAllPrintedLetters,
    getPrintedLetterById,
    updatePrintedLetter,
    deletePrintedLetter
};
