import { Handle } from 'reactflow';
import PropTypes from 'prop-types';
import './CustomNode.css';

const TopBottomNode = ({ data }) => {
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
                type="source"
                position="bottom"
                className="handle"
                id="bottom"
                style={{ left: '50%', bottom: '-4px' }}
            />
        </div>
    );
};

TopBottomNode.propTypes = {
    data: PropTypes.shape({
        label: PropTypes.string.isRequired,
    }).isRequired,
};

export default TopBottomNode;