import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BryntumScheduler from './components/BryntumScheduler';
import DemoButton from './components/DemoButton';
import DemoEditor from './components/DemoEditor';
import { InputNumber } from 'antd';
import 'antd/es/input-number/style/index.css';

let tbar = [
    {
        ref         : 'resourceCountField',
        type        : 'number',
        placeholder : 'Number of resources',
        label       : 'Resources',
        tooltip     : 'Enter number of resource columns to generate and press [ENTER]',
        value       : 100,
        width       : 200,
        // onChange    : () => generateResources()
    }, {
        type  : 'widget',
        html  : 'X',
        width : 30,
        style : 'text-align: center'
    }, {
        ref         : 'eventCountField',
        type        : 'number',
        placeholder : 'Number of events',
        label       : 'Events',
        tooltip     : 'Enter number of events per resource to generate and press [ENTER]',
        min         : 1,
        max         : 100,
        value       : 10,
        width       : 180,
        // onChange    : () => generateResources()
    }
];

class App extends Component {

    state = {
        events    : [
            {
            id         : 1,
            resourceId : 'r1',
            startDate  : new Date(2017, 0, 1, 10),
            endDate    : new Date(2017, 0, 1, 12),
            name       : 'Click me',
            iconCls    : 'b-fa b-fa-mouse-pointer'
        },
            {
                id         : 2,
                resourceId : 'r2',
                startDate  : new Date(2017, 0, 1, 12),
                endDate    : new Date(2017, 0, 1, 13, 30),
                name       : 'Drag me',
                iconCls    : 'b-fa b-fa-arrows-alt'
            },
            {
                id           : 3,
                resourceId   : 'r3',
                startDate    : new Date(2017, 0, 1, 14),
                duration     : 2,
                durationUnit : 'h',
                name         : 'Double click me',
                eventColor   : 'purple',
                iconCls      : 'b-fa b-fa-mouse-pointer'
            },
            {
                id         : 4,
                resourceId : 'r4',
                startDate  : new Date(2017, 0, 1, 8),
                endDate    : new Date(2017, 0, 1, 11),
                name       : 'Right click me',
                iconCls    : 'b-fa b-fa-mouse-pointer'
            },
            {
                id         : 5,
                resourceId : 'r5',
                startDate  : new Date(2017, 0, 1, 15),
                endDate    : new Date(2017, 0, 1, 17),
                name       : 'Resize me',
                iconCls    : 'b-fa b-fa-arrows-alt-h'
            },
            {
                id         : 6,
                resourceId : 'r6',
                startDate  : new Date(2017, 0, 1, 16),
                endDate    : new Date(2017, 0, 1, 19),
                name       : 'Important meeting',
                iconCls    : 'b-fa b-fa-exclamation-triangle',
                eventColor : 'red'
            },
            {
                id         : 7,
                resourceId : 'r6',
                startDate  : new Date(2017, 0, 1, 6),
                endDate    : new Date(2017, 0, 1, 8),
                name       : 'Sports event',
                iconCls    : 'b-fa b-fa-basketball-ball'
            },
            {
                id         : 8,
                resourceId : 'r7',
                startDate  : new Date(2017, 0, 1, 9),
                endDate    : new Date(2017, 0, 1, 11, 30),
                name       : 'Dad\'s birthday!',
                iconCls    : 'b-fa b-fa-birthday-cake',
                // Custom styling from data
                style      : 'background-color : teal; font-size: 18px',
                // Prevent default styling
                eventStyle : 'none'
            } ],
        resources : [ { id : 'r1', name : 'Mike' },
            { id : 'r2', name : 'Linda' },
            { id : 'r3', name : 'Don' },
            { id : 'r4', name : 'Karen' },
            { id : 'r5', name : 'Doug' },
            { id : 'r6', name : 'Peter' },
            { id : 'r7', name : 'Sam' },
            { id : 'r8', name : 'Melissa' },
            { id : 'r9', name : 'John' },
            { id : 'r10', name : 'Ellen' } ],
        startDate: new Date(2017, 0, 1, 6),
        endDate: new Date(2017, 0, 1, 20)
    };

    handleDelayClick = record => {
        record.events.forEach(event => {
            // Move 1h forward in time
            event.startDate = new Date(event.startDate.getTime() + 1000 * 60 * 60);
        });
    };

    handleSelectionChange = (event) => {
        // Code to take action when an event is selected goes here
    };

    generateResources = () => {
        this.setState({
            startDate: new Date(this.state.startDate - 60*60*1000),
            endDate: new Date(this.state.endDate - 60*60*1000),
        });
    };

    render = () => {
        return (
            <div>
                <BryntumScheduler
                    columns={[
                        {
                            field    : 'important',
                            text     : 'Important<div class="small-text">(React editor)</div>',
                            align    : 'center',
                            width    : 120,
                            renderer : ({ value }) => value ? 'Yes' : 'No',
                            editor   : ref => <DemoEditor ref={ref}/>
                        },

                        // ... other columns
                    ]}
                    tbar={[
                        {
                            ref         : 'resourceCountField',
                            type        : 'number',
                            placeholder : 'Number of resources',
                            label       : 'Resources',
                            tooltip     : 'Enter number of resource columns to generate and press [ENTER]',
                            value       : 100,
                            width       : 200,
                            onChange    : () => this.generateResources()
                        }, {
                            type  : 'widget',
                            html  : 'X',
                            width : 30,
                            style : 'text-align: center'
                        }, {
                            ref         : 'eventCountField',
                            type        : 'number',
                            placeholder : 'Number of events',
                            label       : 'Events',
                            tooltip     : 'Enter number of events per resource to generate and press [ENTER]',
                            min         : 1,
                            max         : 100,
                            value       : 10,
                            width       : 180,
                            onChange    : () => this.generateResources()
                        }
                    ]}
                    ref        = {'scheduler'}
                    events    = {this.state.events}
                    resources = {this.state.resources}
                    autoHeight = {true}
                    startDate  = {this.state.startDate}
                    endDate    = {this.state.endDate}
                    viewPreset       = {'hourAndDay'}
                    rowHeight        = {50}
                    barMargin        = {5}
                    multiEventSelect = {true}

                    onEventSelectionChange = {this.handleSelectionChange}
                    // ... other props
                />
                <InputNumber defaultValue={10} onChange={this.generateResources} />
            </div>
        );
    }
}

export default App;
