import React, { useState, useRef } from 'react'
import BaseService from '@/services/base'
import { toast } from 'react-toastify'
import LoadingBar from 'react-top-loading-bar'
import { TRANS_MESSAGE } from '@/translations/en'

function Section8({ data }) {
  const ref = useRef(null)
  const { tag, headline, paragraph, form: { input_items }, anchor } = data
  const [inputItems, setInputItems] = useState(input_items.map(x => ({ ...x, value: '' })))

  const handleInputChange = (newValue, index) => {
    const _inputItems = JSON.parse(JSON.stringify(inputItems))
    const handleInput = _inputItems[index]

    if (handleInput.type === 'textarea' && newValue.length > handleInput.max_length) {
      return
    }

    handleInput.value = newValue
    setInputItems(_inputItems)
  }

  const handleSubmit = async () => {
    ref.current.continuousStart()
    const submitData = {}
    inputItems.forEach(x => submitData[x.name] = x.value)
    const res = await BaseService.post('/management/submissions/contact', submitData)
    if(res.ok && res.data.id) {
      toast.success(TRANS_MESSAGE['success_form_submitted'])
    } else {
      toast.error(res?.error?.message || TRANS_MESSAGE['error_default_message'])
    }
    ref.current.complete()
  }

  return (
    <div className='section8-container' id={anchor}>
      <LoadingBar color='#1492FF' ref={ref} />
      <div className='left-block'>
        <div className='tag'>{tag}</div>
        <div className='headline'>{headline}</div>
        <div className='paragraph'>{paragraph}</div>
      </div>
      <div className='right-form'>
        {inputItems.map((input, index) => {
          const { label, required, name, rows, placeholder, type, max_length, value } = input

          if (type === 'textarea') {
            return (
              <div className='input-container' key={`input-${index}`}>
                <div className='label'>{label}{required ? ' *' : ''}</div>
                <div className='input-textarea-container'>
                  <textarea
                    name={name}
                    rows={rows}
                    placeholder={placeholder}
                    required={required}
                    value={value || ''}
                    onChange={e => handleInputChange(e.target.value, index)}
                  />
                  <span className='count'>{value.length}/{max_length}</span>
                </div>
              </div>
            )
          }

          return (
            <div className='input-container' key={`input-${index}`}>
              <div className='label'>{label}{required ? ' *' : ''}</div>
              <input
                type={type}
                name={name}
                placeholder={placeholder}
                required={required}
                value={value || ''}
                onChange={e => handleInputChange(e.target.value, index)}
              />
            </div>
          )
        })}
        <div className='submit' onClick={handleSubmit}>Send</div>
      </div>
    </div>
  )
}

export default Section8
