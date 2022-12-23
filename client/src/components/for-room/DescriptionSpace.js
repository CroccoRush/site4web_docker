import React from 'react';
import {Accordion} from "react-bootstrap";

const DescriptionSpace = ({description}) => {
    return (
        <div className={"d-flex h-100"}>
            <Accordion className={"m-auto w-100"} defaultActiveKey="1" flush>
                <Accordion.Item eventKey="0" >
                    <Accordion.Header>Description</Accordion.Header>
                    <Accordion.Body>
                        {description}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default DescriptionSpace;