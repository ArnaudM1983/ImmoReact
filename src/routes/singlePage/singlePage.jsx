import React from 'react';
import './singlePage.scss';
import Slider from '../../components/slider/slider';
import { singlePostData } from '../../lib/dummydata';
import { userData } from '../../lib/dummydata';
import Map from '../../components/map/map';

function SinglePage() {
  return (
    <div className='singlePage'>
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">{singlePostData.price} €</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">
              {singlePostData.description}
            </div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <div>
            <p className='title'>Situation</p>
            <div className="mapContainer">
              <Map items={[singlePostData]} />
            </div>
          </div>
          <div>
            <p className='title'>Pièces</p>
            <div className="sizes">
              <div className="size">
                <img src="/size.png" alt="" />
                <span>80m²</span>
              </div>
              <div className="size">
                <img src="/bed.png" alt="" />
                <span>2 chambres</span>
              </div>
              <div className="size">
                <img src="/bath.png" alt="" />
                <span>1 salle de bain</span>
              </div>
            </div>
          </div>
          <div>
            <div className="buttons">
              <button>
                <img src="/message.png" alt="" />
                CONTACTER
              </button>
              <button>
                <img src="/favoris.png" alt="" />
                FAVORIS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SinglePage