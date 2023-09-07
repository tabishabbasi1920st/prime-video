import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import ReactPlayer from 'react-player'

import './index.css'

const MoviesItem = props => {
  const {eachObj, style, tabIndex} = props
  const {categoryId, id, thumbnailUrl, videoUrl} = eachObj

  const updatedStyle = {...style, cursor: 'pointer', outline: 'none'}

  const popupStyle = {
    height: '400px',
    width: '550px',
    backgroundColor: '#fff',
    padding: '15px',
    borderRadius: '10px',
  }

  const cutBtnContainerStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
  }

  return (
    <Popup
      className="popup-container"
      modal
      trigger={
        <div style={updatedStyle}>
          <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
        </div>
      }
    >
      {close => (
        <div style={popupStyle}>
          <div style={cutBtnContainerStyle}>
            <button
              className="cut-btn"
              type="button"
              onClick={close}
              data-testid="closeButton"
            >
              <IoMdClose className="cut-icon" />
            </button>
          </div>
          <div className="react-player-container">
            <ReactPlayer
              url={videoUrl}
              width={480}
              height={310}
              controls
              pip
              stopOnUnmount={false}
            />
          </div>
        </div>
      )}
    </Popup>
  )
}
export default MoviesItem
