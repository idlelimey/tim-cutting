import { useEffect, useRef } from 'react';

function Ghost() {
    const ghost = useRef(null);
    const blur = useRef(null);
    useEffect(() => {
        document.body.onpointermove = (e) => {
            const { pageX, pageY } = e;
            ghost.current.animate(
                {
                    left: `${pageX - 250}px`,
                    top: `${pageY - 250}px`,
                },
                { duration: 5000, fill: 'forwards' }
            );
            // Fix bug where blur needs to be reset on window resize by re-applying rule.
            blur.current.style.backdropFilter = 'blur(200px)';
        };
    }, []);

    return (
        <>
            <div id='ghost' ref={ghost}></div>
            <div id='blur' ref={blur}></div>
        </>
    );
}

export default Ghost;
