import React from "react";
import Card from "./Card";
import Button from "./Button"
import classes from "./ErrorModal.module.css"
function ErrorModal(props){

return(
<div>
    <div className={classes.backdrop} onClick={props.onConfirm}/>

    <Card className={classes.modal}>
<div>
<header className={classes.header}>
    <h2>{props.title}</h2>
</header>
        <div className={classes.content}><p>{props.message}</p></div>
        <footer className={classes.actions}><Button onClick={props.onConfirm}>Okay</Button></footer>
        </div>
    </Card></div>
)




}

export default ErrorModal