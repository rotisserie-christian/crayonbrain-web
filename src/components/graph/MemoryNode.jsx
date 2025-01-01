import { Handle } from 'reactflow';
import PropTypes from 'prop-types';
import './CustomNode.css';

const MemoryNode = ({ data }) => {
    return (
        <div className="darkNodeStyle">
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

MemoryNode.propTypes = {
    data: PropTypes.shape({
        label: PropTypes.string.isRequired,
    }).isRequired,
};

export default MemoryNode;