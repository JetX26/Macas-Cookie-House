'use client'

import React from 'react'


const Contact = () => {

    return (
        <div id="Contact" className=' bg-gray-600 sm:p-8'>
            <div className=' flex flex-col items-center justify-center h-full'>
                <div className=' pt-20'>
                </div>
                <div className=' bg-white text-black w-[25%] h-[800px] mb-32 sm:w-full xs:w-auto xs:p-12 xs:h-auto sm:h-auto sm:p-12 md:w-auto md:h-auto md:p-12 lg:w-auto lg:h-auto lg:p-12 xl:w-auto xl:h-auto xl:p-12 xxl:w-auto xxl:h-auto xxl:p-12'>
                    <h1 className=' text-3xl text-center pt-12 xs:text-left'>FIND US</h1>
                    <form action={() => {
                        alert('Thank you for reaching out, we will be in touch shortly :)')
                    }} typeof='submit' className='text-lg flex gap-16 justify-center pt-24 h-full xs:flex-col sm:flex-col'>
                        <div className=' flex flex-col gap-16'>
                            <div className=' flex flex-col gap-4'>
                                <p>500 Terry Francine Street<br></br>
                                    San Francisco, CA 94158</p>
                                <p>info@mysite.com</p>
                                <p>Phone: 1-800-857-3221</p>
                            </div>
                            <div className=' flex flex-col gap-4'>
                                <h2>OPENING HOURS:</h2>
                                <p>Tue - Fri: 7am - 10pm</p>
                                <p>Saturday: 8am - 10pm</p>
                                <p>Sunday: 10am-2pm</p>
                            </div>
                        </div>
                        <div className=' flex flex-col gap-2 text-black'>
                            <label htmlFor="firstname">First Name</label>
                            <input type="text" id="firstname" className=' xs:w-[85%] sm:w-[85%] rounded-sm border-[2px] border-black bg-white' />
                            <label htmlFor="lastname">Last Name</label>
                            <input type="text" id='lastname' className=' xs:w-[85%] sm:w-[85%] rounded-sm border-[2px] border-black bg-white' />
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" className=' xs:w-[85%] sm:w-[85%] rounded-sm border-[2px] border-black bg-white' />
                            <label htmlFor="subject">Subject</label>
                            <input type="text" id="subject" className=' xs:w-[85%] sm:w-[85%] rounded-sm border-[2px] border-black bg-white' />
                            <label htmlFor="message">Message</label>
                            <textarea className='xs:w-[85%] sm:w-[85%] rounded-sm border-[2px] border-black bg-white' name="message" id="message" cols={30} rows={7}></textarea>
                            <button className=' bg-slate-800 text-white rounded-sm xs:w-[85%] sm:w-[85%]' type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    );
};





export default Contact