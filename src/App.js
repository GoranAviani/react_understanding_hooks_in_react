import React from 'react';

import Accordion from "./components/Accordion";
import Search from "./components/Search";

const items = [
    {
        title: 'What is react?',
        content: 'React is a frond end js framework'
    },
    {
        title: 'Why use react?',
        content: 'React is one of favourite JS library among engineers'
    },
    {
        title: 'How to you use React?',
        content: 'You use react creating components'
    }
]


export default () => {


    return (
        <div>
            <Search/>
        </div>
    )

}

