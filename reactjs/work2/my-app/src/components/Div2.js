import React from 'react'
import divcss from './Div.module.css'

const Div2 = () => {
    return (
    <div className={divcss.div2}>
        <div className={divcss.div3}>
        <h1 className={divcss.h2}>Green</h1>   
        </div>
        <div className= {divcss.div3}>
        <h1 className={divcss.h2}>Green</h1>   
        </div>
        <div className={divcss.div3}>
        <h1 className={divcss.h2}>Green</h1>  
        </div>
        <div className={divcss.div3}>
        <h1 className={divcss.h2}>Green</h1>   
        </div>
    </div>
    )
}

export default Div2
