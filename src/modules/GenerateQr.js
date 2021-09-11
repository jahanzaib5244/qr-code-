
import React  from 'react'
import {Form, Button} from 'react-bootstrap'
import { useState } from 'react';
import QRCode from 'qrcode';
import QrReader from 'react-qr-reader';


export default function GenerateQr () {
    
    const [firstname, setfirstname] = useState('')
    const [lastname, setlastname] = useState('')
    const [fathername, setfathername] = useState('')
    const [email, setemail] = useState('')
    const [adress, setadress] = useState('')
    const [phone, setphone] = useState('')
    const [imageurl, setimageurl] = useState('')
    
    const [scanresult, setscanresult] = useState('')
    const data=['First Name:',firstname,'Last Name :',lastname,'Father Name:',fathername,'Email :',email,'Adress :',adress,'Phone:',phone]
   
      
    console.log('First Name:',firstname,'  ','Last Name :',lastname,'Father Name:',fathername,'Email :',email,'Adress :',adress,'Phone:',phone)
   
     console.log(data)
     
         const alldata=data.join('')
     
     console.log(alldata)
        
         const generateqr=async()=>{
          try {
              
              const responce=await QRCode.toDataURL(alldata)
              setimageurl(responce)
          } catch (error) {
              console.log(error)
          }
         
         }
           
           const webscan=(result)=>{
               if(result){
                setscanresult(result)
               }
           }
           const scanerror=(error)=>{
               console.log(error)

           }
    return (
        <>
         <div  >
             <div className='container'>
                 <div className='row '>
                
                     <div className='col-md-4 col-10 mx-auto my-1 '>
                     <div className=' text-center' >
                         <h1 >User Information</h1>
                         <hr className='w-18 mx-auto' />
                     </div>
                         
                         
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
                    
                     <div className='col-md-4 col-10 mx-auto my-1 '>
                     <div className=' text-center' >
                         <h1 >QR CODE</h1>
                         <hr className='w-20 mx-auto' />
                     </div >
                     <div className='text-center '>
                         {imageurl ? (<a href={imageurl} download><img style={{height:250}} src={imageurl} alt='qr code image'/></a> ) : null}
                         </div>
                         <div>
                         <QrReader
                           delay={300}
                           onScan={webscan}
                           onError={scanerror}

                         />
                         <h3>{scanresult}</h3>
                         </div>
                     </div>
                 </div>
     
             </div>
             </div>
             <div>
            
             </div>
             <div>
                
             </div>
             </>
     )

}