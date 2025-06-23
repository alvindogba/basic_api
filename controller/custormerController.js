import db from "../models/index.js"

//Controller to create a new custormer
export const creatNewCustormer =async (req, res)=>{
    console.log(req.body)
    const {name, email, phone} = req.body
    
    try {

        //saving to the customer table
        const customer = await db.customer.create({name, email, phone})
        res.status(201).json(customer)
    } catch (error) {
       console.log(error) 
    }
}

//Controller to create a new custormer
export const listAllCustormer =async (req, res)=>{
    try {
        res.send("Listing all custormer")
    } catch (error) {
       console.log("some thing went wrong") 
    }
}