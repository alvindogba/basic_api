import express from "express"
import { creatNewCustormer } from "../controller/custormerController.js"
const customerRouter = express()

//Creating new customer
customerRouter.post("/register", creatNewCustormer)

export default customerRouter