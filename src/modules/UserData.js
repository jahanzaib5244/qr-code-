import React  from 'react'
import {Form, Button} from 'react-bootstrap'
import { useState } from 'react';
import QRCode from "react-qr-code";

export default function UserData() {
    
    const [firstname, setfirstname] = useState('')
    const [lastname, setlastname] = useState('')
    const [fathername, setfathername] = useState('')
    const [email, setemail] = useState('')
    const [adress, setadress] = useState('')
    const [phone, setphone] = useState('')
    const [qrstate, setqrstate] = useState(false)
    const data=[firstname,lastname,fathername,email,adress,phone]
   
      
    console.log(firstname,lastname,fathername,email,adress,phone)
   
     console.log(data)
     
         const alldata=data.join('     ')
     
     console.log(alldata)
         const [qrdata, setqrdata] = useState('')
         const generateqr=()=>{

            setqrdata(alldata)
            setqrstate(true)
         }
    return (
       <>
        <div style={qrstate ? { display:'none'} : {display : ''}} >
            <div className='container'>
                <div className='row '>
                <div className=' text-center my-4' >
                        <h1 >User Information</h1>
                        <hr className='w-25 mx-auto' />
                    </div>
                    <div className='col-md-6 col-10 mx-auto my-5 '>
                        
                        
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control onChange={(e)=> setfirstname(e.target.value) } type="text" placeholder="Enter First Name" />
                                
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control  type="text" onChange={(e)=> setlastname(e.target.value) }  placeholder="Enter Last Name" />
                               
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Father Name</Form.Label>
                                <Form.Control type="text" onChange={(e)=> setfathername(e.target.value) } placeholder="Enter Father Name" />
                              
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control  onChange={(e)=> setemail(e.target.value) } placeholder="Enter email" />
                                
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Street Adress</Form.Label>
                                <Form.Control type="text"  onChange={(e)=> setadress(e.target.value) }  placeholder="Enter Adress" />
                                
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Enter Phone </Form.Label>
                                <Form.Control  type="text"  onChange={(e)=> setphone(e.target.value) }  placeholder="Enter Phone" />
                                
                            </Form.Group>

                            
                            
                            
                            

                            
                            <Button onClick={generateqr} variant="primary" >
                                Generate QR Code
                            </Button>
                            
                            
                    </div>
                </div>
    
            </div>
            </div>
            <div style={qrstate ? { display:''} : {display : 'none'}}>
            <div className='container'>
                <div className='row '>
                <div className=' text-center my-4' >
                        <h1 >QR CODE</h1>
                        <hr className='w-25 mx-auto' />
                    </div>
                    <div className='col-md-3 col-10 mx-auto my-5 '>
                    <QRCode value={qrdata}/>
                    </div>
            
            </div>
            </div>
            </div>
            </>
    )
}
