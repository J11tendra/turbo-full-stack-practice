const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

// Admin Routes
router.post("/signup", (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;

  res.status(200).json({ message: "Admin created successfully" });
});

router.post("/courses", adminMiddleware, (req, res) => {
  // Implement course creation logic
  const { username, password } = req.headers;
  const { title, description, price, imageLink } = req.body;

  res.status(200).json({
    message: "Course created successfully",
    courseId: "new course id",
  });
});

router.get("/courses", adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
  const { username, password } = req.headers;
  res.status(200).json({
    courses: [
      {
        id: 1,
        title: "course title",
        description: "course description",
        price: 100,
        imageLink: "https://linktoimage.com",
        published: true,
      },
    ],
  });
});

module.exports = router;
