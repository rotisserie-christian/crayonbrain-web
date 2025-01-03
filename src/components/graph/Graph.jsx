import ReactFlow, { Background } from 'reactflow';
import MemoryNode from './MemoryNode';
import TopBottomNode from './TopBottomNode';
import 'reactflow/dist/style.css';
import './CustomNode.css'
import ExtractNode from './ExtractNode';
import ReviewNode from './ReviewNode';

const nodeTypes = {
    memoryNode: MemoryNode,
    extractNode: ExtractNode,
    topBottomNode: TopBottomNode,
    reviewNode: ReviewNode
};

const initialNodes = [
    {
        id: 'Ideate',
        position: { x: 125, y: 195 },
        data: { label: '🖍️ Ideate' },
        draggable: false,
        type: 'topBottomNode'
    },
    {
        id: 'Review',
        position: { x: 125, y: 105 },
        data: { label: '👤 Review' },
        draggable: false,
        type: 'reviewNode'
    },
    {
        id: 'Memory',
        position: { x: 125, y: 10 },
        data: { label: '📂 Memory' },
        draggable: false,
        type: "memoryNode"
    },
    {
        id: 'Extract',
        position: { x: 125, y: 300 },
        data: { label: '🧠 Extract' },
        draggable: false,
        type: 'extractNode'
    },
    {
        id: 'Write',
        position: { x: 0, y: 150 },
        data: { label: '🖍️ Write' },
        draggable: false,
        type: "topBottomNode"
    },
    {
        id: 'Code',
        position: { x: 240, y: 150 },
        data: { label: '🧠 Code' },
        draggable: false,
        type: 'topBottomNode',
    }
];

const initialEdges = [
    { id: 'e1', source: 'Ideate', sourceHandle: 'top', target: 'Review', targetHandle: 'bottom', animated: true},
    { id: 'e2', source: 'Ideate', sourceHandle: 'bottom', target: 'Extract', targetHandle: 'top', animated: true },
    { id: 'e3', source: 'Code', sourceHandle: 'bottom', target: 'Extract', targetHandle: 'top', animated: true },
    { id: 'e4', source: 'Write', sourceHandle: 'bottom', target: 'Extract', targetHandle: 'top', animated: true },
    { id: 'e5', source: 'Code', sourceHandle: 'top', target: 'Memory', targetHandle: 'bottom', animated: true },
    { id: 'e6', source: 'Write', target: 'Memory', targetHandle: 'bottom', animated: true },
    { id: 'e7', source: 'Review', target: 'Memory', targetHandle: 'bottom', animated: true}
];

const defaultViewport = { x: 0, y: 0, zoom: 1 };

const Graph = () => {
    return (
        <div style={{ height: '350px', width: '350px', pointerEvents: 'none' }}>   
            <ReactFlow 
                nodes={initialNodes} 
                edges={initialEdges}
                defaultViewport={defaultViewport}
                elementsSelectable={false}
                zoomOnScroll={false}
                zoomOnPinch={false}
                nodeTypes={nodeTypes}
            >
                <Background variant="dots" gap={12} size={0.6} />
            </ReactFlow>
        </div>
    );
};

export default Graph;