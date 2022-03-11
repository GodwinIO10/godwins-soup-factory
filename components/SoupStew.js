import React, { useState } from 'react'
import {Modal} from 'react-bootstrap'
import './NavBar.css'

function SoupStew({soupandstew}) {
  const [quantity, setQuantity] = useState(1)
  const [packs, setPacks] = useState("small")
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div className='shadow-lg p-3 mb-5 bg-white rounded' style={{margin:"70px"}}>

        <div onClick={handleShow}>
        <h2>{soupandstew.name}</h2>
        <img src={soupandstew.image} className='img-fluid' style={{height:"200px", width:"200px"}}  alt='' />
        </div>

        <div className='flex-container'>
        
          <div>
            <div className='w-100'>
              <p>Quantity <select value={quantity} onChange={(e) => {setQuantity(e.target.value)}} >{[...Array(10).keys()].map((x, i) => {
                  return <option value={i + 1}>{i + 1}</option>
                 })}</select>
                <select className='m-2' value={packs} onChange={(e) => {setPacks(e.target.value)}}>{soupandstew.packs.map(pack => {
                  return <option value={pack}>{pack}</option>
                  })}
                </select>
              </p>
            </div>
            <div className='w-100'>
              <p>Meat / Fish type <select>
                {soupandstew.chews.map(chew => {
                  return <option value={chew}>{chew}</option>
                })}
              </select></p>
            </div>
            <div className='w-100'>
              <p>Flavour <select>
                {soupandstew.flavours.map(flavour => {
                  return <option value={flavour}>{flavour}</option>
                })}
              </select></p>
            </div>
          </div>
        </div>

        <div className='flex-container'>
          <div className='w-100'>
                <h6>Price (Naira): {soupandstew.prices[0][packs] * quantity} </h6>
          </div>
          <div className='w-100 '>
              <button className='btn'>Add To Cart</button>
          </div>
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
          <Modal.Title>{soupandstew.name}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <img src={soupandstew.image} className='img-fluid' style={{height:'400px'}} alt='' />
            <p>{soupandstew.description}</p>
          </Modal.Body>

          <Modal.Footer>
            <button className='btn' onClick={handleClose}>Close</button>
          </Modal.Footer>
        </Modal>
    </div>
  )
}

export default SoupStew