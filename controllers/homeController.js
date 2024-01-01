import {contactMailer} from '../mailer/contactMailer.js'
import Contact from "../models/Contact.js";


export const contactRequest = async(req,res)  => {
    try {
        console.log('/contact-request',req.body)
        
        const {email} = req.body

        if(!email){
            return res.status(400).json({
                message : 'Invalid Information REquest'
            })
        }

        let contact = await Contact.findOne({email : req?.body?.email}).lean()

        if(contact){
            console.log('User Contacted Again',contact)
            contactMailer({...contact,resent : true})
            return res.status(200).json({
                message : 'Your request is previously sent. We are trying hard to process it quickly'
            })
        }

        await Contact.create(req.body)
        .then(data=>{
            contactMailer(data)
            return res.status(200).json({
                message : 'Thank You for Contacting Us! We will reach you soon'
            })
        })
        .catch(err=>{
            console.log('DATABASE ERROR', err)
            return res.status(500).json({
                message : 'Internal Server Error'
            })
        })
    } catch (error) {
        console.log('Internal Server Error ',error)
        return res.status(500).json({
            message : 'Internal Server Error'
        })
    }
}
 