const convertString = (req, res) =>
req.toLowerCase().indexOf(res.toLowerCase()) !== -1;

export default convertString;