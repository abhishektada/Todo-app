import React, { useState } from 'react';

export default function Input() {
  const style = {
    inpMargin: '50px',
    inpHeight: '20px',
    inpWidth: '300px',
    btnHeight: '30px',
    btnWidth: '100px'
  };

  const [edtValue, setEdtValue] = useState('');
  const [text, setText] = useState('');
  const [addValue, setAddValue] = useState([]);
  const [btnType, setBtnType] = useState('submit');
  // const [innerHtml, setInnerHtml] = useState()
  // const [index,setIndex]=useState()

  const inputText = (e) => {
    setText(e.target.value);
  };
  const setValue = () => {
    if (edtValue !== '') {
      const editedValue = () => {
        let editedArray = addValue;
        editedArray.splice(edtValue, 1, text);
        return editedArray;
      };
      setAddValue(editedValue);
      setBtnType('Submit');
      setEdtValue('');
      setText('');
    } else {
      setAddValue((addValue) => {
        let updatedList = [...addValue, text];
        setText('');
        return updatedList;
      });
    }
  };

  const dlt = (i) => {
    let updatedList = addValue.filter((_elm, id) => {
      return i !== id;
    });
    setAddValue(updatedList);
  };

  const edt = (i) => {
    setText(addValue[i]);
    console.log(addValue);
    setEdtValue(i);
    setBtnType('Update');
  };

  return (
    <div>
      <input
        onChange={inputText}
        value={text}
        type="text"
        style={{
          margin: style.inpMargin,
          height: style.inpHeight,
          width: style.inpWidth
        }}
      />
      <input
        onClick={setValue}
        value={btnType}
        type="button"
        style={{ height: style.btnHeight, width: style.btnWidth }}
      />
      <hr />
      <div id="showTodo" className="showTodo">
        Todo List
      </div>
      {addValue !== [] &&
        addValue.map((e, i) => {
          return (
            <div key={i}>
              <p className="textList">
                <li>
                  {e}
                  <button
                    onClick={() => {
                      dlt(i);
                    }}
                    className="dltBtn">
                    Delete
                  </button>
                  <button
                    onClick={() => {
                      edt(i);
                    }}
                    className="edtBtn">
                    Edit
                  </button>
                </li>
              </p>
            </div>
          );
        })}
    </div>
  );
}
