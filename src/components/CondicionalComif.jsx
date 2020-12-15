import React from 'react';
import If from './if'

export default props => {
    return (
        <div>
            <h2>O numero é : {props.numero}</h2>
            <If test={props.numero % 2 == 0}>
                <spam>Par</spam>
            </If>

            <If test={props.numero % 2 == 1}>
                <spam>Impar</spam>
            </If>
        </div>
    )
}

