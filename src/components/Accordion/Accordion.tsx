type AccordionPropsType = {
  titleValue: string;
  collapsed: boolean;
};

export function Accordion(props: AccordionPropsType) {
  return (
    <div>
      {props.collapsed ? (
        <>
          <AccordionTitle title={props.titleValue} />
          <AccordionBody />
        </>
      ) : (
        <>
          <AccordionTitle title={props.titleValue} />
        </>
      )}
    </div>
  );
}

type AccordionTitlePropsType = {
  title: string;
};

function AccordionTitle(props: AccordionTitlePropsType) {
  return <h3>{props.title}</h3>;
}

function AccordionBody() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
}
