import React from "react";

class TemperatureInput extends React.Component{
    constructor(props) {
        super(props);
    }

    handleChange=(e)=>{
        let {scale }=this.props
        switch (scale) {
            case 'C':
                this.props.CelsiusInputChange(e.target.value)
                break;
            case 'F':
                this.props.FahrenheitInputChange(e.target.value)
                break;
        }

    }


    render() {
        let {temperature,scale }=this.props
        return(
            <>
                {scale =='F' && <div>华氏度</div>}
                {scale =='C' && <div>摄氏度</div>}
                <input style={{color:'red'}} value={temperature} onChange={this.handleChange}/>
            </>

        )
    }
}

export default TemperatureInput