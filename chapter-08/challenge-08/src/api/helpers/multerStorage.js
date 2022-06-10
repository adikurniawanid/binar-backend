const multer = require("multer");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (fs.existsSync("/src/public/videos")) {
      cb(null, "src/public/videos");
    } else {
      fs.mkdirSync("src/public/videos", { recursive: true });
      cb(null, "src/public/videos");
    }
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + file.originalname;
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

module.exports = { storage };
