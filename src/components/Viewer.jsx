import React from 'react'
import PropTypes from 'prop-types'
import MultiViewer from './MultiViewer'


const Viewer = ({iiifUrl, width, height, modalCloseAction}) => {
  return (
    <MultiViewer
      iiifUrls={[iiifUrl]}
      width={width}
      height={height}
      modalCloseAction={modalCloseAction}
      showToolbar={false}
    />
  )
}

Viewer.propTypes = {
  iiifUrl: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  modalCloseAction: PropTypes.func
}

Viewer.defaultProps = {
  width: '800px',
  height: '450px'
}
export default Viewer
