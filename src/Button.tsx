import React from "react"
import s2 from './Button.module.css'

type ButtonType={
    name:string
    callBack:()=>void
    counterState:boolean
}

export const Button =(props:ButtonType)=>{
   // const onClickButtonHandler=()=>{
       // return props.callBack

   // }


    return(
       <span > <button className={s2.buttonStyle} onClick={props.callBack} disabled={props.counterState}>{props.name}</button></span>
    )
}