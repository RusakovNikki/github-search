import React from 'react';
import './index.scss';

interface ICardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageLink?: string;
  mainTitle: string;
  mainDescription: string;
  info?: {
    title: string;
    value: string | number;
  }[];
}

const Card = ({
  mainDescription,
  mainTitle,
  imageLink,
  info,
  ...props
}: ICardProps) => {
  return (
    <div
      className={`card__item ${props.onClick ? 'card__item-hover' : ''}`}
      {...props}
    >
      {imageLink ? (
        <div className="card__logo-container">
          <img src={imageLink} alt="логотип компании" className="card__logo" />
        </div>
      ) : undefined}
      {info ? (
        <div className="card__flex-item">
          <div className="card__about about rubik-regular">
            {info?.map((infoItem, index) => (
              <p className="about__type" key={index}>
                {infoItem.title}
                <span className="about__desc"> {infoItem.value}</span>
              </p>
            ))}
          </div>
        </div>
      ) : undefined}
      <div className="card__flex-item">
        <div className="card__desc">
          <div className="card__title roboto">{mainTitle}</div>
          <div className={`card__specifics  roboto`}>{mainDescription}</div>
        </div>
        <div className="card__more-btn roboto"></div>
      </div>
    </div>
  );
};

export default Card;
