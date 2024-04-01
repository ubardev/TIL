import { data } from "@/components/accordion/data";

const Accordion1 = () => {
  return (
    <>
      <h3>#1. React</h3>
      {data.map((d: any) => (
        <div>
          {d.title}
          {d.description}
        </div>
      ))}
    </>
  );
};

export default Accordion1;
