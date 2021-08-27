import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import CloudIcon from '@material-ui/icons/Cloud';
import React from 'react';

type Props={
    props: string,
    size: string,
}

const Icon =(props:Props)=>{
    
    const iconSelect =(prop:Props)=>{
        
        switch(prop.props){
            case 'Rain':
                return <BeachAccessIcon color="primary" style={{ fontSize: props.size }}/>
            case 'Clouds':
                return <CloudIcon color="action" style={{ fontSize: props.size }}/>
            default :
                return <WbSunnyIcon color="secondary" style={{ fontSize: props.size }}/>
            
    }}

    
    return(
        <div>
           
        <div>{iconSelect(props)}
        
        </div>
        </div>
    )

}

export default Icon