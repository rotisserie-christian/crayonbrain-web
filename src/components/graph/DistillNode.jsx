import { Handle } from 'reactflow';
import PropTypes from 'prop-types';
import './CustomNode.css';

const DistillNode = ({ data }) => {
    return (
        <div className="darkNodeStyle">
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
            <div>{data.label}</div>
            <Handle
                type="target"
                position="top"
                className="handle"
                id="top"
                style={{ left: '50%', top: '-4px' }}
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

DistillNode.propTypes = {
    data: PropTypes.shape({
        label: PropTypes.string.isRequired,
    }).isRequired,
};

export default DistillNode;