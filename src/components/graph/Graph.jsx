import ReactFlow, { Background } from 'reactflow';
import MemoryNode from './MemoryNode';
import DistillNode from './DistillNode';
import PruningNode from './Pruning';
import ChefNode from './ChefNode';
import 'reactflow/dist/style.css';
import './CustomNode.css'

const nodeTypes = {
    memoryNode: MemoryNode,
    distillNode: DistillNode,
    pruningNode: PruningNode,
    chefNode: ChefNode,
};

const initialNodes = [
    {
        id: 'Chef',
        position: { x: 0, y: 200 },
        data: { label: 'Chef' },
        draggable: false,
        type: 'chefNode'
    },
    {
        id: 'Crayon',
        position: { x: 140, y: 50 },
        data: { label: 'Crayon' },
        draggable: false,
        className: 'darkNodeStyle'
    },
    {
        id: 'Memory',
        position: { x: 270, y: 200 },
        data: { label: 'Memory' },
        draggable: false,
        type: 'memoryNode'
    },
    {
        id: 'Distill',
        position: { x: 140, y: 200 },
        data: { label: 'Distill' },
        draggable: false,
        type: 'distillNode'
    },
    {
        id: 'Pruning',
        position: { x: 270, y: 350 },
        data: { label: 'Pruning' },
        draggable: false,
        type: 'pruningNode'
    },
    {
        id: 'Crayon2',
        position: { x: 140, y: 350 },
        data: { label: 'Crayon' },
        draggable: false,
        className: 'darkNodeStyle'
    },
    {
        id: 'Brain',
        position: { x: 270, y: 50 },
        data: { label: 'Brain' },
        draggable: false,
        type: 'brainNode',
        className: 'darkNodeStyle'
    }
];

const initialEdges = [
    { id: 'e1', source: 'Crayon', target: 'Distill', targetHandle: 'top', animated: true },
    { id: 'e2', source: 'Crayon', target: 'Memory', targetHandle: 'top', animated: true },
    { id: 'e3', source: 'Distill', sourceHandle: 'right', target: 'Memory', targetHandle: 'left', animated: true },
    { id: 'e4', source: 'Memory', sourceHandle: 'bottom', target: 'Pruning', targetHandle: 'top', animated: true },
    { id: 'e5', source: 'Memory', sourceHandle: 'bottom', target: 'Crayon2', animated: true },
    { id: 'e6', source: 'Distill', sourceHandle: 'bottom', target: 'Crayon2', targetHandle: 'top', animated: true },
    { id: 'e7', source: 'Crayon', target: 'Chef', targetHandle: 'top', animated: true },
    { id: 'e8', source: 'Chef', sourceHandle: 'bottom', target: 'Crayon2', animated: true },
    { id: 'e9', source: 'Chef', sourceHandle: 'right', target: 'Distill', targetHandle: 'left', animated: true },
    { id: 'e10', source: 'Brain', sourceHandle: 'bottom', target: 'Memory', targetHandle: 'top', animated: true },
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