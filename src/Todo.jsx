import React, { useState } from 'react'
import './Todo.css';
import { v4 as uuid } from 'uuid';
import { isTemplateExpression } from 'typescript';


function Todo() {

    const [inputdata, setInputData] = useState("");//for input text
    const [items, setItems] = useState([]);//for lists
    const [edit, setEdit] = useState(false);//for  add or edit button

    //addtion of new item
    const addItem = () => {
        if (!inputdata) {
            alert('Plz fill the data')
            setEdit(false)
        }
        else {
            const myNewInputData = {
                id: uuid(),
                name: inputdata,
            };
            setItems([...items, myNewInputData])
            setInputData('')
        }

    };


    // enter key handler
    const handler = (event) => {
        if (event.key == 'Enter') {

            document.getElementById('button-click').click();
            setEdit(false)
        }
    }

    return (
        <>
            <div className="main">
                <div className="Todo">
                    <h1>Todo</h1>
                    <div className="input">
                        <input type="text" placeholder='✍️Add todos' id='hi' className='form-control' value={inputdata}
                            onChange={(event) => setInputData(event.target.value)}
                            onKeyPress={(event) => { handler(event) }} />

                        <button className='add-button' id='button-click' onClick={addItem}>
                            ➕

                        </button>
                    </div>
                    <div className="list">
                        <ul>
                            {
                                items.slice(0).reverse().map((currentElement) => {

                                    return (
                                        <div className='listItem' key={uuid()}>
                                            {/* Edit button  */}
                                            <button className='edit-button' onClick={() => {
                                                if (!inputdata) {
                                                    setEdit(true);
                                                    setInputData(currentElement.name)
                                                    let arr = items.filter(obj => obj.id != currentElement.id)
                                                    setItems(arr);
                                                }



                                            }}>✏️</button>

                                            {/* Delete Button */}

                                            <button className='del-button' onClick={() => {
                                                if (!inputdata) {

                                                    let arr = items.filter(obj => obj.id != currentElement.id)
                                                    setItems(arr);
                                                }
                                            }}>🗑️</button>

                                            <li id={currentElement.id}>{currentElement.name}</li>
                                        </div>
                                    )
                                })
                            }
                        </ul>

                    </div>
                </div>

            </div>

        </>
    )
}

export default Todo