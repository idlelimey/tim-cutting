import { useEffect, useRef } from 'react';

function Ghost() {
    const ghost = useRef(null);
    useEffect(() => {
        document.body.onpointermove = (e) => {
            const { pageX, pageY } = e;
            //console.info('e', e);
            ghost.current.animate(
                {
                    left: `${pageX - 250}px`,
                    top: `${pageY - 250}px`,
                },
                { duration: 5000, fill: 'forwards' }
            );
            //console.info('xy', x, y);
        };
    }, []);

    return (
        <>
            <div id='ghost' ref={ghost}></div>
            <div id='blur'></div>
        </>
    );
}

export default Ghost;
