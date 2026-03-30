const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  const filePath = path.join(__dirname, '../resume.pdf');
  const file = fs.readFileSync(filePath);
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename="Aradhya_Stuti_Resume.pdf"');
  res.send(file);
};
