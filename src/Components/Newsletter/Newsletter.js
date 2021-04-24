import React from 'react';


function Newsletter() {
    return (
      <div className="Newsletter">
        <h1>Welcome to our Newsletters</h1>
       
        <input type="text" placeholder="Name" name="name" required />
    <input type="text" placeholder="Email address" name="mail" required></input>
    <br />
    <br />
    <div>
    <label>
        <input type="checkbox" checked="checked" checked="unckecked" name="subscribe" />Daily Newsletter
    </label>
    <input type="submit" value="Subscribe" />
    </div>
    </div>
    );
  }

  export default Newsletter;
  