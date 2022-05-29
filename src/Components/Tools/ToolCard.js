import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const ToolCard = ({to, size, icon, title, description}) => {
    return (
        <NavLink
            to={to}
            className={`tool-card shadow${size ? ' size-' + size : ''}`}
        >
            <i className={`icon-${icon} size-5 font-weight-normal`}></i>
            <p className="h3">{title}</p>
            {description && (
                <p className='text-mid mb-0'>{description}</p>
            )}
        </NavLink>
    );
}

ToolCard.propTypes = {
    to: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
    icon: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
}

ToolCard.defaultProps = {
    to: '/tools',
    size: false,
    icon: 'attention',
    title: 'ERR: NOTITLE',
    description: false,
}

export default ToolCard;
