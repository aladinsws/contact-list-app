import React, { useState } from 'react'

function AddForm({ hideForm, addContact }) {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  return (
    <form onSubmit={function(){

    }}>
    <div className="contact-item">
      <div className="contact-item__image">AB</div>
      <div className="contact-item__content">
        <div className="contact-item__name">

          <div className="contact-item__number">
            <input
              placeholder="Phone Number"
              value={number}
              onChange={function (e) {
                setNumber(e.target.value)
              }}
            />
          </div>

          <input
            placeholder="Name"
            value={name}
            onChange={function (e) {
              setName(e.target.value)
            }}
          />
        </div>
      </div>
      <div className="contact-item__actions">
        <a href="##" className="contact-item__cancel-button" onClick={hideForm}>
          cancel
        </a>
        <a
          href="##"
          className="contact-item__add-button"
          onClick={function () {
            addContact(name, number)
            hideForm()
          }}
        >
          save
        </a>
      </div>
    </div>
    </form>
  )
}

export default AddForm
