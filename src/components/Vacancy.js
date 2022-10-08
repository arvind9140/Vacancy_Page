import React, { useState } from 'react'
import '../App.css'
import { db } from '../firebase'
const Vacancy = () => {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phonenumber, setPhoneNuber] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("");
    const [parentname, setParentName] = useState("");
    const [parentcontact, setParentContact] = useState("");
    const [collegename, setCollegeName] = useState("");
    const [degree, setDegree] = useState("");
    const [majorfield, setMajorField] = useState("");
    const [graduation, setGraduation] = useState("");
    const [year, setYear] = useState("");
    const [companyname, setCompanyName] = useState("");
    const [roll, setRoll] = useState("");
    const [skills, setSkills] = useState("");
    const [github, setGitHub] = useState("");
    const [linkedin, setLinkedIn] = useState("");
    const [codingProfile, setCodingProfile] = useState("");
    const [resume, setResume] = useState("");
    const [addtionaldetails, setAdditionalDetails] = useState("");

    const [loader, setLoader] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault();

        db.collection('Vacancy').add({
            name:name,
            email:email,
            phonenumber:phonenumber,
            address:address,
             gender:gender,
             parentName:parentname,
             parentcontact:parentcontact,
             collegename:collegename,
             degree:degree,
             majorfield:majorfield,
             graduation:graduation,
             Experiance:year,
             companyname:companyname,
             roll:roll,
             github:github,
             linkedin:linkedin,
             CodingProfile:codingProfile,

             skills:skills,
             resume:resume,
             AdditionalDetails:addtionaldetails,

        })
        .then (() => {
            alert("Your Form has been submitted 👍")
        })
        .catch(error => {
            alert(error.massage);
            setLoader(false);
        });
        setName('')
        setEmail('')
        setPhoneNuber('')
        setAddress('')
        setGender('')
        setParentName('')
        setParentContact('')
        setCollegeName('')
        setDegree('')
        setMajorField('')
        setGraduation('')
        setYear('')
        setCompanyName('')
        setRoll('')
        setSkills('')
        setGitHub('')
        setLinkedIn('')
        setCodingProfile('')
        setResume('')
        setAdditionalDetails
        ('')
        
    };


  return (
    <form className='form'onSubmit={handleSubmit}>
        <h1>Vacancy Page</h1>

        <h2>Personal Details</h2>
        <label> Full Name</label>
        <input placeholder='name' 
        value={name} onChange={(e) => setName(e.target.value)} />

        <label>Email</label>
        <input placeholder='Email'
         value={email} onChange={(e) => setEmail(e.target.value)} />


        <label>Phone Number</label>
        <input placeholder='Phone Number'
        value={phonenumber} onChange={(e) => setPhoneNuber(e.target.value)} />

        <label>Address</label>
        <input placeholder='Address'
         value={address} onChange={(e) => setAddress(e.target.value)} />

        <label>Gender</label>
        <input placeholder='Gender'
         value={gender} onChange={(e) => setGender(e.target.value)} />

        <label>Parent's Name</label>
        <input placeholder="Parent's Name"
         value={parentname} onChange={(e) => setParentName(e.target.value)} />

        <label >Parent's Contact Number</label>
        <input placeholder="Parent's Contact Nmuber" 
        value={parentcontact} onChange={(e) => setParentContact(e.target.value)} />

<h2 >Education Details</h2>

<label> College Name</label>
        <input placeholder=' college name' 
        value={collegename} onChange={(e) => setCollegeName(e.target.value)} />

        <label>Degree</label>
        <input placeholder='Degree'
         value={degree} onChange={(e) => setDegree(e.target.value)} />


        <label>Major Field </label>
        <input placeholder='major Field'
        value={majorfield} onChange={(e) => setMajorField(e.target.value)} />

        <label>Year of graduation </label>
        <input placeholder='yyyy'
         value={graduation} onChange={(e) => setGraduation(e.target.value)} />

         
<h2 >Work Experiance</h2>

<label> year Of Experiance</label>
        <input placeholder=' No. of Year' 
        value={year} onChange={(e) => setYear(e.target.value)} />

        <label>Company Name</label>
        <input placeholder='Company Name'
         value={companyname} onChange={(e) => setCompanyName(e.target.value)} />


        <label>Roll</label>
        <input placeholder='Roll'
        value={roll} onChange={(e) => setRoll(e.target.value)} />

       

<h2 >Skills</h2>
            <label>Skills</label>
      <textarea
        placeholder="  Please Enter Your Skills"
        value={skills }
        onChange={(e) => setSkills(e.target.value)}
      ></textarea>
        
        <h2 >Links</h2>

<label> Github</label>
        <input placeholder="Github Link" 
        value={github} onChange={(e) => setGitHub(e.target.value)} />

        <label>LinkedIn</label>
        <input placeholder='LinkedIn Link'
         value={linkedin} onChange={(e) => setLinkedIn(e.target.value)} />


        <label>Coding Profile </label>
        <input placeholder='Coding Profile Link like as codechef or leetcode'
        value={codingProfile} onChange={(e) => setCodingProfile(e.target.value)} />
          
<h2 >Resume</h2>

<label> Resume</label>
        <input placeholder="Resume Link" 
        value={resume} onChange={(e) => setResume(e.target.value)} />
        Drive Or DropBox link put in resume .

       
        <h2 >Additional Details</h2>
            <label></label>
      <textarea
        placeholder="  Please Enter Your Additional Details"
        value={addtionaldetails}
        onChange={(e) => setAdditionalDetails(e.target.value)}
      ></textarea>


        <button
        type="submit"
        style={{ background: loader ? "rgb(174, 174, 192)" : " rgb(2, 2, 110)" }}
      >
        Submit
      </button>

        
       





    </form>
  )
}

export default Vacancy