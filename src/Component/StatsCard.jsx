export default function StatsCard(props) {
    return (
        <div className="col">
            <div className={`card bg-${props.color}-subtle`}>
                <div className="card-body pt-3 pb-1">
                    <div className="d-flex align-items-baseline">
                        <div
                            className={`bg-${props.color}-subtle rounded-1 me-3 d-flex align-items-center justify-content-center`}>
                            <i className={`ti ti-${props.icon} text-${props.color} fs-6`}/>
                        </div>
                        <h5 className="card-title mt-3 fw-semibold">{props.children}</h5>
                    </div>
                    <h4 className="fw-semibold fs-7">{props.value}</h4>
                    <div className="d-flex align-items-center mb-3">
                        <span
                            className={`me-2 rounded-circle bg-${props.color}-subtle round-20 d-flex align-items-center justify-content-center`}>
                            <i className={`ti ti-${props.isIncrease ? 'arrow-up-right' : 'arrow-down-right'} text-${props.color}`}/>
                        </span>
                        <p className="text-dark me-1 fs-3 mb-0">{props.percentage}</p>
                        <p className="fs-3 mb-0">{props.timeline}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}