

import './drag.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
const DragAndDrop = () => {
    const [dataItem, setDataItem] = useState([])


    const allowDrop = (ev) => {
        ev.preventDefault();
    };

    const drag = (ev) => {
        ev.dataTransfer.setData('text', ev.target.id);
    };

    const drop = (ev) => {
        ev.preventDefault();
        const data = ev.dataTransfer.getData('text');
        ev.target.appendChild(document.getElementById(data));
    };

    const fetchData = async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
        console.log(res.data)
        setDataItem(res.data)
    }

    useEffect(() => {
        fetchData()
    })

    return (
        <div >
            <div style={{ textAlign: 'center', marginTop: '10px', lineHeight: '50px', fontSize: '20px' }}>
                <h1>Drag and Drop</h1>
                <h3>Drag the image back and forth between the two div elements.</h3>
            </div>
            <div
                id="div1"
                onDrop={drop}
                onDragOver={allowDrop}
                style={{
                    float: 'left',
                    width: '500px',
                    height: '500px',
                    margin: '10px',
                    padding: '10px',
                    border: '1px solid white',
                    overflow: 'auto',
                    marginLeft: '150px',
                    fontSize: '20px',
                    marginTop: '30px'
                }}
            ><img src='hello.jpg' alt='' draggable='true' id='drag1' onDragStart={drag} style={{
                width: '200px'
            }}></img>
                {
                    dataItem.map((item) => (
                        <div key={item.id} draggable='true' id={item.id} onDragStart={drag}>{item.title}</div>
                    ))

                }
            </div>

            <div
                id="div2"
                onDrop={drop}
                onDragOver={allowDrop}
                style={{
                    float: 'left',
                    width: '500px',
                    height: '500px',
                    margin: '10px',
                    padding: '10px',
                    border: '1px solid white',
                    overflow: 'auto',
                    fontSize: '20px',
                    marginTop: '30px'
                }}
            ></div>
        </div>
    );
};

export default DragAndDrop;