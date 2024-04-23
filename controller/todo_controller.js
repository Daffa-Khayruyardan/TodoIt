const getTodoController = async (req,rep) => {
    rep.send({msg: 'hello world'})
};

module.exports = {
    getTodoController
};