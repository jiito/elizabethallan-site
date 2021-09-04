type CVSectionProps = {
  title: string;
  employer: string;
  description: string;
  year: string;
};
export const CVSection = ({
  title,
  employer,
  description,
  year,
}: CVSectionProps) => {
  return (
    <>
      <div>{title}</div>
      <div>{employer}</div>
      <div>{description}</div>
    </>
  );
};
