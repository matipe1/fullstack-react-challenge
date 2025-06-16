import { useParams } from "react-router-dom"

export default function TaskItem({ tasks, handleEditTask, handleViewAllTasks }) {
    const { id } = useParams();
    const task = tasks.find(t => t.id === id);

    const getFechaCreacion = () => {
        const date = new Date(task.createdAt);
        return date.toLocaleDateString();
    }

    if (!task) return <div>Tarea no encontrada</div>;

    return (
        <div className="container py-5 d-flex flex-column align-items-center">
            <div className="card shadow-lg rounded mb-4" style={{ maxWidth: '500px', width: '100%' }}>
                <div className="card-body">
                    <h4 className="card-title text-center mb-3">📄 Detalle de Tarea</h4>
                    <hr />
                    <p><strong>Título:</strong> {task.title}</p>
                    <p><strong>Descripción:</strong> {task.description}</p>
                    <p>
                        <strong>Estado:</strong>{' '}
                        <span className={task.completed ? 'text-success' : 'text-warning'}>
                            {task.completed ? "Completada ✅" : "Pendiente ⏳"}
                        </span>
                    </p>
                    <p><strong>Fecha de creación:</strong> {getFechaCreacion()}</p>

                    <div className="text-center mt-4">
                        <button
                            className="btn btn-warning"
                            onClick={() => handleEditTask(task.id)}
                        >
                            ✏️ Editar
                        </button>
                    </div>
                </div>
            </div>

            <div className="text-center">
                <button
                    className="btn btn-secondary"
                    onClick={() => handleViewAllTasks()}
                >
                    Volver atrás
                </button>
            </div>
        </div>
    )
}