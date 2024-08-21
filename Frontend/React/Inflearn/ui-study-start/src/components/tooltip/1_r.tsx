import data from './data';
import cx from '@/components/tooltip/cx';
import { SyntheticEvent, useState } from 'react';

const Tooltip = ({
  id,
  title,
  description,
}: {
  id: string;
  title: string;
  description: string;
}) => {
  const [isOpen, toggle] = useState(false);

  const handleClick = (e: SyntheticEvent) => {
    e.stopPropagation();
  };

  return (
    <div className={cx('container')}>
      <button className={cx('trigger')} onClick={() => toggle((p) => !p)}>
        {title}
      </button>
      {isOpen && <div className={cx('tooltip')}>{description}</div>}
    </div>
  );
};

const Tooltip1 = () => {
  return (
    <>
      <h3>#1. React</h3>
      {data.map((d) => (
        <Tooltip {...d} key={d.id} />
      ))}
    </>
  );
};

export default Tooltip1;
