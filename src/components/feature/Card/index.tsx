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
      className={`jobs-container__item ${props.onClick ? 'jobs-container__item-hover' : ''}`}
      {...props}
    >
      {imageLink ? (
        <div className="jobs-container__logo-container">
          <img
            src={imageLink}
            alt="логотип компании"
            className="jobs-container__logo"
          />
        </div>
      ) : undefined}
      {info ? (
        <div className="jobs-container__flex-item">
          <div className="jobs-container__about about rubik-regular">
            {info?.map((infoItem) => (
              <p className="about__type">
                {infoItem.title}
                <span className="about__desc"> {infoItem.value}</span>
              </p>
            ))}
          </div>
        </div>
      ) : undefined}
      <div className="jobs-container__flex-item">
        <div className="jobs-container__desc">
          <div className="jobs-container__title roboto">{mainTitle}</div>
          <div className={`jobs-container__specifics  roboto`}>
            {mainDescription}
          </div>
        </div>
        <div className="jobs-container__more-btn roboto"></div>
      </div>
    </div>
  );
};

export default Card;
