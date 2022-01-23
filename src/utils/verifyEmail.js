const verifyEmail = (email) => {

    //email address should belong to iitkgp.
    //use regex to check for a valid email
    const EMAIL_VALIDATOR = /^.*@(kgpian.)?iitkgp.ac.in$/i;
    const res = email.match(EMAIL_VALIDATOR);
    if(res == null) return false;
    else return true;
}

export default verifyEmail;