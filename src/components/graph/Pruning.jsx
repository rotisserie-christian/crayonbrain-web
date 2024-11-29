import { Handle } from 'reactflow';
import PropTypes from 'prop-types';
import './CustomNode.css';

const PruningNode = ({ data }) => {
    return (
        <div className="darkNodeStyle">
            <div>{data.label}</div>
            <Handle
                type="target"
                position="top"
                className="handle handle-top"
                id="top"
            />
        </div>
    );
};

PruningNode.propTypes = {
    data: PropTypes.shape({
        label: PropTypes.string.isRequired,
    }).isRequired,
};

export default PruningNode;