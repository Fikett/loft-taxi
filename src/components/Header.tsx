import { AppBar, Button, Toolbar, Typography, withStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { pages } from "../utils/common";


type IProps = {
  setCurentPage: Function
}


const Header: React.FC<IProps> = (props) => {
 

  const styles = {
    appBar: {
      backgroundColor: "#ffffff"
    },
    grow: {
      flexGrow: "1"
    }
  };



  useEffect(() => {
   
  }, []);

  return (
    <>
     {/* Header */}

     <AppBar  position="static">
    <Toolbar>
      {/* <Typography className={classes.grow}>
        <Logo />
      </Typography> */}
       <Button onClick = {() => props.setCurentPage(pages.Map)}>
        Карта
    </Button>

    <Button onClick = {() => props.setCurentPage(pages.Profile)}>
        Профиль
    </Button>

    <Button onClick = {() => props.setCurentPage(pages.Login)}>
        Войти
    </Button>
    </Toolbar>
  </AppBar>




    <div>

     
    </div>


   

    </>
  );
};

export default React.memo(Header);
