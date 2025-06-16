export default function TaskList({ tasks, handleViewTask, handleCreateTask, handleEditTask, handleDeleteTask }) {

    return (
        <div className="container py-4">
            <div className="d-flex justify-content-end mb-3">
                <button
                    className="btn btn-primary shadow-sm"
                    onClick={() => handleCreateTask()}
                >
                    Agregar
                </button>
            </div>

            <div className="table-responsive">
                <table className="table table-striped table-bordered text-center align-middle">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Título</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Fecha de Creación</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks && tasks.map((task, i) => {
                            const date = new Date(task.createdAt);
                            return (
                                <tr key={i}>
                                    <td>{task.id}</td>
                                    <td>{task.title}</td>
                                    <td>{task.description}</td>
                                    <td>{task.completed ? "Completada" : "Pendiente"}</td>
                                    <td>{date.toLocaleDateString()}</td>
                                    <td className="text-nowrap">
                                        <button
                                            className="btn btn-sm btn-success me-1"
                                            title="Visualizar"
                                            onClick={() => handleViewTask(task.id)}
                                        >
                                            👁️
                                        </button>
                                        <button
                                            className="btn btn-sm btn-warning me-1"
                                            title="Editar"
                                            onClick={() => handleEditTask(task.id)}
                                        >
                                            ✏️
                                        </button>
                                        <button
                                            className="btn btn-sm btn-danger"
                                            title="Eliminar"
                                            onClick={() => handleDeleteTask(task.id)}
                                        >
                                            🗑️
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
