import React from 'react';
import widget from './widget'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'

export default class TickerWidget extends widget{
    constructor(){
        super()
    }
    icon=faChartLine
    renderBody(){
        return <div>ticker Specfic body goes here</div>
    }
}