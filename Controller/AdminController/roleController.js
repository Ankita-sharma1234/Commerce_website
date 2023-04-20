const connection = require("../../Modal/Db_Connect");

const postrole = async (req, res) => {
    try {
        const q1 = "SELECT * FROM role"
        await connection.query(q1, (err, result, fields) => {
            if (err) {
                res.send(err.sqlMessage);
            } res.send(result)
        })
    } catch (err) {
        res.send(err.sqlMessage)
    }
}


// const updateemployee = (req, res) => {

//     let userData = [req.body.h_registration_no, req.body.employee_Name, req.body.employee_password, req.body.employee_DOB, req.body.employee_DOJ, req.body.employee_salary, req.body.employee_photos, req.body.employee_aadhar_no, req.body.employee_experience, req.body.employee_contact_no, req.body.employee_email, req.body.employee_gender, req.body.employee_id]
//     let sqlQuery = `UPDATE users  SET= ? where employee_id = ? `;
//       nnection.query(sqlQuery, userData, (err, result) => {
//      if (err) {
//             console.log(err.sqlMessage);
//         } else {
//             res.send(result);
//         }
//     })


// }





module.exports = { postrole }