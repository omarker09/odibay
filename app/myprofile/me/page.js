"use client"
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Cookies from 'js-cookie';
import Image from "next/image";
import Footer from '@/components/footer';
import avatartest from '../../../public/avatars/avatar-03.png'
import Bottomtabs from '@/components/bottomtabs';
import { useRouter } from 'next/navigation';
import Link from "next/link";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CircularProgress from '@mui/material/CircularProgress';
import axios from "axios";
import GppBadIcon from '@mui/icons-material/GppBad';
import { errorsLang } from "@/language_config";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Lottie from "lottie-react";
import SentAnim from "../../../public/animation/SentAnim.json"
function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function SignIn() {
    const [dataUser, setDataUser] = useState([])
    const [value, setValue] = React.useState(0);
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [loading, setLoading] = useState(false)
    const [loading2, setLoading2] = useState(false)
    const [hideEye, setHideEye] = useState(false)
    const [errorType, setErrorType] = useState("")
    const [seccType, setSeccType] = useState("")
    const [errorType2, setErrorType2] = useState("")
    const [seccType2, setSeccType2] = useState("")
    const [emailStorage, setEmailStorage] = useState("")
    const [user_id, setUserid] = useState()
    const [token, setToken] = useState("")
    //adress info states
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [addressLine1, setaddressLine1] = useState("")
    const [addressLine2, setaddressLine2] = useState("")
    const [city, setCity] = useState("")
    const [stateProvinceRegion, setstateProvinceRegion] = useState("")
    const [zipCode, setZipcode] = useState("")
    const [country, setCountry] = useState("")
    const [turnOnAnim, setTurnOnAnim] = useState(false)
    const router = useRouter()
    
    async function SaveBilBillAddressServer() {
        
        setLoading2(true)
        const collection = {
            email: email,
            user_id: user_id,
            first_name: firstName,
            last_name: lastName,
            address_line_1: addressLine1,
            address_line_2: addressLine2,
            city: city,
            state_province_region: stateProvinceRegion,
            country: country,
            zip_code: zipCode
        }
        const StringIt = JSON.stringify(collection)
        if (firstName === "" || lastName === "" || addressLine1 === "" || city === "" || zipCode === "" || country === "") {
            setErrorType2("theis are required")
            setLoading2(false)
            setSeccType2("")
        } else {
            localStorage.setItem("u_billing", StringIt)
            axios.post("http://localhost:3002/api/v1/auth/usr/inf/addrr", {
                email: email,
                user_id: user_id,
                first_name: firstName,
                last_name: lastName,
                address_line_1: addressLine1,
                address_line_2: addressLine2,
                city: city,
                state_province_region: stateProvinceRegion,
                country: country,
                zip_code: zipCode
            }, {
                headers: {
                    "Authorization": 'Bearer ' + token
                }
            })
                .then((res) => {
                    setSeccType2("Billing address has been saved !! ")
                    setErrorType2("")
                    setLoading2(false)
                    setTurnOnAnim(true)
                    setTimeout(() => {
                        setTurnOnAnim(false)
                    }, 4300)
                })
                .catch((err) => {
                    setSeccType2("")
                    setErrorType2(err.response.data)
                    setLoading2(false)
                })
        }
    }

    function getUserDataStorage() {
        const data = localStorage.getItem("u_inf")
        const toJson = JSON.parse(data)
        setEmail(toJson[0].email)
        setUsername(toJson[0].username)
        setUserid(toJson[0].user_id)
        const dataBilling = localStorage.getItem("u_billing")
        const dataBillingJson = JSON.parse(dataBilling)
        setstateProvinceRegion(dataBillingJson.state_province_region)
        setaddressLine1(dataBillingJson.address_line_1)
        setaddressLine2(dataBillingJson.address_line_2)
        setFirstName(dataBillingJson.first_name)
        setLastName(dataBillingJson.last_name)
        setCountry(dataBillingJson.country)
        setZipcode(dataBillingJson.zip_code)
        setCity(dataBillingJson.city)
    }
  /*
    function getCookie(name) {
        var cname = name + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(cname) == 0) {
                return c.substring(cname.length, c.length);
            }
        }
        return "";
    }
    
  */
    useEffect(() => {
        getUserDataStorage()
        setToken(Cookies.get("u_tk"))
         if (Cookies.get("u_tk")) {
            axios.post("http://localhost:3002/api/v1/auth/usr/cltk", {
                email: email
            }, {
                headers: {
                    "Authorization": 'Bearer ' + token
                }
            })
            .then((res) => {
                console.log(res.data);

            })
            .catch((err) => {
                console.log(err.response.status);
                if (err.response.status === 403) {
                    router.push("/login")
                } else {
                    alert("200")
                }
            })
        } else if (!Cookies.get("u_tk") || Cookies.get("u_tk") === "") {
            
        }
    }, [token])
    const handleChange = (event, newValue) => {
        setValue(newValue);
        
    };
    return (
        <div>
            {!Cookies.get("u_tk") || Cookies.get("u_tk") === "" ? <div>
                
            </div> :        <div className=' flex w-full flex-col justify-between h-auto'>
            <Navbar />
             <div className=' bg-slate-100 w-full px-2 sm:px-10 gap-6  flex flex-col lg:flex-row py-10 items-start justify-center'>
                <div className=' shadow-2xl bg-white w-full lg:w-96 p-4 gap-y-4 flex flex-col items-center justify-center'>
                    <div className=' w-full text-center'>
                        <h1> {username} </h1>
                    </div>
                    <div className=' w-full flex gap-y-3 items-center justify-center flex-col'>
                        <Image
                            src={avatartest}
                            height={100}
                            width={100}
                            className=' rounded-full'
                        />
                        <div>
                            <button className=' bg-orange-500 py-2 rounded-md px-4 text-white'>Change Avatar</button>
                        </div>
                    </div>
                    <Divider style={{ height: 1 }} className='  w-full bg-gray-100' light />
                    <div>
                        <span>Member Since September 09 203</span>
                    </div>
                </div>
                <div className=' h-auto bg-white shadow-2xl w-full'>
                    <Box sx={{ width: '100%', height: "auto" }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="Profile Settings" {...a11yProps(2)} />
                                <Tab label="Billing & Address" {...a11yProps(1)} />
                            </Tabs>
                        </Box>
                        <CustomTabPanel style={{ height: "auto" }} value={value} index={0}>
                            <div className=" bg-white flex flex-col justify-between gap-y-5 w-full p-2 h-full sm:h-auto">
                                <div className={errorType === "" ? "hidden" : " w-full rounded-md flex items-center justify-start px-3  outline outline-1 bg-red-100 outline-red-300"}>
                                    <div className=" h-full flex items-center justify-center gap-x-3 py-3">
                                        <GppBadIcon color="red" className=" text-red-500 text-xl" />
                                        <span className=" text-red-500 text-base">{errorType}</span>
                                    </div>
                                </div>
                                <div className={seccType === "" ? "hidden" : " w-full rounded-md flex items-center justify-start px-3  outline outline-1 bg-green-200 outline-green-500"}>
                                    <div className=" h-full flex items-center justify-center gap-x-3 py-3">
                                        <CheckCircleOutlineIcon color="white" className=" text-green-500 text-xl" />
                                        <span className=" text-green-500 text-base">{seccType}</span>
                                    </div>
                                </div>
                                <div className=" flex flex-col gap-y-4 w-full">
                                    <div className=" flex flex-col gap-y-3 w-full">
                                        <label>Username</label>
                                        <input value={username} onChange={(e) => { setUsername(e.target.value) }} className=" p-3 border-none outline outline-1  outline-gray-300 rounded-md" type="text" placeholder="Your email address" />
                                    </div>
                                    <div className=" flex flex-col gap-y-3 w-full">
                                        <label>Email</label>
                                        <input readOnly value={email} onChange={(e) => { setEmail(e.target.value) }} className=" p-3 border-none cursor-not-allowed outline outline-1  outline-gray-300 rounded-md" type="text" placeholder="Your email address" />
                                    </div>
                                    <div className=" flex flex-col gap-y-3 w-full">
                                        <div className=" w-full flex items-center justify-between">
                                            <label>Password</label>
                                        </div>
                                        <div className=' w-full flex flex-col sm:flex-row justify-between gap-6 items-center'>
                                            <div className="outline outline-1 w-full px-3 flex focus:focus:outline-gray-700 justify-between items-center outline-gray-300 rounded-md">
                                                <input value={password} onChange={(e) => { setPassword(e.target.value) }} className=" py-3 border-none outline-none  w-full" type={hideEye ? "text" : "password"} placeholder="Current password" />
                                                <span onClick={() => { hideEye ? setHideEye(false) : setHideEye(true) }}>
                                                    {hideEye === true ? <VisibilityOffIcon style={{ fontSize: 20, cursor: "pointer" }} /> : <VisibilityIcon style={{ fontSize: 20, cursor: "pointer" }} />}
                                                </span>
                                            </div>
                                            <div className="outline outline-1 w-full px-3 flex focus:focus:outline-gray-700 justify-between items-center outline-gray-300 rounded-md">
                                                <input value={password} onChange={(e) => { setPassword(e.target.value) }} className=" py-3 border-none outline-none  w-full" type={hideEye ? "text" : "password"} placeholder="New password" />
                                                <span onClick={() => { hideEye ? setHideEye(false) : setHideEye(true) }}>
                                                    {hideEye === true ? <VisibilityOffIcon style={{ fontSize: 20, cursor: "pointer" }} /> : <VisibilityIcon style={{ fontSize: 20, cursor: "pointer" }} />}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="w-full flex items-center">

                                    <button onClick={() => { handleTest() }} className="w-40 p-3 bg-black  flex items-center justify-center gap-x-2 text-white">
                                        {loading ? <CircularProgress className=" text-white font-extrabold" size={20} /> : <span style={{ fontSize: 15 }} className=" text-white ">Save</span>}
                                    </button>
                                </div>
                            </div>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                            <div className={errorType2 === "" ? "hidden" : " w-full rounded-md flex items-center justify-start px-4  outline outline-1 bg-red-100 outline-red-300"}>
                                <div className=" h-full flex items-center justify-center gap-x-3 py-3">
                                    <GppBadIcon color="red" className=" text-red-500 text-xl" />
                                    <span className=" text-red-500 text-base">{errorType2}</span>
                                </div>
                            </div>
                            <div className=' w-full pb-4 flex items-center justify-center'>
                                <div className={seccType2 === "" ? "hidden" : " w-full rounded-md flex items-center justify-start px-4  outline outline-1 bg-green-200 outline-green-500"}>
                                    <div className=" h-full flex items-center justify-center gap-x-3 py-3">
                                        <CheckCircleOutlineIcon color="white" className=" text-green-500 text-xl" />
                                        <span className=" text-green-500 text-base">{seccType2}</span>
                                    </div>
                                </div>
                            </div>
                            <Grid container className=' w-full p-2' spacing={3}>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="firstName"
                                        name="firstName"
                                        label="First name"
                                        onChange={(e) => { setFirstName(e.target.value) }}
                                        value={firstName}
                                        type="text"

                                        fullWidth
                                        autoComplete="given-name"
                                        variant="standard"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="lastName"
                                        name="lastName"
                                        label="Last name"
                                        value={lastName}
                                        onChange={(e) => { setLastName(e.target.value) }}
                                        fullWidth
                                        autoComplete="family-name"
                                        variant="standard"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        id="address1"
                                        name="address1"
                                        label="Address line 1"
                                        value={addressLine1}
                                        onChange={(e) => { setaddressLine1(e.target.value) }}
                                        fullWidth
                                        autoComplete="shipping address-line1"
                                        variant="standard"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="address2"
                                        name="address2"
                                        label="Address line 2"
                                        value={addressLine2}
                                        fullWidth
                                        onChange={(e) => { setaddressLine2(e.target.value) }}
                                        autoComplete="shipping address-line2"
                                        variant="standard"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="city"
                                        name="city"
                                        label="City"
                                        value={city}
                                        onChange={(e) => { setCity(e.target.value) }}
                                        fullWidth
                                        autoComplete="shipping address-level2"
                                        variant="standard"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id="state"
                                        name="state"
                                        label="State/Province/Region"
                                        value={stateProvinceRegion}
                                        onChange={(e) => { setstateProvinceRegion(e.target.value) }}
                                        fullWidth
                                        variant="standard"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="zip"
                                        name="zip"
                                        label="Zip / Postal code"
                                        onChange={(e) => { setZipcode(e.target.value) }}
                                        fullWidth
                                        value={zipCode}
                                        autoComplete="shipping postal-code"
                                        variant="standard"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="country"
                                        name="country"
                                        label="Country"
                                        value={country}
                                        onChange={(e) => { setCountry(e.target.value) }}
                                        fullWidth
                                        autoComplete="shipping country"
                                        variant="standard"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                                        label="Use this address for payment details"
                                    />
                                </Grid>
                            </Grid>
                            <div className="w-full flex items-center">

                                <button onClick={() => { SaveBilBillAddressServer() }} className="w-40 p-2 bg-black  flex items-center justify-center gap-x-2 text-white">
                                    {loading2 ? <CircularProgress className=" text-white font-extrabold" size={20} /> : <span style={{ fontSize: 15 }} className=" text-white ">Save</span>}
                                </button>
                                <div className=' w-full h-10 flex items-center justify-start'>
                                    <Lottie className={turnOnAnim ? ' h-40 w-40' : "hidden"} size={10} animationData={SentAnim} autoPlay={turnOnAnim ? true : false} loop={turnOnAnim ? true : false} />
                                </div>
                            </div>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={2}>
                            Item Three
                        </CustomTabPanel>
                    </Box>
                </div>
            </div>
            <Footer />
            <Bottomtabs />
        </div>}
        </div>
    );
}