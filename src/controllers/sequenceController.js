
const Sequence = require('../models/Sequence');

exports.getAllSequences = async (req, res) => {
    try {
      const sequences = await Sequence.find();
      const formattedSequences = sequences.map(sequence => ({
        id: sequence._id,
        name: sequence.name,
        operations: sequence.operations
      }));
      res.json(formattedSequences);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  exports.createSequence = async (req, res) => {
    const { name, operations } = req.body;
    const existingSequence = await Sequence.findOne({ name });
  
    if (existingSequence) {
      return res.status(400).json({ message: 'Sequence name already exists. Please use a different name.' });
    }
  
    const sequence = new Sequence({
      name,
      operations
    });
  
    try {
      const newSequence = await sequence.save();
      res.status(201).json(newSequence);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };


