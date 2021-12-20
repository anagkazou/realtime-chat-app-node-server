const {connect} = require('getstream')
const bcrypt =require('getstream')
const StreamChat = require('stream-chat')
const crypto = require('crypto');


const api_key = process.env.STREAM_API_KEY;
const api_secret = process.env.STREAM_API_SECRET;
const app_id = process.env.STREAM_APP_ID;

const login = () => {};
const signup = (req, res) => {
  try {
      const {fullName, userName, password, phoneNumber} = req.body;

      const userId = crypto.randomBytes(16).toString('hex');

      const serverClient = connect(api_key, api_secret, app_id);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = { signup, login };
