// eslint-disable-next-line react/prop-types
function StatsCard({color, icon, children, value, isIncrease, percentage, timeline}) {
    return (
        <div className="col">
            <div className={`card bg-${color || 'primary'}-subtle`}>
                <div className="card-body pt-3 pb-1">
                    <div className="d-flex align-items-baseline">
                        <div
                            className={`bg-${color}-subtle rounded-1 me-3 d-flex align-items-center justify-content-center`}>
                            <i className={`ti ti-${icon} text-${color} fs-6`}/>
                        </div>
                        <h5 className="card-title mt-3 fw-semibold">{children}</h5>
                    </div>
                    <h4 className="fw-semibold fs-7">{value}</h4>
                    <div className="d-flex align-items-center mb-3">
                        <span
                            className={`me-2 rounded-circle bg-${color}-subtle round-20 d-flex align-items-center justify-content-center`}>
                            <i className={`ti ti-${isIncrease ? 'arrow-up-right' : 'arrow-down-right'} text-${color}`}/>
                        </span>
                        <p className="text-dark me-1 fs-3 mb-0">{percentage}</p>
                        <p className="fs-3 mb-0">{timeline}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatsCard;