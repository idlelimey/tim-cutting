function SingleJob(props) {
    return (
        <>
            <div className='text-center'>
                <h2 className='mx-auto w-75'>{props.title}</h2>
                <hr />
                <p className='h5 mb-0 text-mid'>{props.company}</p>
                <p className='h4 mb-4'>
                    <span className='scribble'>{props.period}</span>
                </p>
            </div>

            {props.content.map((p, i) => {
                return <p key={i}>{p}</p>;
            })}
        </>
    );
}

SingleJob.defaultProps = {
    order: 0,
    title: 'Job Description',
    company: 'The Company',
    period: '1979 - Present',
    content: [
        'Mollit incididunt magna nulla eiusmod non proident aliqua laboris enim ad elit excepteur Lorem. Sint do eu ipsum deserunt esse sint veniam voluptate minim. Tempor ea in sunt adipisicing ipsum incididunt fugiat proident elit magna do. Et ut in exercitation qui id quis id velit.',
        'Excepteur ex nisi esse elit nulla voluptate pariatur laborum. Culpa sunt consectetur velit quis. Cupidatat consectetur cillum eu culpa ipsum est et culpa.',
    ],
};

export default SingleJob;
