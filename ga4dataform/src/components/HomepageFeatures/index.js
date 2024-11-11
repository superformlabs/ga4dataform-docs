import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Quick Setup',
    description: (
      <>
        The GA4Dataform models are designed for easy installation and immediate integration with your Google Analytics data in BigQuery, so you can start analyzing sessions data right away.
      </>
    ),
  },
  {
    title: 'Actionable Insights',
    description: (
      <>
        Focus on what matters most with automated data processing. The models aggregate and transform GA4 data to create ready-to-use events and sessions tables, ideal for dashboards and reporting.
      </>
    ),
  },
  {
    title: 'Customizable for Your Needs',
    description: (
      <>
        Adapt the model as needed to include additional metrics or dimensions relevant to your business. The flexibility of Dataform and SQL makes customization straightforward.
      </>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

