import React, { useState } from 'react';
import { Button, Col } from 'antd';
import { WalkInterface } from '../../../interfaces';
import User from '../../../models';

const Walk = (props: WalkInterface) => {
  const {
    trafficLight,
    user,
    setUser
  } = props;
  const [prevStep, setPrevStep] = useState('');

  const nextStep = (step: string) => {
    if (prevStep !== step && trafficLight) {
      user.toWalk();
    } else if (prevStep === step && trafficLight) {
      user.backWalk();
    } else {
      user.lost();
    }

    setPrevStep(step);
    setUser(new User(user.toJson()));
  };

  return (
    <>
      <Col>
        <Button
          type="primary"
          icon={<img className="icon-feet" src="/images/feet_left.png"/>}
          onClick={() => nextStep('left')}
          className="btn-next-step-left"
        >
          LEFT
        </Button>
      </Col>
      <Col>
        <Button
          type="primary"
          icon={<img className="icon-feet" src="/images/feet_right.png"/>}
          onClick={() => nextStep('right')}
          className="btn-next-step-right"
        >
          RIGHT
        </Button>
      </Col>
    </>
  );
};

export default Walk;
