//turning html into jsx
//the <head> is in the public folder

import React from 'react';
import //css

const BodyDiv = () => {
    return (
    <body>
        <div class="card" style="width: 50rem">
        <div class="card-body">
            <div class="card-title">Cruise Menu BBQ Items</div>
        </div>
        <ul class="list-group list-group-flush" id="addItem">
            <!--add items here-->
        </ul>
        </div>
    </body>
    );
};

export default BodyDiv;