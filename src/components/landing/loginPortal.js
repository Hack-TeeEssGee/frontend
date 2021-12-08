import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import officialLogo from "../../assets/official.png";
import studentLogo from "../../assets/student.png";
import societyLogo from "../../assets/society.png";
import adminLogo from "../../assets/admin.png";

const LoginPortal = () => {
  return (
    <div className="login-portal">
      <h1>Login Portal</h1>
      <div className="wrapper">
         <Card
            style={{
               width: 278,
               height: 332,
               backgroundColor: "#7ECA9C50",
               margin: 56,
            }}
         >
        <CardContent>
          <img src={officialLogo} alt="official"
           style={{
             margin:85,
             marginTop: 40,
           }}
          ></img> 
        </CardContent>
        <CardActions>
           <button
            style={{
                backgroundColor: "#333333",
                height:60 ,
                width:216 ,
                alignItems: 'baseline',
                justifyContent: 'center',
                borderRadius:20 ,
                margin: 25, 
                marginTop: -30,
                color: "#FFFFFF",
            }}
           >TSG Official</button>
        </CardActions>
        </Card>

        <Card
            style={{
               width: 278,
               height: 332,
               backgroundColor: "#F5884025",
               margin: 56,
            }}
         >
        <CardContent>
            <img src={studentLogo} alt="student"
              style={{
                margin:85,
                marginTop: 40,
              }}
            ></img> 
        </CardContent>
        <CardActions>
          <button
            style={{
                backgroundColor: "#333333",
                height:60 ,
                width:216 ,
                alignItems: 'baseline',
                justifyContent: 'center',
                borderRadius:20 ,
                margin: 25, 
                marginTop: -30,
                color: "#FFFFFF",
            }}
          >Student</button>
        </CardActions>
        </Card>

        <Card
            style={{
               width: 278,
               height: 332,
               backgroundColor: "#700B9725",
               margin: 56,
            }}
         >
        <CardContent>
            <img src={societyLogo} alt="society"
              style={{
                margin:85,
                marginTop: 30,
              }}
            ></img> 
        </CardContent>
        <CardActions>
          <button
            style={{
                backgroundColor: "#333333",
                height:60 ,
                width:216 ,
                alignItems: 'baseline',
                justifyContent: 'center',
                borderRadius:20 ,
                margin: 25, 
                marginTop: -35,
                color: "#FFFFFF",
            }}
          >Society</button>
        </CardActions>
        </Card>

        <Card
            style={{
               width: 278,
               height: 332,
               backgroundColor: "#09009B30",
               margin: 56,
            }}
         >
        <CardContent>
            <img src={adminLogo} alt="admin"
              style={{
                margin:85,
                marginTop: 30,
              }}
            ></img> 
        </CardContent>
        <CardActions>
          <button
            style={{
                backgroundColor: "#333333",
                height:60 ,
                width:216 ,
                alignItems: 'baseline',
                justifyContent: 'center',
                borderRadius:20 ,
                margin: 25, 
                marginTop: -35,
                color: "#FFFFFF",
            }}
          >Admin</button>
        </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default LoginPortal;
