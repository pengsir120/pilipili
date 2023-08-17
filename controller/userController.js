exports.register = async (req, res) => {
  console.log(req.body);
}

exports.list = async (req, res) => {
  console.log(req.method);
  res.send('/user-list')
}

exports.delete = async (req, res) => {

}