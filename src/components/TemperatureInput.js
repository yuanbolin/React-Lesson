import React from "react";

const TemperatureInput = React.forwardRef((props, ref) => {
    function handleChange(e) {
        let {scale} = props
        switch (scale) {
            case 'C':
                props.CelsiusInputChange(e.target.value)
                break;
            case 'F':
                props.FahrenheitInputChange(e.target.value)
                break;
        }

    }

    let {temperature, scale} = props
    return (
        <div ref={ref}>
            {scale == 'F' && <div>华氏度</div>}
            {scale == 'C' && <div>摄氏度</div>}
            <input style={{color: 'red'}} value={temperature} onChange={handleChange}/>
        </div>
    )
})

export default TemperatureInput