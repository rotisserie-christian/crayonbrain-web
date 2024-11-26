import ReactFlow, { Background } from 'reactflow';
import MemoryNode from './MemoryNode';
import DistillNode from './DistillNode';
import PruningNode from './Pruning';
import 'reactflow/dist/style.css';
import './CustomNode.css'

const nodeTypes = {
    memoryNode: MemoryNode,
    distillNode: DistillNode,
    pruningNode: PruningNode,
};

const initialNodes = [
    {
        id: 'Crayon',
        position: { x: 0, y: 50 },
        data: { label: 'Crayon' },
        draggable: false,
        className: 'darkNodeStyle'
    },
    {
        id: 'Memory',
        position: { x: 130, y: 200 },
        data: { label: 'Memory' },
        draggable: false,
        type: 'memoryNode'
    },
    {
        id: 'Distill',
        position: { x: 0, y: 200 },
        data: { label: 'Distill' },
        draggable: false,
        type: 'distillNode'
    },
    {
        id: 'Pruning',
        position: { x: 260, y: 200 },
        data: { label: 'Pruning' },
        draggable: false,
        type: 'pruningNode'
    },
    {
        id: 'Crayon2',
        position: { x: 0, y: 350 },
        data: { label: 'Crayon' },
        draggable: false,
        className: 'darkNodeStyle'
    },
];

const initialEdges = [
    { id: 'e1', source: 'Crayon', target: 'Distill', targetHandle: 'top', animated: true },
    { id: 'e2', source: 'Crayon', target: 'Memory', targetHandle: 'top', animated: true },
    { id: 'e3', source: 'Distill', sourceHandle: 'right', target: 'Memory', targetHandle: 'left', animated: true },
    { id: 'e4', source: 'Memory', sourceHandle: 'right', target: 'Pruning', targetHandle: 'left', animated: true },
    { id: 'e5', source: 'Memory', sourceHandle: 'bottom', target: 'Crayon2', animated: true },
    { id: 'e6', source: 'Distill', sourceHandle: 'bottom', target: 'Crayon2', targetHandle: 'top', animated: true },
];

const defaultViewport = { x: 0, y: 0, zoom: 1 };

const Graph = () => {
    return (
        <div style={{ height: '450px', width: '370px', pointerEvents: 'none' }}>   
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