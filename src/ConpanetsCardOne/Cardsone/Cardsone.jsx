import React from 'react'
import "./Cardsone.css"
import rasm from '../../image.png' // src papkasidan bitta tepaga chiqib image.png ni olamiz

function Cardsone() {
  return (
    <div>
      <div className="box">
        <div className="box_one">
          <h1>1</h1>

          <img src={rasm} alt="Rasm" />
          <b>Create 4 Componets</b>
          <p>4 ta Komponetlar yaratish</p>
        </div>

        <div className="box_two">
          <h1>2</h1>

          <div className="one_m">
            <div className="m_one">
              <p>Parent <br /> (app.jsx)</p>
            </div>
            <div className="m_two">
              <div className="card">title="Home"</div>
              <div className="card">label="click"</div>
              <div className="card">label="click"</div>
              <div className="card">title="click"</div>
            </div>
            <div className="butn">
              <button>Click</button><button>Click</button><button>Click</button><button>Click</button>
            </div>
          </div>


          <div className="malumotlar">
            <b>Pass Data via Props</b>
            <p>Props orqali ma`lumotlar uzatish</p>
          </div>
        </div>

        <div className="box_three">
          <h1>3</h1>

          <button className='header'>Header</button>
          <div className="cards">
            <h3>Cull</h3>
            <button className='btn'>Click</button>
          </div>
          <button className='footer'>Footer</button>

          <div className="malumotlar">
            <b>Renderen UI</b>
            <p>Yakuniy interfeyz</p>
          </div>

        </div>
      </div>


    </div>
  )
}

export default Cardsone