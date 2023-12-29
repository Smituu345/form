

const Form=()=>{

    return(

        <>
        <div  className='container'>
            <form>
                <h2>REGISTRATION FORM</h2>
                <div className="content">
                    <div classname="input-box">
                       <label for="name" >FULL NAME</label>
                     <input type="text" className="part" placeholder="enter full name"></input>

                    </div>


                    <div className="input-box">
                       <label for="username">USERNAME</label>
                     <input type="text" placeholder="enter full name"></input>
                     
                    </div>

                    <div className="input-box">
                       <label for="email">EMAIL</label>
                     <input type="text" placeholder="enter your valid email"></input>
                     
                    </div>

                    <div className="input-box">
                       <label for="number">PHONE NUMBER</label>
                     <input type="text" placeholder="enter phone number "></input>
                     
                    </div>

                    <div className="input-box">
                    <label for="password">PASSWORD</label>
                     <input type="text" placeholder="enter your  password"></input>
                     
                    </div>

                    <div className="input-box">
                       <label for="cinfirm" >CINFIRM PASSWORD</label>
                      <input type="text" placeholder="enter your cinfirm password"></input>
                     
                    </div>

                    <span className="gender-title">GENDER</span>
                    <div className="big">
                        <input type="radio" name="gender" id="male" />
                        <label for="gender">MALE</label><br></br>

                        <input type="radio" name="gender" id="female" />
                        <label for="gender">FEMALE</label><br></br>

                        <input type="radio" name="gender" id="other" />
                        <label for="gender">OTHER</label><br></br>
  
                    


                    </div>
                    <div classname="alert">
                        <p>alert</p>

                    </div>
                    <div>
                       <button type="type" className="btn">register</button>
                    </div>

                </div>
            </form>

        </div>
        </>
    )
}
export default Form;