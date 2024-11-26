import { Handle } from 'reactflow';
import PropTypes from 'prop-types';
import './CustomNode.css';

const MemoryNode = ({ data }) => {
    return (
        <div className="darkNodeStyle">
            <Handle
                type="target"
                position="top"
                className="handle handle-top"
                id="top"
            />
            <div>{data.label}</div>
            <Handle
                type="target"
                position="left"
                className="handle handle-left"
                id="left"
            />
            <Handle
                type="source"
                position="right"
                className="handle handle-right"
                id="right"
            />
            <Handle
                type="source"
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