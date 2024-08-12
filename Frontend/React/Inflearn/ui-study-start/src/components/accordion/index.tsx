import cx from './cx';
import Accordion1 from '@/components/accordion/1_r';
import Accordion2 from '@/components/accordion/2_r';
import Accordion3 from '@/components/accordion/3_r';

const Accordions = () => {
  return (
    <div className={cx('Accordions')}>
      <h2>아코디언</h2>
      <Accordion1 />
      <Accordion2 />
      <Accordion3 />
    </div>
  );
};

export default Accordions;
