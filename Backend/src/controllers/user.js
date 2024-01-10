const userSchema = require("../schema/userschema");
const bcrypt = require("bcrypt");

exports.getUser = async (req, res) => {
  try {
    const { email, password } = req.query
    const user = await userSchema.findOne({ email });
    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (isPasswordValid) {
        res.status(200).json({ message: "User found", user });
      } else {
        res.status(401).json({ message: "Invalid password" });
      }
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};  
 
exports.createUser = async (req, res) => {
  try {
    const { name, address, email, password } = req.body;
    const newUser = new userSchema({
      name,
      address,
      email,
      password: await bcrypt.hash(password, 10), 
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
