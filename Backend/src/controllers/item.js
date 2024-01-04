const itemSchema = require("../schema/itemschema");

exports.getAllItems = async (req, res) => { 
    try {
        const items = await itemSchema.find()
        res.json(items)
    } catch(error) { 
        res.status(500).json({ message: error.message });
    }
}

exports.createItem = async (req, res) => { 
    try {
      const newItem = new itemSchema(req.body);
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}