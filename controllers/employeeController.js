const employee = require("../models/employeeModel");

const insertEmployee = async(req,res) => {
    try {

        const employee = new Employee({
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile,
            password: req.body.password
        });

        const result = await employee.save();
        res.send(`O Cadastro foi feito com sucesso! ${result}`);

    } catch (error) {
        res.send(error.message);  
    }
}

module.exports = {
    insertEmployee
}