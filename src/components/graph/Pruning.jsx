import { Handle } from 'reactflow';
import PropTypes from 'prop-types';
import './CustomNode.css';

const PruningNode = ({ data }) => {
    return (
        <div className="darkNodeStyle">
            <div>{data.label}</div>
            <Handle
                type="target"
                position="left"
                className="handle handle-left"
                id="left"
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