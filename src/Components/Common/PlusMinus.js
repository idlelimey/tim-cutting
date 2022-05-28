export default function PlusMinus({theState, theSetter, icon, theLabel}){
    return (
        <button
            className="colour-adjust mx-2"
            disabled={theState === 0}
            onClick={() => theSetter(prevState => (icon === 'minus') ? prevState - 1 : prevState + 1)}
            aria-label={theLabel}
        >
            <i className={`icon-${icon} size-2`}></i>
        </button>
    );
}