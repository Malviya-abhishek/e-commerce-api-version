exports.isValidBookFeilds = (req, res, next)=>{
  if(!req.body){
    return res.status(400).send({error:"Body missing"});
  }
  if(
    !req.body.name ||
    !req.body.price ||
    !req.body.description ||
    !req.body.tags
  ){
    let error = [];
    if(!req.body.name) error.push("Missing name field");
    if(!req.body.description) error.push("Missing description field");
    if(!req.body.price) error.push("Missing price field");
    if(!req.body.tags) error.push("Missing tags field");
    return res.status(400).send( {error : error.join(", ")} );
  }

  next();
}