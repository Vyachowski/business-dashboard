import React from 'react';

const InsightsArea = (props) => {
  return (
    <main className={'insights-area'} style={{ backgroundColor: '#f1f5f9' }}>
      {props.children}
    </main>
  )
}

export default InsightsArea;