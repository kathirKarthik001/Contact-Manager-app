const styling ={
    textAlign: "center",
    paddingTop:'5px',
    paddingBottom:'5px'
}

const Header =()=>{
    
    return (
        <div className="ui " style={{paddingTop:'5px',paddingBottom:'10px'}}>
            <div className="ui container " style={{
                borderBottom:'2px solid grey',
                paddingBottom:'20px'
            }}>
                <h1 style={styling}>
                    Contact Manager
                <i className="address book outline icon"></i>
                </h1>
            </div>
        </div>
    )
}

export default Header;