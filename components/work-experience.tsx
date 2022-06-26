import { Fragment } from 'react';
import styles from 'components/work-experience.module.scss';

const WORK = [
  { position: 'Frontend Developer', company: 'Actimi', date: 'June 2022-Current' },
  { position: 'Frontend Developer', company: 'SHFT', date: 'Oct 2021-June 2022' },
  { position: 'Frontend Developer', company: 'Ilao', date: 'Jan 2019–Sep 2019' },
  { position: 'IT Intern', company: 'Hyosung Corporation', date: 'Sep 2016–June 2017' },
];

function WorkExperience() {
  return (
    <div className={styles.workExperience}>
      <p>WORK EXPERIENCE</p>
      <p>
        {WORK.map(({ position, company, date }, index) => (
          <Fragment key={index}>
            {`${position} → ${company}, ${date}`}
            {WORK.length - 1 === index || <br />}
          </Fragment>
        ))}
      </p>
    </div>
  );
}

export default WorkExperience;
