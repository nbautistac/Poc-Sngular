import React, { Component } from 'react';
import './styles/Grapho.css';
import Tree from 'react-d3-tree';

const myTreeData1 = [
    /* {
        name: 'Top Level'
    } */
    {   
        name: 'Top Level',
        /* attributes: {
            keyA: 'val A',
            keyB: 'val B',
            keyC: 'val C',
            }, */
        children: [
            {
                name: 'a',
                /* attributes: {
                    keyA: 'val A',
                    keyB: 'val B',
                    keyC: 'val C',
                }, */
            },
            {
                name: 'b',
                children: [
                    {
                        name: 'x',
                    },
                    {
                        name: 'y',
                    },
                    {
                        name: 'z',
                    }
                ] 
            },
            {
                name: 'c',
            },
        ],
        
    },
];


export default class Grapho extends Component {

    constructor() {
        super()
        this.state = {
            /* myTreeData: [
                {
                    name: 'Top Level',
                    children: [
                        
                    ]
                }
            ], */
            myTreeData: [
                {   
                    name: 'Top Level',
                    children: [
                        {
                            name: 'a',
                        },
                        {
                            name: 'b',
                            children: [
                                {
                                    name: 'x',
                                    children: [
                                        {
                                            name: 'l'
                                        },
                                        {
                                            name: 'm'
                                        },
                                        {
                                            name: 'n'
                                        },
                                    ]
                                },
                                {
                                    name: 'y',
                                },
                                {
                                    name: 'z',
                                }
                            ] 
                        },
                        {
                            name: 'c',
                        },
                    ],
                    
                },
            ],
            translate: { 
                x: 100, 
                y: 200
            },
            newNode: '',
            parentNode: '',
            oldNode: '',
            createNodeInputsContainer: false,
            deleteNodeInputsContainer: false
        }
    }
    
    /* prueba = (node, e) => {
        console.log('click')
        console.log(node)
        console.log(e)
    } */

    prueba = (node, e) => {
        console.log(node)
    }

    deleteNode = () => {
        console.log('borrado')
        const data = {...this.state.myTreeData};
        console.log(data.children)
        const target = data[0].children ? data[0].children : data[0]._children
        target.pop()
        /* this.addedNodesCount--; */
        this.setState({
            myTreeData: data
        })
    }

    
    /* createNodeInputs = () => {
        console.log('creado')
        const data = this.state.myTreeData;
        console.log(data[0].children)
        const target = data[0].children ? data[0].children : data[0]._children
        console.log(target)
        this.addedNodesCount++;
        target.push({ name: `Inserted Node ${this.addedNodesCount}`, id: `inserted-node-${this.addedNodesCount}` })
        target.push({ name: 'Algo'})
        console.log(data)
        this.setState({
            myTreeData: data
        })
        console.log(this.state.myTreeData);
    } */

    createNodeInputs = () => {
        this.setState({ 
            deleteNodeInputsContainer: false,
            createNodeInputsContainer: true
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value.toLowerCase()
        })
    }
    
    createNode = (e) => {
        e.preventDefault();
        console.log('Nodo creado!!');
        console.log(this.state.newNode);
        console.log(this.state.parentNode);
        this.setState({ createNodeInputsContainer: false })
    }

    deleteNodeInputs = () => {
        this.setState({ 
            createNodeInputsContainer: false,
            deleteNodeInputsContainer: true
        })
    }

    deleteNode = (e) => {
        e.preventDefault();
        console.log('Nodo eliminado!!');
        console.log(this.state.oldNode);
        console.log(this.state.parentNode);
        this.setState({ deleteNodeInputsContainer: false })
    }

    deleted = () => {
        console.log('buscando');
        this.state.myTreeData.find(nodeParent => nodeParent.children.some(item => item.name === 'f'));
    }

    render() {
        /* console.log(this.state.myTreeData) */
        return (
            <div className="Graph">
                   <div className="botones">
                    <button className="sty_botones_verde" onClick={this.createNodeInputs}>Add Node</button>
                    <button className="sty_botones_rojo" onClick={this.deleteNodeInputs}>Delete Node</button>
                    
                    {
                        this.state.createNodeInputsContainer === false ? null :
                        <div className="createNode__inputs__container txt_titulos">
                            <form onSubmit={this.createNode}>
                                <label className="txt_nombre">Nombre del nodo a crear:
                                    <input className="caja"  type="text" name="newNode" onChange={this.handleChange} required />
                                </label>
                                <label className="txt_nombre">Nombre del nodo padre:
                                    <input className="caja"  type="text" name="parentNode" onChange={this.handleChange} required />
                                </label>
                                <input className="sty_botones_crear" type="submit" value="Crear"/>
                            </form>
                        </div>
                    }
                    
                    
                    {
                        this.state.deleteNodeInputsContainer === false ? null :
                        <div className="deleteNode__inputs__container txt_titulos">
                            <form onSubmit={this.deleteNode}>
                                <label className="txt_nombre">Nombre del nodo a eliminar:
                                    <input  className="caja"  type="text" name="oldNode" onChange={this.handleChange} required />
                                </label>
                                <label className="txt_nombre">Nivel del nodo padre:
                                    <input className="caja"  type="text" name="nivelNode" onChange={this.handleChange} required />
                                </label>
                                <label className="txt_nombre">Nombre del nodo padre:
                                    <input  className="caja" type="text" name="parentNode" onChange={this.handleChange} required />
                                </label>
                                <input className="sty_botones_eliminar" type="submit" value="Eliminar"/>
                            </form>
                        </div>
                    }
                </div>
                <div id="graph__container">
                    {/* {
                        this.state.myTreeData.length === 0 ? null :                    
                        <Tree data={this.state.myTreeData} onClick={this.prueba} translate={this.state.translate}/>
                    } */}
                    <Tree data={this.state.myTreeData} onClick={this.prueba} translate={this.state.translate}/>
                </div>
             
            </div>
        )
    }
}