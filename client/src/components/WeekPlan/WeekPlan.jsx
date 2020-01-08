import React, { Component } from 'react';
import { Tab, Segment } from 'semantic-ui-react';

class WeekPlan extends Component {
    panes = [
        { menuItem: 'Monday', render: () => 
            <Tab.Pane>
                Monday plan
            </Tab.Pane> 
        },
        { menuItem: 'Tuesday', render: () => 
            <Tab.Pane>
                Tuesday plan
            </Tab.Pane> 
        },
        { menuItem: 'Wednesday', render: () => 
            <Tab.Pane>
                Wednesday plan
            </Tab.Pane> 
        },
        { menuItem: 'Thurstday', render: () => 
            <Tab.Pane>
                Thurstday plan
            </Tab.Pane> 
        },
        { menuItem: 'Friday', render: () => 
            <Tab.Pane>
                Friday plan
            </Tab.Pane> 
        },
        { menuItem: 'Saturday', render: () => 
            <Tab.Pane>
                Saturday plan
            </Tab.Pane> 
        },
        { menuItem: 'Sunday', render: () => 
            <Tab.Pane>
                Sunday plan
            </Tab.Pane> 
        },
    ];

    render() {
        return (
            <Segment.Group>
                <Tab
                    menu={{ fluid: true, vertical: true }}
                    menuPosition='left'
                    panes={ this.panes }
                />
            </Segment.Group>
        )
    }
}

export default WeekPlan;