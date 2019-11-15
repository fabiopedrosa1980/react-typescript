import React, { useState, useRef } from 'react';

interface Person {
    firstName: string;
    lastName: string;
}

interface Props {
    text: string;
    ok?: boolean;
    i?: number;
    fn?: (bob: string) => void;
    person: Person;
    //handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface TextNode {
    text: string;
}

const TextField: React.FC<Props> = ({ }) => {
    const [count, setCount] = useState<TextNode>({ text: 'hello' });
    const imputRef = useRef<HTMLInputElement>(null);
    const divRef = useRef<HTMLInputElement>(null)
    return <div>
        <input ref={divRef} />
    </div>
}

export default TextField;