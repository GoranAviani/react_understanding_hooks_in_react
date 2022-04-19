import React from 'react';


const Accordion = ({items}) => {
    const renderedItems = items.map(item => {
        return(
            <div className='title active'>
                <i className='dropdown icon'></i>
                {item.title}
            </div>
            <div className='content active'>
                <p>
                    {item.content}
                </p>

            </div>
        )
    })

    return (
        <div>
            {items.length}
        </div>
    )
}

export default Accordion;