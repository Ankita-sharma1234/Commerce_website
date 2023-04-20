const express = require('express');

const usersroute = express.Router();

const { postuser, postuser1  } = require('../../Controller/AdminController/userControoler');

// /**
// * @swagger
// * components:
// *      schemas:
// *             hospital_employee:
// *                        type: object
// *                        properties:
// *                           employee_id:
// *                                 type: string
// *                           h_registration_no:
// *                                 type: string
// *                           employee_Name:
// *                                 type: string
// *                           employee_password:
// *                                 type: string
// *                           employee_DOB:
// *                                 type: string
// *                           employee_DOJ:
// *                                 type: string
// *                           employee_salary:
// *                                 type: string
// *                           employee_photos:
// *                                 type: int
// *                           employee_addhar_no:
// *                                 type: string
// *                           employee_experience:
// *                                 type: string
// *                           employee_contact_no:
// *                                 type: string
// *                           employee_email:
// *                                 type: string
// *                           employee_gender:
// *                                  type: string
// * 
// */

// /**
//  * @swagger
//  * /viewemployee:
//  *           get:
//  *                summary: My first  admin hospital table Swagger
//  *                description: Node js Api
//  *                responses:
//  *                     200:
//  *                         description: this is for testing the Api
//  *                         content:
//  *                              application/json:
//  *                                     schema:
//  *                                         type: array
//  *                                         items:
//  *                                             $ref : '#components/schemas/hospital_employee'
//  */

// /**
//  * @swagger
//  * /addemployee:
//  *    post:
//  *        summary: NodeJs API of Admin_table
//  *        description: NodeJs API to test Post-Method
//  *        requestBody:
//  *            required: true
//  *            content:
//  *               application/json:
//  *                 schema:
//  *                    $ref : '#component/schema/hospital_employee'
//  *        responses:
//  *           200:
//  *              description: Added Successfully
//  *              
//  */

// /**
//  * @swagger
//  * /updateemployee/{employee_id}:
//  *       put:
//  *         summary: Nodejs API of admin_hospital
//  *         description: NodeJs API to test put method
//  *         parameters:
//  *             - in: path
//  *               name: employee_id
//  *               required: true
//  *               description: string employee_id required
//  *               schema:
//  *                     type: string
//  *         requestBody:
//  *              required: true
//  *              content:
//  *                  application/json:
//  *                      schema:
//  *                         $ref : '#componenets/schemas/hospital_employee'
//  *         responses:
//  *                200:
//  *                   description: Added successfully
//  */

// /**
//  * @swagger
//  * /deleteemployee/{employee_id}:
//  *  delete:
//  *       summary: this api is used to delete the record from (admin hospital table)
//  *       description: this api is used to delete the record 
//  *       parameters:
//  *            - in: path
//  *              name: employee_id
//  *              required: true
//  *              description: string _id required 
//  *              schema:
//  *                type: string
//  *       responses:
//  *           200:
//  *              description: data is deleted successfully
//  */


usersroute.get('/viewemployee', postuser )
usersroute.post('/addemployee', postuser1 )


module.exports = {  usersroute }