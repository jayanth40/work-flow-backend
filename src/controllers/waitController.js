
exports.waitFor60Seconds = (req, res) => {
    setTimeout(() => {
      res.json({ message: 'Success' });
    }, 60000); // Wait for 60 seconds
  };
  