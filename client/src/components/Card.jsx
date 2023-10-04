import React from 'react';

const Card = (props) => {
  return (
    <div className={'card'}>
      <div className={'card-wrapper'}>
        <header className={'card-header'}>
          <h3 className={'card-title'}>{props.name}</h3>
        </header>
        <main className={'card-body'}>
          {props.bodyContent}
        </main>
        <footer className={'card-footer'}>
          {props.footerContent}
        </footer>
      </div>
    </div>
  )
}

export default Card;