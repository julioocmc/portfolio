import { FC } from 'react';

interface SectionTitleProps {
  title: string;
}

const SectionTitle: FC<SectionTitleProps> = ({ title }) => (
  <h2
    className="text-4xl font-bold mb-8 text-center"
    style={{ color: '#dd6236' }}
  >
    {title}
  </h2>
);

export default SectionTitle;
