import React from 'react'

const Contacts = () => {
    return (
        <div className='contact'>
            <main>
                <h1>Contact Us</h1>
                <form >
                    <div>
                        <label>Name</label>
                        <input type="text" required placeholder='Enter Name' />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="Email" required placeholder='name@gmail.com' />
                    </div>
                    <div>
                        <label>Message</label>
                        <input type="text" required placeholder='Tell Us about Your query..' />
                    </div>
                    <button type='Submit'>Send</button>
                </form>

            </main>
        </div>
    )
}

export default Contacts