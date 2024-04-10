import React from 'react';

interface ICardProps {
  title1?: string;
  value1?: string;
  title2?: string;
  value2?: string;
  title3?: string;
  value3?: string;
  mainTitle: string;
  mainDescription: string;
}

const Card = ({
  mainDescription,
  mainTitle,
  title1,
  title2,
  title3,
  value1,
  value2,
  value3,
}: ICardProps) => {
  return (
    <div className="jobs-container__item">
      <div className="jobs-container__flex-item">
        <div className="jobs-container__about about rubik-regular">
          <p className="about__type">
            {title1}
            <span className="about__desc"> {value1}</span>
          </p>
          <p className="about__type">
            {title2}
            <span className="about__desc"> {value2}</span>
          </p>

          <p className="about__type">
            {title3}
            <span className="about__desc">{value3}</span>
          </p>
        </div>
      </div>
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
