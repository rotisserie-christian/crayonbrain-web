import { Handle } from 'reactflow';
import PropTypes from 'prop-types';
import './CustomNode.css';

const ExtractNode = ({ data }) => {
    return (
        <div className="darkNodeStyle">
            <div>{data.label}</div>
            <Handle
                type="target"
                position="top"
                className="handle"
                id="top"
                style={{ left: '50%', top: '-4px' }}
            />
        </div>
    );
};

ExtractNode.propTypes = {
    data: PropTypes.shape({
        label: PropTypes.string.isRequired,
    }).isRequired,
};

export default ExtractNode;