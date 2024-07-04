const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/scrape', async (req, res) => {
  const { url } = req.body;
  try {
    const response = await axios.get(url);
    res.json({ content: response.data });
  } catch (error) {
    res.status(500).json({ error: 'Failed to scrape content' });
  }
});
app.get('/',async (req, res)=>{
    res.send("Hello world");
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

});
