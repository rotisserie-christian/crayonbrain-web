import { Handle } from 'reactflow';
import PropTypes from 'prop-types';
import './CustomNode.css';

const ReviewNode = ({ data }) => {
    return (
        <div className="darkNodeStyle">
            <Handle
                type="source"
                position="top"
                className="handle"
                id="top"
                style={{ left: '50%', bottom: '-4px' }}
            />
            <div>{data.label}</div>
            <Handle
                type="target"
                position="bottom"
                className="handle"
                id="bottom"
                style={{ left: '50%', bottom: '-4px' }}
            />
        </div>
    );
};

ReviewNode.propTypes = {
    data: PropTypes.shape({
        label: PropTypes.string.isRequired,
    }).isRequired,
};

export default ReviewNode;