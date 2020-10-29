import React from 'react';

function SingleJob(props) {

    return (
        <>
            <div className='text-center'>
                <h2>{props.title}</h2>
                <hr />
                <p className='h4'>{props.company}</p>
                <p className='h4'>{props.period}</p>
                <hr /> 
            </div>

            {props.content.map( (p,i) => {
                return (
                    <p key={i}>{p}</p>
                )
            })}
        </>
    );
}

SingleJob.defaultProps = {
    'order': 0,
    'title': 'Job Secription',
    'company': 'The Company',
    'period': '1979 - Present',
    'content': [
        'I joined the company initially to focus on driving a new email marketing platform as a value add to existing clients as well as to assist in feature enhancement and maintenance of key clients such as the Sun and the Daily Mail.',
        'Before long I took the front-end developer role for the Telegraph Fantasy Football game, which soon expanded in to Rugby, Cricket and Horse Racing Fantasy games.  I now work on a React rebuild of a Holidays application within the business.'
    ]
}

export default SingleJob;