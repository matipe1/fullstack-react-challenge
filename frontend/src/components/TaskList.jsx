export default function TaskList({ tasks, alta, consultarDetalle }) {

    return (
        
        <div className="container">
            <button onClick={() => { alta() }}>Agregar</button>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th className="text-center" scope="col">Titulo</th>
                        <th className="text-center" scope="col">Descripción</th>
                        <th className="text-center" scope="col">Estado</th>
                        <th className="text-center" scope="col">Fecha de Creación</th>
                        <th className="text-center" scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks && tasks.map((task, i) => {
                            const date = new Date(task.createdAt);
                            return (
                                <tr key={i}>
                                    <td>{task.id}</td>
                                    <td className="text-center">{task.title}</td>
                                    <td className="text-center">{task.description}</td>
                                    <td className="text-center">{task.completed ? "Completada" : "Pendiente"}</td>
                                    <td className="text-center">{date.toLocaleDateString()}</td>
                                    <td className="text-center text-nowrap">
                                        <button className="btn btn-warning"
                                            onClick={() => { console.log('click') }}
                                        >E
                                        </button>
                                        <button className="btn btn-success"
                                            onClick={() => { consultarDetalle(task.id) }}
                                        >V
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
