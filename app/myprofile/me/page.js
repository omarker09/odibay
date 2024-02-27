"use client"

// application error: a client-side exception has occurred (see the browser console for more information). bug 
// maybe here
// notice the bug has been fixed because you did not set a ? in getBillingData json if you access directly without it it will threw and error

import React, { useState, useEffect } from 'react';
import { avatars } from '@/public/imgs/avatar-path';
import Navbar from '@/components/Navbar';
import Cookies from 'js-cookie';
import Image from "next/image";
import Footer from '@/components/footer';
import CustomizedTooltips from '@/components/muicomponent/tooltip';
import avatartest1 from '../../../public/avatars/avatar-01.png'
import avatartest2 from '../../../public/avatars/avatar-02.png'
import avatartest3 from '../../../public/avatars/avatar-03.png'
import avatartest4 from '../../../public/avatars/avatar-04.png'
import avatartest5 from '../../../public/avatars/avatar-05.png'
import avatartest6 from '../../../public/avatars/avatar-06.png'

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
import Modal from '@mui/material/Modal';
import nouser_image from "../../../public/avatars/no_user.jpg"

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
    const [password2, setPassword2] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [loading, setLoading] = useState(false)
    const [loading2, setLoading2] = useState(false)
    const [hideEye, setHideEye] = useState(false)
    const [hideEye2, setHideEye2] = useState(false)
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
    const [zipCode, setZipcode] = useState()
    const [country, setCountry] = useState("")
    const [turnOnAnim, setTurnOnAnim] = useState(false)
    const router = useRouter()
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen(false);
    const [avatarPath, setAvatarPath] = useState("")
    const [tempavatarPath, settempavatarPath] = useState("")
    const [createdAt, setCreatedAt] = useState("")

    // toggle avatars

    const [avat1, setAvat1] = useState(false)
    const [avat1Path, setAvat1Path] = useState("")

    const [avat2, setAvat2] = useState(false)
    const [avat2Path, setAvat2Path] = useState("")

    const [avat3, setAvat3] = useState(false)
    const [avat3Path, setAvat3Path] = useState("false")

    const [avat4, setAvat4] = useState(false)
    const [avat4Path, setAvat4Path] = useState("")

    const [avat5, setAvat5] = useState(false)
    const [avat5Path, setAvat5Path] = useState("false")

    const [avat6, setAvat6] = useState(false)
    const [avat6Path, setAvat6Path] = useState("false")


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
                zip_code: parseInt(zipCode)
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
                    console.log(err.response);
                    setErrorType2(err.response.data)
                    setLoading2(false)
                })
        }
    }

    function getUserDataStorage() {
        // Retrieve user information from local storage
        const userData = localStorage.getItem("u_inf");

        // Check if "u_inf" key exists in local storage
        if (userData) {
            try {
                // Parse the JSON data obtained from local storage
                const userDataJson = JSON.parse(userData);

                // Check if the expected properties exist in the parsed data
                if (Array.isArray(userDataJson) && userDataJson.length > 0) {
                    setEmail(userDataJson[0].email);
                    setUsername(userDataJson[0].username);
                    setUserid(userDataJson[0].user_id);

                    const originalDateTimeString = userDataJson[0].created_at
                    const originalDate = new Date(originalDateTimeString);
                    // Formatting options
                    const options = {
                        day: "numeric",
                        month: "long",
                        year: "numeric"
                    };

                    // Formatted date
                    const formattedDate = originalDate.toLocaleDateString("en-US", options);
                    setCreatedAt(formattedDate)
                } else {
                }
            } catch (error) {
            }
        } else {
        }

        // Retrieve billing information from local storage
        const billingData = localStorage.getItem("u_billing");

        // Check if "u_billing" key exists in local storage
        if (billingData) {
            try {
                // Parse the JSON data obtained from local storage
                const billingDataJson = JSON.parse(billingData);

                // Set state variables based on the parsed billing data
                setstateProvinceRegion(billingDataJson?.state_province_region);
                setaddressLine1(billingDataJson?.address_line_1);
                setaddressLine2(billingDataJson?.address_line_2);
                setFirstName(billingDataJson?.first_name);
                setLastName(billingDataJson?.last_name);
                setCountry(billingDataJson?.country);
                setZipcode(billingDataJson?.zip_code);
                setCity(billingDataJson?.city);
            } catch (error) {
            }
        } else {
        }
    }
    async function getAvatar() {
        let email_str;
        let user_id_str;
        let token = Cookies.get("u_tk");

        try {
            let storageMail = localStorage.getItem("u_inf");
            let storageMailJson = JSON.parse(storageMail);
            email_str = storageMailJson[0].email;
            user_id_str = storageMailJson[0].user_id;
        } catch (error) {
        }

        axios.post("http://localhost:3002/api/v1/auth/usr/avats", {
            email: email_str,
            user_id: user_id_str
        }, {
            headers: {
                "Authorization": 'Bearer ' + token
            }
        }).then((resp) => {
            setAvatarPath(resp.data[0]?.avatar_path);
        }).catch((err) => {
        });
    }
    function getUserBilling() {
        let email_str;
        let user_id_str;
        let token = Cookies.get("u_tk");

        try {
            let storageMail = localStorage.getItem("u_inf");
            let storageMailJson = JSON.parse(storageMail);
            email_str = storageMailJson[0].email;
            user_id_str = storageMailJson[0].user_id;
        } catch (error) {
        }
        axios.post("http://localhost:3002/api/v1/auth/usr/inf/address", {
            email: email_str,
            user_id: user_id_str
        }, {
            headers: {
                "Authorization": 'Bearer ' + token
            }
        }).then((resp) => {
            const respData = resp.data.address
            const respDataString = JSON.stringify(respData)
            localStorage.setItem("u_billing", respDataString)
        }).catch((err) => {
        });
    }
    useEffect(() => {
        getAvatar();
        const emSt = localStorage.getItem("u_billing");
        const u_inf = localStorage.getItem("u_inf");
        if (!emSt) {
            getUserBilling()
        }
        if (!u_inf) {
            Cookies.remove("u_tk")
        }
    }, []);
    useEffect(() => {
        // Get token from cookies
        const token = Cookies.get("u_tk");
        if (!token || token === "") {
            router.replace("/login")
        }
        setToken(token);
        getUserDataStorage()
        // Get user data from local storage
        const emSt = localStorage.getItem("u_inf");

        // Check if "u_inf" key exists in local storage
        if (!emSt) {
            // If "u_inf" key is not found, redirect to the login page
        } else {
            try {
                // Parse the JSON data obtained from local storage
                const tbg = JSON.parse(emSt);

                // Check if the expected properties exist in the parsed data
                if (Array.isArray(tbg) && tbg.length > 0) {
                    const gl = tbg[0]?.email;

                    // Make API call using the email and token
                    axios.post("http://localhost:3002/api/v1/auth/usr/cltk", {
                        email: gl
                    }, {
                        headers: {
                            "Authorization": 'Bearer ' + token
                        }
                    })
                        .then((res) => {

                            // Handle successful API response
                        })
                        .catch((err) => {
                            if (err.response.status === 403) {
                                // If the response status is 403, redirect to the login page
                                router.replace("/login");
                            } else {
                                // Handle other error cases
                            }
                        });
                } else {
                    // Handle the case where the expected properties are not present
                }
            } catch (error) {
                // Handle JSON parsing error
                console.error("Error parsing 'u_inf' data:", error);
            }
        }

    }, [token]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    async function updateAvatar() {
        let email_str;
        let user_id_str;
        let token = Cookies.get("u_tk")
        try {
            let storageMail = localStorage.getItem("u_inf")
            let storageMailJson = JSON.parse(storageMail)
            email_str = storageMailJson[0].email
            user_id_str = storageMailJson[0].user_id
        } catch {
            console.error("error");
        }

        // we stopped here you should send the avatar path make you sure you check if it empty
        axios.post("http://localhost:3002/api/v1/auth/usr/avats/update", {
            email: email_str,
            user_id: user_id_str,
            avatar_path: tempavatarPath
        }, {
            headers: {
                "Authorization": 'Bearer ' + Cookies.get("u_tk")
            }
        }).then((resp) => {
            setOpen2(false)
            setAvatarPath(tempavatarPath)
        })
            .catch((err) => {
                console.log(err);
            })
    }
    function handleChangePwd() {
        if (!password || !password2) {
            setErrorType("password Not provided")
        }
        else {
            let email_str;
            let user_id_str;
            let token = Cookies.get("u_tk")
            try {
                let storageMail = localStorage.getItem("u_inf")
                let storageMailJson = JSON.parse(storageMail)
                email_str = storageMailJson[0].email
                user_id_str = storageMailJson[0].user_id
            } catch {
                console.error("error");
            }
            axios.post("http://localhost:3002/api/v1/auth/usr/inf/update", {
                email: email_str,
                user_id: user_id_str,
                username: username,
                current_password: password,
                new_password: password2
            }, {
                headers: {
                    "Authorization": 'Bearer ' + Cookies.get("u_tk")
                }
            }).then((resp) => {
             setErrorType("")
             setSeccType(resp.data.message)
            })
                .catch((err) => {
                    setErrorType(err.response.data.message)
                    setSeccType("")
                })
        }
    }
    return (
        <div>
            {!token || token === "" ? <div>
            </div> : <div className=' flex w-full flex-col justify-between h-auto'>
                <Navbar />
                <div className=' bg-slate-100 w-full px-2 sm:px-10 gap-6  flex flex-col lg:flex-row py-10 items-start justify-center'>
                    <div className=' shadow-2xl rounded-xl bg-white w-full lg:w-96 p-4 gap-y-4 flex flex-col items-center justify-center'>
                        <div className=' w-full text-center'>
                            <h1> {username} </h1>
                        </div>
                        <div className=' w-full flex gap-y-3 items-center justify-center flex-col'>
                            <Image
                                src={!avatarPath ? nouser_image : avatarPath}
                                height={100}
                                width={100}
                                className=' rounded-full outline outline-1 outline-gray-300'
                            />
                            <div>
                                <button onClick={() => { handleOpen2() }} className=' bg-orange-500 py-2 rounded-md px-4 text-white'>Change Avatar</button>
                            </div>
                        </div>
                        <Divider style={{ height: 1 }} className='  w-full bg-gray-100' light />
                        <div>
                            <span>Member Since : {createdAt}</span>
                        </div>
                    </div>
                    <div className=' h-auto bg-white rounded-xl shadow-2xl w-full'>
                        <Box sx={{ width: '100%', height: "auto" }}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                    <Tab label="Billing & Address" {...a11yProps(1)} />
                                    <Tab label="Profile Settings" {...a11yProps(2)} />

                                </Tabs>
                            </Box>

                            <CustomTabPanel value={value} index={0}>
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
                                            type='number'
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

                                    <button onClick={() => { SaveBilBillAddressServer() }} className="w-40 p-2 bg-black rounded-lg  flex items-center justify-center gap-x-2 text-white">
                                        {loading2 ? <CircularProgress className=" text-white font-extrabold" size={20} /> : <span style={{ fontSize: 15 }} className=" text-white ">Save</span>}
                                    </button>
                                    <div className=' w-full h-10 flex items-center justify-start'>
                                        <Lottie className={turnOnAnim ? ' h-40 w-40' : "hidden"} size={10} animationData={SentAnim} autoPlay={turnOnAnim ? true : false} loop={turnOnAnim ? true : false} />
                                    </div>
                                </div>
                            </CustomTabPanel>
                            <CustomTabPanel style={{ height: "auto" }} value={value} index={1}>
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
                                            <input readOnly value={username} onChange={(e) => { setUsername(e.target.value) }} className=" p-3 border-none outline outline-1 cursor-not-allowed  bg-gray-200  outline-gray-300 rounded-md" type="text" placeholder="Your email address" />
                                        </div>
                                        <div className=" flex flex-col gap-y-3 w-full">
                                            <label>Email</label>
                                            <input readOnly value={email} onChange={(e) => { setEmail(e.target.value) }} className=" p-3 border-none cursor-not-allowed outline outline-1  outline-gray-300 rounded-md bg-gray-200" type="text" placeholder="Your email address" />
                                        </div>
                                        <div className=" flex flex-col gap-y-3 w-full">
                                            <div className=" w-full flex items-center gap-3 justify-start">
                                                <label>Change Password</label>
                                                <CustomizedTooltips />
                                            </div>
                                            <div className=' w-full flex flex-col sm:flex-row justify-between gap-6 items-center'>
                                                <div className="outline outline-1 w-full px-3 flex focus:focus:outline-gray-700 justify-between items-center outline-gray-300 rounded-md">
                                                    <input value={password} onChange={(e) => { setPassword(e.target.value) }} className=" py-3 border-none outline-none  w-full" type={hideEye ? "text" : "password"} placeholder="Current password" />
                                                    <span onClick={() => { hideEye ? setHideEye(false) : setHideEye(true) }}>
                                                        {hideEye === true ? <VisibilityOffIcon style={{ fontSize: 20, cursor: "pointer" }} /> : <VisibilityIcon style={{ fontSize: 20, cursor: "pointer" }} />}
                                                    </span>
                                                </div>
                                                <div className="outline outline-1 w-full px-3 flex focus:focus:outline-gray-700 justify-between items-center outline-gray-300 rounded-md">
                                                    <input value={password2} onChange={(e) => { setPassword2(e.target.value) }} className=" py-3 border-none outline-none  w-full" type={hideEye2 ? "text" : "password"} placeholder="New password" />
                                                    <span onClick={() => { hideEye2 ? setHideEye2(false) : setHideEye2(true) }}>
                                                        {hideEye2 === true ? <VisibilityOffIcon style={{ fontSize: 20, cursor: "pointer" }} /> : <VisibilityIcon style={{ fontSize: 20, cursor: "pointer" }} />}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full flex items-center">
                                        <button onClick={() => { handleChangePwd() }} className="w-40 p-3 bg-black rounded-lg  flex items-center justify-center gap-x-2 text-white">
                                            {loading ? <CircularProgress className=" text-white font-extrabold" size={20} /> : <span style={{ fontSize: 15 }} className=" text-white ">Save</span>}
                                        </button>
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
            <Modal
                open={open2}
                onClose={handleClose2}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <div className=" w-full px-5  sm:px-5  h-full bg-transparent flex  items-center justify-center">
                    <div style={{ width: 900 }} className=" h-auto nav-background flex items-center flex-col justify-between px-5 rounded-xl gap-y-10 py-10 ">
                        <h1 className=" text-white text-center w-full">Choose you own avatar</h1>
                        <div className='  w-full items-center justify-center h-full grid grid-cols-3 sm:grid-cols-4 gap-5'>
                            <div className=' flex items-center justify-center '>
                                <Image
                                    src={avatartest1}
                                    height={100}
                                    width={100}
                                    onClick={() => {
                                        settempavatarPath(avatars.avatar_1)
                                        setAvat1(true)
                                        setAvat2(false)
                                        setAvat3(false)
                                        setAvat4(false)
                                        setAvat5(false)
                                        setAvat6(false)
                                    }}
                                    className={avat1 ? ' border-3 border-transparent outline outline-1 outline-orange-400 rounded-full cursor-pointer' : ' rounded-full cursor-pointer'}
                                />
                            </div>
                            <div className='flex items-center justify-center '>
                                <Image
                                    src={avatartest2}
                                    height={100}
                                    width={100}
                                    onClick={() => {
                                        settempavatarPath(avatars.avatar_2)
                                        setAvat1(false)
                                        setAvat2(true)
                                        setAvat3(false)
                                        setAvat4(false)
                                        setAvat5(false)
                                        setAvat6(false)
                                    }}
                                    className={avat2 ? ' border-3 border-transparent outline outline-1 outline-orange-400 rounded-full cursor-pointer' : ' rounded-full cursor-pointer'}
                                />
                            </div>
                            <div className='flex items-center justify-center'>
                                <Image
                                    src={avatartest3}
                                    height={100}
                                    width={100}
                                    onClick={() => {
                                        settempavatarPath(avatars.avatar_3)
                                        setAvat1(false)
                                        setAvat2(false)
                                        setAvat3(true)
                                        setAvat4(false)
                                        setAvat5(false)
                                        setAvat6(false)
                                    }}
                                    className={avat3 ? ' border-3 border-transparent outline outline-1 outline-orange-400 rounded-full cursor-pointer' : ' rounded-full cursor-pointer'}
                                />
                            </div>
                            <div className='flex items-center justify-center '>
                                <Image
                                    src={avatartest4}
                                    height={100}
                                    width={100}
                                    onClick={() => {
                                        settempavatarPath(avatars.avatar_4)
                                        setAvat1(false)
                                        setAvat2(false)
                                        setAvat3(false)
                                        setAvat4(true)
                                        setAvat5(false)
                                        setAvat6(false)
                                    }}
                                    className={avat4 ? ' border-3 border-transparent outline outline-1 outline-orange-400 rounded-full cursor-pointer' : ' rounded-full cursor-pointer'}
                                />
                            </div>
                            <div className='flex items-center justify-center '>
                                <Image
                                    src={avatartest5}
                                    height={100}
                                    width={100}
                                    onClick={() => {
                                        settempavatarPath(avatars.avatar_5)
                                        setAvat1(false)
                                        setAvat2(false)
                                        setAvat3(false)
                                        setAvat4(false)
                                        setAvat5(true)
                                        setAvat6(false)
                                    }}
                                    className={avat5 ? ' border-3 border-transparent outline outline-1 outline-orange-400 rounded-full cursor-pointer' : ' rounded-full cursor-pointer'}
                                />
                            </div>
                            <div className='flex items-center justify-center'>
                                <Image
                                    src={avatartest6}
                                    height={100}
                                    width={100}
                                    onClick={() => {
                                        settempavatarPath(avatars.avatar_6)
                                        setAvat1(false)
                                        setAvat2(false)
                                        setAvat3(false)
                                        setAvat4(false)
                                        setAvat5(false)
                                        setAvat6(true)
                                    }}
                                    className={avat6 ? ' border-3 border-transparent outline outline-1 outline-orange-400 rounded-full cursor-pointer' : ' rounded-full cursor-pointer'}
                                />
                            </div>
                        </div>
                        <div className=" flex items-center w-full  gap-x-4 justify-end">
                            <button onClick={() => { setOpen2(false) }} className=" p-1 px-4  outline outline-1 outline-orange-500 py-2 rounded-md w-full sm:w-40 flex items-center justify-center gap-3 shadow-2xl text-white">
                                <span>cancel</span>
                            </button>
                            <button onClick={() => { updateAvatar() }} className=" p-1 px-4  bg-orange-500 py-2 rounded-md w-full sm:w-40 flex items-center justify-center gap-3 shadow-2xl text-white">
                                <span>apply</span>
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>

    );
}